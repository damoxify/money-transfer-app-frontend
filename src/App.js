import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BeneficiariesList from './components/beneficiaries/BeneficiariesList';
import AddBeneficiaryForm from './components/beneficiaries/AddBeneficiaryForm';
import TransactionHistoryPage from './components/transactions/TransactionHistoryPage';
import Header from './common/Header';
import Footer from './common/Footer';
import './styles/global.css'; 
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
              <Switch>
                <Route path="/beneficiaries" component={BeneficiariesList} />
                <Route path="/add-beneficiary" component={AddBeneficiaryForm} />
                <Route path="/transactions" component={TransactionHistoryPage} />
                <Route exact path="/" component={TransactionHistoryPage} />
              </Switch>
            </main>
            <Footer />
          </div>
        </TransactionProvider>
      </BeneficiariesProvider>
    </Router>
  );
};

export default App;
