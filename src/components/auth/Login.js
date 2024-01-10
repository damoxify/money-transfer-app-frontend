import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { auth } from '../../config/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FiMail, FiLock } from 'react-icons/fi'; 
import * as yup from 'yup';
import './styles/Login.css';

const Login = ({ setAuthenticated, setToken }) => {
  const history = useHistory(); 

  const formSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        const response = await signInWithEmailAndPassword(auth, values.email, values.password);
        const user = response.user;
        const token = response.access_token;

        // Store JWT token and authentication status
        setToken(token);
        setAuthenticated(true);

        console.log(user);

        // Redirect to a protected route after successful login
        history.push('/dashboard');
      } catch (error) {
        console.error(error.message);
      }
    },
  });

  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit} className="login-form">
        <h1 className="login-heading">Welcome Back</h1>

        <div className="login-input-group">
          <label className="login-label">
            <FiMail className="login-icon" /> Email:
          </label>
          <input
            name="email"
            type="email"
            className="login-input"
            placeholder="Enter your email..."
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="login-error">{formik.errors.email}</p>
          )}
        </div>

        <div className="login-input-group">
          <label className="login-label">
            <FiLock className="login-icon" /> Password:
          </label>
          <input
            name="password"
            type="password"
            className="login-input"
            placeholder="Enter your password..."
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="login-error">{formik.errors.password}</p>
          )}
        </div>

        <button type="submit" className="login-button">Sign In</button>
        <p className="login-subtitle">Don't have an account? <Link className='signup-link' to="/signup">Sign up here</Link></p>
      </form>
    </div>
  );
};

export default Login;
