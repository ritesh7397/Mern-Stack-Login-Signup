import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Home.css';  // Import the CSS file

function Home() {
  const [loggedInUser, setLoggedInUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  // LOGOUT FUNCTIONALITY
  
  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    toast.success('User Logged Out');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
  };

  return (
    <div className="home-container">
      <h1 className="logged">{loggedInUser}</h1>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
