import type { Locale } from '@/i18n.config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then(module => module.default),
  nl: () => import('@/dictionaries/nl.json').then(module => module.default)
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
}; 