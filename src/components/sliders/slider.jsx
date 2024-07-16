import React from 'react';

const Slider = ({ title, movies }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        {movies.map((movie) => (
          <div key={movie.id} className="slider-item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
