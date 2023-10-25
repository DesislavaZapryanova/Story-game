// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // assuming App is your main component
import './App.css'; // import your app.css file

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
