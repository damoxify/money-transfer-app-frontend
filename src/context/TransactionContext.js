import React, { createContext, useReducer } from 'react';

const initialState = {
  transactions: [], 
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
