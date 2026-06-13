import { Link } from "@tanstack/react-router";

const pages = [
  { to: "/kurslar", label: "Kurslar" },
  { to: "/immigratsiya", label: "Immigratsiya" },
  { to: "/natijalar", label: "Natijalar" },
  { to: "/ustoz", label: "Ustozlar" },
  { to: "/galereya", label: "Galereya" },
  { to: "/boglanish", label: "Bog'lanish" },
];

const socials = [
  { label: "Telegram", href: "https://t.me/Francais_languee", icon: "✈️" },
  { label: "Instagram", href: "https://www.instagram.com/francais_languee/reels/", icon: "📷" },
  { label: "Natijalar", href: "https://t.me/Fransuzu", icon: "📊" },
  { label: "Admin", href: "https://t.me/France_TCF", icon: "💬" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#15233B] text-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#d62839]/15 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E0A526]/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="no-underline flex items-center gap-2.5 mb-6 w-fit group">
              <div className="relative w-11 h-11 rounded-xl bg-[#d62839] flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-white font-['Syne'] font-extrabold text-xl leading-none">F</span>
                <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-[#E0A526] rounded-tl-lg" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-['Syne'] font-extrabold text-xl tracking-tight">
                  France <span className="text-[#f78a7f]">TCF</span>
                </span>
                <span className="text-[10px] text-white/50 font-medium tracking-wider">O'QUV MARKAZI</span>
              </div>
            </Link>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm mb-6">
              🇨🇦 Fransuz tili orqali Kanada imkoniyatlari. TCF · DELF · DALF · Milliy sertifikat.
              C1–C2 darajali ustozlar bilan Express Entry yo'liga professional tayyorgarlik.
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="no-underline flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/8 hover:bg-[#d62839] border border-white/10 text-white/80 hover:text-white text-xs font-semibold transition-all hover:-translate-y-0.5"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="lg:col-span-3">
            <h4 className="font-['Syne'] font-bold text-sm mb-5 text-white/90">Sahifalar</h4>
            <div className="flex flex-col gap-3">
              {pages.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="no-underline text-white/60 hover:text-[#E0A526] text-sm transition-colors w-fit"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-['Syne'] font-bold text-sm mb-5 text-white/90">Aloqa</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+998947382221" className="no-underline group flex items-start gap-3">
                <span className="text-lg">📞</span>
                <div>
                  <div className="text-white/40 text-xs">Telefon</div>
                  <div className="text-white group-hover:text-[#E0A526] text-sm font-semibold transition-colors">
                    +998 94 738 22 21
                  </div>
                </div>
              </a>
              <a href="https://t.me/France_TCF" target="_blank" rel="noreferrer" className="no-underline group flex items-start gap-3">
                <span className="text-lg">💬</span>
                <div>
                  <div className="text-white/40 text-xs">Admin</div>
                  <div className="text-white group-hover:text-[#E0A526] text-sm font-semibold transition-colors">
                    @France_TCF
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <div className="text-white/40 text-xs">Manzil</div>
                  <div className="text-white/80 text-sm">Oybek metro, Toshkent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/45 text-xs">
            © {new Date().getFullYear()} France TCF O'quv Markazi. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-2 text-white/45 text-xs">
            <span className="text-base">🇫🇷</span>
            Fransuz tili orqali Kanadaga
            <span className="text-base">🇨🇦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
