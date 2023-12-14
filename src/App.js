import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import BeneficiariesList from './components/beneficiaries/BeneficiariesList';
import AddBeneficiaryForm from './components/beneficiaries/AddBeneficiaryForm';
import TransactionHistoryPage from './components/transactions/TransactionHistoryPage';
import Header from './common/Header';
import Footer from './common/Footer';
import { BeneficiariesProvider } from './context/BeneficiariesContext';
import { TransactionProvider } from './context/TransactionContext';

const App = () => {
  return (
    <Router>
      <BeneficiariesProvider>
        <TransactionProvider>
          <div className="app">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/beneficiaries" element={<BeneficiariesList />} />
                <Route path="/add-beneficiary" element={<AddBeneficiaryForm />} />
                <Route path="/transactions" element={<TransactionHistoryPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route index element={<TransactionHistoryPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </TransactionProvider>
      </BeneficiariesProvider>
    </Router>
  );
};

export default App;
