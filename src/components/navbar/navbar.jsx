// src/components/NavBar.js

import React from 'react';
import './NavBar.css';
import logo from '../images/netflim_logo.png';
import avatar from '../images/avatar_icon.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="../images/netflim_logo.png" alt="Netflim Logo" />
      </div>
      <div className="avatar">
        <button onClick={() => window.location.href = '/profile'}>
          <img src="../images/avatar_icon.png" alt="Avatar" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
