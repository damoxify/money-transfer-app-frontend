import React, { useState } from 'react';
import axios from 'axios';
import './styles/BeneficiaryItem.css';

const BeneficiaryItem = ({ beneficiary, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBeneficiary, setUpdatedBeneficiary] = useState({ ...beneficiary });

  const handleDelete = () => {
    axios.delete(`/beneficiaries/${beneficiary.id}`)
      .then(() => {
        onDelete(beneficiary.id);
      })
      .catch(error => {
        console.error('Error deleting beneficiary:', error);
      });
  };

  const handleUpdate = () => {
    axios.patch(`/beneficiaries/${beneficiary.id}`, updatedBeneficiary)
      .then(response => {
        onUpdate(response.data);
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating beneficiary:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBeneficiary(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSendMoney = () => {
    console.log(`Send money to ${beneficiary.name}`);
  };

  return (
    <tr className="beneficiary-item">
      <td>{isEditing ? <input type="text" name="name" value={updatedBeneficiary.name} onChange={handleChange} /> : beneficiary.name}</td>
      <td>{isEditing ? <input type="text" name="account_number" value={updatedBeneficiary.account_number} onChange={handleChange} /> : beneficiary.account_number}</td>
      <td>{isEditing ? <input type="text" name="bank" value={updatedBeneficiary.bank} onChange={handleChange} /> : beneficiary.bank}</td>
      <td>
        <button onClick={handleSendMoney} className="send-money-button">Send Money</button>
        {isEditing ? (
          <>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default BeneficiaryItem;
