import React, { createContext, useState } from 'react';

const BeneficiariesContext = createContext();

const BeneficiariesProvider = ({ children }) => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  const addBeneficiary = (name) => {
    const newBeneficiary = { id: Date.now(), name };
    setBeneficiaries((prevBeneficiaries) => [...prevBeneficiaries, newBeneficiary]);
  };

  return (
    <BeneficiariesContext.Provider value={{ beneficiaries, addBeneficiary }}>
      {children}
    </BeneficiariesContext.Provider>
  );
};

export { BeneficiariesProvider, BeneficiariesContext };
