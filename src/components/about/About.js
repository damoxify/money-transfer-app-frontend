import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About DMOPay</h1>
      <p>
        Welcome to DMOPay – Your trusted platform for fast, secure, and hassle-free money transfers.
      </p>
      <p>
        At DMOPay, we are dedicated to providing you with a seamless experience, ensuring that your financial transactions are not only efficient but also secure.
      </p>
      <p>
        Our mission is to make money transfers a breeze, giving you peace of mind and the confidence that your funds are in safe hands.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>Swift and secure transactions</li>
        <li>User-friendly interface for easy navigation</li>
        <li>24/7 customer support for your assistance</li>
      </ul>
      <p>
        Join DMOPay today and experience the future of effortless money transfers.
      </p>
    </div>
  );
};

export default About;
