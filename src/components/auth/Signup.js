import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import axios from 'axios';
import backgroundImage from '../../assets/images/mtabg.jpg';

import './styles/Signup.css';


function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    fullname: yup.string().required('Full name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    address: yup.string(),
    password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      fullname: '',
      email: '',
      address: '',
      // country: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post('/users', values);
        console.log('Signup successful:', response.data);

        // Reset the form
        formik.resetForm();
      } catch (error) {
        console.error('Signup failed:', error.message);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  return (
    <div className="signup-container">
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <h1 className="signup-heading">MONEY TRANSFER APP</h1>
        <p className="signup-subtitle">Transactions Made Easy And Secured</p>

        <div className="signup-input-group">
          <label className="signup-label">Username</label>
          <input
            name="username"
            type="text"
            className="signup-input"
            placeholder="Enter your username..."
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="signup-error">{formik.errors.username}</p>
          )}
        </div>

        <div className="signup-input-group">
          <label className="signup-label">Full Name</label>
          <input
            name="fullname"
            type="text"
            className="signup-input"
            placeholder="Enter your full name..."
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <p className="signup-error">{formik.errors.fullname}</p>
          )}
        </div>
        <div className="signup-input-group">
<label className="signup-label">Email</label>
<input
  name="email"
  type="text"
  className="signup-input"
  placeholder="Enter your email..."
  value={formik.values.email}
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
/>
{formik.touched.email && formik.errors.email && (
  <p className="signup-error">{formik.errors.email}</p>
)}
</div>

<div className="signup-input-group">
<label className="signup-label">Password</label>
<div className="password-input-group">
  <input
    name="password"
    type={showPassword ? 'text' : 'password'}
    className="signup-input"
    placeholder="Create your password..."
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
  />
  {showPassword ? (
    <RiEyeCloseLine onClick={togglePasswordVisibility} className="eye-icon" />
  ) : (
    <RiEyeLine onClick={togglePasswordVisibility} className="eye-icon" />
  )}
</div>
{formik.touched.password && formik.errors.password && (
  <p className="signup-error">{formik.errors.password}</p>
)}
</div>


        <button type="submit" className="signup-button">
          Sign up
        </button>

        <p className="signup-login-link">
          Already have an account? <a href="/login" className='login-link'>Log in</a>
        </p>
      </form>
      <img src={backgroundImage} alt="Background" className="signup-image" />
    </div>
  );
}

export default Signup;

















