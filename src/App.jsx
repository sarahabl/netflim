import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/navbar.jsx';


function App() {
  return (
    <div className="App">
      {/* Votre navigation ou layout commun ici */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
