import React from 'react';
import './buttons.css';
import playIcon from '../../images/play.png';

const Button = ({ type, onClick, children, className }) => {
  const baseClass = 'btn';
  const typeClass = type === 'primary' ? 'btn-danger' : 'btn-secondary';
  const fullClassName = `${baseClass} ${typeClass} ${className || ''}`.trim();

  return (
    <button type="button" className={fullClassName} onClick={onClick}>
      {type === 'primary' && <img src={playIcon} alt="Play" className="play-icon" />}
      {children}
    </button>
  );
};

export default Button;