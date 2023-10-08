import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Axios from 'axios';
import './Published.css';

export default function Published() {
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const [isUIP, setIsUIP] = useState(false);

  const handleViewLinkClick = () => {
    navigate("/viewproduct"); // Use navigate method to navigate to "/viewproduct"
  };

  const handleDismissClick = () => {
    if (!isUIP) {
      navigate("/dashboard/upload"); // Use navigate method to navigate to "/dashboard/upload"
    } else {
      navigate("/home"); // Use navigate method to navigate to "/home"
    }
  };

  useEffect(() => {
    Axios.get('YOUR_API_ENDPOINT')
      .then((response) => {
        const { stage, published } = response.data;

        if (stage === 'uip' && !published) {
          setIsUIP(true);

          Axios.post('YOUR_UPDATE_API_ENDPOINT', { published: true })
            .then(() => {
              console.log('Published schema updated to true.');
            })
            .catch((error) => {
              console.error('Error updating published schema:', error);
            });
        }
      })
      .catch((error) => {
        console.error('Error checking GLTF status:', error);
      });
  }, []);

  return (
    <div className="notifications-container">
      <div className="success">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <div className="success-prompt-wrap">
            <p className="success-prompt-heading">Object uploaded</p>
            <div className="success-prompt-prompt">
              {isUIP ? (
                <p>Your object is now up and running on the internet.</p>
              ) : (
                <p>Object not in 'uip' stage. Redirecting...</p>
              )}
            </div>
            <div className="success-button-container">
              <button type="button" className="success-button-main" onClick={handleViewLinkClick}>View Link</button>
              <button type="button" className="success-button-secondary" onClick={handleDismissClick}>Home</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
