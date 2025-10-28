import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
        <Link to="/" className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

