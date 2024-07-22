const API_KEY = 'a3103dfc83b68f0d52d3d263f5b85181';
const BASE_URL = 'https://api.themoviedb.org/3';
const LANGUAGE = 'fr-FR';

// Fonction pour récupérer les films populaires avec pagination
export const fetchMovies = async () => {
  const fetchPage = async (page) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`);
    const data = await response.json();
    return data.results.map(movie => ({
      ...movie,
      title: movie.title || movie.original_title,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      views: movie.popularity, // Assumons que la popularité correspond au nombre de vues
      genreIds: movie.genre_ids
    }));
  };

  // Récupérer les films de plusieurs pages
  const pages = [1, 2, 3, 4, 5]; // Changer le nombre de pages pour obtenir plus ou moins de films
  const movies = [];
  for (const page of pages) {
    const pageMovies = await fetchPage(page);
    movies.push(...pageMovies);
  }

  return movies;
};

export const fetchMovieDetails = async (movieId) => {
  // Fetch movie details
  const movieResponse = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=translations`);
  const movieData = await movieResponse.json();

  // Fetch movie credits
  const creditsResponse = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  const creditsData = await creditsResponse.json();

  // Fetch movie videos (including trailers)
  const videosResponse = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=${LANGUAGE}`);
  const videosData = await videosResponse.json();

  // Find the first trailer in the videos results
  const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  // Get the English title if French is not available
  const englishTitle = movieData.translations?.translations.find(t => t.iso_639_1 === 'en')?.data?.title;

  // Extract relevant data
  const movieDetails = {
    title: movieData.title || englishTitle || movieData.original_title,
    originalTitle: movieData.original_title,
    duration: movieData.runtime,
    language: movieData.original_language,
    synopsis: movieData.overview || englishTitle?.data?.overview,
    bannerImage: movieData.backdrop_path ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}` : null,
    genre: movieData.genres.map(genre => genre.name).join(', '),
    director: creditsData.crew.find(member => member.job === 'Director')?.name || 'N/A',
    writer: creditsData.crew.find(member => member.job === 'Screenplay')?.name || 'N/A',
    actors: creditsData.cast.slice(0, 5).map(actor => actor.name), // Get top 5 actors
    trailerKey: trailer ? trailer.key : null
  };

  return movieDetails;
}

// pour la page Detail Film : la partie des sliders "titres similaires"
export const fetchSimilarMovies = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=${LANGUAGE}`);
  const data = await response.json();
  return data.results.map(movie => ({
    ...movie,
    title: movie.title || movie.original_title
  }));
};
