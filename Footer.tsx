import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-orange-500">M</span>
              <span className="text-2xl font-semibold">Maryouli</span>
            </div>
            <p className="text-gray-300 mb-4">
              La plateforme tunisienne de référence pour créer des t-shirts personnalisés avec l'intelligence artificielle.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Maryouli. Tous droits réservés.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Accueil</a></li>
              <li><a href="/personnaliser" className="text-gray-300 hover:text-white">Personnaliser</a></li>
              <li><a href="/boutique" className="text-gray-300 hover:text-white">Boutique</a></li>
              <li><a href="/galerie" className="text-gray-300 hover:text-white">Galerie</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@maryouli.tn</li>
              <li>Téléphone: +216 XX XXX XXX</li>
              <li>Adresse: Tunis, Tunisie</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;