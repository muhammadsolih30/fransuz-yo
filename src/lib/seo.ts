/** SEO konstantalari — dizayn/serverga ta'sir qilmaydi */

export const SITE_URL = "https://www.francetcf.uz";
export const SITE_NAME = "France TCF";
export const SITE_NAME_FULL = "France TCF O'quv Markazi";
export const SITE_LOGO = `${SITE_URL}/image/saytlogotef.png`;
export const SITE_OG_IMAGE = `${SITE_URL}/image/opening/ckanada%20va%20firansiya.png`;
export const SITE_PHONE = "+998947382221";

export const SITE_SAME_AS = [
  "https://t.me/France_TCF",
  "https://t.me/Francais_languee",
  "https://www.instagram.com/francais_languee/",
] as const;

export const DEFAULT_KEYWORDS =
  "TCF Canada, TCF Canada Toshkent, TCF Canada kursi, fransuz tili kursi, fransuz tili kursi Toshkent, fransuz tili o'quv markazi, fransuz tili O'zbekiston, Express Entry, Kanada immigratsiya, TEF Canada, DELF, DALF, France TCF, fransuz tili Kanadaga, CRS ball, PR Kanada, Kanada PR, French language Tashkent";

export const PUBLIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/immigratsiya", priority: "0.9", changefreq: "monthly" },
  { path: "/faq", priority: "0.8", changefreq: "monthly" },
  { path: "/boglanish", priority: "0.9", changefreq: "monthly" },
  { path: "/probniy-dars", priority: "0.8", changefreq: "monthly" },
  { path: "/galereya", priority: "0.7", changefreq: "weekly" },
  { path: "/vakansiya", priority: "0.6", changefreq: "monthly" },
  { path: "/ommaviy-oferta", priority: "0.3", changefreq: "yearly" },
] as const;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildOrganizationJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME_FULL,
    alternateName: ["France TCF", "France TCF Learning Center"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO,
    },
    image: SITE_OG_IMAGE,
    description,
    telephone: SITE_PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chilonzor, Oybek metro atrofi",
      addressLocality: "Toshkent",
      addressRegion: "Toshkent",
      addressCountry: "UZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.2995,
      longitude: 69.2401,
    },
    areaServed: [
      { "@type": "City", name: "Toshkent" },
      { "@type": "Country", name: "Uzbekistan" },
    ],
    availableLanguage: ["uz", "ru", "fr", "en"],
    sameAs: [...SITE_SAME_AS],
    knowsAbout: [
      "TCF Canada",
      "TEF Canada",
      "DELF",
      "DALF",
      "Express Entry",
      "French language",
      "Canada immigration",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE_PHONE,
        contactType: "customer service",
        areaServed: "UZ",
        availableLanguage: ["uz", "ru", "fr", "en"],
      },
    ],
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "France TCF kurslari",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "TCF Canada tayyorgarlik",
            description: "Fransuz tili orqali Kanada immigratsiyasi uchun TCF Canada kursi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "TEF Canada / DELF / DALF",
            description: "Fransuz tili sertifikatlariga tayyorgarlik",
          },
        },
      ],
    },
  };
}

export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME_FULL,
    url: SITE_URL,
    inLanguage: ["uz", "ru", "en"],
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Bepul maslahat",
      target: absoluteUrl("/boglanish"),
    },
  };
}

export function buildBreadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.slice(0, 20).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildCourseJsonLd(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "TCF Canada tayyorgarlik kursi",
    description,
    provider: {
      "@type": "EducationalOrganization",
      name: SITE_NAME_FULL,
      url: SITE_URL,
    },
    educationalLevel: "Beginner to C1/C2",
    inLanguage: "fr",
    offers: {
      "@type": "Offer",
      category: "Paid",
      url: absoluteUrl("/boglanish"),
      availability: "https://schema.org/InStock",
    },
  };
}
