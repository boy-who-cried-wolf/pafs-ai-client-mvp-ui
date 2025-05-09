import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import Demo from '../components/sections/Demo';
import Testimonials from '../components/sections/Testimonials';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
    </div>
  );
};

export default LandingPage; 