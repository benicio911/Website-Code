import React from 'react';
import './PricingSection.css'; // Ensure the CSS file is created

const PricingSection = () => {
    return (
        <section className="pricing" id="pricing">
            <h2 className="section-title">Choose Your Plan</h2>
            <div className="plans">
                {/* Example Plan */}
                <div className="plan">
                    <h3>Basic</h3>
                    <p className="price">Gold 99/month</p>
                    <ul className="features-list">
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                    <button>Choose Plan</button>
                </div>
                {/* Repeat for other plans */}
            </div>
        </section>
    );
};

export default PricingSection;