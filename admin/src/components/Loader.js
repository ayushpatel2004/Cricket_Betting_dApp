import React from 'react';
import './loader.css'; // import CSS styles for the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;