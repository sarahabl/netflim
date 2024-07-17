import React, { useState } from 'react';
import s from './style.module.css';
import avatarImage from '../../images/avatar-chat.png';

const UserProfile = () => {
  const [user, setUser] = useState({
    avatar: avatarImage,
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
    <div className={s.user_profile}>
      <div className={s.profile_header}>
        <img src={user.avatar} alt="Avatar" className={s.avatar} />
        <div className={s.profile_header_text}>
          <h1>{user.username}</h1>
          <button onClick={handleProfileUpdate}>Modifier mon profil</button>
        </div>
      </div>
      <div className={s.profile_preferences}>
        <h2 id={s.pref}>Vos préférences de lecture</h2>
        <div className={s.preference}>
          <label>Pays</label>
          <select name="country" value={user.country} onChange={handleInputChange}>
            <option value="USA">USA</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        <div className={s.preference}>
          <label>Langue</label>
          <select name="language" value={user.language} onChange={handleInputChange}>
            <option value="English">English</option>
            <option value="Français">Français</option>
            <option value="Deutsch">Deutsch</option>

          </select>
        </div>
        <div className={s.preference}>
          <label>Contenu adulte autorisé</label>
          <label className={s.switch}>
            <input
              type="checkbox"
              name="adultContent"
              checked={user.adultContent}
              onChange={handleToggleChange}
            />
            <span className={s.toggle}></span>
          </label>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;