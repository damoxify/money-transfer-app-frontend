import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/dmologo.png';

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </nav>
      {children}
    </>
  );
};

export default Layout;
