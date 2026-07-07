import { Link } from "@tanstack/react-router";
import { BarChart3, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { InstagramIcon, TelegramIcon } from "./BrandIcons";
import { NavSiteLink } from "./NavSiteLink";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

const footerInk = "text-black hover:text-white transition-colors duration-300";
const footerInkSoft = "text-black/75 hover:text-white transition-colors duration-300";
const footerInkFaint = "text-black/45 hover:text-white transition-colors duration-300";

export function Footer() {
  const { t, footerLinks } = useSitePreferences();

  const socials = [
    { label: t.social.telegram, href: "https://t.me/Francais_languee", icon: TelegramIcon },
    { label: t.social.instagram, href: "https://www.instagram.com/francais_languee/reels/", icon: InstagramIcon },
    { label: t.social.results, href: "https://t.me/Fransuzu", icon: BarChart3 },
    { label: t.social.admin, href: "https://t.me/France_TCF", icon: TelegramIcon },
  ];

  return (
    <footer className="relative text-white">
      <div className="text-center py-10 sm:py-12 bg-[#2D2D2D] dark:bg-[#0a0a0a] border-b border-white/10">
        <h2 className="font-['Syne'] font-extrabold leading-none tracking-tight text-[clamp(2.6rem,10vw,7rem)] animate-float-slow text-white">
          France <span className="text-[#FF6600]">TCF</span>
        </h2>
        <p className="text-white/60 text-xs sm:text-sm mt-3 tracking-[0.35em] uppercase">{t.footer.centerLabel}</p>
      </div>

      <div className="footer-wave-wrap" aria-hidden>
        <div className="footer-wave footer-wave-1" />
        <div className="footer-wave footer-wave-2" />
        <div className="footer-wave footer-wave-3" />
      </div>

      <div className="relative bg-[#FF6600] dark:bg-[#1a1208] overflow-hidden text-black dark:text-[#f5e6d3] footer-orange-band">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-black/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full bg-black/5 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 pb-10 sm:pb-12 border-b border-black/15">
            <div className="col-span-2 lg:col-span-7">
              <Link to="/" className="no-underline inline-block mb-5 group">
                <BrandLogo size="md" className="rounded-xl group-hover:scale-105 transition-transform" />
              </Link>
              <p className={`text-sm leading-relaxed max-w-sm mb-6 ${footerInkSoft}`}>{t.footer.aboutText}</p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={`no-underline flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/8 hover:bg-black border border-black/20 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${footerInk}`}
                    >
                      <Icon className="w-4 h-4 shrink-0" strokeWidth={1.8} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="col-span-2 lg:col-span-5">
              <h4 className={`font-['Syne'] font-bold text-sm mb-4 sm:mb-5 ${footerInk}`}>{t.footer.contact}</h4>
              <div className="flex flex-col gap-4">
                <a href="tel:+998947382221" className={`no-underline group flex items-start gap-3 ${footerInk}`}>
                  <Phone className="w-5 h-5 shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-white" strokeWidth={1.8} />
                  <div>
                    <div className="text-xs text-black/45 group-hover:text-white/75 transition-colors duration-300">
                      {t.footer.phone}
                    </div>
                    <div className="text-sm font-semibold group-hover:text-white transition-colors duration-300">
                      +998 94 738 22 21
                    </div>
                  </div>
                </a>
                <a
                  href="https://t.me/France_TCF"
                  target="_blank"
                  rel="noreferrer"
                  className={`no-underline group flex items-start gap-3 ${footerInk}`}
                >
                  <TelegramIcon className="w-5 h-5 shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-white" />
                  <div>
                    <div className="text-xs text-black/45 group-hover:text-white/75 transition-colors duration-300">
                      {t.footer.telegram}
                    </div>
                    <div className="text-sm font-semibold group-hover:text-white transition-colors duration-300">
                      @France_TCF
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chilonzor+metro+Toshkent"
                  target="_blank"
                  rel="noreferrer"
                  className={`no-underline group flex items-start gap-3 ${footerInk}`}
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 transition-colors duration-300 group-hover:text-white" strokeWidth={1.8} />
                  <div>
                    <div className="text-xs text-black/45 group-hover:text-white/75 transition-colors duration-300">
                      {t.footer.address}
                    </div>
                    <div className="text-sm group-hover:text-white transition-colors duration-300">
                      {t.footer.addressValue}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="relative py-6 border-b border-black/15 overflow-hidden group">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#FF6600] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#FF6600] to-transparent" />
            <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex items-center shrink-0">
                  {footerLinks.map((p) => (
                    <span key={`${dup}-${p.hash ?? p.to}`} className="flex items-center">
                      <NavSiteLink
                        link={p}
                        className={`no-underline font-['Syne'] font-bold text-base px-5 ${footerInk}`}
                      />
                      <span className={`text-xs transition-colors duration-300 ${footerInkFaint}`}>◆</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-7 sm:pt-8 pb-24 lg:pb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <p className={`text-xs order-2 sm:order-1 ${footerInkSoft}`}>
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
            <div className={`hidden sm:flex items-center gap-2 text-xs order-2 ${footerInkSoft}`}>
              <span className="text-base">🇫🇷</span>
              {t.footer.tagline}
              <span className="text-base">🇨🇦</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
