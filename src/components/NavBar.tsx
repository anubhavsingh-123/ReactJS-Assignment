
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Search, Heart, User } from 'lucide-react';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const tabs = [
    { name: 'Home', path: '/home', icon: Home },
    { name: 'Search', path: '/search', icon: Search },
    { name: 'Saved', path: '/saved', icon: Heart },
    { name: 'Profile', path: '/profile', icon: User }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around px-4">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => navigate(tab.path)}
          className={`flex flex-col items-center justify-center w-16 h-full ${
            isActive(tab.path) ? 'text-app-blue' : 'text-app-darkGray'
          }`}
        >
          <tab.icon size={24} />
          <span className="text-xs mt-1">{tab.name}</span>
        </button>
      ))}
    </div>
  );
};

export default NavBar;
