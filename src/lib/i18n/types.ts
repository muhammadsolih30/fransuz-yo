export type Locale = "uz" | "en" | "ru";

export type ThemeMode = "light" | "dark" | "auto";

export type TranslationKeys = {
  nav: {
    about: string;
    courses: string;
    results: string;
    teachers: string;
    immigration: string;
    faq: string;
    trial: string;
    vacancy: string;
    offer: string;
    gallery: string;
    contact: string;
    home: string;
  };
  common: {
    register: string;
    phone: string;
  };
  footer: {
    ctaTitle: string;
    ctaText: string;
    ctaStart: string;
    centerLabel: string;
    aboutText: string;
    contact: string;
    phone: string;
    telegram: string;
    address: string;
    addressValue: string;
    adminPanel: string;
    copyright: string;
    tagline: string;
    language: string;
    theme: string;
    themeLight: string;
    themeDark: string;
    themeAuto: string;
    localeUz: string;
    localeEn: string;
    localeRu: string;
  };
  social: {
    telegram: string;
    instagram: string;
    results: string;
    admin: string;
  };
};

export type { SiteLocale } from "./locales";
