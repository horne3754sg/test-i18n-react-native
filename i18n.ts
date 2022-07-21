import i18next from 'i18next';
import translations_en from './locales/en/translations.json';

export const defaultNS = 'translations';
export const resources = {
  en: {
    translations: translations_en,
  },
} as const;

i18next.init({
  interpolation: {escapeValue: false}, // React already does escaping
  lng: 'en',
  ns: ['translations'],
  defaultNS,
  resources,
});
