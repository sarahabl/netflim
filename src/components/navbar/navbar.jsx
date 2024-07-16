import React from 'react';
import './navbar.css';
import logo from '../../images/netflim_logo.png';
import avatar from '../../images/avatar_icon.png';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Netflim Logo" />
      </div>
      <div className="avatar">
        <button onClick={() => window.location.href = '/profile'}>
          <img src={avatar} alt="Avatar" />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
