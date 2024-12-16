import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import '../profile/styles/UserProfile.css';
import profile from '../../assets/images/portImage.png';

function UserProfile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`/users/3`)
      .then((response) => response.json())
      .then((userData) => {
        // Ensure that userData is an array or an object with a map function
        if (Array.isArray(userData)) {
          setUsers(userData);
        } else {
          // If userData is not an array, you may need to extract the array from it
          setUsers([userData]);
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error.message);
      });
  }, []);

  const handleUpdateProfile = () => {
    console.log('Update profile clicked');
    // Implement logic for updating the user profile
  };

  const handleEditField = (fieldName) => {
    console.log(`Edit ${fieldName} clicked`);
    // Implement logic for editing the specific field
  };

  return (
    <div className="user-profile">
      <aside>
        <div className="return-to-dashboard">
          {users.map((user) => (
            <div key={user.id} className="profile-picture">
              <img src={profile} alt="Profile" />
            </div>
          ))}
          <a href="/dashboard">
            <span>&larr;</span> Return to Dashboard
          </a>
        </div>
      </aside>
      <main>
        <section>
          {users.map((user) => (
            <table key={user.id}>
              <tbody>
                <tr>
                  <td className="profile-field">
                    <div className="profile-label">Fullname:</div>
                    {user.fullname} <FaEdit onClick={() => handleEditField('fullname')} />
                  </td>
                </tr>
                <tr>
                  <td className="profile-field">
                    <div className="profile-label">Date of Birth:</div>
                    {user.date_of_birth} <FaEdit onClick={() => handleEditField('date_of_birth')} />
                  </td>
                </tr>
                <tr>
                  <td className="profile-field">
                    <div className="profile-label">Gender:</div>
                    {user.gender} <FaEdit onClick={() => handleEditField('gender')} />
                  </td>
                </tr>
                <tr>
                  <td className="profile-field">
                    <div className="profile-label">BVN:</div>
                    {user.bvn} <FaEdit onClick={() => handleEditField('bvn')} />
                  </td>
                </tr>
                <tr>
                  <td className="profile-field">
                    <div className="profile-label">Phone Number:</div>
                    {user.phone} <FaEdit onClick={() => handleEditField('phone')} />
                  </td>
                </tr>
                <tr>
                  <td className="profile-field">
                    <div className="profile-label">Address:</div>
                    {user.address} <FaEdit onClick={() => handleEditField('address')} />
                  </td>
                </tr>
                <tr>
                  <td className="profile-field">
                    <div className="profile-label">Email:</div>
                    {user.email} <FaEdit onClick={() => handleEditField('email')} />
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </section>
      </main>
    </div>
  );
}

export default UserProfile;
