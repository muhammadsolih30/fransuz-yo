import { Link, useRouterState } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BrandMark } from "./BrandMark";
import { BrandLogo } from "./BrandLogo";
import { PreferencesMenu } from "./PreferencesMenu";
import { NavSiteLink } from "./NavSiteLink";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useFocusTrap } from "../hooks/useFocusTrap";

const NAV_LINK_BASE =
  "relative no-underline text-[#3E4B62] hover:text-[#e83848] text-xs lg:text-[11px] 2xl:text-[13px] font-semibold px-1.5 2xl:px-2.5 pt-2 pb-2.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-1.5 after:right-1.5 2xl:after:left-2 2xl:after:right-2 after:h-[2px] after:bg-[#e83848] after:rounded-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:scale-x-100";

const NAV_LINK_ACTIVE =
  "relative no-underline text-[#e83848] text-xs lg:text-[11px] 2xl:text-[13px] font-bold px-1.5 2xl:px-2.5 pt-2 pb-2.5 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-1.5 after:right-1.5 2xl:after:left-2 2xl:after:right-2 after:h-[2px] after:bg-[#e83848] after:rounded-full after:scale-x-100 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)]";

const NAV_MOBILE_BASE =
  "no-underline text-[#15233B] hover:text-[#e83848] text-base font-bold py-3.5 border-b border-[#15233B]/8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-l-[3px] border-l-transparent pl-4 active:scale-[0.99]";

const NAV_MOBILE_ACTIVE =
  "no-underline text-[#e83848] text-base font-bold py-3.5 border-b border-[#15233B]/8 border-l-[3px] border-l-[#e83848] pl-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLElement>(null);
  const { t, navLinks, content } = useSitePreferences();
  const { a11y } = content.ui;
  const HOME_SECTION_IDS = content.site.HOME_SECTION_IDS;
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const activeSection = useScrollSpy(HOME_SECTION_IDS, isHome);

  const isLinkActive = (link: (typeof navLinks)[number]) => {
    if (link.hash) return isHome && activeSection === link.hash;
    return pathname === link.to;
  };

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

  useFocusTrap(open, drawerRef);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const headerShell = scrolled
    ? "bg-white/92 backdrop-blur-xl border border-[#15233B]/10 shadow-[0_1px_3px_rgba(21,35,59,0.06)]"
    : "bg-white/88 backdrop-blur-lg border border-[#15233B]/8 shadow-[0_1px_2px_rgba(21,35,59,0.04)]";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`site-header-bar relative flex lg:grid lg:grid-cols-[auto_1fr_auto] items-center justify-between lg:justify-stretch gap-2 sm:gap-3 h-16 md:h-[4.5rem] pl-3 pr-2 sm:pl-4 sm:pr-3 md:pl-5 md:pr-3 rounded-2xl md:rounded-full transition-[background,box-shadow,border-color] duration-500 ${headerShell}`}
        >
          <Link
            to="/"
            className="no-underline flex items-center min-w-0 flex-1 lg:flex-none group"
            onClick={() => setOpen(false)}
          >
            <BrandLogo
              size="sm"
              className="hidden lg:block !h-11 2xl:!h-12 w-auto group-hover:scale-[1.03] transition-transform shrink-0"
            />
            <BrandMark
              size="sm"
              tone="light"
              className="lg:hidden group-hover:scale-[1.01] transition-transform origin-left"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center min-w-0 overflow-hidden px-1 col-start-2">
            <div className="flex items-center justify-center gap-0 min-w-0 max-w-full overflow-x-auto scrollbar-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navLinks.map((l) => (
                <NavSiteLink
                  key={l.hash ?? l.to}
                  link={l}
                  active={isLinkActive(l)}
                  className={NAV_LINK_BASE}
                  activeClassName={NAV_LINK_ACTIVE}
                />
              ))}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-2 shrink-0 justify-end">
            <PreferencesMenu />
            <a
              href="tel:+998947382221"
              className="no-underline flex items-center justify-center w-9 h-9 2xl:w-auto 2xl:h-auto 2xl:gap-1.5 rounded-full 2xl:rounded-none text-[#15233B] hover:text-[#e83848] transition-colors shrink-0"
              aria-label={t.common.phone}
              title="+998 94 738 22 21"
            >
              <Phone className="w-4 h-4 shrink-0" strokeWidth={2} />
              <span className="hidden 2xl:inline text-sm font-bold whitespace-nowrap">+998 94 738 22 21</span>
            </a>
            <Link
              to="/boglanish"
              search={{ mode: "register" }}
              className="no-underline bg-[#e83848] hover:bg-[#e84858] text-white text-xs 2xl:text-sm font-semibold min-w-[7.25rem] 2xl:min-w-[9.5rem] h-9 2xl:h-10 px-3.5 2xl:px-5 rounded-full transition-[background,transform] hover:-translate-y-0.5 shadow-[0_8px_20px_-8px_rgba(232,56,72,0.6)] whitespace-nowrap inline-flex items-center justify-center shrink-0"
            >
              {t.common.register}
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-1 shrink-0 justify-end">
            <PreferencesMenu />
            <button
              type="button"
              aria-label={open ? a11y.menuClose : a11y.menuOpen}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              className="flex flex-col gap-1.5 p-2.5 rounded-full hover:bg-[#15233B]/5 transition-colors shrink-0 w-10 h-10 items-center justify-center"
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
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#15233B]/40 backdrop-blur-[2px] transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <aside
        ref={drawerRef}
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal={open}
        aria-label={a11y.menuOpen}
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm mobile-nav-drawer bg-white shadow-[-20px_0_60px_-20px_rgba(21,35,59,0.4)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 pt-7 pb-8 flex flex-col min-h-full">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" onClick={() => setOpen(false)} className="no-underline flex items-center">
              <BrandMark size="sm" tone="light" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={a11y.close}
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
              className="no-underline text-[#15233B] hover:text-[#e83848] text-lg font-bold py-4 border-b border-[#15233B]/8"
            >
              {t.nav.home}
            </Link>
            {navLinks.map((l) => (
              <NavSiteLink
                key={l.hash ?? l.to}
                link={l}
                active={isLinkActive(l)}
                onClick={() => setOpen(false)}
                className={`${NAV_MOBILE_BASE} ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
                activeClassName={`${NAV_MOBILE_ACTIVE} ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
              />
            ))}
            <Link
              to="/boglanish"
              onClick={() => setOpen(false)}
              className="no-underline text-[#15233B] hover:text-[#e83848] text-base font-bold py-3.5 border-b border-[#15233B]/8"
            >
              {t.nav.contact}
            </Link>
          </nav>

          <div className="mt-auto flex flex-col gap-2.5 pt-5">
            <a href="tel:+998947382221" className="no-underline text-center text-[#15233B] font-semibold text-sm">
              +998 94 738 22 21
            </a>
            <Link
              to="/boglanish"
              search={{ mode: "register" }}
              onClick={() => setOpen(false)}
              className="no-underline bg-[#e83848] hover:bg-[#e84858] text-white font-semibold py-2.5 rounded-xl text-center text-sm transition-all active:scale-[0.98] shadow-[0_8px_20px_-8px_rgba(232,56,72,0.55)]"
            >
              {t.common.register} →
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
