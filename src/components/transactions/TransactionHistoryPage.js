import React, { useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import TransactionItem from './TransactionItem';
import TransactionFilter from './TransactionFilter';
import './TransactionHistoryPage.css';

const TransactionHistoryPage = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="transaction-history-page">
      <h1>Transaction History</h1>
      <TransactionFilter />
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistoryPage;
