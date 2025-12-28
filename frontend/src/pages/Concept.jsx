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
                Formé dans de grandes maisons étoilées, notre chef applique des techniques gastronomiques
                d'exception à chaque burrito. Cuisson lente de 12 heures toute la nuit. Viande étuvée pour
                une tendresse extrême et une concentration des saveurs inégalée.
              </p>
              <p>
                Produits 100% suisses. 100% frais. 100% locaux. 100% fait maison. Zéro produit industriel.
                Zéro compromis. La finesse gustative d'un restaurant étoilé, servie en quelques minutes.
              </p>
              <p className="philosophy-ambition">
                <strong>Notre ambition : devenir LA référence mondiale du burrito premium.</strong>
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
                  <h4>Ingrédients sélectionnés</h4>
                  <p>Chaque fournisseur est choisi pour sa qualité. Pas de place pour la médiocrité.</p>
                </div>
              </div>

              <div className="commitment-item">
                <span className="commitment-number">02</span>
                <div>
                  <h4>Préparation maîtrisée</h4>
                  <p>Rapide ne veut pas dire bâclé. Chaque étape est exécutée avec précision.</p>
                </div>
              </div>

              <div className="commitment-item">
                <span className="commitment-number">03</span>
                <div>
                  <h4>Expérience complète</h4>
                  <p>Du premier contact à la dernière bouchée, tout est pensé pour votre plaisir.</p>
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