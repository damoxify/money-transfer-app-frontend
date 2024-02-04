import { useEffect, useState } from 'react';
import '../profile/styles/UserProfile.css';


function UserProfile() {

    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("")
    .then((r) => r.json())
    .then(setUsers);
  },[]);

  return (
    <div>UserProfile
    <aside>

    </aside>
    <main>
        <section>
            {users.filter((user) =>(
            <table>
                <tr>
                    <td>Fullname: {user.fullname}</td>
                </tr>
                <tr>
                    <td>Date of Birth: {user.date_of_birth}</td>
                </tr>
                <tr>
                    <td>Gender:     {user.gender}</td>
                </tr>
                <tr>
                    <td>BVN:        {user.bvn}</td>
                </tr>
                <tr>
                    <td>Phone Number:   {user.phone}</td>
                </tr>
                <tr>
                    <td>Address:    {user.address}</td>
                </tr>
                <tr>
                    <td>Email:  {user.email}</td>
                </tr>
            </table>
            ))}
            {/* The address to the update profile needed here! */}
            <button> Update Profile </button>
        </section>
    </main>
    </div>
  )
}

export default UserProfile