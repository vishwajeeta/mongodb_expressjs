// Example: Navbar.js
import React, { useState, useEffect } from 'react';
// import Register from './Register';
// import Login from './Login';
import './App.css';
import Register from './Register1';
import Login from './Login1';
const Navbar = () => {
  const [username, setUsername] = useState('');
  const [showLogin, setShowLogin] = useState('');
  const [showRegister, setShowRegister] = useState('true');

  useEffect(() => {
    // Assuming username is stored in localStorage after login
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('token'); // Assuming JWT token is stored as 'token'
    localStorage.removeItem('username');
    window.location.reload(); // Refresh to redirect to the login page or reset the UI
  };

  //Login-Register
  const toggleLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const toggleRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div>
      {username ? (
        <div className="user-welcome">
          <h1>Welcome, {username}</h1>
          <button onClick={handleLogout} className="logout_button">Logout</button>
        </div>
      ) : (
        <div>
        
        {/* <Register/>
        
        <Login/> */}
        {/* <Register/>
        <Login/> */}
         <div className="auth-buttons">
            <button onClick={toggleLogin} className="auth_button">Login</button>
            <button onClick={toggleRegister} className="auth_button">Register</button>
          </div>

          {showLogin && <Login />}
          {showRegister && <Register />}
        
        </div>
      )}
    </div>
  );
};

export default Navbar;
