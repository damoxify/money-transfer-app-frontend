import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';
import Select from 'react-select';
import backgroundImage from '../../assets/images/mtabg.jpg';

import './styles/Signup.css';

const countryOptions = [
  { value: 'usa', label: 'United States' },
  { value: 'canada', label: 'Canada' },
  { value: 'nigeria', label: 'Nigeria' },
  { value: 'kenya', label: 'Kenya' },
  { value: 'ghana', label: 'Ghana' },
];

function Signup() {
  const [customers, setCustomers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const formSchema = yup.object().shape({
    email: yup.string().required('Email is required'),
    dateOfBirth: yup.date().required('Date of Birth is required'),
    country: yup.string().required('Country of Residence is required'),
    password: yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      dateOfBirth: '',
      country: '',
      password: '',
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      setCustomers([...customers, values]);
      console.log('Signup successful:', values);
      formik.resetForm();
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCountryChange = (selectedOption) => {
    formik.setFieldValue('country', selectedOption.label);
  };

  return (
    <div className="signup-container">
      <form onSubmit={formik.handleSubmit} className="signup-form">
        <h1 className="signup-heading">MONEY TRANSFER APP</h1>
        <p className="signup-subtitle">Transactions Made Easy And Secured</p>

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

        <div className="signup-input-group">
          <label className="signup-label">Date of Birth</label>
          <input
            name="dateOfBirth"
            type="date"
            className="signup-input"
            placeholder="Select your date of birth..."
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
            <p className="signup-error">{formik.errors.dateOfBirth}</p>
          )}
        </div>

        <div className="signup-input-group">
          <label className="signup-label">Country of Residence</label>
          <div className="country-input">
            <Select
              options={countryOptions}
              value={{ label: formik.values.country, value: formik.values.country }}
              onChange={handleCountryChange}
              placeholder="Select your country..."
              isSearchable
            />
            {formik.touched.country && formik.errors.country && (
              <p className="signup-error">{formik.errors.country}</p>
            )}
          </div>
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
