
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-app-blue">404</h1>
        <p className="text-xl text-app-darkGray mb-6">Page not found</p>
        <button 
          onClick={() => navigate('/')}
          className="btn-primary"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
