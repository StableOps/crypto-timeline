import zh from './zh.json'
import en from './en.json'

type DeepRecord = { [key: string]: string | DeepRecord }

const locales: Record<string, DeepRecord> = { zh, en }

export type Locale = keyof typeof locales

function getNested(obj: DeepRecord, path: string): string {
  const keys = path.split('.')
  let current: DeepRecord | string = obj
  for (const key of keys) {
    if (typeof current === 'object' && current !== null && key in current) {
      current = current[key]
    } else {
      return path
    }
  }
  return typeof current === 'string' ? current : path
}

export function t(locale: Locale, path: string): string {
  const dict = locales[locale]
  if (!dict) return path
  return getNested(dict, path)
}
