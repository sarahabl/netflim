import React from 'react';
import s from './style.module.css';
import bannerImage from '../../images/banner.png'; // Mettez à jour le chemin selon votre structure de projet
import centralImage from '../../images/banner.png'; // Exemple pour l'image centrale

const Hero = () => {
  return (
    <div className={`position-relative ${s.hero}`}>
        <img
            src={bannerImage}
            className="img-fluid w-100"
            alt="Le plus populaire"
        />
        <div className={`${s.overlay} position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center`}>
        <div className={`${s.textContainer} bg-overlay text-white p-4% w-100`}>
            <div className="tag mb-2 d-flex align-items-center">
                <span className="me-2">🔥</span> Le + populaire
            </div>
            <h1 className="text-white">Titre du film</h1>
            <div className="mt-3 d-flex">
                <button className="btn btn-primary me-2">
                    Lecture
                </button>
                <button className="btn btn-secondary">
                    + À voir
                </button>
            </div>
        </div>
    </div>
    </div>
    );
};

export default Hero;
