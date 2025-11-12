// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend'; // Optional: for loading translations from files
import LanguageDetector from 'i18next-browser-languagedetector'; // Optional: for language detection

i18n
  // load translations using http (optional)
  .use(Backend)
  // detect user language (optional)
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: 'en', // default language
    debug: true, // set to false in production
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
    // Optional: if you're using i18next-http-backend
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // path to your translation files
    },
  });

export default i18n;