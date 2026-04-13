import React, { useState, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_gz5jr79',     
      'template_719vt2e',    
      form.current,
      'C752eh3I1R0mhFVAz'      
    )
    .then(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to send message ❌');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        
        <div className="contact-content">
          
          {/* LEFT SIDE */}
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div>
                <h3>Location</h3>
                <p>Sidroll Namkum, Ranchi</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <h3>Email</h3>
                <p>abhishekkumar923428@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon"><FaPhone /></div>
              <div>
                <h3>Phone</h3>
                <p>+91 8271928931</p>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://www.linkedin.com/in/abhishek-kumar-977623271/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Abhi827192" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form-container">
            <form ref={form} className="contact-form" onSubmit={sendEmail}>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {success && (
                <div className="success-message">
                  Message sent successfully ✅
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;