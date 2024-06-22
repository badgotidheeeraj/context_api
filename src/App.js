// App.js
import React from 'react';
import Login from './Context/Login';
import Profile from './Context/Profile';
import UserProvider from './Context/UserProvider';

function App() {
  return (
    <UserProvider>
      <h1 style={{ color: 'red', textAlign: 'center' }}>Welcome To India, I need help!</h1>
      <Profile />
      <Login />
    </UserProvider>
  );
}

export default App;
