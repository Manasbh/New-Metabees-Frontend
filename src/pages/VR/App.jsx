import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';
import Axios from 'axios';

const ViewObject = ({ match }) => {
  const canvasRef = useRef(null);
  const [isPublished, setIsPublished] = useState(false);
  const [cdnUrl, setCdnUrl] = useState(null);
  const [objectExists, setObjectExists] = useState(true); // Assume object exists initially

  useEffect(() => {
    // Function to fetch object data
    const fetchObjectData = async () => {
      try {
        // Check if the object exists
        const existsResponse = await Axios.get(`/api/check-object-exists/${match.params.objectname}`);
        if (!existsResponse.data.exists) {
          setObjectExists(false);
          return;
        }

        // Check if the object is published
        const publishedResponse = await Axios.get(`/api/check-publish/${match.params.objectname}`);
        setIsPublished(publishedResponse.data.published);

        // Fetch the CDN URL if published
        if (publishedResponse.data.published) {
          const cdnResponse = await Axios.get(`/api/fetch-cdn/${match.params.objectname}`);
          setCdnUrl(cdnResponse.data.cdnUrl);
        }
      } catch (error) {
        console.error('Error fetching object data:', error);
      }
    };

    fetchObjectData();
  }, [match.params.objectname]);

  useEffect(() => {
    if (!objectExists) {
      // Object doesn't exist, do not render
      return;
    }

    let scene, camera, renderer, model;

    const setupScene = () => {
      // Set up the scene
      scene = new THREE.Scene();

      // Set up the camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 0;
      camera.position.x = -3;
      camera.position.y = 3.5;
      camera.lookAt(-20, 5, -1);

      // Set up the renderer with antialiasing enabled
      renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(VRButton.createButton(renderer)); // Add VR button

      if (isPublished && cdnUrl) {
        // Load the GLTF model with the fetched CDN URL
        const loader = new GLTFLoader();
        loader.load(cdnUrl, (gltf) => {
          model = gltf.scene;
          scene.add(model);
        });
      }

      // Set initial position and orientation of the display controller
      const display = new THREE.Group(); // Create a group for the VR controller
      camera.add(display);

      // Handle VR controllers
      renderer.xr.enabled = true;
      renderer.setAnimationLoop(animate);

      // Handle controller updates
      const controller = renderer.xr.getController(0);
      controller.addEventListener('selectstart', onSelectStart);
      controller.addEventListener('selectend', onSelectEnd);
      display.add(controller);

      // Handle controller selection
      function onSelectStart() {
        // Do something when the controller selection starts
      }
      function onSelectEnd() {
        // Do something when the controller selection ends
      }
    };

    const animate = () => {
      renderer.setAnimationLoop(animate);

      // Update the renderer size on window resize
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      if (renderer && (renderer.domElement.width !== newWidth || renderer.domElement.height !== newHeight)) {
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

    setupScene();

    window.addEventListener('resize', () => {
      if (renderer.xr.isPresenting) {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    });

    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, [match.params.objectname, isPublished, cdnUrl, objectExists]);

  return (
    <div>
      {!objectExists ? (
        <p>Object not found.</p>
      ) : isPublished ? (
        <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', display: 'block' }} />
      ) : (
        <p>This object is not published.</p>
      )}
    </div>
  );
};

export default ViewObject;
