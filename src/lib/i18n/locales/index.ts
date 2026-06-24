import type { Locale } from "../types";
import { enLocale } from "./en";
import { ruLocale } from "./ru";
import { uzLocale } from "./uz";

export type SiteLocale = typeof uzLocale;

export function getLocaleContent(locale: Locale): SiteLocale {
  return {
    uz: uzLocale,
    en: enLocale as unknown as SiteLocale,
    ru: ruLocale as unknown as SiteLocale,
  }[locale];
}
