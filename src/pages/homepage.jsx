import React, { useEffect, useState } from 'react';
import Hero from '../components/hero/hero.jsx';
import Slider from '../components/sliders/slider.jsx';
import { fetchMovies } from '../api/tmdb-api.js';

const Home = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      
      // Trier les films par date de sortie (les plus récents en premier)
      const sortedByReleaseDate = movies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      setRecentMovies(sortedByReleaseDate.slice(0, 10)); // Ajuste le nombre de films comme nécessaire

      // Trier les films par note (les mieux notés en premier)
      const sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);
      setTopRatedMovies(sortedByRating.slice(0, 10)); // Ajuste le nombre de films comme nécessaire

      // Filtrer les films d'action et les trier par nombre de vues
      const actionGenreId = 28; // ID du genre Action (à vérifier selon l'API TMDB)
      const sortedByViews = movies
        .filter(movie => movie.genreIds.includes(actionGenreId))
        .sort((a, b) => b.views - a.views);
      setActionMovies(sortedByViews.slice(0, 10)); // Ajuste le nombre de films comme nécessaire
    };

    getMovies();
  }, []);


  return (
    <div>
      <Hero />
      <div className="slider">
        <Slider title="Films du moment" movies={recentMovies} />
        <Slider title="Top 10 des films" movies={topRatedMovies} />
        <Slider title="Films d'action les plus regardés" movies={actionMovies} />
      </div>
    </div>
  );
};

export default Home;