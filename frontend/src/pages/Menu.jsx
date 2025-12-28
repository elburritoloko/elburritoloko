import React, { useEffect } from 'react';
import { Leaf, Wheat, Milk } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuCategories = [
    {
      name: 'Burritos au Bœuf',
      icon: '🥩',
      description: 'Bœuf suisse cuit 12h à l\'étuvée. Tendresse exceptionnelle.',
      items: [
        { name: 'El Clásico', description: 'Bœuf étuvé 12h, riz basmati, haricots noirs, pico de gallo, crème aigre maison' },
        { name: 'El Picante', description: 'Bœuf étuvé épices maison, jalapeños confits, guacamole, fromage suisse, salsa roja' },
        { name: 'El Supremo', description: 'Bœuf braisé 12h, riz coriandre-citron, haricots, guacamole, queso fresco artisanal' }
      ]
    },
    {
      name: 'Burritos au Poulet',
      icon: '🍗',
      description: 'Poulet suisse mariné 24h. Saveurs profondes et authentiques.',
      items: [
        { name: 'El Tradicional', description: 'Poulet mariné 24h, riz, haricots pinto, salsa verde maison, crème fraîche' },
        { name: 'El Verde', description: 'Poulet coriandre-citron, avocat frais, maïs grillé, salsa verde, fromage local' },
        { name: 'El Ahumado', description: 'Poulet fumé maison, chipotle mayo, haricots noirs, pico de gallo artisanal' }
      ]
    },
    {
      name: 'Burritos Végétariens',
      icon: '🥑',
      description: 'Légumes suisses de saison. Fraîcheur et créativité.',
      items: [
        { name: 'El Vegetariano', description: 'Légumes de saison grillés, riz, haricots, guacamole frais, fromage, salsa' },
        { name: 'El Fresco', description: 'Tofu mariné maison, avocat, maïs, haricots noirs, salsa verde artisanale' },
        { name: 'El Jardín', description: 'Champignons suisses, poivrons, oignons caramélisés, riz, haricots, queso' }
      ]
    }
  ];

  const dietaryOptions = [
    { icon: <Leaf size={24} />, label: 'Options vegan disponibles', description: 'Sans produits animaux' },
    { icon: <Milk size={24} />, label: 'Sans lactose possible', description: 'Sur demande' },
    { icon: <Wheat size={24} />, label: 'Sans gluten possible', description: 'Tortilla alternative' }
  ];

  return (
    <div className="menu-page">
      {/* Hero */}
      <section className="menu-hero">
        <div className="menu-hero-overlay"></div>
        <div className="container">
          <h1>Notre Menu</h1>
          <p className="lead">Des burritos qui ont du caractère. Et du goût.</p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="menu-section">
        <div className="container">
          <div className="menu-intro">
            <h2>La gastronomie réinventée</h2>
            <p>
              Chaque burrito est une expérience culinaire. Viande cuite 12h à l'étuvée pour une
              tendresse extrême. Produits 100% suisses, frais, locaux. Tout fait maison par un chef
              formé dans de grandes maisons étoilées. La finesse gustative d'un restaurant étoilé,
              servie en quelques minutes.
            </p>
          </div>

          {menuCategories.map((category, index) => (
            <div key={index} className="menu-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
              </div>
              <div className="menu-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="menu-item-header">
                      <h4>{item.name}</h4>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dietary Options */}
      <section className="dietary-section">
        <div className="container">
          <h2 className="section-title">Options alimentaires</h2>
          <div className="dietary-grid">
            {dietaryOptions.map((option, index) => (
              <div key={index} className="dietary-card">
                <div className="dietary-icon">{option.icon}</div>
                <h4>{option.label}</h4>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
          <div className="dietary-note">
            <p>
              <strong>Note :</strong> Informez notre équipe de vos préférences ou restrictions alimentaires.
              Nous adaptons nos burritos à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="coming-soon-section">
        <div className="container">
          <div className="coming-soon-content">
            <h2>Bientôt disponible</h2>
            <p>
              Click & Collect, commande en ligne, programme de fidélité...
              Restez connectés pour ne rien manquer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;