import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getFooterLinks, getNavLinks } from "../lib/i18n/translations";
import { getLocaleContent } from "../lib/i18n/locales";
import type { Locale, SiteLocale, ThemeMode, TranslationKeys } from "../lib/i18n/types";

const LOCALE_KEY = "france_tcf_locale";
const THEME_KEY = "france_tcf_theme";

type SitePreferencesContextValue = {
  locale: Locale;
  theme: ThemeMode;
  content: SiteLocale;
  t: TranslationKeys;
  navLinks: ReturnType<typeof getNavLinks>;
  footerLinks: ReturnType<typeof getFooterLinks>;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: ThemeMode) => void;
};

const SitePreferencesContext = createContext<SitePreferencesContextValue | null>(null);

function readLocale(): Locale {
  if (typeof window === "undefined") return "uz";
  const saved = localStorage.getItem(LOCALE_KEY);
  return saved === "en" || saved === "ru" || saved === "uz" ? saved : "uz";
}

function readTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem(THEME_KEY);
  return saved === "dark" || saved === "auto" || saved === "light" ? saved : "light";
}

function resolveDark(theme: ThemeMode) {
  if (theme === "dark") return true;
  if (theme === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  const dark = resolveDark(theme);
  root.classList.toggle("dark", dark);
  root.dataset.theme = dark ? "dark" : "light";
  root.style.colorScheme = dark ? "dark" : "light";
}

export function SitePreferencesProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readLocale);
  const [theme, setThemeState] = useState<ThemeMode>(readTheme);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const setTheme = useCallback((next: ThemeMode) => {
    setThemeState(next);
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    applyTheme(theme);
  }, [locale, theme]);

  useEffect(() => {
    if (theme !== "auto") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("auto");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const value = useMemo<SitePreferencesContextValue>(() => {
    const content = getLocaleContent(locale);
    return {
      locale,
      theme,
      content,
      t: content.t,
      navLinks: getNavLinks(locale),
      footerLinks: getFooterLinks(locale),
      setLocale,
      setTheme,
    };
  }, [locale, theme, setLocale, setTheme]);

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const ctx = useContext(SitePreferencesContext);
  if (!ctx) throw new Error("useSitePreferences must be used within SitePreferencesProvider");
  return ctx;
}
