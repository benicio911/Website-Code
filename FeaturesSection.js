import React from 'react';
import './FeaturesSection.css';

// Sample features data
const featuresData = [
    { imgSrc: "https://example.com/feature-icon1.png", title: "Custom AI Development", description: "Our team of experts collaborates closely with clients to understand their specific requirements and design tailor-made AI solutions. Whether it's automating processes, optimizing operations, or enhancing decision-making, we harness the power of AI to drive tangible results for your business." },
    { imgSrc: "https://example.com/feature-icon2.png", title: "EGO AI Sales", description: "In addition to crafting personalized AI solutions, we offer a range of pre-built AI models and systems designed to streamline operations across various industries. From predictive analytics to natural language processing, our AI products are engineered to eompower organizations with cutting-egde technology." },
    { imgSrc: "https://example.com/feature-icon3.png", title: "Custom Designed AI", description: "Stay ahead of the curve with our upcoming line of custom-designed AI solutions. Leveraging the latest advancements in AI research and development, we're pioneering innovative products that push the boundaries of possibility. Keep an eye out for our exciting releases, coming soon!." },

    // Add more features as needed
];

const FeaturesSection = () => {
    return (
        <section className="features">
            <div className='features-content-sec'>
            <h1>ABOUT</h1>
            <p className='about-p'>Welcome to EGOFX, where innovation meets ingenuity in the realm of artificial intelligence. Founded with a vision to redefine the boundaries of AI technology, 
                EGOFX is dedicated to crafting bespoke solutions tailored to meet your unique needs.</p>
            <p className='Specialize'>At EGOFX, we specialize in three core areas:</p>
            <div className="feature-list">
                {featuresData.map((feature, index) => (
                    <div className={`feature feature-${index}`} key={index}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default FeaturesSection;