
import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/utils/transitions';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, Home, Search, Heart, User } from 'lucide-react';

const HomeScreen: React.FC = () => {
  const { user, signOut } = useAuth();
  
  return (
    <motion.div 
      className="mobile-screen flex flex-col bg-white"
      {...pageTransition}
    >
      <div className="flex justify-between items-center px-8 pt-12 pb-4">
        <h1 className="text-2xl font-bold text-app-black">Lofty</h1>
        <button 
          onClick={signOut}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-app-gray"
        >
          <LogOut size={18} className="text-app-darkGray" />
        </button>
      </div>
      
      <div className="px-8 py-4">
        <h2 className="text-xl font-medium mb-2">Welcome back!</h2>
        <p className="text-app-darkGray">
          {user?.user_metadata?.full_name || user?.email}
        </p>
      </div>
      
      <div className="flex-1 px-8 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-2">You're logged in!</h2>
          <p className="text-app-darkGray">
            This is where your home listings would appear.
          </p>
        </div>
      </div>
      
      <div className="border-t border-app-gray px-8 py-4">
        <div className="flex justify-around">
          <button className="flex flex-col items-center text-app-blue">
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-app-darkGray">
            <Search size={24} />
            <span className="text-xs mt-1">Search</span>
          </button>
          <button className="flex flex-col items-center text-app-darkGray">
            <Heart size={24} />
            <span className="text-xs mt-1">Saved</span>
          </button>
          <button className="flex flex-col items-center text-app-darkGray">
            <User size={24} />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeScreen;
