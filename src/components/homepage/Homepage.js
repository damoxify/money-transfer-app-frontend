import React from 'react';
import './styles/Homepage.css';
import illustration1 from '../../assets/images/ewallet.gif';
import illustration2 from '../../assets/images/login.gif';
import backgroundImage from '../../assets/images/moneytize.gif';

const Homepage = () => {
  return (
    <div className="homepage-container">
        
      <header className="homepage-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="catchy-phrase">Send Money Anytime, Anywhere</h1>
            <p className="subheading">Fast, Secure, and Hassle-Free Transactions</p>
          </div>
          <img src={backgroundImage} alt="app monetization" className="header-image" />
        </div>
      </header>

      <section className="homepage-section homepage-features">
        <div className="feature">
          <img src={illustration1} alt="Feature Illustration" className="feature-illustration" />
          <div className="feature-details">
            <h3>Low Transaction Fees</h3>
            <p>Our app ensures affordable and accessible money transfers.</p>
          </div>
        </div>

        <div className="feature">
          <img src={illustration2} alt="Feature Illustration" className="feature-illustration"/>
          <div className="feature-details">
            <h3>Easy Onboarding</h3>
            <p>Quick and simple onboarding process for all users.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Homepage;
