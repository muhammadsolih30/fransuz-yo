import { useEffect } from "react";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import type { SiteLocale } from "../lib/i18n/types";
import {
  DEFAULT_KEYWORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildCourseJsonLd,
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from "../lib/seo";

const OG_LOCALE: Record<string, string> = {
  uz: "uz_UZ",
  en: "en_US",
  ru: "ru_RU",
};

const BREADCRUMB_LABEL: Record<string, Record<string, string>> = {
  uz: {
    home: "Bosh sahifa",
    immigration: "Immigratsiya",
    faq: "FAQ",
    vacancy: "Vakansiya",
    contact: "Bog'lanish",
    gallery: "Galereya",
    trial: "Probniy dars",
    oferta: "Ommaviy oferta",
    notFound: "404",
  },
  en: {
    home: "Home",
    immigration: "Immigration",
    faq: "FAQ",
    vacancy: "Jobs",
    contact: "Contact",
    gallery: "Gallery",
    trial: "Trial lesson",
    oferta: "Public offer",
    notFound: "404",
  },
  ru: {
    home: "Главная",
    immigration: "Иммиграция",
    faq: "FAQ",
    vacancy: "Вакансии",
    contact: "Контакты",
    gallery: "Галерея",
    trial: "Пробный урок",
    oferta: "Оферта",
    notFound: "404",
  },
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Bir xil property bilan bir nechta meta (masalan og:locale:alternate) */
function upsertMetaList(attr: "name" | "property", key: string, contents: string[]) {
  document.querySelectorAll(`meta[${attr}="${key}"]`).forEach((el) => el.remove());
  for (const content of contents) {
    const el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute("content", content);
    document.head.appendChild(el);
  }
}

function upsertLink(rel: string, href: string, attrs?: Record<string, string>) {
  const selector = attrs?.hreflang
    ? `link[rel="${rel}"][hreflang="${attrs.hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  let el = document.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object | null) {
  const existing = document.getElementById(id) as HTMLScriptElement | null;
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
  /** 404 va yashirin sahifalar uchun */
  noIndex?: boolean;
  /** FAQPage schema uchun */
  faqItems?: { q: string; a: string }[];
};

export function PageMeta({ page, path = "/", noIndex = false, faqItems }: Props) {
  const { content, locale } = useSitePreferences();
  const meta = content.ui.meta[page];
  const keywords =
    ("keywords" in meta && typeof meta.keywords === "string" && meta.keywords) ||
    DEFAULT_KEYWORDS;

  useEffect(() => {
    const url = absoluteUrl(path);
    const labels = BREADCRUMB_LABEL[locale] ?? BREADCRUMB_LABEL.uz;
    const pageLabel = labels[page] ?? meta.title;

    document.title = meta.title;
    document.documentElement.lang = locale;

    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta(
      "name",
      "robots",
      noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    upsertMeta("name", "googlebot", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMeta("name", "geo.region", "UZ-TK");
    upsertMeta("name", "geo.placename", "Tashkent");
    upsertMeta("name", "language", locale);
    upsertMeta("name", "revisit-after", "7 days");

    upsertMeta("property", "og:type", page === "home" ? "website" : "article");
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:locale", OG_LOCALE[locale] ?? "uz_UZ");
    upsertMetaList(
      "property",
      "og:locale:alternate",
      ["uz_UZ", "ru_RU", "en_US"].filter((l) => l !== (OG_LOCALE[locale] ?? "uz_UZ")),
    );
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", SITE_OG_IMAGE);
    upsertMeta("property", "og:image:secure_url", SITE_OG_IMAGE);
    upsertMeta("property", "og:image:alt", `${SITE_NAME} — TCF Canada`);
    upsertMeta("property", "og:image:type", "image/png");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:see_also", SITE_URL);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", SITE_OG_IMAGE);
    upsertMeta("name", "twitter:image:alt", `${SITE_NAME} — TCF Canada`);

    upsertLink("canonical", url);
    upsertLink("alternate", url, { hreflang: "uz" });
    upsertLink("alternate", url, { hreflang: "ru" });
    upsertLink("alternate", url, { hreflang: "en" });
    upsertLink("alternate", url, { hreflang: "x-default" });

    // Organization + WebSite — barcha indekslanadigan sahifalarda
    if (!noIndex) {
      upsertJsonLd("seo-org-jsonld", buildOrganizationJsonLd(meta.description));
      upsertJsonLd("seo-website-jsonld", buildWebSiteJsonLd());
      upsertJsonLd(
        "seo-breadcrumb-jsonld",
        buildBreadcrumbJsonLd(
          page === "home"
            ? [{ name: labels.home, path: "/" }]
            : [
                { name: labels.home, path: "/" },
                { name: pageLabel, path },
              ],
        ),
      );
    } else {
      upsertJsonLd("seo-org-jsonld", null);
      upsertJsonLd("seo-website-jsonld", null);
      upsertJsonLd("seo-breadcrumb-jsonld", null);
    }

    if (page === "home" && !noIndex) {
      upsertJsonLd("seo-course-jsonld", buildCourseJsonLd(meta.description));
    } else {
      upsertJsonLd("seo-course-jsonld", null);
    }

    if (faqItems && faqItems.length > 0 && !noIndex) {
      upsertJsonLd("seo-faq-jsonld", buildFaqJsonLd(faqItems));
    } else {
      upsertJsonLd("seo-faq-jsonld", null);
    }

    // Eski id ni tozalash (oldingi versiya)
    upsertJsonLd("site-org-jsonld", null);
  }, [meta, page, path, locale, keywords, noIndex, faqItems]);

  return null;
}
