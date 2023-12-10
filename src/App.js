// App.js

import React from 'react';
import { TransactionProvider } from './context/TransactionContext';
import TransactionHistoryPage from './components/transactions/TransactionHistoryPage';
import Header from './common/Header';
import Footer from './common/Footer';
import './styles/global.css'; 

const App = () => {
  return (
    <TransactionProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          {/* Your other components */}
          <TransactionHistoryPage />
        </main>
        <Footer />
      </div>
    </TransactionProvider>
  );
};

export default App;
