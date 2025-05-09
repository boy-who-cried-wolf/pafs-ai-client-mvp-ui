import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LandingPage from './pages/LandingPage';
import OnboardingPage from './pages/OnboardingPage';
import DocumentUploadHub from './components/sections/DocumentUploadHub';
import FinancialDashboard from './components/sections/FinancialDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <MainLayout>
                <FinancialDashboard />
              </MainLayout>
            }
          />
          <Route
            path="/upload"
            element={
              <MainLayout>
                <DocumentUploadHub />
              </MainLayout>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App; 