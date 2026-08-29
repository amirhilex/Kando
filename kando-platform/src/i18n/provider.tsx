'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Locale } from './translations'
import { translations, getDirection } from './translations'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: typeof translations.en
  dir: 'rtl' | 'ltr'
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load saved locale from localStorage
    const savedLocale = localStorage.getItem('kando_locale') as Locale | null
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'fa')) {
      setLocaleState(savedLocale)
    } else {
      // Try to detect from browser
      const browserLang = navigator.language
      if (browserLang.startsWith('fa')) {
        setLocaleState('fa')
      }
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('kando_locale', locale)
      document.documentElement.lang = locale
      document.documentElement.dir = getDirection(locale)
    }
  }, [locale, isLoaded])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  const value = {
    locale,
    setLocale,
    t: translations[locale],
    dir: getDirection(locale),
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
