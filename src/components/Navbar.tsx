import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { navLinks } from "../lib/site-content";

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
        <div
          className={`relative flex items-center justify-between gap-3 h-16 md:h-18 pl-4 pr-3 md:pl-5 md:pr-3 rounded-2xl md:rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-white/50 backdrop-blur-2xl shadow-[0_10px_40px_-12px_rgba(21,35,59,0.25)] border border-white/60"
              : "bg-white/50 backdrop-blur-xl shadow-[0_8px_32px_-16px_rgba(21,35,59,0.2)] border border-white/40"
          }`}
        >
          <Link
            to="/"
            className="no-underline flex items-center gap-2.5 group shrink-0"
            onClick={() => setOpen(false)}
          >
            <div className="relative w-10 h-10 rounded-xl bg-[#d62839] flex items-center justify-center overflow-hidden shadow-[0_6px_18px_-6px_rgba(214,40,57,0.6)] group-hover:scale-105 transition-transform">
              <span className="text-white font-['Syne'] font-extrabold text-lg leading-none">F</span>
              <div className="absolute -right-1 -bottom-1 w-3 h-3 bg-[#E0A526] rounded-tl-lg" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Syne'] font-extrabold text-base sm:text-lg text-[#15233B] tracking-tight">
                France <span className="text-[#d62839]">TCF</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#646F82] font-medium tracking-wider">
                O'QUV MARKAZI
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="no-underline text-[#3E4B62] hover:text-[#d62839] text-[13px] font-semibold px-2.5 py-2 rounded-full hover:bg-[#d62839]/8 transition-all whitespace-nowrap"
                activeProps={{
                  className:
                    "no-underline text-[#d62839] text-[13px] font-semibold px-2.5 py-2 rounded-full bg-[#d62839]/10",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3 shrink-0">
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

          <button
            type="button"
            aria-label={open ? "Menyuni yopish" : "Menyuni ochish"}
            aria-expanded={open}
            className="xl:hidden flex flex-col gap-1.5 p-2.5 rounded-full hover:bg-[#15233B]/5 transition-colors shrink-0"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#15233B] rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#15233B] rounded-full transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#15233B] rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`xl:hidden fixed inset-0 z-40 bg-[#15233B]/40 backdrop-blur-[2px] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`xl:hidden fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white shadow-[-20px_0_60px_-20px_rgba(21,35,59,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pt-7 pb-8 flex flex-col min-h-full">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9 rounded-lg bg-[#d62839] flex items-center justify-center overflow-hidden">
                <span className="text-white font-['Syne'] font-extrabold text-base leading-none">F</span>
                <div className="absolute -right-1 -bottom-1 w-2.5 h-2.5 bg-[#E0A526] rounded-tl-md" />
              </div>
              <span className="font-['Syne'] font-extrabold text-base text-[#15233B]">
                France <span className="text-[#d62839]">TCF</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Yopish"
              className="w-9 h-9 rounded-full border border-[#15233B]/15 text-[#15233B] flex items-center justify-center hover:bg-[#15233B] hover:text-white transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="no-underline text-[#15233B] hover:text-[#d62839] text-lg font-bold py-4 border-b border-[#15233B]/8"
            >
              Bosh sahifa
            </Link>
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
                className={`no-underline text-[#15233B] hover:text-[#d62839] text-base font-bold py-3.5 border-b border-[#15233B]/8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                }`}
                activeProps={{
                  className:
                    "no-underline text-[#d62839] text-base font-bold py-3.5 border-b border-[#15233B]/8",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/galereya"
              onClick={() => setOpen(false)}
              className="no-underline text-[#15233B] hover:text-[#d62839] text-base font-bold py-3.5 border-b border-[#15233B]/8"
            >
              Galereya
            </Link>
            <Link
              to="/boglanish"
              onClick={() => setOpen(false)}
              className="no-underline text-[#15233B] hover:text-[#d62839] text-base font-bold py-3.5 border-b border-[#15233B]/8"
            >
              Bog'lanish
            </Link>
          </nav>

          <div className="mt-auto flex flex-col gap-3 pt-6">
            <a href="tel:+998947382221" className="no-underline text-center text-[#15233B] font-bold text-base">
              +998 94 738 22 21
            </a>
            <Link
              to="/boglanish"
              onClick={() => setOpen(false)}
              className="no-underline bg-[#d62839] hover:bg-[#ae1b2a] text-white font-semibold py-3.5 rounded-2xl text-center transition-all active:scale-[0.98] shadow-[0_10px_26px_-8px_rgba(214,40,57,0.6)]"
            >
              Ro'yxatdan o'tish →
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
