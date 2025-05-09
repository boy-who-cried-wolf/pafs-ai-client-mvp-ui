import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  UserIcon,
  DocumentIcon,
  FlagIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';

const OnboardingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const steps = [
    { id: 1, title: 'Sign Up / Login' },
    { id: 2, title: 'Dashboard Tour' },
    { id: 3, title: 'Profile Completion' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      setProgress((currentStep / steps.length) * 100);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setProgress(((currentStep - 2) / steps.length) * 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 animate-gradient-xy motion-safe:animate-none" />
      
      {/* Static gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 opacity-0 motion-safe:opacity-100" />
      
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }} />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10">
        <motion.div
          className="h-full bg-primary-400"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <a href="/" className="flex items-center space-x-2 group">
            <span className="text-4xl font-bold text-white group-hover:text-primary-400 transition-colors">PAFS-AI</span>
          </a>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center ${
                step.id !== steps.length ? 'w-32' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step.id
                    ? 'bg-primary-400 text-primary-900'
                    : 'bg-white/10 text-white/60'
                }`}
              >
                {step.id}
              </div>
              {step.id !== steps.length && (
                <div
                  className={`h-1 w-full ${
                    currentStep > step.id ? 'bg-primary-400' : 'bg-white/10'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="max-w-2xl mx-auto">
          {currentStep === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-white">
                Welcome to PAFS-AI
              </h2>
              <div className="space-y-4">
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
                >
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Google
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  className="bg-[#0077B5]/90 text-white border-[#0077B5] hover:bg-[#0077B5] backdrop-blur-sm"
                >
                  <img
                    src="https://www.linkedin.com/favicon.ico"
                    alt="LinkedIn"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with LinkedIn
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
                >
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  Continue with Email
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10"
            >
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <span className="text-2xl">🤖</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-white">Let me show you around!</h2>
                <p className="text-white/80 mb-8">
                  I'll guide you through the key features of your dashboard. Click
                  anywhere to continue.
                </p>
                <div className="space-y-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                    <h3 className="font-semibold mb-2 text-white">📤 Upload Button</h3>
                    <p className="text-white/70">
                      Start here to upload your financial documents
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                    <h3 className="font-semibold mb-2 text-white">📊 Financial Snapshot</h3>
                    <p className="text-white/70">
                      View your net worth and financial health at a glance
                    </p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                    <h3 className="font-semibold mb-2 text-white">📋 Tasks Pending</h3>
                    <p className="text-white/70">
                      Complete your profile for better insights
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/10"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Complete Your Profile</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center">
                    <UserIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Link Bank Account</h3>
                    <p className="text-white/70">
                      Connect your bank for real-time updates
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center">
                    <DocumentIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Upload Documents</h3>
                    <p className="text-white/70">
                      Add your tax returns and financial statements
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center">
                    <FlagIcon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Set Financial Goals</h3>
                    <p className="text-white/70">
                      Define your objectives for better planning
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between items-center">
            {currentStep > 1 && (
              <Button
                variant="secondary"
                size="lg"
                onClick={handleBack}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm"
                icon={<ArrowLeftIcon className="w-5 h-5" />}
              >
                Back
              </Button>
            )}
            <div className="ml-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={handleNext}
                className="bg-primary-400 text-primary-900 hover:bg-primary-300"
                icon={currentStep === steps.length ? undefined : <ArrowRightIcon className="w-5 h-5" />}
              >
                {currentStep === steps.length ? 'Complete' : 'Next Step'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage; 