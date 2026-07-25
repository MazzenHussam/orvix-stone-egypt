import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { defaultLocale, locales } from '@/data/locales';
import type { LocaleBundle, LocaleCode } from '@/types/content';

const STORAGE_KEY = 'orvix-locale';

type LocaleContextValue = LocaleBundle & {
  locale: LocaleCode;
  isRtl: boolean;
  setLocale: (code: LocaleCode) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): LocaleCode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'ar') return stored;
  } catch {
    // ignore
  }
  return defaultLocale;
}

type LocaleProviderProps = {
  children: ReactNode;
};

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocaleState] = useState<LocaleCode>(defaultLocale);

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((code: LocaleCode) => {
    setLocaleState(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'ar' : 'en');
  }, [locale, setLocale]);

  const isRtl = locale === 'ar';
  const bundle = locales[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [locale, isRtl]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      isRtl,
      setLocale,
      toggleLocale,
      ...bundle,
    }),
    [locale, isRtl, setLocale, toggleLocale, bundle],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return ctx;
}
