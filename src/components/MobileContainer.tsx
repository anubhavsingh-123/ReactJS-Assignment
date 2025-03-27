
import React, { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface MobileContainerProps {
  children: ReactNode;
}

const MobileContainer: React.FC<MobileContainerProps> = ({ children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="mobile-container">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileContainer;
