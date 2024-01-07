import React from 'react';
import './styles/BeneficiaryItem.css'; 

const BeneficiaryItem = ({ beneficiary }) => {
  return (
    <li className="beneficiary-item">
      <p>{beneficiary.name}</p>
    </li>
  );
};

export default BeneficiaryItem;
