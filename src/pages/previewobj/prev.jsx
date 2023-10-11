import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useSelector } from 'react-redux'
import './awitch.css'

import { useNavigate } from 'react-router-dom' // Import useNavigate for navigation

const Preview = () => {
  const canvasRef = useRef(null)
  const [scaleFactor, setScaleFactor] = useState(1)
  const { userInfo } = useSelector((state) => state.auth)
  const navigate = useNavigate() // Use useNavigate hook for navigation

  useEffect(() => {
    if (!userInfo) {
      // If user is not logged in, redirect to /login
      navigate('/login')
      return
    }

    let scene, camera, renderer, model, controls

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const setupScene = () => {
      // Set up the scene
      scene = new THREE.Scene()

      // Set up the camera
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 0
      camera.position.x = -3
      camera.position.y = 3.5
      camera.lookAt(-20, 5, -1)

      // Set up the renderer with antialiasing enabled
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      })
      renderer.setSize(window.innerWidth, window.innerHeight)

      // Initialize OrbitControls
      controls = new OrbitControls(camera, renderer.domElement)
      controls.target.set(-20, 5, -1)
      controls.update()

      // Load the GLTF model
      const loader = new GLTFLoader()
      loader.load('/envi1.glb', (gltf) => {
        model = gltf.scene
        model.scale.set(scaleFactor, scaleFactor, scaleFactor) // Set the initial scale
        scene.add(model)
      })

      // Resize handler
      window.addEventListener('resize', handleResize)

      // Animation loop
      const animate = () => {
        renderer.render(scene, camera)
        requestAnimationFrame(animate)
      }
      animate()
    }

    setupScene()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [scaleFactor, userInfo, navigate]) // Add user and navigate to the dependency array

  // Function to handle button click and adjust the scale factor
  const handleButtonClick = (factor) => {
    setScaleFactor(factor)
  }

  // Function to handle publish button click and redirect to /published
  const handlePublishClick = () => {
    navigate('/published') // Use navigate method to navigate to "/published"
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ width: '100vw', height: '100vh', display: 'block' }}
      />
      <div className="switch-container">
        <div className="container">
          <div className="de">
            <div className="den">
              <hr className="line" />
              <hr className="line" />
              <hr className="line" />
              <div className="switch">
                <label htmlFor="switch_off">
                  <span>OFF</span>
                </label>
                <label htmlFor="switch_1">
                  <span>1</span>
                </label>
                <label htmlFor="switch_2">
                  <span>2</span>
                </label>
                <label htmlFor="switch_3">
                  <span>3</span>
                </label>
                <label htmlFor="switch_4">
                  <span>4</span>
                </label>
                <label htmlFor="switch_5">
                  <span>5</span>
                </label>
                <input
                  type="radio"
                  checked={scaleFactor === 0.5}
                  onChange={() => handleButtonClick(0.5)}
                  name="switch"
                  id="switch_off"
                />
                <input
                  type="radio"
                  checked={scaleFactor === 1}
                  onChange={() => handleButtonClick(1)}
                  name="switch"
                  id="switch_1"
                />
                <input
                  type="radio"
                  checked={scaleFactor === 1.5}
                  onChange={() => handleButtonClick(1.5)}
                  name="switch"
                  id="switch_2"
                />
                <input
                  type="radio"
                  checked={scaleFactor === 2}
                  onChange={() => handleButtonClick(2)}
                  name="switch"
                  id="switch_3"
                />
                <input
                  type="radio"
                  checked={scaleFactor === 2.5}
                  onChange={() => handleButtonClick(2.5)}
                  name="switch"
                  id="switch_4"
                />
                <input
                  type="radio"
                  checked={scaleFactor === 3}
                  onChange={() => handleButtonClick(3)}
                  name="switch"
                  id="switch_5"
                />
                <div className="light">
                  <span />
                </div>
                <div className="dot">
                  <span />
                </div>
                <div className="dene">
                  <div className="denem">
                    <div className="deneme" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Button in the bottom right */}
      <button
        className="cssbuttons-io-button"
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        onClick={handlePublishClick}
      >
        Publish
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill="currentColor"
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}

export default Preview
