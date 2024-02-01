import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../dashboard/Dashboard.css';

const Dashboard = ({ setAuthenticated, setToken }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: 'Shinani',
    email: 'shinani@gmail.com',
    balance: 5000,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/users/1');
        const { username, email} = response.data;

        setUserData({
          username,
          email,
        
        });
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []); 

  const handleLogout = () => {

    // Set authentication state to false
    // setAuthenticated(false);
    // setToken(null);

   
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Money Transfer App</h2>
      <div className="dashboard-content">
        <p className="dashboard-welcome">Welcome, {userData.username}!</p>
        <p className="dashboard-email">Email: {userData.email}</p>

        <div className="money-transfer-section">
          <h3>Your Balance: ${userData.balance}</h3>
          <button className="money-transfer-button">Transfer Money</button>
          <button className="money-history-button">Transaction History</button>
        </div>

        <button className="dashboard-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
