import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = ({ activeFilter, setActiveFilter }) => {
  const filters = ['All','MERN'];
  
  const projects = [
    
    {
      id: 2,
      title: 'Zoom Clone',
      date: 'May 2025',
      description: 'Video conferencing web app with real-time meetings',
      tech: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
      category: [],
      image: '../23.png',
      liveLink: 'https://zoom6.onrender.com',
      githubLink: 'https://github.com/Abhi827192/Zoom'
    },
    {
      id: 1,
    title: 'Agriculture Production Dashboard',
    date: 'April 2026',
    description: 'Interactive Power BI dashboard analyzing crop production, area trends, rainfall, and temperature insights across states.',
    tech: ['Power BI', 'Data Visualization', 'DAX', 'Excel', 'Data Analysis'],
    category: ['Data Analytics'],
    image: '../agriculture-dashboard.png', 
    liveLink: '#',
    githubLink: 'https://github.com/Abhi827192/powerbi-sales-dashboard'
    }
    
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a href={project.githubLink} className="project-link">
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-date">{project.date}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;