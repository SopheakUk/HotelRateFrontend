import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'km') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-2 rounded border ${
          i18n.language === 'en'
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
        } transition duration-200`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('km')}
        className={`px-4 py-2 rounded border ${
          i18n.language === 'km'
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'
        } transition duration-200`}
      >
        KM
      </button>
    </div>
  );
};

export default LanguageSwitcher;