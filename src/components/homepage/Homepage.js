import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Homepage.css';
import illustration1 from '../../assets/images/ewallet.gif';
import illustration2 from '../../assets/images/login.gif';
import backgroundImage from '../../assets/images/moneytize.gif';
import logo from '../../assets/images/dmologo.png';

const Homepage = () => {
  return (
    <div className="homepage-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="nav-links">
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>

      {/* Homepage Header */}
      <header className="homepage-header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="catchy-phrase">Send Money Anytime, Anywhere</h1>
            <p className="subheading">Fast, Secure, and Hassle-Free Transactions</p>
          </div>
          <img src={backgroundImage} alt="app monetization" className="header-image" />
        </div>
      </header>

      {/* Features Section */}
      <section className="feature">
        {/* Feature 1 */}
        <div className="header-content">
          <img src={illustration1} alt="Feature Illustration" className="header-image" />
          <div className="header-text">
            <h3 className='catchy-phrase'>Low Transaction Fees</h3>
            <p className='subheading'>Our app ensures affordable and accessible money transfers.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature">
          <img src={illustration2} alt="Feature Illustration" className="feature-illustration" />
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
