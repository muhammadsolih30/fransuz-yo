import { useEffect } from "react";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import type { SiteLocale } from "../lib/i18n/types";

const OG_LOCALE: Record<string, string> = {
  uz: "uz_UZ",
  en: "en_US",
  ru: "ru_RU",
};

const SITE_URL = "https://fransuz-yo.uz";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object | null) {
  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }
  const script = existing ?? document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
}

type Props = {
  page: keyof SiteLocale["ui"]["meta"];
  path?: string;
};

export function PageMeta({ page, path = "/" }: Props) {
  const { content, locale } = useSitePreferences();
  const meta = content.ui.meta[page];

  useEffect(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : SITE_URL;
    const url = `${origin}${path}`;
    const image = `${origin}/image/saytlogotef.png`;

    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:locale", OG_LOCALE[locale] ?? "uz_UZ");
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:site_name", "France TCF");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", image);
    upsertLink("canonical", url);

    if (page === "home") {
      upsertJsonLd("site-org-jsonld", {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "France TCF O'quv Markazi",
        url,
        logo: image,
        description: meta.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Toshkent",
          addressCountry: "UZ",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+998947382221",
          contactType: "customer service",
          availableLanguage: ["uz", "ru", "fr"],
        },
      });
    } else {
      upsertJsonLd("site-org-jsonld", null);
    }
  }, [meta, page, path, locale]);

  return null;
}
