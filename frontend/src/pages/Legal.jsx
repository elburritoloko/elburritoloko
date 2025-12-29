import React, { useEffect } from 'react';
import './Legal.css';

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <h1>Mentions Légales</h1>
        
        <section className="legal-section">
          <h2>Raison sociale</h2>
          <p><strong>El Burrito Loko Salinas</strong></p>
          <p>Entreprise individuelle (Raison individuelle)</p>
        </section>

        <section className="legal-section">
          <h2>Siège</h2>
          <p>Rue Pichard 8<br />
          1003 Lausanne<br />
          Suisse</p>
        </section>

        <section className="legal-section">
          <h2>Identification</h2>
          <p><strong>Numéro IDE :</strong> CHE-268.678.127 MWST</p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p><strong>Email :</strong> <a href="mailto:contact@elburritoloko.ch">contact@elburritoloko.ch</a></p>
        </section>

        <section className="legal-section">
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site internet (textes, images, graphismes, logo, icônes, etc.) 
            est la propriété exclusive d'El Burrito Loko Salinas ou de ses partenaires.
          </p>
          <p>
            Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
            même partielle, de ces différents éléments est strictement interdite sans l'accord exprès 
            par écrit d'El Burrito Loko Salinas.
          </p>
        </section>

        <section className="legal-section">
          <h2>Responsabilité</h2>
          <p>
            El Burrito Loko Salinas s'efforce d'assurer au mieux l'exactitude et la mise à jour des 
            informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment 
            et sans préavis, le contenu.
          </p>
          <p>
            Toutefois, El Burrito Loko Salinas ne peut garantir l'exactitude, la précision ou l'exhaustivité 
            des informations mises à disposition sur ce site. En conséquence, El Burrito Loko Salinas décline 
            toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations 
            disponibles sur ce site.
          </p>
        </section>

        <section className="legal-section">
          <h2>Liens hypertextes</h2>
          <p>
            Ce site peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. 
            Les liens vers ces autres ressources vous font quitter le site d'El Burrito Loko Salinas.
          </p>
          <p>
            El Burrito Loko Salinas n'a aucun contrôle sur ces sites et décline toute responsabilité quant à 
            leur contenu ou aux liens qu'ils contiennent.
          </p>
        </section>

        <section className="legal-section">
          <h2>Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit suisse. En cas de litige, les tribunaux 
            de Lausanne sont seuls compétents.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;