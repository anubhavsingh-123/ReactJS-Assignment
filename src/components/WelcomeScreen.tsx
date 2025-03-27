
import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/utils/transitions';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="mobile-screen flex flex-col items-center justify-center bg-white px-8"
      {...pageTransition}
    >
      <div className="flex-1 flex items-center justify-center">
        <img 
          src="/welcome-illustration.svg" 
          alt="Welcome" 
          className="w-64 h-64"
          onError={(e) => {
            e.currentTarget.src = 'https://via.placeholder.com/256x256?text=Welcome';
          }}
        />
      </div>
      
      <div className="mb-16 text-center">
        <h1 className="text-2xl font-bold text-app-black mb-3">
          Welcome to Lofty
        </h1>
        <p className="text-app-darkGray mb-8">
          The best way to find your dream home
        </p>
        
        <button 
          onClick={() => navigate('/onboarding')}
          className="btn-primary w-full mb-4"
        >
          Get Started
        </button>
        
        <div className="flex items-center justify-center gap-2">
          <span className="text-app-darkGray">Already have an account?</span>
          <button 
            onClick={() => navigate('/login')}
            className="text-app-blue font-medium"
          >
            Login
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
