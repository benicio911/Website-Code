// FadeTransition.js
import React from 'react';
import './FadeTransition.css'; // Make sure the path to your CSS file is correct

const FadeTransition = ({ children }) => {
  return (
    <div className="fade">
      {children}
    </div>
  );
};

export default FadeTransition;