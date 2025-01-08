import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Link to your CSS file

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dropdown menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Navigate functions
  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
  <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <img 
      src="https://i.postimg.cc/c1bWL3Mf/tax-logo-edited.png" 
      alt="Tax Icon" 
      style={{ marginRight: '8px', height: '38px', width: '38px' }} 
    />
    <span>MyTax Training</span>
  </Link>
</div> 

      <button className="navbar-toggle" onClick={handleToggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Admin Configuration</Link></li>
        <li><Link to="/training">Training</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/terms">Terms</Link></li>
      </ul>
      <div className="navbar-actions">
        <button className="btn-login" onClick={handleLoginClick}>
          <span className="link-style">Log in</span>
        </button>
        <button className="btn-signup" onClick={handleSignupClick}>
          <span className="link-style">Sign up</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
