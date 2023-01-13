import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.translation.json';
import ro from './locales/ro.translation.json';

function initTranslations(locale) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: en,
      },
      ro: {
        translation: ro,
      },
    },
    lng: locale,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
}

export default initTranslations;
