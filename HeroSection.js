import React, { useEffect, useRef } from 'react';
import './HeroSection.css'; // Ensure the CSS file is created and the path is correct
import logo from '../assets/IconicMark-Black.png'

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">   
                <h2>REMOVE</h2>
                <h2>YOUR</h2>
                <h2>EGO</h2>
                <p>let ai place the trades</p>
                {/* <p>Welcome to EGOFX, where the future of automated trading is realized today. Harness the power of our advanced AI bots to automate your trading strategies, 
                    ensuring precision, efficiency, and a competitive edge in the fast-paced financial markets. 
                    With EGOFX, step into a new era of trading, where technology meets opportunity, empowering you to achieve unparalleled success.</p> */}
                <button className="btn">BUILD YOUR AI</button>
            </div>
        </section>
    );
};

export default HeroSection;