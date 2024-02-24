// Dashboard.js
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaChartBar,
  FaUser,
  FaMoneyBill,
  FaUsers,
  FaMoneyCheckAlt,
  FaListAlt,
  FaPowerOff,
} from 'react-icons/fa';
import axios from 'axios';
import BeneficiariesList from '../beneficiaries/BeneficiariesList'; // Import BeneficiariesList
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
        const { username, email, balance } = response.data;

        setUserData({
          username,
          email,
          balance,
        });
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    navigate('/');
  };

  const handlePaymentSuccess = (updatedBalance) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      balance: updatedBalance,
    }));
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Money Transfer App</h2>
      <div className="dashboard-content">
        <p className="dashboard-welcome">Welcome, {userData.username}!</p>
        <p className="dashboard-email">Email: {userData.email}</p>

        <div className="balance-section">
          <h3>Your Balance: ${userData.balance}</h3>
          <div className="transaction-buttons">
            <Link to="/payment">Add Funds</Link>
            <Link to="/funds-transfer">Send Money</Link>
          </div>
        </div>

        {/* Other navigation links */}
        <div className="icon-navbar">
  <Link to="/analytics">
    <FaChartBar />
    <span>Analytics</span>
  </Link>
  <Link to="/profile">
    <FaUser />
    <span>View/Update Profile</span>
  </Link>
  <Link to="/add-beneficiary">
    <FaUsers />
    <span>Add Beneficiary</span>
  </Link>
  <Link to="/transaction-summary">
    <FaListAlt />
    <span>Transaction Summary</span>
  </Link>
</div>


        <button className="dashboard-logout" onClick={handleLogout}>
          <FaPowerOff />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
