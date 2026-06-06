import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { to: "/kurslar", label: "Kurslar" },
    { to: "/immigratsiya", label: "Immigratsiya" },
    { to: "/natijalar", label: "Natijalar" },
    { to: "/galereya", label: "Galereya" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="no-underline flex items-center gap-0.5">
          <span className="font-['Syne'] font-black text-xl text-white">FRANCE</span>
          <span className="font-['Syne'] font-black text-xl text-[#E8192C]">TCF</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="no-underline text-white/50 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+998772200809"
            className="no-underline text-white/50 hover:text-white text-sm transition-colors"
          >
            +998 77 220 08 09
          </a>
          <Link
            to="/boglanish"
            className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all"
          >
            Ro'yxatdan o'tish
          </Link>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)}>
          <span
            className={`block w-6 h-px bg-white transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`}
          />
          <span className={`block w-6 h-px bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="no-underline text-white/60 hover:text-white text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/boglanish"
            onClick={() => setOpen(false)}
            className="no-underline bg-[#E8192C] text-white text-sm font-medium px-5 py-3 rounded-lg text-center"
          >
            Ro'yxatdan o'tish
          </Link>
        </div>
      )}
    </header>
  );
}
