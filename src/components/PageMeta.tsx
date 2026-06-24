import { useEffect } from "react";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import type { SiteLocale } from "../lib/i18n/types";

export function PageMeta({ page }: { page: keyof SiteLocale["ui"]["meta"] }) {
  const { content } = useSitePreferences();
  const meta = content.ui.meta[page];
  useEffect(() => {
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", meta.description);
  }, [meta]);
  return null;
}
