import './footer.css';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Netflim ALS. Tous droits réservés.</p>
        <p>
          <a href="/terms">Conditions d'utilisation</a> | <a href="/privacy">Politique de confidentialité</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
