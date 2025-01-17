import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LoginProvider } from './contexts/LoginContext';
import "@fontsource/nunito";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginProvider>
    <App />
  </LoginProvider>
);
