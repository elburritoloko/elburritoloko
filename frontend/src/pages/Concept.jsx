import React, { useEffect } from 'react';
import { Award, Heart, Users, Flame } from 'lucide-react';
import './Concept.css';

const Concept = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="concept-page">
      {/* Hero */}
      <section className="concept-hero">
        <div className="concept-hero-overlay"></div>
        <div className="container">
          <h1>Notre philosophie</h1>
          <p className="lead">Le burrito n'est pas un produit bas de gamme. C'est une expérience.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <div className="philosophy-grid">
            <div className="philosophy-text">
              <h2>La gastronomie dans un burrito</h2>
              <p>
                El Burrito Loko n'est pas un fast-food comme les autres. C'est une révolution culinaire.
              </p>
              <p>
                Derrière chaque burrito, un savoir-faire d'exception. Cuisson lente de 12 heures à l'étuvée.
                Viande qui fond en bouche, arômes concentrés, texture incomparable. Des techniques issues de la
                haute gastronomie appliquées à une street-food réinventée.
              </p>
              <p>
                Produits 100% suisses. 100% frais. 100% locaux. 100% fait maison.
                La finesse gustative d'un restaurant étoilé, servie en quelques minutes.
              </p>
            </div>
            <div className="philosophy-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1671225603584-8412a795a2d2)' }}>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Nos valeurs</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon-wrapper">
                <Award size={40} />
              </div>
              <h3>Excellence culinaire</h3>
              <p>
                Techniques de haute gastronomie appliquées avec rigueur. Chaque geste compte,
                chaque détail est maîtrisé. Une approche professionnelle au service du goût.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Flame size={40} />
              </div>
              <h3>Cuisson lente 12h</h3>
              <p>
                Mijotage prolongé à l'étuvée. La patience comme secret : concentration maximale
                des arômes, tendreté absolue. Un processus qui ne se précipite jamais.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Heart size={40} />
              </div>
              <h3>100% Fait maison</h3>
              <p>
                Tout est préparé sur place, chaque jour. Des sauces aux marinades,
                en passant par toutes les garnitures. Le vrai fait maison, sans raccourci.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Users size={40} />
              </div>
              <h3>Produits suisses locaux</h3>
              <p>
                100% frais, 100% locaux, 100% traçables. Partenaires producteurs sélectionnés
                pour leur sérieux. Une qualité que l'on peut garantir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="commitment-section">
        <div className="container">
          <div className="commitment-content">
            <h2>Notre engagement</h2>
            <div className="commitment-list">
              <div className="commitment-item">
                <span className="commitment-number">01</span>
                <div>
                  <h4>Mijotage 12 heures à l'étuvée</h4>
                  <p>Une cuisson lente qui transforme la viande. Chaque fibre s'imprègne des aromates, les saveurs se concentrent. Résultat : une texture fondante et un goût d'une profondeur rare.</p>
                </div>
              </div>

              <div className="commitment-item">
                <span className="commitment-number">02</span>
                <div>
                  <h4>Approvisionnement local exigeant</h4>
                  <p>Chaque fournisseur est audité. Produits suisses exclusivement, fraîcheur contrôlée quotidiennement. Tout est fait maison, des marinades aux sauces en passant par les préparations.</p>
                </div>
              </div>

              <div className="commitment-item">
                <span className="commitment-number">03</span>
                <div>
                  <h4>Rigueur et précision</h4>
                  <p>Chaque geste est calibré, chaque timing respecté. Une discipline de cuisine gastronomique appliquée au service rapide. Le résultat parle de lui-même.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Concept;