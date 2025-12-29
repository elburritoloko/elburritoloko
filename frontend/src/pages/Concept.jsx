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
              <h3>Excellence gastronomique</h3>
              <p>
                Chef formé dans de grandes maisons étoilées. Techniques d'exception appliquées
                à chaque préparation. Une finesse gustative incomparable.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Flame size={40} />
              </div>
              <h3>Cuisson lente 12h</h3>
              <p>
                Viande cuite toute la nuit à l'étuvée. Tendresse maximale, concentration des saveurs.
                Un processus artisanal qui ne peut être précipité.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Heart size={40} />
              </div>
              <h3>100% Fait maison</h3>
              <p>
                Aucun produit industriel. Tout est préparé sur place, chaque jour.
                Des sauces aux marinades, tout est créé par notre chef.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Users size={40} />
              </div>
              <h3>Produits suisses locaux</h3>
              <p>
                100% frais, 100% locaux, 100% traçables. Nous soutenons les producteurs suisses
                et garantissons une qualité irréprochable.
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
                  <h4>Cuisson nocturne 12 heures</h4>
                  <p>Nos viandes cuisent toute la nuit à l'étuvée. Une technique maîtrisée issue de la haute gastronomie pour une tendresse et une profondeur de goût exceptionnelles.</p>
                </div>
              </div>

              <div className="commitment-item">
                <span className="commitment-number">02</span>
                <div>
                  <h4>Produits suisses, zéro industriel</h4>
                  <p>Chaque ingrédient est sourcé localement en Suisse. Aucun produit transformé, aucun raccourci. Tout est fait maison, des sauces aux marinades.</p>
                </div>
              </div>

              <div className="commitment-item">
                <span className="commitment-number">03</span>
                <div>
                  <h4>Expertise d'un chef étoilé</h4>
                  <p>Notre chef, formé dans de grandes maisons gastronomiques, applique des techniques d'exception. Chaque burrito bénéficie d'un savoir-faire rare dans le fast-food.</p>
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