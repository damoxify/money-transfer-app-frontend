import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../dashboard/Dashboard.css'

const Dashboard = ({ setAuthenticated, setToken, authenticated }) => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/dashboard', {
        headers: {
          Authorization: `Bearer ${setToken}`,
        },
      });

      const user = response.data.user;

      setUserData(user);
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = () => {
  
    setAuthenticated(false);

  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">User Dashboard</h2>

      {authenticated && userData ? (
        <div className="dashboard-content">
          <p className="dashboard-welcome">Welcome, {userData.username}!</p>
          <p className="dashboard-email">Email: {userData.email}</p>

          <button className="dashboard-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p className="dashboard-loading">Loading user data...</p>
      )}
    </div>
  );
};

export default Dashboard;