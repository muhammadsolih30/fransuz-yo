import { Link } from "@tanstack/react-router";
import { BarChart3, Lock, MapPin, Phone } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "./BrandIcons";
import { footerLinks } from "../lib/site-content";

const socials = [
  { label: "Telegram", href: "https://t.me/Francais_languee", icon: TelegramIcon },
  { label: "Instagram", href: "https://www.instagram.com/francais_languee/reels/", icon: InstagramIcon },
  { label: "Natijalar", href: "https://t.me/Fransuzu", icon: BarChart3 },
  { label: "Admin", href: "https://t.me/France_TCF", icon: TelegramIcon },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#a3182a] via-[#8f1622] to-[#6e1019] text-white">
      {/* Animatsion to'lqin (yuqori chetida qimirlab turadi) */}
      <div className="footer-wave footer-wave-1" aria-hidden />
      <div className="footer-wave footer-wave-2" aria-hidden />

      {/* Decorative gradient (clip wrapper) */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#d62839]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E0A526]/10 blur-[120px]" />

        {/* Katta sayt nomi */}
        <div className="relative text-center pt-12 sm:pt-16 pb-2">
          <h2 className="font-['Syne'] font-extrabold leading-none tracking-tight text-[clamp(2.6rem,10vw,7rem)] animate-float-slow">
            France <span className="text-[#E0A526]">TCF</span>
          </h2>
          <p className="text-white/70 text-xs sm:text-sm mt-3 tracking-[0.35em] uppercase">
            O'quv Markazi
          </p>
        </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-7">
            <Link to="/" className="no-underline flex items-center gap-2.5 mb-5 w-fit group">
              <div className="relative w-11 h-11 rounded-xl bg-[#d62839] flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-['Syne'] font-extrabold text-xl leading-none">F</span>
                <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-[#E0A526] rounded-tl-lg" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-['Syne'] font-extrabold text-xl tracking-tight">
                  France <span className="text-[#f78a7f]">TCF</span>
                </span>
                <span className="text-[10px] text-white/60 font-medium tracking-wider">O'QUV MARKAZI</span>
              </div>
            </Link>
            <p className="text-white/85 text-sm leading-relaxed max-w-sm mb-6">
              O'zbekistondagi eng yirik fransuz tili o'quv markazi. TCF · DELF · DALF · Milliy
              sertifikat. 2 filial, 30+ xodim, 500+ o'quvchi.
            </p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="no-underline flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-[#d62839] border border-white/10 text-white/80 hover:text-white text-xs font-semibold transition-all hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.8} />
                  {s.label}
                </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-5">
            <h4 className="font-['Syne'] font-bold text-sm mb-4 sm:mb-5 text-white/90">Aloqa</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+998947382221" className="no-underline group flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" strokeWidth={1.8} />
                <div>
                  <div className="text-white/55 text-xs">Telefon</div>
                  <div className="text-white group-hover:text-[#E0A526] text-sm font-semibold transition-colors">
                    +998 94 738 22 21
                  </div>
                </div>
              </a>
              <a href="https://t.me/France_TCF" target="_blank" rel="noreferrer" className="no-underline group flex items-start gap-3">
                <TelegramIcon className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/55 text-xs">Admin</div>
                  <div className="text-white group-hover:text-[#E0A526] text-sm font-semibold transition-colors">
                    @France_TCF
                  </div>
                </div>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chilonzor+metro+Toshkent"
                target="_blank"
                rel="noreferrer"
                className="no-underline group flex items-start gap-3"
              >
                <MapPin className="w-5 h-5 text-[#E0A526] shrink-0 mt-0.5" strokeWidth={1.8} />
                <div>
                  <div className="text-white/55 text-xs">Manzil</div>
                  <div className="text-white/80 group-hover:text-[#E0A526] text-sm transition-colors">Chilonzor metro, Toshkent</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Sahifalar — doimiy aylanma lenta (marquee) */}
        <div className="relative py-6 border-b border-white/10 overflow-hidden group">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-[#8f1622] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-[#8f1622] to-transparent" />
          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center shrink-0">
                {footerLinks.map((p) => (
                  <span key={`${dup}-${p.to}`} className="flex items-center">
                    <Link
                      to={p.to}
                      className="no-underline text-white/75 hover:text-[#E0A526] font-['Syne'] font-bold text-base px-5 transition-colors"
                    >
                      {p.label}
                    </Link>
                    <span className="text-[#E0A526]/50 text-xs">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 sm:pt-8 pb-24 lg:pb-0 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/70 text-xs order-2 sm:order-1">
            © {new Date().getFullYear()} France TCF O'quv Markazi
          </p>
          <div className="hidden sm:flex items-center gap-2 text-white/70 text-xs order-2">
            <span className="text-base">🇫🇷</span>
            Fransuz tili orqali Kanadaga
            <span className="text-base">🇨🇦</span>
          </div>
          <a
            href="/admin"
            className="no-underline order-1 sm:order-3 flex items-center justify-center gap-2 text-white bg-white/10 hover:bg-[#d62839] border border-white/20 hover:border-[#d62839] px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Lock className="w-4 h-4" strokeWidth={1.8} /> Admin panel
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
