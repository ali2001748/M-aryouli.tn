import React from 'react';
import { createRoot } from 'react-dom/client';
import AppComponent from './AppComponent';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <AppComponent />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}