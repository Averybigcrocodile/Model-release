import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routing.jsx';
import App from './App';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import en from './locales/en.json';
import ua from './locales/ua.json';

i18n.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      translation: en
    },
    ua: {
      translation: ua
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </I18nextProvider>
);





