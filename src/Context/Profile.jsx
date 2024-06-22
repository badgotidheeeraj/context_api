// Profile.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div color={{color:'green'}}> <h1>please login</h1></div>

  return (
    <div>
      {user ? <p>Welcome,   <span style={{color:'red'}}> {user.name}</span> </p> : <p>No user logged in</p>}
      {user ? <p >Password, <span style={{color:'red'}}> {user.password}</span> </p> : <p>your Password</p>}
    </div>
  );
};

export default Profile;



