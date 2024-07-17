import React from 'react';
// import Slider from '../components/sliders/slider.jsx';
import style from './style.module.css';

const DetailFilm = () => {
  // Ces données seront à remplacer par des données réelles plus tard
  const film = {
    title: "Kingdom of the Planet of the Apes",
    bannerImage: "https://wallpapercg.com/media/ts_orig/17851.webp",
    duration: "2h 30min",
    language: "Français",
    genre: "Fantastique",
    synopsis: "Ceci est un résumé du film...",
    director: "Nom du Réalisateur",
    actors: ["Acteur 1", "Acteur 2", "Acteur 3"],
    writer: "Nom du Scénariste"
  };

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
                    <div className="position-absolute top-50 start-0 translate-middle-y text-start text-white ps-4 mt-lg-5 pt-lg-5">
                        <h1 className="display-3">{film.title}</h1>
                        <div className="mt-3">
                            <button type="button" className="btn btn-danger me-2">Lecture</button>
                            <button type="button" className="btn btn-secondary">+ À voir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='body'>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6 text-start">
                        <div className="row mb-3">
                            <div className="col-4">
                                <p>Durée: {film.duration}</p>
                            </div>
                            <div className="col-4">
                                <p>Langue: {film.language}</p>
                            </div>
                            <div className="col-4">
                                <p>Genre: {film.genre}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <p><strong>Synopsis:</strong> {film.synopsis}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-start">
                        <p>Réalisateur: {film.director}</p>
                        <p>Acteurs: {film.actors.join(', ')}</p>
                        <p>Scénariste: {film.writer}</p>
                    </div>
                </div>
            </div>

            <div className="container mt-4">
                <div className="similar-titles text-start">
                    <h2>Titres similaires</h2>
                    {/* Ici, vous intégrerez votre composant Slider plus tard */}
                    {/* <Slider /> */}
                </div>
            </div>
        </div>
    </div>
  );
};

export default DetailFilm;