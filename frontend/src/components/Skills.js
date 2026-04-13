import React from 'react';
import { 
  FaCode, 
  FaGlobe, 
  FaServer, 
  FaDatabase, 
  FaFlask, 
  FaChartBar 
} from 'react-icons/fa';
import './Skills.css';

const Services = () => {
  const services = [
  {
    icon: <FaFlask />,
    title: 'Biotechnology',
    description: 'Microbiology, Immunology, Molecular Biology, Clinical Pathology, Laboratory Techniques'
  },
  {
    icon: <FaCode />,
    title: 'Frontend Development',
    description: 'HTML, CSS, JavaScript, React.js, Bootstrap'
  },
  {
    icon: <FaServer />,
    title: 'Backend Development',
    description: 'Node.js, Express.js, REST APIs'
  },
  {
    icon: <FaDatabase />,
    title: 'Database & Tools',
    description: 'SQL, MongoDB, Git, GitHub, VS Code'
  },
  {
    icon: <FaChartBar />,
    title: 'Data Analytics & Visualization',
    description: 'Python, Excel, Power BI, Data Analysis, Data Cleaning, Dashboard Development'
  },
  {
    icon: <FaGlobe />,
    title: 'Languages',
    description: 'English, Hindi'
  }
];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;