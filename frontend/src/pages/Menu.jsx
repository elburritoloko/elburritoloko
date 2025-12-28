import React, { useEffect } from 'react';
import { Leaf, Wheat, Milk, ChefHat, Clock, Flame } from 'lucide-react';
import './Menu.css';

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tortillaOptions = [
    { name: 'Blé classique', price: 'Inclus', description: 'Tortilla traditionnelle artisanale' },
    { name: 'Blé complet', price: '+1 CHF', description: 'Plus riche en fibres' },
    { name: 'Sans Gluten', price: '+1.50 CHF', description: 'Alternative certifiée sans gluten' }
  ];

  const proteinOptions = [
    {
      name: 'Bœuf',
      icon: '🥩',
      method: 'Mijoté 12h à l\'étuvée',
      description: 'Tendre, juteux et qui fond en bouche. Cuisson nocturne pour une concentration maximale des saveurs.',
      highlight: true
    },
    {
      name: 'Poulet',
      icon: '🍗',
      method: 'Mariné et cuit lentement',
      description: 'Ultra tendre et parfumé. Marinade maison 24h puis cuisson basse température.',
      highlight: true
    },
    {
      name: 'Végétarien',
      icon: '🍄',
      method: 'Champignons grillés & mijotés',
      description: 'Travaillés comme une viande, une expérience unique. Champignons suisses de saison.',
      highlight: true
    }
  ];

  const baseOptions = [
    { name: 'Riz Bio', price: 'Inclus', description: 'Riz basmati bio cultivé en Suisse' },
    { name: 'Quinoa Suisse Bio', price: '+1 CHF', description: 'Quinoa bio produit localement' }
  ];

  const toppings = [
    { name: 'Haricots noirs', description: 'Cuits maison, onctueux' },
    { name: 'Salade', description: 'Fraîche et croquante' },
    { name: 'Maïs grillé', description: 'Grillé au feu de bois' },
    { name: 'Pico de gallo revisité', description: 'Notre version gastronomique' },
    { name: 'Poivron grillé', description: 'Poivrons suisses grillés' },
    { name: 'Jalapeños', description: 'Niveau piquant ajustable' }
  ];

  const extras = [
    { name: 'Chicharron', price: '+2 CHF', description: 'Croustillant artisanal' },
    { name: 'Guacamole', price: '+2 CHF', description: 'Préparé sur commande' },
    { name: 'Fromage', price: '+1 CHF', description: 'Fromage suisse fondu' }
  ];

  const dietaryOptions = [
    { icon: <Leaf size={24} />, label: 'Option végétarienne', description: 'Champignons travaillés comme une viande' },
    { icon: <Wheat size={24} />, label: 'Sans gluten possible', description: 'Tortilla certifiée sans gluten' },
    { icon: <Milk size={24} />, label: 'Sans lactose possible', description: 'Sur demande' }
  ];

  return (
    <div className="menu-page">
      {/* Hero */}
      <section className="menu-hero">
        <div className="menu-hero-overlay"></div>
        <div className="container">
          <h1>Construis ton burrito premium</h1>
          <p className="lead">Chaque choix compte. Chaque ingrédient est d\'exception.</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="menu-intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-icon">
              <ChefHat size={64} />
            </div>
            <h2>Un burrito à ton image</h2>
            <p className="intro-text">
              Chez El Burrito Loko, tu es le chef. Compose ton burrito parfait en choisissant 
              chaque élément. Viande cuite 12h, produits suisses, préparations maison. 
              L\'excellence gastronomique, assemblée selon tes envies.
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Tortilla */}
      <section className="menu-step">
        <div className="container">
          <div className="step-header">
            <span className="step-number">01</span>
            <h2>Choisis ta tortilla</h2>
          </div>
          <div className="options-grid">
            {tortillaOptions.map((option, index) => (
              <div key={index} className="option-card">
                <h3>{option.name}</h3>
                <p className="option-price">{option.price}</p>
                <p className="option-description">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2: Protein */}
      <section className="menu-step protein-step">
        <div className="container">
          <div className="step-header">
            <span className="step-number">02</span>
            <h2>Sélectionne ta protéine</h2>
            <p className="step-subtitle">Le cœur de ton burrito. Préparations d\'exception.</p>
          </div>
          <div className="protein-grid">
            {proteinOptions.map((option, index) => (
              <div key={index} className={`protein-card ${option.highlight ? 'highlighted' : ''}`}>
                <div className="protein-icon">{option.icon}</div>
                <h3>{option.name}</h3>
                <div className="protein-method">
                  <Clock size={18} />
                  <span>{option.method}</span>
                </div>
                <p className="protein-description">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 3: Base */}
      <section className="menu-step">
        <div className="container">
          <div className="step-header">
            <span className="step-number">03</span>
            <h2>Détermine ta base</h2>
          </div>
          <div className="options-grid">
            {baseOptions.map((option, index) => (
              <div key={index} className="option-card">
                <h3>{option.name}</h3>
                <p className="option-price">{option.price}</p>
                <p className="option-description">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 4: Toppings */}
      <section className="menu-step toppings-step">
        <div className="container">
          <div className="step-header">
            <span className="step-number">04</span>
            <h2>Personnalise avec tes toppings</h2>
            <p className="step-subtitle">Choisis autant d\'ingrédients que tu le souhaites</p>
          </div>
          <div className="toppings-grid">
            {toppings.map((topping, index) => (
              <div key={index} className="topping-item">
                <div className="topping-bullet"></div>
                <div>
                  <h4>{topping.name}</h4>
                  <p>{topping.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 5: Extras */}
      <section className="menu-step extras-step">
        <div className="container">
          <div className="step-header">
            <span className="step-number">05</span>
            <h2>Ajoute ton extra gourmand</h2>
          </div>
          <div className="extras-grid">
            {extras.map((extra, index) => (
              <div key={index} className="extra-card">
                <h3>{extra.name}</h3>
                <p className="extra-price">{extra.price}</p>
                <p className="extra-description">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Section */}
      <section className="seasonal-section">
        <div className="container">
          <div className="seasonal-content">
            <Flame size={48} />
            <h2>Burritos de saison</h2>
            <p>
              Tout au long de l\'année, notre chef crée des burritos de saison exclusifs. 
              Produits locaux au sommet de leur fraîcheur, associations audacieuses, 
              créations limitées qui évoluent avec les saisons suisses.
            </p>
            <p className="seasonal-cta">Découvre nos créations du moment en restaurant</p>
          </div>
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
              <strong>Important :</strong> Informe notre équipe de tes préférences ou restrictions alimentaires.
              Nous adaptons chaque burrito à tes besoins avec le même niveau d\'excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;