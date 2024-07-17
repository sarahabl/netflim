import React, { useEffect, useState } from 'react';
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
      <UserProfile />
      <div className="content">
        <Slider title="Vos films à voir" movies={toWatchMovies} />
        <Slider title="Les films que vous avez aimés" movies={favoriteMovies} />
      </div>
    </div>
  );
};

export default UserProfilePage;