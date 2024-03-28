import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.scss';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_2uz49uw", "template_154rlpe", e.target, "-Pda5p9BD9gyL6lhy")
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message. Please try again later.');
      });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-us-container">
      <div className="left-content">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="right-content">
        <h2>Location</h2>
        <br></br>
        <div className="map-container">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=220+Whiteview+Bay+NE,+Calgary,+AB+T1Y+1R8,+Canada&output=embed"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
