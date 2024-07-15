import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import DetailFilm from './pages/detail_film';
import UserProfile from './pages/user_profile';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail_film" element={<DetailFilm />} />
          <Route path="/user_profile" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
