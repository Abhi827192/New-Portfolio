import React from 'react';
import { FaCertificate, FaCalendarAlt, FaDownload } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {

  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Apna College',
      date: 'Jan–May 2025',
      description: 'Comprehensive training in MERN stack development',
      link: 'https://drive.google.com/file/d/1KgMQXGlnjGUxRnXmbUUcovzg1y8bjPcr/view?usp=sharing'
    },
    {
      title: 'Advanced Microbiology, Clinical Pathology, Immunology & Molecular Biology',
      issuer: 'DNA Labs',
      date: 'Sept–Oct 2025',
      description: 'Advanced laboratory techniques and analysis methods',
      link: 'https://drive.google.com/file/d/12NWIxermikb4bPY5sNk6Ug7FhYz_cGaw/view?usp=sharing'
    },
    {
      title: 'Data Science & AI Internship',
      issuer: 'Vizztal Academy',
      date: 'Feb–Apr 2025',
      description: 'Hands-on training in Python, Excel, SQL, Power BI and AI fundamentals',
      link: 'https://drive.google.com/file/d/1zZI5IRtHzrlEYxOqnyIu6f-HPGq7s2Fc/view?usp=sharing'
    }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">

              <div className="cert-header">
                <FaCertificate className="cert-icon" />
                <div>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
              </div>

              <div className="cert-date">
                <FaCalendarAlt />
                <span>{cert.date}</span>
              </div>

              <p className="cert-desc">{cert.description}</p>

              <button
                className="download-btn"
                onClick={() => window.open(cert.link, "_blank")}
              >
                <FaDownload /> Download Certificate
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;