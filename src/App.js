import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import BeneficiariesList from './components/beneficiaries/BeneficiariesList';
import AddBeneficiaryForm from './components/beneficiaries/AddBeneficiaryForm';
import TransactionHistoryPage from './components/transactions/TransactionHistoryPage';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import Header from './common/Header';
import Footer from './common/Footer';
import FundsTransfer from './components/fundsTransfer/FundsTransfer';
import { AuthProvider } from './context/AuthContext'; 

const App = () => {
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/FundsTransfer" element={<FundsTransfer />} />
              <Route path="/beneficiaries" element={<BeneficiariesList />} />
              <Route path="/add-beneficiary" element={<AddBeneficiaryForm />} />
              <Route path="/transactions" element={<TransactionHistoryPage />} />
              <Route
                path="/dashboard"
                element={<Dashboard setToken={setToken} setAuthenticated={setAuthenticated} />}
              />
             <Route
                path="/login"
                element={<Login setToken={setToken} setAuthenticated={setAuthenticated} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Homepage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
