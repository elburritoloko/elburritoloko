import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import './Infos.css';

const Infos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="infos-page">
      {/* Hero */}
      <section className="infos-hero">
        <div className="infos-hero-overlay"></div>
        <div className="container">
          <h1>Infos Pratiques</h1>
          <p className="lead">Tout ce que vous devez savoir avant de nous rendre visite</p>
        </div>
      </section>

      {/* Main Info */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            {/* Location */}
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={32} />
              </div>
              <h3>Adresse</h3>
              <p className="info-main">Rue Pichard 8</p>
              <p className="info-sub">1003 Lausanne, Suisse</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Rue+Pichard+8,+1003+Lausanne,+Suisse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link"
              >
                📍 Voir sur la carte
              </a>
            </div>

            {/* Hours */}
            <div className="info-card">
              <div className="info-icon">
                <Clock size={32} />
              </div>
              <h3>Horaires</h3>
              <p className="info-main">Bientôt disponibles</p>
              <div className="hours-placeholder">
                <p>Lundi - Vendredi : à venir</p>
                <p>Samedi - Dimanche : à venir</p>
              </div>
              <p className="info-detail">
                Nos horaires seront adaptés pour vous servir aux meilleurs moments.
              </p>
            </div>

            {/* Contact */}
            <div className="info-card">
              <div className="info-icon">
                <Phone size={32} />
              </div>
              <h3>Contact</h3>
              <p className="info-main">Pour toute question</p>
              <div className="contact-methods">
                <a href="#" className="contact-link">
                  <Mail size={20} />
                  <span>contact@elburritoloko.ch</span>
                </a>
              </div>
              <p className="info-detail">
                Notre équipe vous répondra dans les plus brefs délais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Announcement */}
      <section className="opening-announcement">
        <div className="container">
          <div className="announcement-content">
            <span className="announcement-badge">Ouverture prochaine</span>
            <h2>Restez informés</h2>
            <p>
              Nous finalisons les derniers préparatifs pour vous offrir la meilleure expérience possible.
              Inscrivez-vous à notre newsletter pour recevoir :
            </p>
            <ul className="announcement-list">
              <li>La date d'ouverture officielle</li>
              <li>L'adresse exacte de notre restaurant</li>
              <li>Nos horaires définitifs</li>
              <li>Des offres exclusives pour les premiers clients</li>
              <li>Des avant-premières et événements spéciaux</li>
            </ul>
            <a href="/#newsletter" className="btn-primary">
              Je m'inscris à la newsletter
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="faq-preview">
        <div className="container">
          <h2 className="section-title">Questions fréquentes</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Acceptez-vous les réservations ?</h4>
              <p>
                El Burrito Loko est un concept de restauration rapide premium.
                Pas de réservation nécessaire, vous serez servis rapidement.
              </p>
            </div>
            <div className="faq-item">
              <h4>Proposez-vous la livraison ?</h4>
              <p>
                Le Click & Collect sera disponible dès l'ouverture.
                Les options de livraison seront communiquées ultérieurement.
              </p>
            </div>
            <div className="faq-item">
              <h4>Quels moyens de paiement acceptez-vous ?</h4>
              <p>
                Nous accepterons tous les moyens de paiement courants :
                espèces, cartes bancaires, Twint, et autres paiements mobiles.
              </p>
            </div>
            <div className="faq-item">
              <h4>Avez-vous des options végétariennes et vegan ?</h4>
              <p>
                Absolument. Notre menu propose des options végétariennes,
                vegan, sans lactose et sans gluten. Consultez notre page menu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infos;