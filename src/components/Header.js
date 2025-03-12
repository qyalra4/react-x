import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img 
          src={require('../images/logo.jpg')} 
          alt="Logo" 
          className="logo" 
        />
        <span className="site-name">ياسين مثنى</span>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'hidden' : ''}`} 
        onClick={toggleMenu}
        aria-label="فتح القائمة"
      >
        ☰
      </button>

      {/* Sidebar Menu */}
      <div className={`header-right ${isMenuOpen ? 'active' : ''}`}>
        <button 
          className="close-btn" 
          onClick={toggleMenu}
          aria-label="إغلاق القائمة"
        >
          ×
        </button>

        <nav className="center-nav">
          <Link to="/" className="nav-button" onClick={toggleMenu}>الرئيسية</Link>
          <Link to="/works" className="nav-button" onClick={toggleMenu}>المشاريع</Link>
          <Link to="/aboutus" className="nav-button" onClick={toggleMenu}>معلومات عنا</Link>
        </nav>
        
        <div className="center-right">
          <Link to="/" className="login button" onClick={toggleMenu}> تسجيل </Link>
          <Link to="/" className="signup button" onClick={toggleMenu}>انشاء حساب</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;