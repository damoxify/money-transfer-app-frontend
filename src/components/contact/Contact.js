import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact DMOPay</h1>
      <p>
        We're here to assist you! If you have any questions or concerns, feel free to reach out to our customer support team.
      </p>
      <h2>Contact Information:</h2>
      <p>Email: support@dmopay.com</p>
      <p>Phone: +1 (555) 123-4567</p>
      <h2>Customer Support Hours:</h2>
      <p>Monday to Friday: 9:00 AM - 6:00 PM (GMT)</p>
      <p>Saturday and Sunday: Closed</p>
      <p>
        You can also connect with us on social media:
      </p>
      <ul className="social-media-links">
        <li><a href="https://twitter.com/dmopay" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://facebook.com/dmopay" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://linkedin.com/company/dmopay" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Contact;
