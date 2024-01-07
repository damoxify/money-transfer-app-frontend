// TransactionContext.js

import React, { createContext, useReducer } from 'react';

const initialState = {
  transactions: [], // Array to store transaction data
  // Additional state properties if needed
};

const ADD_TRANSACTION = 'ADD_TRANSACTION';

const transactionReducer = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  // Actions
  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
