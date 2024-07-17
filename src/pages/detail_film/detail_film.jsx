import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { fetchMovieDetails, fetchSimilarMovies } from '../../api/tmdb-api';
import { useParams } from 'react-router-dom';
import Slider from '../../components/sliders/slider.jsx'; // Ajustez le chemin si nécessaire

const DetailFilm = () => {
    const [film, setFilm] = useState(null);
    const [similarMovies, setSimilarMovies] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      const getMovieDetails = async () => {
        try {
          const details = await fetchMovieDetails(id);
          setFilm(details);
  
          // Récupérer les films similaires
          const similar = await fetchSimilarMovies(id);
          setSimilarMovies(similar);
        } catch (error) {
          console.error("Erreur lors de la récupération des détails du film:", error);
        }
      };
  
      if (id) {
        getMovieDetails();
      }
    }, [id]);
  
    if (!film) {
      return <div>Chargement...</div>;
    }

  return (
    <div className={`${style.detailFilm} text-light`}>
      <div className={`${style.banner}`}>
        <div className="position-relative">
          <img 
            src={film.bannerImage} 
            className="img-fluid w-100" 
            alt={film.title} 
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient"></div>
          <div className={`${style.container}`}>
            <div className="position-absolute top-50 start-0 text-start text-white mx-4 px-2">
              <h1 className="display-3">{film.title}</h1>
              <div className="mt-3">
                <button type="button" className="btn btn-danger me-2">Lecture</button>
                <button type="button" className="btn btn-secondary">+ À voir</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='body my-4'>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-8 text-start">
              <div className="row mb-3">
                <div className="col-auto me-3">
                  <p>Durée: {film.duration} min</p>
                </div>
                <div className="col-auto me-3">
                  <p>Langue: {film.language}</p>
                </div>
                <div className="col-auto">
                  <p>Genre: {film.genre}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p><strong>Synopsis:</strong> {film.synopsis}</p>
                  {film.trailerKey && (
                        <a 
                            href={`https://www.youtube.com/watch?v=${film.trailerKey}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary mt-2"
                        >
                            Voir la bande-annonce
                        </a>
                    )}
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-start">
              <p>Réalisateur: {film.director}</p>
              <p>Acteurs: {film.actors.join(', ')}</p>
              <p>Scénariste: {film.writer}</p>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <div className="similar-titles text-start">
            <h2>Titres similaires</h2>
            {/* Ici, vous intégrerez votre composant Slider plus tard */}
            <Slider movies={similarMovies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFilm;