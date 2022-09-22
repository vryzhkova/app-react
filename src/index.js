import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Header } from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
  </React.StrictMode>
);
