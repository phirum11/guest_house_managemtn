import { createContext, useContext, useMemo } from 'react'
import km from './km'

const dictionaries = { km }

const LanguageContext = createContext(null)

export function LanguageProvider({ children, locale = 'km' }) {
  const value = useMemo(
    () => ({
      locale,
      t: dictionaries[locale] ?? km,
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}

export { km }
