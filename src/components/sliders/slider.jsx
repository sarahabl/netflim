import React from 'react';
import './slider.css'; // Nous allons créer ce fichier pour les styles personnalisés

const Slider = ({ title, movies }) => {
  return (
    <div className="slider-container my-5">
      <h2 className="mb-3">{title}</h2>
      <div className="row flex-nowrap overflow-auto g-4">
        {movies.map((movie) => (
          <div key={movie.id} className="col-auto">
            <div className="card movie-card">
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                className="card-img-top" 
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;