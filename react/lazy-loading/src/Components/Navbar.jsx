import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav >
      <h1>My Application</h1>
      <div >
        <Link to="/" >Home</Link>
        <Link to="/dashboard" >Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
