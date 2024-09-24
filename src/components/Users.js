// components/Users.js
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => doc.data());
      setUsers(usersList);
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Users</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Email ID</th>
            <th>Password</th>
            <th>Signup Time</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.signupTime}</td>
              <td>{user.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
