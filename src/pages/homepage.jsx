import React, { useEffect, useState } from 'react';
import Hero from '../components/hero/hero.jsx';
import Slider from '../components/sliders/slider.jsx';
import { fetchMovies } from '../api/tmdb-api.js';

const genreIds = {
  d action: 28,
  d adventure: 12,
  d animation: 16,
  de comédie: 35,
  de crime: 80,
  documentaireq: 99,
  de drama: 18,
  à regarder en famille : 10751,
  fantastiques: 14,
  historiques : 36,
  d horreur: 27,
  musicaux : 10402,
  de mystère: 9648,
  de romance: 10749,
  de science fiction: 878,
  de télécrochet: 10770,
  thriller: 53,
  de guerre: 10752,
  western : 37
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
        {recentMovies.length >= 5 && <Slider title="Films du moment" movies={recentMovies} />}
        {topRatedMovies.length >= 5 && <Slider title="Top 10 des films" movies={topRatedMovies} />}
        {Object.keys(genreIds).map(genre => (
          genreMovies[genre]?.length >= 5 && (
            <Slider key={genre} title={`Les meilleurs films ${genre}`} movies={genreMovies[genre]} />
          )
        ))}
      </div>
    </div>
  );
};

export default Home;
