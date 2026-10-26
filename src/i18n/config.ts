export const locales = ['en', 'bn'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value)

// English lives at the root (/lenden), Bangla under /bn (/bn/lenden)
export function localePath(lang: Locale, path: string): string {
  if (lang === defaultLocale) return path
  return path === '/' ? '/bn' : `/bn${path.startsWith('/#') ? path.slice(1) : path}`
}

// "/bn/lenden" or "/en/lenden" -> "/lenden"
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/(en|bn)(?=\/|$)/, '')
  return stripped || '/'
}
