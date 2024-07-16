import React from 'react';
import './navbar.css';
import logo from '../../images/netflim_logo.png';
import avatar from '../../images/avatar_icon.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Netflim Logo" height="30" />
        </a>
        <div className="ms-auto">
          <button 
            className="btn btn-link" 
            onClick={() => window.location.href = '/profile'}
          >
            <img src={avatar} alt="Avatar" height="30" className="rounded-circle" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;