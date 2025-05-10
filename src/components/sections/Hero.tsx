import React from 'react';
import { ArrowRightIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { BuildingOffice2Icon } from '@heroicons/react/24/solid';
import Button from '../ui/Button';

const trustBadges = [
  { 
    name: 'ASIC Registered', 
    icon: <BuildingOffice2Icon className="w-6 h-6 text-primary-400" />,
    description: 'Licensed Financial Services Provider'
  },
  { 
    name: 'Bank-Level Security', 
    icon: <ShieldCheckIcon className="w-6 h-6 text-primary-400" />,
    description: '256-bit AES Encryption'
  },
  { 
    name: '24/7 Support', 
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-primary-400" />,
    description: 'Always Here to Help'
  },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 animate-gradient-xy motion-safe:animate-none" />
      
      {/* Static gradient overlay to maintain final state */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 opacity-0 motion-safe:opacity-100" />
      
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Your Financial Future,<br />
            <span className="text-white">Simplified with AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Upload documents in seconds, get smarter insights, and grow your wealth effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              className="bg-white text-primary-900 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              to="/onboarding"
            >
              Get Started
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              to="/#demo"
            >
              Book a Free Consultation
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
            {trustBadges.map((badge) => (
              <div
                key={badge.name}
                className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
                  {badge.icon}
                </div>
                <div className="text-left">
                  <div className="text-white font-medium">{badge.name}</div>
                  <div className="text-sm text-gray-400">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-dark to-transparent" />
    </section>
  );
};

export default Hero; 