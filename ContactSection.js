import React from 'react';
import './ContactSection.css'; // Ensure the CSS file is created and the path is correct

const ContactSection = () => {
    return (
        <section className="contact" id="contact">
            <h2>Contact Us</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" name="name" required />
                <input type="email" placeholder="Your Email" name="email" required />
                <textarea placeholder="Your Message" name="message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
};

export default ContactSection;