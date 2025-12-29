import React from 'react';
import { Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <img 
              src="https://customer-assets.emergentagent.com/job_0c4a1857-3970-4c32-98be-8a485cb0aac1/artifacts/vs32mbch_BL_Logo-A-Couleur-A.jpg" 
              alt="El Burrito Loko" 
              className="footer-logo"
            />
            <p className="footer-tagline">Qualité. Authenticité. Générosité.</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Rue Pichard 8</p>
            <p>1003 Lausanne, Suisse</p>
            <p><a href="mailto:contact@elburritoloko.ch" className="footer-email">contact@elburritoloko.ch</a></p>
          </div>

          <div className="footer-section">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="TikTok" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} El Burrito Loko. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <span>•</span>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;