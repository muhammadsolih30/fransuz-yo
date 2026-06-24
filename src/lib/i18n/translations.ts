import { getLocaleContent } from "./locales";
import type { Locale, TranslationKeys } from "./types";
import type { SiteLink } from "../site-content";

export const translations: Record<Locale, TranslationKeys> = {
  uz: getLocaleContent("uz").t,
  en: getLocaleContent("en").t,
  ru: getLocaleContent("ru").t,
};

export function getNavLinks(locale: Locale): SiteLink[] {
  const n = getLocaleContent(locale).t.nav;
  return [
    { to: "/", hash: "haqimizda", label: n.about },
    { to: "/", hash: "kurslar", label: n.courses },
    { to: "/", hash: "natijalar", label: n.results },
    { to: "/", hash: "ustoz", label: n.teachers },
    { to: "/immigratsiya", label: n.immigration },
    { to: "/faq", label: n.faq },
    { to: "/probniy-dars", label: n.trial },
    { to: "/vakansiya", label: n.vacancy },
    { to: "/ommaviy-oferta", label: n.offer },
  ];
}

export function getFooterLinks(locale: Locale): SiteLink[] {
  const n = getLocaleContent(locale).t.nav;
  return [...getNavLinks(locale), { to: "/galereya", label: n.gallery }, { to: "/boglanish", label: n.contact }];
}
