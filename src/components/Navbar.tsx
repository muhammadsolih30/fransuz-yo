import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const links = [
  { to: "/kurslar", label: "Kurslar" },
  { to: "/immigratsiya", label: "Immigratsiya" },
  { to: "/natijalar", label: "Natijalar" },
  { to: "/ustoz", label: "Ustozlar" },
  { to: "/galereya", label: "Galereya" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 16);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">
      <div className="max-w-7xl mx-auto">
        {/* Floating pill bar */}
        <div
          className={`relative flex items-center justify-between gap-4 h-16 md:h-18 pl-4 pr-3 md:pl-6 md:pr-3 rounded-2xl md:rounded-full transition-all duration-500 ${scrolled
            ? "bg-white/50 backdrop-blur-2xl shadow-[0_10px_40px_-12px_rgba(21,35,59,0.25)] border border-white/60"
            : "bg-white/50 backdrop-blur-xl shadow-[0_8px_32px_-16px_rgba(21,35,59,0.2)] border border-white/40"
            }`}
        >
          {/* Logo */}
          <Link
            to="/"
            className="no-underline flex items-center gap-2.5 group shrink-0"
            onClick={() => setOpen(false)}
          >
            <div className="relative w-10 h-10 rounded-xl bg-[#d62839] flex items-center justify-center overflow-hidden shadow-[0_6px_18px_-6px_rgba(214,40,57,0.6)] group-hover:scale-105 transition-transform">
              <span className="text-white font-['Syne'] font-extrabold text-lg leading-none">F</span>
              <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-[#E0A526] rounded-tl-lg" />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-['Syne'] font-extrabold text-lg text-[#15233B] tracking-tight">
                France <span className="text-[#d62839]">TCF</span>
              </span>
              <span className="text-[10px] text-[#15233B]/50 font-medium tracking-wider">
                O'QUV MARKAZI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="no-underline text-[#15233B]/75 hover:text-[#d62839] text-sm font-semibold px-3.5 py-2 rounded-full hover:bg-[#d62839]/8 transition-all"
                activeProps={{
                  className:
                    "no-underline text-[#d62839] text-sm font-semibold px-3.5 py-2 rounded-full bg-[#d62839]/10",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href="tel:+998947382221"
              className="no-underline text-[#15233B] hover:text-[#d62839] text-sm font-bold transition-colors whitespace-nowrap"
            >
              +998 94 738 22 21
            </a>
            <Link
              to="/boglanish"
              className="no-underline bg-[#d62839] hover:bg-[#ae1b2a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(214,40,57,0.6)] whitespace-nowrap"
            >
              Ro'yxatdan o'tish
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-full hover:bg-[#15233B]/5 transition-colors shrink-0"
            onClick={() => setOpen(!open)}
          >
            <span className={`block w-6 h-0.5 bg-[#15233B] rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#15233B] rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#15233B] rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-0 bottom-0 -z-10 bg-white/95 backdrop-blur-2xl transition-all duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="px-6 pt-28 pb-8 flex flex-col gap-2 h-full">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="no-underline text-[#15233B] hover:text-[#d62839] text-xl font-bold py-3.5 border-b border-[#15233B]/8 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-auto flex flex-col gap-3">
            <a href="tel:+998947382221" className="no-underline text-center text-[#15233B] font-bold text-lg">
              +998 94 738 22 21
            </a>
            <Link
              to="/boglanish"
              onClick={() => setOpen(false)}
              className="no-underline bg-[#d62839] hover:bg-[#ae1b2a] text-white font-semibold py-4 rounded-full text-center transition-all"
            >
              Ro'yxatdan o'tish →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
