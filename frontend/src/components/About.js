import React from 'react';
import './About.css';

const About = () => {

  const bioSkills = [
    { name: 'Microbiology', level: 85 },
    { name: 'Immunology', level: 80 },
    { name: 'Molecular Biology', level: 75 },
    { name: 'Clinical Pathology & Lab Safety', level: 80 }
  ];

  const itSkills = [
    { name: 'HTML, CSS, JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js & Express.js', level: 80 },
    { name: 'MongoDB & SQL', level: 80 },
    { name: 'Git & GitHub', level: 75 }
  ];

  const dataSkills = [
    { name: 'Python', level: 75 },
    { name: 'SQL & Excel', level: 85 },
    { name: 'Power BI Dashboard', level: 90 },
    { name: 'Data Analysis & Cleaning', level: 85 },
    { name: 'Data Visualization', level: 88 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I am a Biotechnology undergraduate with a growing specialization in Data Analytics and Software Development. 
              My background combines laboratory experience with modern analytical and technical skills.
            </p>

            <p className="about-description">
              I have developed skills in web development and data analytics, including Power BI dashboard creation, 
              SQL, and data visualization. I aim to leverage data-driven insights and technology to solve real-world problems.
            </p>
          </div>

          <div className="skills-container">

            {/* Biotechnology FIRST */}
            <div className="skills-category">
              <h3 className="skills-title">
                <span className="accent">Biotechnology</span> Skills
              </h3>
              <div className="skills-list">
                {bioSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IT SECOND */}
            <div className="skills-category">
              <h3 className="skills-title">
                <span className="accent">IT & Software</span> Skills
              </h3>
              <div className="skills-list">
                {itSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DATA ANALYTICS THIRD (NEW 🔥) */}
            <div className="skills-category">
              <h3 className="skills-title">
                <span className="accent">Data Analytics</span> Skills
              </h3>
              <div className="skills-list">
                {dataSkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;