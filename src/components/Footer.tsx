import { Link } from "@tanstack/react-router";
import { BarChart3, MapPin, Phone } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { InstagramIcon, TelegramIcon } from "./BrandIcons";
import { NavSiteLink } from "./NavSiteLink";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

export function Footer() {
  const { t, footerLinks } = useSitePreferences();

  const socials = [
    { label: t.social.telegram, href: "https://t.me/Francais_languee", icon: TelegramIcon },
    { label: t.social.instagram, href: "https://www.instagram.com/francais_languee/reels/", icon: InstagramIcon },
    { label: t.social.results, href: "https://t.me/Fransuzu", icon: BarChart3 },
    { label: t.social.admin, href: "https://t.me/France_TCF", icon: TelegramIcon },
  ];

  return (
    <footer className="site-footer relative text-white">
      <div className="footer-main-band relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 sm:pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 pb-10 sm:pb-12 border-b footer-main-band__divider">
            <div className="col-span-2 lg:col-span-7">
              <Link to="/" className="no-underline inline-flex mb-5 group">
                <BrandMark
                  size="md"
                  tone="dark"
                  className="group-hover:opacity-90 transition-opacity"
                />
              </Link>
              <p className="footer-ink-soft text-sm leading-relaxed max-w-sm mb-6">{t.footer.aboutText}</p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-social-chip no-underline flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Icon className="w-4 h-4 shrink-0" strokeWidth={1.8} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="col-span-2 lg:col-span-5">
              <h4 className="footer-ink font-['Syne'] font-bold text-sm mb-4 sm:mb-5">{t.footer.contact}</h4>
              <div className="flex flex-col gap-4">
                <a href="tel:+998947382221" className="footer-contact-link no-underline group flex items-start gap-3">
                  <Phone className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.8} />
                  <div>
                    <div className="footer-ink-faint text-xs">{t.footer.phone}</div>
                    <div className="footer-ink text-sm font-semibold">+998 94 738 22 21</div>
                  </div>
                </a>
                <a
                  href="https://t.me/France_TCF"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-link no-underline group flex items-start gap-3"
                >
                  <TelegramIcon className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="footer-ink-faint text-xs">{t.footer.telegram}</div>
                    <div className="footer-ink text-sm font-semibold">@France_TCF</div>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Chilonzor+metro+Toshkent"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-contact-link no-underline group flex items-start gap-3"
                >
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5" strokeWidth={1.8} />
                  <div>
                    <div className="footer-ink-faint text-xs">{t.footer.address}</div>
                    <div className="footer-ink text-sm">{t.footer.addressValue}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="relative py-6 border-b footer-main-band__divider overflow-hidden group">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 footer-marquee-fade footer-marquee-fade--left" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 footer-marquee-fade footer-marquee-fade--right" />
            <div className="flex animate-marquee footer-marquee__track whitespace-nowrap group-hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex items-center shrink-0">
                  {footerLinks.map((p) => (
                    <span key={`${dup}-${p.hash ?? p.to}`} className="flex items-center">
                      <NavSiteLink
                        link={p}
                        className="footer-ink footer-marquee-link no-underline font-['Syne'] font-bold text-base px-5"
                      />
                      <span className="footer-ink-faint text-xs px-1">◆</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-7 sm:pt-8 pb-24 lg:pb-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <p className="footer-ink-soft text-xs order-2 sm:order-1">
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
            <div className="footer-ink-soft hidden sm:flex items-center gap-2 text-xs order-2">
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
