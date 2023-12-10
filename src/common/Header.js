import React from 'react';
import './styles/Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MoneyTransferApp</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/transactions">Transactions</a></li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
