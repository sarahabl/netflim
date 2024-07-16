import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* Votre navigation ou layout commun ici */}
      <Outlet />
    </div>
  );
}

export default App;
