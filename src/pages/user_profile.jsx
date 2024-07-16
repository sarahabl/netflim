import React, { useEffect, useState } from 'react';

import Navbar from '../components/navbar/navbar.jsx';
import UserProfile from '../components/userProfile/UserProfileComponent.jsx';

import Slider from '../components/sliders/slider.jsx';
import { fetchMovies } from '../api/tmdb-api.js';

const UserProfilePage = () => {
  const [toWatchMovies, setToWatchMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setToWatchMovies(movies.slice(0, 5)); // Films soi-disant à voir
      setFavoriteMovies(movies.slice(5, 10)); // Films soi-disant aimés
    };
    getMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <UserProfile />
      <div className="content">
        <Slider title="Favorite Movies" movies={favoriteMovies} />
        <Slider title="To Watch Movies" movies={toWatchMovies} />
      </div>
    </div>
  );
};

export default UserProfilePage;