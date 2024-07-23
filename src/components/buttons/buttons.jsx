import React from 'react';
import './buttons.css';
import playIcon from '../../images/play.png';

const Button = ({ type, onClick, children, className }) => {
  const baseClass = 'btn';
  const typeClass = type === 'primary' ? 'btn-danger' : 'btn-secondary';
  const fullClassName = `${baseClass} ${typeClass} ${className || ''}`.trim();

  // Gestionnaire d'événement pour afficher l'alerte
  const handleClick = () => {
    alert("Site en construction. La lecture du film et l'ajout à votre liste 'à voir' ne sont pas encore disponibles.");
  };

  return (
    <button
      type="button"
      className={fullClassName}
      onClick={() => {
        // Appel de la fonction de gestion d'alerte
        handleClick();
        // Si une fonction onClick est fournie en props, on l'appelle aussi
        if (onClick) onClick();
      }}
    >
      {type === 'primary' && <img src={playIcon} alt="Play" className="play-icon" />}
      {children}
    </button>
  );
};

export default Button;
