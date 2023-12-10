import React, { useContext } from 'react';
import { BeneficiariesContext } from '../../context/BeneficiariesContext';
import BeneficiaryItem from './BeneficiaryItem';
import './styles/BeneficiariesList.css'; 

const BeneficiariesList = () => {
  const { beneficiaries } = useContext(BeneficiariesContext);

  return (
    <div className="beneficiaries-list">
      <h2>Your Beneficiaries</h2>
      <ul>
        {beneficiaries.map((beneficiary) => (
          <BeneficiaryItem key={beneficiary.id} beneficiary={beneficiary} />
        ))}
      </ul>
    </div>
  );
};

export default BeneficiariesList;
