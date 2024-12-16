import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeneficiaryItem from './BeneficiaryItem';
import './styles/BeneficiariesList.css';

const BeneficiariesList = () => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get('/beneficiaries');
        setBeneficiaries(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching beneficiaries:', error);
      }
    };

    fetchBeneficiaries();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="beneficiaries-list">
      <h2>Your Beneficiaries</h2>
      {loading ? ( // Render loading message if data is being fetched
        <p>Loading...</p>
      ) : beneficiaries.length > 0 ? (
        <ul>
          {beneficiaries.map((beneficiary) => (
            <BeneficiaryItem key={beneficiary.id} beneficiary={beneficiary} />
          ))}
        </ul>
      ) : (
        <p>No beneficiaries found.</p>
      )}
    </div>
  );
};

export default BeneficiariesList;
