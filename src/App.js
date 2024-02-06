// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AnimatedCursor from "react-animated-cursor";
import Layout from './layout/Layout';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import BeneficiariesList from './components/beneficiaries/BeneficiariesList';
import AddBeneficiaryForm from './components/beneficiaries/AddBeneficiaryForm';
import TransactionHistoryPage from './components/transactions/TransactionHistoryPage';
import Dashboard from './components/dashboard/Dashboard';
import UserProfile from './components/profile/UserProfile';
import Homepage from './components/homepage/Homepage';
import Product from './components/products/Product';
import About from './components/about/About';
import Footer from './common/Footer';
import FundsTransfer from './components/fundsTransfer/FundsTransfer';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';

const App = () => {
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <AnimatedCursor innerSize={20} color="2, 8, 135" />
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route
              path="/*"
              element={
                <Layout>
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/FundsTransfer" element={<FundsTransfer />} />
                    <Route path="/beneficiaries" element={<BeneficiariesList />} />
                    <Route path="/add-beneficiary" element={<AddBeneficiaryForm />} />
                    <Route path="/transactions" element={<TransactionHistoryPage />} />
                    <Route path="/dashboard" element={<Dashboard setAuthenticated={setAuthenticated} />} />
                    <Route path="/login" element={<Login setToken={setToken} setAuthenticated={setAuthenticated} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<UserProfile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                  </Routes>
                  <Footer />
                </Layout>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
