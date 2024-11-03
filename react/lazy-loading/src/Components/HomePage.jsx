import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div >
      <h1>Welcome to Our Application</h1>
      <p>Your gateway to manage everything in one place.</p>
      <button onClick={goToDashboard} >
        Go to Dashboard
      </button>
    </div>
  );
};

export default HomePage;
