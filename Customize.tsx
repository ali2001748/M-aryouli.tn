import React, { useState } from 'react';

const Customize = () => {
  const [selectedColor, setSelectedColor] = useState('teal');
  const [currentView, setCurrentView] = useState('front');

  const colors = [
    { name: 'Rose', value: '#F8BBD9', hex: '#F8BBD9' },
    { name: 'Teal', value: 'teal', hex: '#14B8A6' },
    { name: 'Beige', value: 'beige', hex: '#F5F5DC' },
    { name: 'Violet', value: 'violet', hex: '#8B5CF6' },
    { name: 'Bordeaux', value: 'bordeaux', hex: '#722F37' },
    { name: 'Gris', value: 'gray', hex: '#6B7280' },
    { name: 'Vert Olive', value: 'olive', hex: '#84CC16' },
    { name: 'Bleu Marine', value: 'navy', hex: '#1E3A8A' },
    { name: 'Vert', value: 'green', hex: '#10B981' },
    { name: 'Gris Clair', value: 'lightgray', hex: '#D1D5DB' },
    { name: 'Bleu', value: 'blue', hex: '#3B82F6' },
    { name: 'Rouge', value: 'red', hex: '#EF4444' },
    { name: 'Blanc', value: 'white', hex: '#FFFFFF' },
    { name: 'Noir', value: 'black', hex: '#000000' },
    { name: 'Jaune', value: 'yellow', hex: '#EAB308' }
  ];

  const views = [
    { id: 'front', label: 'Front' },
    { id: 'back', label: 'Back' },
    { id: 'right', label: 'Right' },
    { id: 'left', label: 'Left' },
    { id: 'closeup', label: 'Close-up' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-semibold">Maryouli</span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm">Créer</button>
              <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">Boutique</button>
              <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm">Pro</button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">Support</button>
            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm">Sauvegarder</button>
            <button className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm">Partager</button>
            <button className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm">Plein écran</button>
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-16 bg-white border-r flex flex-col items-center py-4 space-y-4">
          <button className="p-2 bg-gray-100 rounded">👕</button>
          <button className="p-2 hover:bg-gray-100 rounded">🎨</button>
          <button className="p-2 hover:bg-gray-100 rounded">🤖</button>
          <button className="p-2 hover:bg-gray-100 rounded">T</button>
          <button className="p-2 hover:bg-gray-100 rounded">📷</button>
          <button className="p-2 hover:bg-gray-100 rounded">↶</button>
          <button className="p-2 hover:bg-gray-100 rounded">↷</button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          {/* T-shirt Display */}
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="relative">
              {/* Enhanced 3D-like T-shirt */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                <svg width="300" height="360" viewBox="0 0 300 360" className="drop-shadow-2xl">
                  <defs>
                    <linearGradient id={`tshirtGradient-${selectedColor}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={colors.find(c => c.value === selectedColor)?.hex || '#14B8A6'} stopOpacity="1" />
                      <stop offset="30%" stopColor={colors.find(c => c.value === selectedColor)?.hex || '#14B8A6'} stopOpacity="0.9" />
                      <stop offset="70%" stopColor={colors.find(c => c.value === selectedColor)?.hex || '#14B8A6'} stopOpacity="0.7" />
                      <stop offset="100%" stopColor={colors.find(c => c.value === selectedColor)?.hex || '#14B8A6'} stopOpacity="0.8" />
                    </linearGradient>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="4" dy="8" stdDeviation="6" floodColor="rgba(0,0,0,0.3)" />
                    </filter>
                  </defs>
                  
                  {/* T-shirt body with enhanced 3D effect */}
                  <path
                    d="M75 80 L75 320 Q75 340 95 340 L205 340 Q225 340 225 320 L225 80 L190 80 Q190 60 180 50 Q170 40 150 40 Q130 40 120 50 Q110 60 110 80 L75 80 Z"
                    fill={`url(#tshirtGradient-${selectedColor})`}
                    filter="url(#shadow)"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="1"
                  />
                  
                  {/* Sleeves with depth */}
                  <ellipse cx="60" cy="100" rx="25" ry="40" fill={`url(#tshirtGradient-${selectedColor})`} opacity="0.8" />
                  <ellipse cx="240" cy="100" rx="25" ry="40" fill={`url(#tshirtGradient-${selectedColor})`} opacity="0.8" />
                  
                  {/* Collar with 3D effect */}
                  <path
                    d="M110 80 Q130 60 150 60 Q170 60 190 80 Q180 70 150 70 Q120 70 110 80 Z"
                    fill="rgba(0,0,0,0.1)"
                  />
                </svg>
              </div>

              {/* View Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {views.map((view) => (
                  <button
                    key={view.id}
                    onClick={() => setCurrentView(view.id)}
                    className={`px-3 py-1 text-xs rounded ${
                      currentView === view.id
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-700 border'
                    }`}
                  >
                    {view.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l p-4">
            <div className="space-y-6">
              {/* Tabs */}
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-teal-100 text-teal-700 rounded text-sm">Produit</button>
                <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded text-sm">IA</button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm">Design</button>
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Men's Premium T-Shirt</h3>
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>🚚 Delivery time: Jul 21 - 30</span>
                </div>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">★★★★★</div>
                  <span className="text-sm text-gray-600 ml-2">(5120)</span>
                </div>
                <button className="text-teal-600 text-sm">See product details →</button>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Product color: {colors.find(c => c.value === selectedColor)?.name}
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`w-8 h-8 rounded border-2 ${
                        selectedColor === color.value ? 'border-gray-800' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size & Quantity */}
              <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-medium">
                Choose size & quantity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;