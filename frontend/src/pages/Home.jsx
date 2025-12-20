import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Newsletter from '../components/Newsletter';
import './Home.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToNewsletter = () => {
    const element = document.getElementById('newsletter');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Le burrito comme il devrait être</h1>
          <p className="hero-subtitle">
            Généreux. Authentique. Irrésistible.
          </p>
          <div className="hero-cta">
            <button onClick={scrollToNewsletter} className="btn-primary">
              Restez informé
            </button>
            <Link to="/menu" className="btn-secondary">
              Découvrir le menu
            </Link>
          </div>
        </div>
        <button className="scroll-indicator" onClick={scrollToNewsletter} aria-label="Scroll down">
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Value Proposition */}
      <section className="value-section">
        <div className="container">
          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon">🌯</div>
              <h3>Qualité premium</h3>
              <p>Ingrédients frais sélectionnés avec soin. Pas de compromis sur la qualité.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔥</div>
              <h3>Savoir-faire authentique</h3>
              <p>Recettes traditionnelles, exécution maîtrisée. Le goût qui fait la différence.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Générosité</h3>
              <p>Des portions qui vous rassasient. Un rapport qualité-prix qui vous surprend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Announcement */}
      <section className="opening-section">
        <div className="container">
          <div className="opening-content">
            <span className="opening-badge">Bientôt</span>
            <h2>Ouverture prochaine à Lausanne</h2>
            <p>
              El Burrito Loko arrive bientôt dans votre ville. Inscrivez-vous à notre newsletter
              pour être les premiers informés de l'ouverture et recevoir des offres exclusives.
            </p>
            <button onClick={scrollToNewsletter} className="btn-primary">
              Je m'inscris
            </button>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="showcase-section">
        <div className="container">
          <h2 className="section-title">L'expérience El Burrito Loko</h2>
          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="showcase-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1715601104221-bdf02645d6c2)' }}></div>
              <div className="showcase-content">
                <h3>Ingrédients de qualité</h3>
                <p>Chaque ingrédient est sélectionné pour sa fraîcheur et son authenticité.</p>
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1671225603584-8412a795a2d2)' }}></div>
              <div className="showcase-content">
                <h3>Savoir-faire artisanal</h3>
                <p>Des recettes traditionnelles préparées avec passion et précision.</p>
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587146905066-659504839ad9)' }}></div>
              <div className="showcase-content">
                <h3>Prêt en quelques minutes</h3>
                <p>Rapide mais jamais précipité. Le respect du produit avant tout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="newsletter-section">
        <div className="container">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Home;