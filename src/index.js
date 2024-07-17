import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailFilm from './pages/detail_film/detail_film.jsx';
import UserProfilePage from './pages/user_profile.jsx';
import Home from './pages/homepage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} >
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<DetailFilm />} />
            <Route path="/profile" element={<UserProfilePage />} />
          </ Route >
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
