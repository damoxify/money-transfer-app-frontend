import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        DMOPay offers a range of services to meet your money transfer needs. Discover how we make financial transactions secure, fast, and hassle-free.
      </p>
      <h2>Our Core Services:</h2>
      <ul>
        <li><strong>Swift Transfers:</strong> Transfer funds quickly and securely to recipients worldwide.</li>
        <li><strong>Secure Transactions:</strong> Your financial security is our top priority. We use advanced encryption technology to safeguard your transactions.</li>
        <li><strong>User-Friendly Interface:</strong> Enjoy a seamless experience with our intuitive and easy-to-use platform.</li>
        <li><strong>Real-Time Tracking:</strong> Keep tabs on your transfers with our real-time tracking feature.</li>
        <li><strong>Competitive Exchange Rates:</strong> Benefit from competitive rates for currency exchange.</li>
      </ul>
      <h2>Additional Services:</h2>
      <p>
        In addition to our core services, DMOPay offers various tools and features to enhance your overall experience.
      </p>
      <ul>
        <li>Bill Payments</li>
        <li>Mobile Wallet Integration</li>
        <li>Multi-Currency Accounts</li>
      </ul>
      <p>
        Experience the convenience of DMOPay services today.
      </p>
    </div>
  );
};

export default Services;
