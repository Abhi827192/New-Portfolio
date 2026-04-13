import React, { useState,  } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;