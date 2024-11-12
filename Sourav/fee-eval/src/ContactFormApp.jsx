import React, { useState } from 'react';
import './ContactFormApp.css';

const ContactFormApp = () => {
  return (
    <div className="container">
      <div className="form">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

const ContactInfo = () => (
  <div className="contact-info">
    <h3 className="title">Let's get in touch</h3>
    <p className="text">
      Whether you're a job seeker with questions or an employer looking for the right talent. Feel free to reach out, and we'll respond as soon as possible.
    </p>
    <div className="info">
      <Information icon="location.png" text="Chitkara University, Punjab" />
      <Information icon="email.png" text="jobpro@gmail.com" />
      <Information icon="phone.png" text="987-456-788" />
    </div>
    <SocialMedia />
  </div>
);

const Information = ({ icon, text }) => (
  <div className="information">
    <img src={icon} className="icon" alt="" />
    <p>{text}</p>
  </div>
);

const SocialMedia = () => (
  <div className="social-media">
    <p>Connect with us :</p>
    <div className="social-icons">
      <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
      <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!name || !email || !phone || !message) return false;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return false;
    }
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <h3 className="title">Contact us</h3>
        <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Username" />
        <Input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" type="email" />
        <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" type="tel" />
        <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" />
        <button type="submit" className="btn">Send</button>
      </form>
    </div>
  );
};

const Input = ({ name, value, onChange, placeholder, type = 'text' }) => (
  <div className="input-container">
    <input type={type} name={name} className="input" value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);

const Textarea = ({ name, value, onChange, placeholder }) => (
  <div className="input-container textarea">
    <textarea name={name} className="input" value={value} onChange={onChange} placeholder={placeholder} />
  </div>
);

export default ContactFormApp;
