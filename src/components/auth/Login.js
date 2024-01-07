import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { auth } from '../../config/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FiMail, FiLock } from 'react-icons/fi'; 
import * as yup from 'yup';
import './styles/Login.css';
import backgroundImage from '../../assets/images/mtalogin.jpg'


const Login = () => {
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
        const user = await signInWithEmailAndPassword(auth, values.email, values.password);
        console.log(user);
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
      <div className="login-image">
    <img src={backgroundImage} alt="Background" className="signup-image" />
    </div> 
    </div>
  );
};

export default Login;
