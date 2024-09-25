// HomePageComposite.jsx
import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ContactSection from './ContactSection';
import PricingSection from './PricingSection';
import TestimonialsSection from './TestimonialsSection';
import ChartWithMouseFollow from './ChartWithMouseFollow';
import InstructionPage from './InstructionPage';
// Import any other components that are part of the home page

const HomePageComposite = () => {
  return (
    <div className='HomePage'>
      <HeroSection />
      <FeaturesSection />
      <InstructionPage />
      <ContactSection />
      {/* Render other components as needed */}
    </div>
  );
};

export default HomePageComposite;