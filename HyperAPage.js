// HyperAPage.jsx
import React from 'react';
import './HyperAPage.css'; // Assuming you will create a corresponding CSS file
import Navbar from './Navbar';
import EGOAI from '../assets/EGOAI.png'
const HyperAPage = () => {
  return (
    <div className='outer-hyper-cont'>
    <div className="hyper-a-container">
      <div className="hyper-a-content">
      <div className="hyper-a-text">
          <h1>EGO</h1>
          <h2>HYPER AI COMING SOON</h2>
        </div>
      <div className="hyper-a-graphic">
      <img src={EGOAI} alt="Hyper A Graphic" className="hyper-a-image"/>
          </div>
      </div>
    </div>
    </div>
  );
};

export default HyperAPage;