import es from './es.json'
import en from './en.json'

const TRANSLATIONS = {
  es,
  en
}

export const getI18N = (locale: string = 'es') => {
  return TRANSLATIONS[locale as keyof typeof TRANSLATIONS] || TRANSLATIONS.es
}