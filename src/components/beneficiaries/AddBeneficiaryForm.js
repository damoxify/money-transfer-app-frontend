import React, { useState } from 'react';
import axios from 'axios';
import '../beneficiaries/styles/AddBeneficiaryForm.css';


const AddBeneficiaryForm = ({ onAddBeneficiary, userId }) => {
  const [name, setName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bank, setBank] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation, you can add more validation logic
    if (!name || !accountNumber || !bank) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Make a POST request to the backend API to add a beneficiary
      const response = await axios.post('/beneficiaries', {
        name,
        account_number: accountNumber, // Match the backend field name
        bank,
        user_id: Math.floor(Math.random() * 3) + 2
      });

      // Assuming the backend returns the added beneficiary data
      const addedBeneficiary = response.data;

      // Pass the added beneficiary data to the parent component
      onAddBeneficiary(addedBeneficiary);

      // Clear the form fields after successful submission
      setName('');
      setAccountNumber('');
      setBank('');

      // You can also handle other actions, such as showing a success message or navigating to a different page
      alert('Beneficiary added successfully!');
    } catch (error) {
      console.error('Error adding beneficiary:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="add-beneficiary-form">
      <h2>Add Beneficiary</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Beneficiary Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter beneficiary name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="accountNumber">Account Number:</label>
        <input
          type="text"
          id="accountNumber"
          placeholder="Enter account number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />

        <label htmlFor="bank">Bank:</label>
        <input
          type="text"
          id="bank"
          placeholder="Enter bank name"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />

        <button type="submit">Add Beneficiary</button>
      </form>
    </div>
  );
};

export default AddBeneficiaryForm;


