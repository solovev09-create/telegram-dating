import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebApp from '@twa-dev/sdk'; // ← SDK тоже можно импортировать здесь
import './index.css';

console.log('Telegram WebApp SDK loaded:', WebApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
