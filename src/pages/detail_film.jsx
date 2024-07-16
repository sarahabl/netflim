import React from 'react';
import Navbar from '../components/navbar/navbar.jsx';
// import Slider from '../components/sliders/slider.jsx';

const DetailFilm = () => {
  // Ces données seront à remplacer par des données réelles plus tard
  const film = {
    title: "Titre du Film",
    bannerImage: "url_de_l_image_banniere",
    duration: "2h 30min",
    language: "Français",
    genre: "Fantastique",
    synopsis: "Ceci est un résumé du film...",
    director: "Nom du Réalisateur",
    actors: ["Acteur 1", "Acteur 2", "Acteur 3"],
    writer: "Nom du Scénariste"
  };

  return (
    <div className="detail-film">
      <Navbar />
      
      <div className="banner">
        <img src={film.bannerImage} alt={film.title} />
        <h1>{film.title}</h1>
        <button>Lecture</button>
        <button>+ À voir</button>
      </div>

      <div className="film-info">
        <div className="left-column">
          <p>Durée: {film.duration}</p>
          <p>Langue: {film.language}</p>
          <p>Genre: {film.genre}</p>
          <p>Synopsis: {film.synopsis}</p>
        </div>
        <div className="right-column">
          <p>Réalisateur: {film.director}</p>
          <p>Acteurs: {film.actors.join(', ')}</p>
          <p>Scénariste: {film.writer}</p>
        </div>
      </div>

      <div className="similar-titles">
        <h2>Titres similaires</h2>
        {/* Ici, vous intégrerez votre composant Slider plus tard */}
        {/* <Slider /> */}
      </div>
    </div>
  );
};

export default DetailFilm;