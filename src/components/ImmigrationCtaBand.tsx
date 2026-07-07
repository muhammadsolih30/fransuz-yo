import { Link } from "@tanstack/react-router";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

export function ImmigrationCtaBand() {
  const { t } = useSitePreferences();

  return (
    <section className="relative bg-[#2D2D2D] dark:bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-16 lg:pb-20 text-center">
        <div className="relative max-w-3xl mx-auto">
          <div className="text-5xl mb-6" aria-hidden>
            🍁
          </div>
          <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-white">
            {t.footer.ctaTitle}
          </h2>
          <p className="text-white/75 text-lg lg:text-xl mb-10 leading-relaxed">{t.footer.ctaText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/boglanish" className="btn-gold no-underline">
              {t.footer.ctaStart}
            </Link>
            <a
              href="tel:+998947382221"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all no-underline backdrop-blur-sm"
            >
              📞 +998 94 738 22 21
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
