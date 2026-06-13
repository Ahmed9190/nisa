import en from './en.json';
import ar from './ar.json';

export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';

export const translations = {
  en,
  ar,
} as const;

export type TranslationKeys = typeof en;

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale] || translations[defaultLocale];
}

export function t(locale: Locale, key: string): string {
  const translation = getTranslation(locale);
  const keys = key.split('.');
  let value: unknown = translation;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function isRTL(locale: Locale): boolean {
  return locale === 'ar';
}