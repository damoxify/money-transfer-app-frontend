import React from 'react';
import '../transactions/styles/TransactionItem.css';

const TransactionItem = ({ transaction }) => {
  return (
    <li className="transaction-item">
      <div className="transaction-details">
        <span className="transaction-type">{transaction.type}</span>
        <span className="transaction-amount">{transaction.amount}</span>
        <span className="transaction-date">{transaction.date}</span>
      </div>
    </li>
  );
};

export default TransactionItem;
