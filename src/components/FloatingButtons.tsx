import { useEffect, useState } from "react";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

/**
 * Pastki o'ng burchakdagi suzuvchi tugmalar:
 *  - Telegram (doimo ko'rinadi, atrofiga to'lqin tarqatadi) → adminga bog'lanadi
 *  - "Tepaga" o'qi (biroz scroll qilingach chiqadi)
 */
export function FloatingButtons() {
    const { content } = useSitePreferences();
    const { a11y, shared } = content.ui;
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div className="fixed right-4 sm:right-6 bottom-20 lg:bottom-6 z-[80] flex flex-col items-center gap-3">
            <button
                type="button"
                onClick={scrollTop}
                aria-label={a11y.backToTop}
                className={`w-11 h-11 rounded-full bg-white border border-[#15233B]/10 text-[#15233B] shadow-[0_8px_24px_-8px_rgba(21,35,59,0.4)] flex items-center justify-center hover:bg-[#15233B] hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
            </button>

            <a
                href="https://t.me/France_TCF"
                target="_blank"
                rel="noreferrer noopener"
                aria-label={shared.telegramAdminContact}
                className="hidden lg:flex relative w-15 h-15 rounded-full bg-[#229ED9] items-center justify-center shadow-[0_10px_30px_-6px_rgba(34,158,217,0.7)] hover:scale-110 active:scale-95 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
                <span className="absolute inset-0 rounded-full bg-[#229ED9]/50 animate-tg-wave" />
                <span className="absolute inset-0 rounded-full bg-[#229ED9]/40 animate-tg-wave [animation-delay:1s]" />
                <svg className="relative w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.94 4.3c.27-1.13-.78-2.06-1.86-1.65L2.5 9.4c-1.17.45-1.1 2.13.1 2.48l4.2 1.22 1.62 5.2c.2.65 1.02.85 1.5.37l2.36-2.36 4.27 3.14c.62.46 1.5.12 1.66-.63l3.73-14.5zM8.3 13.1l8.55-5.27c.16-.1.32.12.18.24l-7.06 6.4a.7.7 0 0 0-.22.42l-.24 2.2c-.02.16-.25.18-.3.03l-1.1-3.5a.5.5 0 0 1 .19-.55z" />
                </svg>
            </a>
        </div>
    );
}
