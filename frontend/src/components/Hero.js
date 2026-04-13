import React from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">

          <div className="hero-text">
            <h3 className="hero-intro">Hello, I'm</h3>

            <h1 className="hero-title">
              <span className="hero-title-line">Biotechnology &</span>
              <span className="hero-title-line accent">Data Analyst & Full Stack Developer</span>
            </h1>

            <p className="hero-subtitle">
              Biotech Undergraduate | Data Analyst | MERN Stack Developer
            </p>

            <p className="hero-description">
              Biotechnology undergraduate with hands-on lab training and strong expertise in data analytics and full stack development. 
              Skilled in Power BI, SQL, Excel, and Python for data analysis, along with MERN stack development for building scalable web applications. 
              Passionate about combining data and technology to solve real-world problems.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <FaEnvelope /> Hire Me
              </a>

              <a 
                href="https://drive.google.com/file/d/1cxZrNK9Lt8DB9C2wIh7EH67UYaJRkbXf/view?usp=sharing" 
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-bg"></div>

              <img 
                src="../profile.png" 
                alt="Abhishek Kumar - Data Analyst & Full Stack Developer" 
                className="profile-image"
              />

              {/* Balanced Badges */}
              <div className="tech-badge">
                <span>DATA</span>
              </div>

              <div className="tech-badge bio-badge">
                <span>BIOTECH</span>
              </div>

              <div className="tech-badge it-badge">
                <span>MERN</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;