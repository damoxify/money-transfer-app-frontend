import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import BeneficiariesList from './components/beneficiaries/BeneficiariesList';
import AddBeneficiaryForm from './components/beneficiaries/AddBeneficiaryForm';
import TransactionHistoryPage from './components/transactions/TransactionHistoryPage';
import Dashboard from './components/dashboard/Dashboard';
import Homepage from './components/homepage/Homepage';
import Product from './components/products/Product';
import About from './components/about/About';
import Footer from './common/Footer';
import FundsTransfer from './components/fundsTransfer/FundsTransfer';
import { AuthProvider } from './context/AuthContext'; 
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import AnimatedCursor from "react-animated-cursor";


const App = () => {
  const [token, setToken] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  // const Navigate = useNavigate()

  return (
    <Router>
      <AnimatedCursor innerSize={20} color="2, 8, 135" />
      <AuthProvider>
        <div className="app">
            <Routes>
              <Route path="/FundsTransfer" element={<FundsTransfer />} />
              <Route path="/beneficiaries" element={<BeneficiariesList />} />
              <Route path="/add-beneficiary" element={<AddBeneficiaryForm />} />
              <Route path="/transactions" element={<TransactionHistoryPage />} />
              <Route path="/dashboard" element={<Dashboard />}/>    
             <Route
                path="/login"
                element={<Login setToken={setToken} setAuthenticated={setAuthenticated} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Product />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />




            </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
