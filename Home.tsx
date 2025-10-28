import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-400 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Créez vos <span className="text-yellow-300">T-shirts</span> personnalisés
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Découvrez la puissance de l'IA pour générer des designs uniques. 
            <strong> Maryouli</strong> transforme vos idées en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/personnaliser" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100">
              Commencer à Créer →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

