import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-0.5 mb-5">
              <span className="font-['Syne'] font-black text-3xl text-white">FRANCE</span>
              <span className="font-['Syne'] font-black text-3xl text-[#E8192C]">TCF</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Fransuz tili orqali Kanadaga doimiy yashovchi maqomi — eng ishonchli yo'l.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://t.me/Fransuz_lingua", label: "TG" },
                { href: "https://instagram.com/kanadalik_uzbek", label: "IG" },
                { href: "https://youtube.com/@canadAli", label: "YT" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline w-9 h-9 border border-white/10 hover:border-[#E8192C]/50 rounded-lg flex items-center justify-center text-white/40 hover:text-[#E8192C] text-xs font-bold transition-all"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/20 text-xs tracking-widest uppercase mb-5">Sahifalar</h4>
            <div className="flex flex-col gap-3">
              {["/kurslar", "/immigratsiya", "/natijalar", "/galereya", "/boglanish"].map((to) => (
                <Link
                  key={to}
                  to={to}
                  className="no-underline text-white/40 hover:text-white text-sm transition-colors capitalize"
                >
                  {to.slice(1)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/20 text-xs tracking-widest uppercase mb-5">Aloqa</h4>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+998772200809"
                className="no-underline text-white/40 hover:text-white text-sm transition-colors"
              >
                +998 77 220 08 09
              </a>
              <a
                href="https://t.me/Fransuz_lingua"
                target="_blank"
                rel="noreferrer"
                className="no-underline text-white/40 hover:text-white text-sm transition-colors"
              >
                @Fransuz_lingua
              </a>
              <p className="text-white/30 text-xs leading-relaxed">
                Oybek metro,
                <br />
                Farmatsevtika instituti ichida
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">© 2025 France TCF O'quv Markazi</p>
          <p className="text-white/20 text-xs">Fransuz tili orqali Kanadaga</p>
        </div>
      </div>
    </footer>
  );
}
