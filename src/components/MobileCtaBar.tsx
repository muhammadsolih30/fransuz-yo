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
    const { shared, a11y } = content.ui;
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 250);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={`lg:hidden fixed inset-x-0 bottom-0 z-[90] px-3 pb-3 pt-2 transition-all duration-400 ${show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex items-stretch gap-2.5 bg-white/85 dark:bg-[#161b22]/90 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-2xl p-2 shadow-[0_-8px_30px_-10px_rgba(21,35,59,0.3)] dark:shadow-[0_-8px_30px_-10px_rgba(0,0,0,0.45)]">
                <Link
                    to="/boglanish"
                    className="relative flex-1 overflow-hidden no-underline flex items-center justify-center gap-2 bg-gradient-to-r from-[#f46868] via-[#e83848] to-[#e84858] text-white font-bold text-sm rounded-xl px-4 py-3.5"
                >
                    <span className="absolute inset-0 rounded-xl bg-[#e83848]/40 animate-tg-wave" />
                    <span className="relative">{mobileCta.register}</span>
                </Link>

                <a
                    href="https://t.me/France_TCF"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={a11y.telegramAdmin}
                    className="relative overflow-hidden px-4 flex items-center justify-center bg-[#229ED9] rounded-xl"
                >
                    <span className="absolute inset-0 rounded-xl bg-[#229ED9]/50 animate-tg-wave" />
                    <svg className="relative w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.94 4.3c.27-1.13-.78-2.06-1.86-1.65L2.5 9.4c-1.17.45-1.1 2.13.1 2.48l4.2 1.22 1.62 5.2c.2.65 1.02.85 1.5.37l2.36-2.36 4.27 3.14c.62.46 1.5.12 1.66-.63l3.73-14.5zM8.3 13.1l8.55-5.27c.16-.1.32.12.18.24l-7.06 6.4a.7.7 0 0 0-.22.42l-.24 2.2c-.02.16-.25.18-.3.03l-1.1-3.5a.5.5 0 0 1 .19-.55z" />
                    </svg>
                </a>

                <a
                    href="tel:+998947382221"
                    aria-label={a11y.callUs}
                    className="relative overflow-hidden px-4 flex items-center justify-center bg-[#22a45d] rounded-xl"
                >
                    <span className="absolute inset-0 rounded-xl bg-[#22a45d]/50 animate-tg-wave [animation-delay:0.6s]" />
                    <svg className="relative w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
