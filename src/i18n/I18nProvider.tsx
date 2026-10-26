'use client'

import { createContext, useContext, ReactNode } from 'react'
import type { Dictionary } from './dictionaries/en'
import { localePath, type Locale } from './config'

interface I18nValue {
  lang: Locale
  t: Dictionary
  href: (path: string) => string
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ lang, dict, children }: { lang: Locale; dict: Dictionary; children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ lang, t: dict, href: (path) => localePath(lang, path) }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error('useI18n must be used inside I18nProvider')
  return value
}
