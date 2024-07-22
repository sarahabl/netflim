import React, { useEffect, useState } from 'react';
import Hero from '../components/hero/hero.jsx';
import Slider from '../components/sliders/slider.jsx';
import { fetchMovies } from '../api/tmdb-api.js';

const genreIds = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  ScienceFiction: 878,
  TVMovie: 10770,
  Thriller: 53,
  War: 10752,
  Western: 37
};

const Home = () => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchMovies();
      
      // Trier les films par date de sortie (les plus récents en premier)
      const sortedByReleaseDate = movies.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      setRecentMovies(sortedByReleaseDate.slice(0, 20)); // Ajuste le nombre de films comme nécessaire

      // Trier les films par note (les mieux notés en premier)
      const sortedByRating = [...movies].sort((a, b) => b.rating - a.rating);
      setTopRatedMovies(sortedByRating.slice(0, 20)); // Ajuste le nombre de films comme nécessaire

      // Filtrer les films pour chaque genre et les trier par nombre de vues
      const genreMovies = {};
      Object.keys(genreIds).forEach(genre => {
        genreMovies[genre] = movies
          .filter(movie => movie.genreIds.includes(genreIds[genre]))
          .sort((a, b) => b.views - a.views)
          .slice(0, 20); // Ajuste le nombre de films comme nécessaire
      });
      setGenreMovies(genreMovies);
    };

    getMovies();
  }, []);

  return (
    <div>
      <Hero />
      <div className="slider">
        <Slider title="Films du moment" movies={recentMovies} />
        <Slider title="Top 10 des films" movies={topRatedMovies} />
        {Object.keys(genreIds).map(genre => (
          <Slider key={genre} title={`Films de ${genre}`} movies={genreMovies[genre] || []} />
        ))}
      </div>
    </div>
  );
};

export default Home;
