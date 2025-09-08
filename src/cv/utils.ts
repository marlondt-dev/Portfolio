import cvEs from './es.json'
import cvEn from './en.json'
import type { CV } from '@/types/cv'

const CV_DATA: Record<string, CV> = {
  es: cvEs as CV,
  en: cvEn as CV
}

export const getCV = (locale: string = 'es'): CV => {
  return CV_DATA[locale] || CV_DATA.es
}