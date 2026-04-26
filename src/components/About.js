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

  const SkillGroup = ({ title, accent, skills }) => (
    <div className="skills-category">
      <h3 className="skills-title">
        <span className="accent">{accent}</span> {title}
      </h3>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ '--target-width': `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I am a Biotechnology undergraduate with a growing specialization in Data Analytics and Software Development. 
              My background combines laboratory precision with modern technical scalability.
            </p>
            <p className="about-description">
              I leverage data-driven insights and full-stack technology to bridge the gap between biological sciences and digital solutions.
            </p>
          </div>

          <div className="skills-container">
            <SkillGroup title="Skills" accent="Biotechnology" skills={bioSkills} />
            <SkillGroup title="Skills" accent="IT & Software" skills={itSkills} />
            <SkillGroup title="Skills" accent="Data Analytics" skills={dataSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;