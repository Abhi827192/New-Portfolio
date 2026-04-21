import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h3 className="footer-logo">
              <span className="accent">Abhishek</span> Kumar
            </h3>
            <p className="footer-tagline">
              Biotechnology Student & Full Stack Developer
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Abhishek Kumar. Made with <FaHeart className="heart-icon" /> 
            using React 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;