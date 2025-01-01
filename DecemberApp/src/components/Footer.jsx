import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Anssi Laitinen. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/anssi-laitinen-93a963269/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/AnssiIlari" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;