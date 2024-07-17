import React, { useEffect, useState } from 'react';
import Hero from '../components/hero/hero.jsx';
import Slider from '../components/sliders/slider.jsx';
import { fetchMovies } from '../api/tmdb-api.js';

const Home = () => {
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
      <Hero />
      <div className="slider">
        <Slider title="Films du moment" movies={toWatchMovies} />
        <Slider title="Top 10 des films" movies={favoriteMovies} />
        <Slider title="Les meilleurs films d’action" movies={favoriteMovies} />
        <Slider title="Films du moment" movies={toWatchMovies} />
        <Slider title="Top 10 des films" movies={favoriteMovies} />
        <Slider title="Les meilleurs films d’action" movies={favoriteMovies} />
        <Slider title="Top 10 des films" movies={favoriteMovies} />
        <Slider title="Les meilleurs films d’action" movies={favoriteMovies} />
      </div>
    </div>
  );
};

export default Home;