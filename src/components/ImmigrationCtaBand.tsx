import { Link } from "@tanstack/react-router";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

function highlightExpressEntry(text: string) {
  const token = "Express Entry";
  const idx = text.indexOf(token);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="whitespace-nowrap">{token}</span>
      {text.slice(idx + token.length)}
    </>
  );
}

function formatCtaTitle(title: string) {
  return title.replace(/\s+(boshlang|начните|Start)$/i, "\u00a0$1");
}

export function ImmigrationCtaBand() {
  const { t } = useSitePreferences();

  return (
    <section className="relative bg-[#2D2D2D] dark:bg-[#0a0a0a] text-white overflow-hidden immigration-cta-band">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 text-center">
        <div className="relative max-w-3xl mx-auto">
          <div className="text-3xl sm:text-5xl mb-4 sm:mb-6" aria-hidden>
            🍁
          </div>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(1.5rem,5.5vw,3.75rem)] leading-[1.15] mb-5 sm:mb-6 text-white text-balance px-1">
            {formatCtaTitle(t.footer.ctaTitle)}
          </h2>
          <p className="text-white/75 text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 leading-relaxed text-pretty px-1">
            {highlightExpressEntry(t.footer.ctaText)}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-none mx-auto">
            <Link to="/boglanish" className="btn-gold no-underline w-full sm:w-auto">
              {t.footer.ctaStart}
            </Link>
            <a
              href="tel:+998947382221"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 hover:border-white hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl text-sm transition-all no-underline backdrop-blur-sm w-full sm:w-auto whitespace-nowrap"
            >
              📞 +998 94 738 22 21
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
