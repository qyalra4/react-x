import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SplashScreen.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="splash-content">
        <img 
          src={require ('../images/logo.jpg')}
          alt="Company Logo" 
          className="splash-logo"
        />
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default SplashScreen;