// Product.js
import React from 'react';
import './Product.css';
import backgroundImage from '../../assets/images/mtalogin.jpg';

const Product = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff', // Set text color to white for better visibility
  };

  return (
    <div className="product-container" style={containerStyle}>
      <h1>DMOPay - Fast, Secure, and Easy Money Transfers</h1>
      
      <p>
        DMOPay is your go-to solution for quick and reliable money transfers. Whether you're sending funds to family or friends or making business transactions, DMOPay ensures a smooth experience every time.
      </p>
      <div className="feature-section">
        <h2>Key Features:</h2>
        <div className="feature-list">
          <p>Swift and secure transactions</p>
          <p>User-friendly interface for easy navigation</p>
          <p>Real-time transaction tracking</p>
          <p>Competitive exchange rates</p>
        </div>
      </div>
      <div className="how-it-works-section">
        <h2>How It Works:</h2>
        <ol className="how-it-works-list">
          <li>Sign up for a DMOPay account.</li>
          <li>Select your recipient and enter the transfer details.</li>
          <li>Review and confirm your transaction.</li>
          <li>Track your transfer in real-time.</li>
          <li>Recipient receives funds securely.</li>
        </ol>
      </div>
      <p>
        Join DMOPay today and experience a new era of hassle-free money transfers.
      </p>
    </div>
  );
};

export default Product;
