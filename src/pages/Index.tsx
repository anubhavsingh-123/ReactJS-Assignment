
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MobileContainer from '@/components/MobileContainer';
import WelcomeScreen from '@/components/WelcomeScreen';
import OnboardingScreen from '@/components/OnboardingScreen';
import LoginScreen from '@/components/LoginScreen';
import RegisterScreen from '@/components/RegisterScreen';
import HomeScreen from '@/components/HomeScreen';
import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const Index: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <MobileContainer>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/onboarding" element={<OnboardingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            } />
          </Routes>
        </AnimatePresence>
      </MobileContainer>
    </div>
  );
};

export default Index;
