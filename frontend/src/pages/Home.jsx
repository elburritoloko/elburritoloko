import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChefHat, Timer, MapPin } from 'lucide-react';
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
              <div className="value-icon-wrapper">
                <ChefHat size={40} />
              </div>
              <h3>Savoir-faire d'exception</h3>
              <p>Techniques gastronomiques appliquées à chaque préparation. Une finesse gustative incomparable.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <Timer size={40} />
              </div>
              <h3>Cuisson lente 12h</h3>
              <p>Mijotage prolongé qui concentre les arômes et révèle une texture fondante unique.</p>
            </div>
            <div className="value-card">
              <div className="value-icon-wrapper">
                <MapPin size={40} />
              </div>
              <h3>Produits suisses</h3>
              <p>100% frais, locaux, fait maison. Des fournisseurs triés sur le volet.</p>
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
          <h2 className="section-title">Gastronomie rencontre rapidité</h2>
          <p className="section-subtitle">
            L'excellence d'un restaurant étoilé. La praticité d'un fast-food premium.
          </p>
          <div className="showcase-grid">
            <div className="showcase-card">
              <div className="showcase-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1671225603584-8412a795a2d2)' }}></div>
              <div className="showcase-content">
                <h3>Produits suisses, frais, locaux</h3>
                <p>Chaque ingrédient est sourcé en Suisse. Fraîcheur garantie, qualité irréprochable, zéro produit industriel.</p>
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1715601104221-bdf02645d6c2)' }}></div>
              <div className="showcase-content">
                <h3>Cuisson nocturne 12 heures</h3>
                <p>Viande cuite toute la nuit à l'étuvée. Une tendresse extrême et une concentration des saveurs inégalée.</p>
              </div>
            </div>
            <div className="showcase-card">
              <div className="showcase-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1587146905066-659504839ad9)' }}></div>
              <div className="showcase-content">
                <h3>Savoir-faire d'un chef étoilé</h3>
                <p>Formé dans de grandes maisons gastronomiques. Une finesse gustative d'exception dans chaque burrito.</p>
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