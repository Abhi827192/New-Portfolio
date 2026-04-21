import React from 'react';
import { FaGraduationCap, FaUniversity, FaCalendar } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const education = [
    {
      institution: 'Netaji Subhash University, Jamshedpur',
      degree: 'Biotechnology IT',
      duration: '2023 - Present',
      details: 'SGPA: 8.06',
      icon: <FaUniversity />
    },
    {
      institution: 'Kendriya Vidyalaya Sangathan, Ranchi',
      degree: 'Senior Secondary (XII)',
      duration: '2019 - 2021',
      details: 'SGPA: 8.70',
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                {edu.icon}
              </div>
              <div className="timeline-content card">
                <h3 className="institution">{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <div className="education-details">
                  <div className="duration">
                    <FaCalendar />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="gpa">
                    <span>{edu.details}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;