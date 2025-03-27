
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/utils/transitions';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface OnboardingSlide {
  title: string;
  description: string;
  image: string;
}

const OnboardingScreen: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: OnboardingSlide[] = [
    {
      title: "Find your dream home",
      description: "Browse thousands of properties tailored to your preferences.",
      image: "https://via.placeholder.com/256x256?text=Home"
    },
    {
      title: "Connect with agents",
      description: "Chat directly with trusted real estate professionals.",
      image: "https://via.placeholder.com/256x256?text=Agents"
    },
    {
      title: "Secure your future",
      description: "We make the buying process simple and stress-free.",
      image: "https://via.placeholder.com/256x256?text=Security"
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/register');
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      navigate('/');
    }
  };

  const handleSkip = () => {
    navigate('/register');
  };

  return (
    <motion.div 
      className="mobile-screen flex flex-col bg-white px-8"
      {...pageTransition}
    >
      <div className="flex justify-between items-center pt-12 pb-8">
        <button 
          onClick={handlePrevious}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-app-gray"
        >
          <ChevronLeft size={20} className="text-app-darkGray" />
        </button>
        
        <button 
          onClick={handleSkip}
          className="text-app-darkGray font-medium"
        >
          Skip
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-64 h-64 mb-8">
          <img 
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-contain"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-app-black text-center mb-3">
          {slides[currentSlide].title}
        </h2>
        <p className="text-app-darkGray text-center mb-8">
          {slides[currentSlide].description}
        </p>
        
        <div className="flex gap-2 mb-8">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`h-2 rounded-full ${index === currentSlide ? 'w-8 bg-app-blue' : 'w-2 bg-app-gray'}`}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <button 
          onClick={handleNext}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {currentSlide < slides.length - 1 ? 'Next' : 'Get Started'}
          <ChevronRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default OnboardingScreen;
