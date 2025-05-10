import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  EnvelopeIcon,
  UserIcon,
  DocumentIcon,
  FlagIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpTrayIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  BuildingOffice2Icon,
  BanknotesIcon,
  DocumentTextIcon,
  UserCircleIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  XCircleIcon,
  ShieldCheckIcon,
  HomeIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import Button from '../components/ui/Button';
import UploadModal, { CategorizedFile } from '../components/modals/UploadModal';

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<CategorizedFile[]>([]);
  const [selectedBank, setSelectedBank] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'connecting' | 'success' | 'error'>('idle');
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const steps = [
    { id: 1, title: 'Sign Up / Login' },
    { id: 2, title: 'Set Financial Goals' },
    { id: 3, title: 'Upload Documents' },
    { id: 4, title: 'Link Bank Account' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      setProgress((currentStep / steps.length) * 100);
    } else {
      // Navigate to dashboard when all steps are completed
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setProgress(((currentStep - 2) / steps.length) * 100);
    }
  };

  const handleUploadComplete = (files: CategorizedFile[]) => {
    setUploadedFiles(files);
    // You can add additional logic here, like showing a success message
  };

  const australianBanks = [
    { id: 'cba', name: 'Commonwealth Bank', logo: '/bank-logos/cba.svg' },
    { id: 'anz', name: 'ANZ', logo: '/bank-logos/anz.svg' },
    { id: 'nab', name: 'NAB', logo: '/bank-logos/nab.svg' },
    { id: 'westpac', name: 'Westpac', logo: '/bank-logos/westpac.svg' },
    { id: 'bendigo', name: 'Bendigo Bank', logo: '/bank-logos/bendigo.svg' },
    { id: 'stgeorge', name: 'St. George', logo: '/bank-logos/stgeorge.svg' },
  ];

  const handleBankConnection = async (bankId: string) => {
    setSelectedBank(bankId);
    setIsConnecting(true);
    setConnectionStatus('connecting');
    
    try {
      // Simulate Yodlee API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setConnectionStatus('success');
    } catch (error) {
      setConnectionStatus('error');
    } finally {
      setIsConnecting(false);
    }
  };

  const financialGoals = [
    {
      id: 'home',
      title: 'Buy a Home',
      description: 'Save for your dream home or investment property',
      icon: <HomeIcon className="w-6 h-6" />,
      category: 'property',
    },
    {
      id: 'retirement',
      title: 'Retirement Planning',
      description: 'Build a comfortable retirement nest egg',
      icon: <RocketLaunchIcon className="w-6 h-6" />,
      category: 'long-term',
    },
    {
      id: 'education',
      title: 'Education Fund',
      description: 'Save for your or your children\'s education',
      icon: <AcademicCapIcon className="w-6 h-6" />,
      category: 'education',
    },
    {
      id: 'business',
      title: 'Start a Business',
      description: 'Fund your entrepreneurial journey',
      icon: <BriefcaseIcon className="w-6 h-6" />,
      category: 'business',
    },
    {
      id: 'travel',
      title: 'Travel & Experiences',
      description: 'Plan for memorable life experiences',
      icon: <GlobeAltIcon className="w-6 h-6" />,
      category: 'lifestyle',
    },
    {
      id: 'health',
      title: 'Health & Wellness',
      description: 'Invest in your health and wellbeing',
      icon: <HeartIcon className="w-6 h-6" />,
      category: 'health',
    },
  ];

  const handleGoalSelection = (goalId: string) => {
    setSelectedGoals(prev => {
      if (prev.includes(goalId)) {
        return prev.filter(id => id !== goalId);
      }
      return [...prev, goalId];
    });
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 overflow-hidden">
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
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-red-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Scrollable Content Container */}
      <div className="h-full overflow-y-auto">
        <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 min-h-full flex flex-col">
          {/* Logo */}
          <div className="flex justify-center mb-8 md:mb-12">
            <a href="/" className="flex items-center space-x-2 group">
              <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary-400 transition-colors">PAFS-AI</span>
            </a>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-center mb-8 md:mb-12">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center ${
                  step.id !== steps.length ? 'w-24 md:w-32' : ''
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
          <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
            <div className="flex-1">
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-white/10"
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
                  className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center">
                      <RocketLaunchIcon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Set Your Financial Goals</h2>
                      <p className="text-white/70">Select your goals to get personalized financial insights</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {financialGoals.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => handleGoalSelection(goal.id)}
                        className={`p-4 rounded-xl border transition-all duration-200 ${
                          selectedGoals.includes(goal.id)
                            ? 'border-primary-400 bg-primary-400/10'
                            : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            selectedGoals.includes(goal.id)
                              ? 'bg-primary-400 text-primary-900'
                              : 'bg-white/10 text-white'
                          }`}>
                            {goal.icon}
                          </div>
                          <div className="text-left">
                            <h3 className="font-medium text-white">{goal.title}</h3>
                            <p className="text-white/70 text-sm mt-1">{goal.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedGoals.length > 0 && (
                    <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center gap-2 text-primary-400">
                        <CheckCircleIcon className="w-5 h-5" />
                        <span className="font-medium">
                          {selectedGoals.length} goal{selectedGoals.length !== 1 ? 's' : ''} selected
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-white/10"
                >
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-primary-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <BuildingOffice2Icon className="w-6 h-6 md:w-8 md:h-8 text-primary-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Let me show you around!</h2>
                    <p className="text-white/80 mb-6 md:mb-8">
                      I'll guide you through the key features of your dashboard. Click
                      anywhere to continue.
                    </p>
                    <div className="space-y-4 md:space-y-6">
                      {/* Document Upload Section */}
                      <div 
                        className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
                        onClick={() => setIsUploadModalOpen(true)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-400/20 rounded-full flex items-center justify-center">
                            <ArrowUpTrayIcon className="w-5 h-5 text-primary-400" />
                          </div>
                          <h3 className="font-semibold text-white">Upload</h3>
                        </div>
                        <p className="text-white/70 mt-2 ml-13">
                          Start here to upload your financial documents
                        </p>
                        {uploadedFiles.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <p className="text-white/60 text-sm">
                              {uploadedFiles.length} document{uploadedFiles.length !== 1 ? 's' : ''} uploaded
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Financial Snapshot Section */}
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-400/20 rounded-full flex items-center justify-center">
                            <ChartBarIcon className="w-5 h-5 text-primary-400" />
                          </div>
                          <h3 className="font-semibold text-white">Financial Snapshot</h3>
                        </div>
                        <p className="text-white/70 mt-2 ml-13">
                          View your net worth and financial health at a glance
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 bg-white/5 rounded-lg">
                              <p className="text-white/60 text-sm">Net Worth</p>
                              <p className="text-white font-medium">$0.00</p>
                            </div>
                            <div className="p-3 bg-white/5 rounded-lg">
                              <p className="text-white/60 text-sm">Monthly Savings</p>
                              <p className="text-white font-medium">$0.00</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tasks Pending Section */}
                      <div className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary-400/20 rounded-full flex items-center justify-center">
                            <ClipboardDocumentListIcon className="w-5 h-5 text-primary-400" />
                          </div>
                          <h3 className="font-semibold text-white">Tasks Pending</h3>
                        </div>
                        <p className="text-white/70 mt-2 ml-13">
                          Complete your profile for better insights
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/10">
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <p className="text-white/80 text-sm">Link your bank account</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <p className="text-white/80 text-sm">Upload financial documents</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <p className="text-white/80 text-sm">Set your financial goals</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary-400/20 rounded-full flex items-center justify-center">
                      <BanknotesIcon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Connect Your Bank</h2>
                      <p className="text-white/70">Link your Australian bank account for real-time financial insights</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Security Notice */}
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-start gap-3">
                        <ShieldCheckIcon className="w-5 h-5 text-primary-400 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-white">Bank-Level Security</h3>
                          <p className="text-white/70 text-sm mt-1">
                            Your data is protected with 256-bit encryption and we never store your banking credentials.
                            We use Yodlee, a trusted financial data aggregator used by major financial institutions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Bank Selection Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {australianBanks.map((bank) => (
                        <button
                          key={bank.id}
                          onClick={() => handleBankConnection(bank.id)}
                          disabled={isConnecting}
                          className={`p-4 rounded-xl border transition-all duration-200 ${
                            selectedBank === bank.id
                              ? 'border-primary-400 bg-primary-400/10'
                              : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                              <img src={bank.logo} alt={bank.name} className="w-8 h-8" />
                            </div>
                            <span className="text-white font-medium">{bank.name}</span>
                            {selectedBank === bank.id && connectionStatus === 'success' && (
                              <div className="flex items-center gap-1 text-green-400 text-sm">
                                <CheckCircleIcon className="w-4 h-4" />
                                Connected
                              </div>
                            )}
                            {selectedBank === bank.id && connectionStatus === 'error' && (
                              <div className="flex items-center gap-1 text-red-400 text-sm">
                                <XCircleIcon className="w-4 h-4" />
                                Failed
                              </div>
                            )}
                            {selectedBank === bank.id && connectionStatus === 'connecting' && (
                              <div className="flex items-center gap-1 text-primary-400 text-sm">
                                <ArrowPathIcon className="w-4 h-4 animate-spin" />
                                Connecting...
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Manual Connection Option */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <button
                        className="w-full p-4 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                      >
                        <div className="flex items-center justify-center gap-3">
                          <DocumentTextIcon className="w-5 h-5 text-white/70" />
                          <span className="text-white">Connect Another Bank</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 md:mt-8 flex justify-between items-center">
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
                  {currentStep === steps.length ? 'Complete & Continue' : 'Next Step'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onUploadComplete={handleUploadComplete}
      />
    </div>
  );
};

export default OnboardingPage; 