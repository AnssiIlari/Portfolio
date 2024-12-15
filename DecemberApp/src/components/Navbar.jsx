import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#work-experience">Work Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;