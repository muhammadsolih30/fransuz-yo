import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

/**
 * Faqat MOBILDA ko'rinadigan pastki harakat paneli.
 * Ozgina scroll (250px) qilingach pastdan chiqib keladi.
 */
export function MobileCtaBar() {
  const { content } = useSitePreferences();
  const { mobileCta } = content.ui;
  const { a11y } = content.ui;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 250);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-[90] px-2.5 pb-2 pt-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-stretch gap-2 bg-white/90 dark:bg-[#161b22]/95 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-xl p-1.5 shadow-[0_-6px_24px_-8px_rgba(21,35,59,0.28)] dark:shadow-[0_-6px_24px_-8px_rgba(0,0,0,0.45)]">
        <Link
          to="/boglanish"
          className="relative flex-1 overflow-hidden no-underline flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#e83848] to-[#c42d3c] text-white font-semibold text-xs rounded-lg px-3 py-2.5 min-h-[2.5rem] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] active:scale-[0.97]"
        >
          <span className="relative truncate">{mobileCta.register}</span>
        </Link>

        <a
          href="https://t.me/France_TCF"
          target="_blank"
          rel="noreferrer noopener"
          aria-label={a11y.telegramAdmin}
          className="flex items-center justify-center w-10 h-10 shrink-0 bg-[#229ED9] rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M21.94 4.3c.27-1.13-.78-2.06-1.86-1.65L2.5 9.4c-1.17.45-1.1 2.13.1 2.48l4.2 1.22 1.62 5.2c.2.65 1.02.85 1.5.37l2.36-2.36 4.27 3.14c.62.46 1.5.12 1.66-.63l3.73-14.5zM8.3 13.1l8.55-5.27c.16-.1.32.12.18.24l-7.06 6.4a.7.7 0 0 0-.22.42l-.24 2.2c-.02.16-.25.18-.3.03l-1.1-3.5a.5.5 0 0 1 .19-.55z" />
          </svg>
        </a>

        <a
          href="tel:+998947382221"
          aria-label={a11y.callUs}
          className="flex items-center justify-center w-10 h-10 shrink-0 bg-[#22a45d] rounded-lg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 active:scale-95"
        >
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
