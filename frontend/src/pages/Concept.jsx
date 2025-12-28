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
                Un concept de restauration rapide premium qui remet le burrito à sa juste place :
                un plat généreux, savoureux, et préparé avec respect.
              </p>
              <p>
                Chez El Burrito Loko, pas de compromis. Des ingrédients frais, des recettes
                authentiques, une exécution rapide mais maîtrisée. Le plaisir de manger quelque
                chose de bon, sans attendre des heures.
              </p>
              <p>
                Notre ambition ? Devenir la référence du burrito premium en Suisse romande.
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
              <h3>Qualité</h3>
              <p>
                Ingrédients premium, fraîcheur garantie, zéro compromis. La qualité n'est pas
                une option, c'est la base.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Flame size={40} />
              </div>
              <h3>Authenticité</h3>
              <p>
                Recettes traditionnelles, techniques respectées, goûts vrais. Pas de chichi,
                juste du bon.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Heart size={40} />
              </div>
              <h3>Générosité</h3>
              <p>
                Des portions qui calent, des prix justes, une expérience qui fait plaisir.
                On ne lèse personne.
              </p>
            </div>

            <div className="value-item">
              <div className="value-icon-wrapper">
                <Users size={40} />
              </div>
              <h3>Respect</h3>
              <p>
                Respect du client, du produit, de l'équipe. Chaque détail compte, chaque
                personne compte.
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