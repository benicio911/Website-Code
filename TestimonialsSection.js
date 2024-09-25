import React from 'react';
import './TestimonialsSection.css'; // Ensure the CSS file is created

const TestimonialsSection = () => {
    return (
        <section className="testimonials" id="testimonials">
            <h2 className="section-title">What Our Users Say</h2>
            <div className="testimonial-cards">
                {/* Example Testimonial */}
                <div className="testimonial">
                    <p>"This AI trading bot has transformed my trading strategy. Highly recommend!"</p>
                    <h4>- User Name</h4>
                </div>
                {/* Repeat for other testimonials */}
            </div>
        </section>
    );
};

export default TestimonialsSection;