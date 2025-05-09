import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-700 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Your Financial Future,<br />
          Simplified with AI
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
          Upload documents in seconds, get smarter insights, and grow your wealth effortlessly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            icon={<ArrowRightIcon className="w-5 h-5" />}
          >
            Get Started
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            className="bg-white/10 text-white border-white hover:bg-white/20"
          >
            Book a Free Consultation
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 items-center opacity-75">
          <div className="h-8 w-24 bg-white/20 rounded"></div>
          <div className="h-8 w-24 bg-white/20 rounded"></div>
          <div className="h-8 w-24 bg-white/20 rounded"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent" />
    </section>
  );
};

export default Hero; 