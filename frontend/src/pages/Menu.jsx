import React, { useEffect } from 'react';
import { Leaf, Wheat, Milk } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const menuCategories = [
    {
      name: 'Burritos au Boeuf',
      icon: '🥩',
      items: [
        { name: 'El Clásico', description: 'Boeuf grillé, riz, haricots noirs, pico de gallo, crème aigre' },
        { name: 'El Picante', description: 'Boeuf épicé, jalapeños, guacamole, fromage, salsa roja' },
        { name: 'El Supremo', description: 'Boeuf braisé, riz coriandre-citron, haricots, guacamole, queso fresco' }
      ]
    },
    {
      name: 'Burritos au Poulet',
      icon: '🍗',
      items: [
        { name: 'El Tradicional', description: 'Poulet grillé, riz, haricots pinto, salsa verde, crème' },
        { name: 'El Verde', description: 'Poulet coriandre-citron, avocat, maïs, salsa verde, fromage' },
        { name: 'El Ahumado', description: 'Poulet fumé, chipotle mayo, haricots noirs, pico de gallo' }
      ]
    },
    {
      name: 'Burritos Végétariens',
      icon: '🥑',
      items: [
        { name: 'El Vegetariano', description: 'Légumes grillés, riz, haricots, guacamole, fromage, salsa' },
        { name: 'El Fresco', description: 'Tofu marinade, avocat, maïs, haricots noirs, salsa verde' },
        { name: 'El Jardín', description: 'Champignons portobello, poivrons, oignons, riz, haricots, queso' }
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
            <h2>Nos créations</h2>
            <p>
              Chaque burrito est préparé sur commande avec des ingrédients frais.
              Les portions sont généreuses, les saveurs authentiques.
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