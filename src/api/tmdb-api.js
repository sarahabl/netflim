const API_KEY = 'a3103dfc83b68f0d52d3d263f5b85181';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  // Fetch movie details
  const movieResponse = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  const movieData = await movieResponse.json();

  // Fetch movie credits
  const creditsResponse = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  const creditsData = await creditsResponse.json();

  // Fetch movie videos (including trailers)
  const videosResponse = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
  const videosData = await videosResponse.json();

  // Find the first trailer in the videos results
  const trailer = videosData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

  // Extract relevant data
  const movieDetails = {
    title: movieData.title,
    duration: movieData.runtime,
    language: movieData.original_language,
    synopsis: movieData.overview,
    bannerImage: movieData.backdrop_path ? `https://image.tmdb.org/t/p/w500${movieData.backdrop_path}` : null,
    genre: movieData.genres.map(genre => genre.name).join(', '),
    director: creditsData.crew.find(member => member.job === 'Director')?.name || 'N/A',
    writer: creditsData.crew.find(member => member.job === 'Screenplay')?.name || 'N/A',
    actors: creditsData.cast.slice(0, 5).map(actor => actor.name), // Get top 5 actors
    trailerKey: trailer ? trailer.key : null
  };

  return movieDetails;
}