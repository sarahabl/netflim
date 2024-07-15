import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Slider from '../components/Slider';
import { fetchMovies } from '../api';

const UserProfilePage = () => {
  const [toWatchMovies, setToWatchMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      setToWatchMovies(movies.slice(0, 5)); // Films à voir
      setFavoriteMovies(movies.slice(0, 5)); // Films aimés
    };
    getMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="content">
        <Slider title="Favorite Movies" movies={favoriteMovies} />
        <Slider title="To Watch Movies" movies={toWatchMovies} />
      </div>
    </div>
  );
};

export default UserProfilePage;