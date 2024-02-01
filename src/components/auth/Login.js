import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import './styles/Login.css';
import backgroundImage from '../../assets/images/mtalogin.jpg';

const Login = ({ setAuthenticated, setToken }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/login', values);

        const token = response.data.access_token;

        setToken(token);
        setAuthenticated(true);

        navigate('/dashboard');
      } catch (error) {
        console.error('Login error:', error.message);

        setErrorMessage('Invalid email or password. Please try again.');
      }
    },
  });

  const handleLogout = async () => {
    try {
      await axios.post('/logout');

      setAuthenticated(false);
      setToken(null);

      // Navigate to the home route upon logout
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error.message);

      setErrorMessage('Logout failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit} className="login-form">
        <h1 className="login-heading">Welcome Back</h1>

        {errorMessage && <p className="login-error">{errorMessage}</p>}

        <div className="login-input-group">
          <label className="login-label">Email:</label>
          <input
            name="email"
            type="email"
            className="login-input"
            placeholder="Enter your email..."
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div className="login-input-group">
          <label className="login-label">Password:</label>
          <input
            name="password"
            type="password"
            className="login-input"
            placeholder="Enter your password..."
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Update the onClick handler for the login button */}
        <button type="submit" className="login-button" onClick={() => navigate('/dashboard')}>
          Sign In
        </button>
        
        <p className="login-subtitle">
          Don't have an account? <Link className="signup-link" to="/signup">Sign up here</Link>
        </p>
      </form>
      <div className="image-container">
        {/* Use the imported background image */}
        <img src={backgroundImage} alt="Background" className="login-image" />
      </div>

      {setAuthenticated() && (
        <div>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Login;
