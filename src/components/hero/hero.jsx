import React, { useEffect, useState } from 'react';
import bannerImage from '../../images/banner.png';
import CustomButton from '../../components/buttons/buttons.jsx';
import { fetchMovies } from '../../api/tmdb-api'; 
import './hero.css';

const Hero = () => {
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const popularMovies = await fetchMovies();
                setMovies(popularMovies.slice(0, 10)); // Prendre les 10 premiers films populaires
            } catch (error) {
                console.error("Erreur lors de la récupération des films populaires:", error);
                setError(error.message);
            }
        };

        getPopularMovies();
    }, []);

    useEffect(() => {
        if (movies.length > 0) {
            const interval = setInterval(() => {
                setCurrentMovieIndex(prevIndex => (prevIndex + 1) % movies.length);
            }, 5000); // Changer de film toutes les 5 secondes

            return () => clearInterval(interval);
        }
    }, [movies]);

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    const currentMovie = movies[currentMovieIndex];

    return (
        <div className="position-relative">
            <img
                src={bannerImage}
                className="img-fluid w-100 banner-image"
                alt="Le plus populaire"
            />
            {currentMovie && currentMovie.backdrop_path && (
                <div 
                    className="position-absolute movie-backdrop"
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 1
                    }}
                />
            )}
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{ zIndex: 2 }}>
                <div className="bg-overlay text-white p-4 w-100 titreBox">
                    <div className="tag mb-2 d-flex align-items-center">
                        <span className="me-2">🔥</span> Le + populaire
                    </div>
                    <h1 className="text-white">{currentMovie ? currentMovie.title : 'Chargement...'}</h1>
                    <div className="mt-3">
                        <CustomButton type="primary" className="me-2">Lecture</CustomButton>
                        <CustomButton type="secondary">+ À voir</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
