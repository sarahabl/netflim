import React, { useState } from 'react';
import s from './style.module.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    avatar: '../images/avatar-chat.png',
    username: 'Martin Dupont',
    country: 'France',
    language: 'Français',
    adultContent: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleToggleChange = (e) => {
    setUser({ ...user, adultContent: e.target.checked });
  };

  const handleProfileUpdate = () => {
    // on mettrait ici le code pour modifier l'utilisateur
    console.log('Profile updated', user);
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <h2>{user.username}</h2>
        <button onClick={handleProfileUpdate}>Modifier mon profil</button>
      </div>
      <div className="profile-preferences">
        <h3>Vos préférences de lecture</h3>
        <div className="preference">
          <label>Pays</label>
          <select name="country" value={user.country} onChange={handleInputChange}>
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        <div className="preference">
          <label>Langue</label>
          <select name="language" value={user.language} onChange={handleInputChange}>
            <option value="English">English</option>
            <option value="Français">Français</option>
            <option value="Deutsch">Deutsch</option>

          </select>
        </div>
        <div className="preference">
          <label>Contenu adulte autorisé</label>
          <input
            type="checkbox"
            name="adultContent"
            checked={user.adultContent}
            onChange={handleToggleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;