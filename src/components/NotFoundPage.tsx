import { Link, useRouterState } from "@tanstack/react-router";
import { Home, MapPinOff } from "lucide-react";
import { PageMeta } from "./PageMeta";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

export function NotFoundPage() {
  const { content } = useSitePreferences();
  const ui = content.ui.notFound;
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="site-page site-page--light text-ink min-h-[60vh]">
      <PageMeta page="notFound" path={pathname} />

      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 page-hero-mesh" aria-hidden />
        <div className="absolute -top-16 right-0 w-[min(100vw,420px)] h-[min(100vw,420px)] rounded-full bg-[#e83848]/8 blur-[100px]" aria-hidden />

        <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#e83848]/10 border border-[#e83848]/15 text-[#e83848] mb-6">
            <MapPinOff className="w-8 h-8 sm:w-9 sm:h-9" strokeWidth={1.8} />
          </div>

          <p className="font-['Syne'] font-extrabold text-6xl sm:text-7xl text-gradient-canada leading-none mb-3">
            {ui.code}
          </p>

          <h1 className="font-['Syne'] font-extrabold text-2xl sm:text-3xl text-[#15233B] mb-3 leading-tight">
            {ui.title}
          </h1>

          <p className="text-[#3E4B62] text-sm sm:text-base leading-relaxed mb-6 max-w-md mx-auto">
            {ui.subtitle}
          </p>

          {pathname && pathname !== "/" && (
            <p className="inline-flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-[#646F82] bg-white/80 border border-[#15233B]/10 rounded-full px-3 py-1.5 mb-8 max-w-full">
              <span className="font-semibold text-[#3E4B62]">{ui.pathLabel}</span>
              <code className="font-mono text-[#e83848] break-all">{pathname}</code>
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <Link to="/" className="btn-primary no-underline justify-center min-h-[3rem]">
              <Home className="w-4 h-4" aria-hidden />
              {ui.home}
            </Link>
            <Link to="/boglanish" className="btn-outline no-underline justify-center min-h-[3rem]">
              {ui.contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
