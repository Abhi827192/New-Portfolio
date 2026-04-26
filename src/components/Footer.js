import React from 'react';
import { FaHeart, FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <h3 className="footer-logo">
              <span className="accent">Abhishek</span> Kumar
            </h3>
            <p className="footer-tagline">
              Biotechnology & Data Analyst & Full Stack Developer
            </p>
          </div>
          
          <div className="footer-links">
            <a href="#home">
              <FaHome className="footer-icon" /> Home
            </a>
            <a href="#about">
              <FaUser className="footer-icon" /> About
            </a>
            <a href="#services">
              <FaTools className="footer-icon" /> Skills
            </a>
            <a href="#projects">
              <FaProjectDiagram className="footer-icon" /> Projects
            </a>
            <a href="#contact">
              <FaEnvelope className="footer-icon" /> Contact
            </a>
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