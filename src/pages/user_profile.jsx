import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner_film/Banner';
import Slider from '../components/sliders/Slider';
import UserProfile from '../components/userProfile/UserProfileComponent';
import { fetchMovies } from '../api';

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
      <Banner />
      <div className="content">
        <Slider title="Favorite Movies" movies={favoriteMovies} />
        <Slider title="To Watch Movies" movies={toWatchMovies} />
      </div>
    </div>
  );
};

export default UserProfilePage;