import React, { useEffect } from 'react';
import './Legal.css';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <div className="container">
        <h1>Politique de Confidentialité</h1>
        
        <section className="legal-section">
          <h2>Introduction</h2>
          <p>
            El Burrito Loko Salinas (ci-après "nous", "notre" ou "El Burrito Loko") accorde une grande 
            importance à la protection de vos données personnelles. La présente politique de confidentialité 
            a pour but de vous informer sur la manière dont nous collectons, utilisons et protégeons vos 
            données personnelles conformément à la Loi fédérale sur la protection des données (LPD) et au 
            Règlement général sur la protection des données (RGPD) lorsque applicable.
          </p>
        </section>

        <section className="legal-section">
          <h2>Responsable du traitement des données</h2>
          <p><strong>El Burrito Loko Salinas</strong><br />
          Rue Pichard 8<br />
          1003 Lausanne<br />
          Suisse<br />
          Email : <a href="mailto:contact@elburritoloko.ch">contact@elburritoloko.ch</a></p>
        </section>

        <section className="legal-section">
          <h2>Données collectées</h2>
          <p>Nous collectons les données personnelles suivantes :</p>
          <ul>
            <li><strong>Newsletter :</strong> Adresse email, date d'inscription, source d'inscription</li>
            <li><strong>Navigation :</strong> Données de connexion (adresse IP, type de navigateur, pages visitées)</li>
            <li><strong>Cookies :</strong> Informations techniques pour améliorer votre expérience de navigation</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Finalité du traitement</h2>
          <p>Vos données personnelles sont collectées et traitées pour les finalités suivantes :</p>
          <ul>
            <li>Envoi de notre newsletter et communications marketing (avec votre consentement explicite)</li>
            <li>Information sur nos offres, événements et actualités</li>
            <li>Amélioration de notre site internet et de nos services</li>
            <li>Analyse statistique de la fréquentation du site</li>
            <li>Respect de nos obligations légales</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Base légale du traitement</h2>
          <p>Le traitement de vos données personnelles repose sur :</p>
          <ul>
            <li><strong>Consentement :</strong> Inscription volontaire à la newsletter</li>
            <li><strong>Intérêt légitime :</strong> Amélioration de nos services et communication commerciale</li>
            <li><strong>Obligation légale :</strong> Conservation des données pour respecter la législation suisse</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Durée de conservation</h2>
          <p>
            Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles 
            elles ont été collectées :
          </p>
          <ul>
            <li><strong>Newsletter :</strong> Jusqu'à votre désinscription ou retrait du consentement</li>
            <li><strong>Données de navigation :</strong> Maximum 12 mois</li>
            <li><strong>Obligations légales :</strong> Selon les exigences légales suisses (généralement 10 ans)</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Destinataires des données</h2>
          <p>Vos données personnelles peuvent être communiquées à :</p>
          <ul>
            <li>Nos prestataires de services techniques (hébergement, emailing)</li>
            <li>Nos partenaires marketing (avec votre consentement explicite)</li>
            <li>Les autorités compétentes en cas d'obligation légale</li>
          </ul>
          <p>
            Nous nous assurons que tous nos prestataires offrent des garanties suffisantes en matière de 
            protection des données et respectent la législation suisse.
          </p>
        </section>

        <section className="legal-section">
          <h2>Transfert de données hors de Suisse</h2>
          <p>
            Vos données personnelles peuvent être transférées vers des pays situés en dehors de la Suisse, 
            notamment pour l'hébergement de notre site internet ou l'utilisation de services cloud.
          </p>
          <p>
            Dans ce cas, nous nous assurons que ces pays offrent un niveau de protection adéquat conformément 
            à la LPD ou que des garanties appropriées sont mises en place (clauses contractuelles types, etc.).
          </p>
        </section>

        <section className="legal-section">
          <h2>Vos droits</h2>
          <p>Conformément à la législation suisse sur la protection des données, vous disposez des droits suivants :</p>
          <ul>
            <li><strong>Droit d'accès :</strong> Obtenir confirmation que vos données sont traitées et en recevoir une copie</li>
            <li><strong>Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
            <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données personnelles</li>
            <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données pour des raisons légitimes</li>
            <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré et lisible</li>
            <li><strong>Droit de retirer votre consentement :</strong> À tout moment, sans affecter la licéité du traitement antérieur</li>
          </ul>
          <p>
            Pour exercer vos droits, contactez-nous à : <a href="mailto:contact@elburritoloko.ch">contact@elburritoloko.ch</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos 
            données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
          </p>
          <p>Nos mesures de sécurité incluent :</p>
          <ul>
            <li>Chiffrement des données sensibles (SSL/TLS)</li>
            <li>Accès limité et contrôlé aux données personnelles</li>
            <li>Sauvegardes régulières</li>
            <li>Surveillance et mise à jour de nos systèmes de sécurité</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont 
            de petits fichiers texte stockés sur votre appareil.
          </p>
          <p><strong>Types de cookies utilisés :</strong></p>
          <ul>
            <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
            <li><strong>Cookies analytiques :</strong> Pour comprendre comment vous utilisez notre site</li>
            <li><strong>Cookies marketing :</strong> Pour personnaliser les publicités (avec votre consentement)</li>
          </ul>
          <p>
            Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter 
            certaines fonctionnalités du site.
          </p>
        </section>

        <section className="legal-section">
          <h2>Désinscription de la newsletter</h2>
          <p>
            Vous pouvez vous désinscrire de notre newsletter à tout moment en cliquant sur le lien de 
            désinscription présent dans chaque email ou en nous contactant directement à : 
            <a href="mailto:contact@elburritoloko.ch">contact@elburritoloko.ch</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>Réclamation</h2>
          <p>
            Si vous estimez que vos droits n'ont pas été respectés, vous avez le droit de déposer une 
            réclamation auprès de l'autorité de surveillance compétente :
          </p>
          <p>
            <strong>Préposé fédéral à la protection des données et à la transparence (PFPDT)</strong><br />
            Feldeggweg 1<br />
            3003 Berne<br />
            Suisse<br />
            <a href="https://www.edoeb.admin.ch" target="_blank" rel="noopener noreferrer">www.edoeb.admin.ch</a>
          </p>
        </section>

        <section className="legal-section">
          <h2>Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
            Toute modification sera publiée sur cette page avec une date de mise à jour.
          </p>
          <p><strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-CH')}</p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou le traitement de vos 
            données personnelles, n'hésitez pas à nous contacter :
          </p>
          <p>
            <strong>El Burrito Loko Salinas</strong><br />
            Rue Pichard 8<br />
            1003 Lausanne<br />
            Suisse<br />
            Email : <a href="mailto:contact@elburritoloko.ch">contact@elburritoloko.ch</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;