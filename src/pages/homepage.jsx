import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar/navbar';
import BannerFilm from '../components/banner_film/banner_film';
import Slider from '../components/slider/slider';
import { fetchMovies } from '../api/tmdb-api';

const Homepage = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState({
    action: [],
    adventure: [],
    animation: [],
    comedy: [],
    crime: [],
    documentary: [],
    drama: [],
    family: [],
    fantasy: [],
    history: [],
    horror: [],
    music: [],
    mystery: [],
    romance: [],
    scienceFiction: [],
    tvMovie: [],
    thriller: [],
    war: [],
    western: [],
  });

  useEffect(() => {
    const fetchAllMovies = async () => {
      const latest = await fetchMovies('movie/latest');
      const topRated = await fetchMovies('movie/top_rated');

      const genreIds = {
        action: 28,
        adventure: 12,
        animation: 16,
        comedy: 35,
        crime: 80,
        documentary: 99,
        drama: 18,
        family: 10751,
        fantasy: 14,
        history: 36,
        horror: 27,
        music: 10402,
        mystery: 9648,
        romance: 10749,
        scienceFiction: 878,
        tvMovie: 10770,
        thriller: 53,
        war: 10752,
        western: 37,
      };

      const genrePromises = Object.keys(genreIds).map(async (genre) => {
        const moviesByGenre = await fetchMovies('discover/movie', { with_genres: genreIds[genre] });
        return { [genre]: moviesByGenre.results };
      });

      const genresResults = await Promise.all(genrePromises);
      const genresData = Object.assign({}, ...genresResults);

      setLatestMovies([latest]);
      setTopRatedMovies(topRated.results);
      setGenres(genresData);
    };

    fetchAllMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <BannerFilm />
      <Slider title="Films du moment" movies={latestMovies} />
      <Slider title="Top 10 des films" movies={topRatedMovies.slice(0, 10)} />
      {Object.keys(genres).map((genre) => (
        <Slider key={genre} title={`Les meilleurs films ${genre}`} movies={genres[genre]} />
      ))}
    </div>
  );
};


export default Homepage;
