import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (event, targetId) => {
    event.preventDefault();
    closeMobileMenu();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        ☰
      </button>
      <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
        <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
        <a href="#skills" onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a>
        <a href="#work-experience" onClick={(e) => handleLinkClick(e, 'work-experience')}>Experience</a>
        <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;