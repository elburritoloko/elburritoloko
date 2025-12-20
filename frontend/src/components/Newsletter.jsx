import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import axios from 'axios';
import './Newsletter.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !consent) {
      setStatus('error');
      setMessage('Veuillez remplir tous les champs et accepter les conditions.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const response = await axios.post(`${API}/newsletter/subscribe`, {
        email,
        consent,
        source: 'website'
      });

      if (response.data.success) {
        setStatus('success');
        setMessage('Merci ! Vous êtes inscrit à notre newsletter.');
        setEmail('');
        setConsent(false);
      }
    } catch (error) {
      setStatus('error');
      if (error.response?.data?.detail) {
        setMessage(error.response.data.detail);
      } else {
        setMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-icon">
          <Mail size={48} />
        </div>
        <h2>Restez connectés</h2>
        <p className="newsletter-description">
          Inscrivez-vous à notre newsletter et recevez en exclusivité :
        </p>
        <ul className="newsletter-benefits">
          <li>🎉 La date d'ouverture officielle</li>
          <li>🎁 Des offres spéciales réservées aux abonnés</li>
          <li>⭐ Les nouveautés du menu en avant-première</li>
          <li>🎂 Des invitations à nos événements</li>
        </ul>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              disabled={status === 'loading'}
              required
            />
          </div>

          <div className="consent-group">
            <label className="consent-label">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                disabled={status === 'loading'}
                required
              />
              <span>
                J'accepte de recevoir des communications de la part d'El Burrito Loko
                et j'ai lu la politique de confidentialité.
              </span>
            </label>
          </div>

          <button 
            type="submit" 
            className="btn-primary newsletter-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Inscription...' : "Je m'inscris"}
          </button>
        </form>

        {status === 'success' && (
          <div className="newsletter-message success">
            <Check size={20} />
            <span>{message}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="newsletter-message error">
            <span>{message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;