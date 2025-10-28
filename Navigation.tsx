import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { authService } from '../lib/auth';

const Navigation = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(authService.isAuthenticated());
  const [user, setUser] = useState(authService.getUser());

  const handleLogout = async () => {
    await authService.logout();
    setIsAuthenticated(false);
    setUser(null);
    window.location.href = '/';
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">M</span>
              <span className="text-xl font-semibold text-gray-800">Maryouli</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/') 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/personnaliser"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/personnaliser') 
                  ? 'bg-orange-100 text-orange-700' 
                  : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              Personnaliser
            </Link>
            <Link
              to="/boutique"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/boutique') 
                  ? 'bg-purple-100 text-purple-700' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Boutique
            </Link>
            <Link
              to="/galerie"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/galerie') 
                  ? 'bg-teal-100 text-teal-700' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Galerie
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact') 
                  ? 'bg-pink-100 text-pink-700' 
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-3 py-2 text-sm font-medium text-purple-700 bg-purple-100 rounded-md hover:bg-purple-200">
              العربية
            </button>
            
            {isAuthenticated && user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Bonjour, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <Link
                to="/signup"
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
              >
                S'inscrire
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;