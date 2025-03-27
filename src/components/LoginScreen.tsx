
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '@/utils/transitions';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className="mobile-screen flex flex-col bg-white px-8"
      {...pageTransition}
    >
      <div className="pt-12 pb-8">
        <button 
          onClick={() => navigate('/')}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-app-gray"
        >
          <ChevronLeft size={20} className="text-app-darkGray" />
        </button>
      </div>
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-app-black mb-2">
          Welcome back
        </h1>
        <p className="text-app-darkGray">
          Login to your account
        </p>
      </div>
      
      <form onSubmit={handleLogin} className="flex-1">
        <div className="mb-4">
          <label className="block text-app-black mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input-field"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-app-black mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input-field pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-app-darkGray"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <button
          type="submit"
          className="btn-primary w-full mb-4"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate('/forgot-password')}
            className="text-app-blue font-medium"
          >
            Forgot password?
          </button>
        </div>
      </form>
      
      <div className="mb-16 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-app-darkGray">Don't have an account?</span>
          <button 
            onClick={() => navigate('/register')}
            className="text-app-blue font-medium"
          >
            Sign up
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginScreen;
