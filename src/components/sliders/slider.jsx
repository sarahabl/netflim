import React from 'react';
import './slider.css';

const Slider = ({ title, movies }) => {
  return (
    <div className="slider-container">
      <h2 className="mb-3">{title}</h2>
      <div className="slider-wrapper">
        <div className="d-flex flex-nowrap overflow-auto">
          {movies.map((movie) => (
            <div key={movie.id} className="slider-item">
              <div className="card movie-card">
                <img 
                  src={movie.backdrop_path 
                    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
                    : 'chemin/vers/une/image/par/defaut.jpg'} 
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
    </div>
  );
};

export default Slider;