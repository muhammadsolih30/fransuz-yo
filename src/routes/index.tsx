import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import {
  Briefcase,
  FileText,
  Gift,
  GraduationCap,
  HelpCircle,
  Image as ImageIcon,
  Info,
  Phone,
  Plane,
  Trophy,
  Users,
} from "lucide-react";
import { HeroOpeningBg } from "../components/HeroOpeningBg";
import { PageMeta } from "../components/PageMeta";
import { FaqAccordion } from "../components/FaqAccordion";
import { StatCountUp } from "../components/CountUp";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { useHashScroll } from "../hooks/useHashScroll";
import { useReducedMotion } from "../hooks/useReducedMotion";

const LEVEL_PCT: Record<string, number> = {
  A1: 15,
  A2: 30,
  B1: 45,
  B2: 60,
  C1: 80,
  C2: 100,
};

const AboutPageSections = lazy(() =>
  import("../components/sections/AboutPageSections").then((m) => ({ default: m.AboutPageSections })),
);
const CoursesPageSections = lazy(() =>
  import("../components/sections/CoursesPageSections").then((m) => ({ default: m.CoursesPageSections })),
);
const ResultsPageSections = lazy(() =>
  import("../components/sections/ResultsPageSections").then((m) => ({ default: m.ResultsPageSections })),
);
const TeachersPageSections = lazy(() =>
  import("../components/sections/TeachersPageSections").then((m) => ({ default: m.TeachersPageSections })),
);

function SectionSkeleton() {
  return <div className="section-skeleton" aria-hidden />;
}

export const Route = createFileRoute("/")({
  component: HomePage,
});

const headingPalettes = [
  ["rgba(255,255,255,0.95)", "rgba(255,255,255,0.95)", "accent"],
  ["rgba(255,255,255,0.92)", "rgba(255,255,255,0.92)", "accent"],
];

function TypedHeading({ segments }: { segments: readonly string[] }) {
  const reducedMotion = useReducedMotion();
  const [cycle, setCycle] = useState(0);
  const accentIndex = segments.length - 1;

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setCycle((c) => c + 1), 8000);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const colors = headingPalettes[cycle % headingPalettes.length];
  let charIndex = 0;
  const startDelay = reducedMotion ? 0 : 0.1;
  const step = reducedMotion ? 0 : 0.03;

  return (
    <h1
      key={reducedMotion ? "static" : cycle}
      data-no-reveal
      className="stripe-display text-[clamp(2rem,7.6vw,5.75rem)] leading-[1.06] sm:leading-[1.02] mb-5 sm:mb-7 hero-heading text-balance px-1"
    >
      {segments.map((seg, si) => {
        const isAccent = si === accentIndex;
        return (
          <span
            key={si}
            className={isAccent ? "italic text-gradient-hero-accent" : undefined}
            style={!isAccent ? { color: colors[si], transition: "color 0.4s ease" } : undefined}
          >
            {/* Accent gradient breaks on nested .char spans — keep accent as one piece */}
            {reducedMotion || isAccent
              ? seg
              : Array.from(seg).map((ch, ci) => {
                  const delay = startDelay + charIndex * step;
                  charIndex += 1;
                  return (
                    <span key={`${si}-${ci}`} className="char" style={{ animationDelay: `${delay}s` }}>
                      {ch === " " ? "\u00A0" : ch}
                    </span>
                  );
                })}
          </span>
        );
      })}
    </h1>
  );
}

const marqueeIcons: Record<string, typeof Info> = {
  haqimizda: Info,
  kurslar: GraduationCap,
  natijalar: Trophy,
  ustoz: Users,
  "/immigratsiya": Plane,
  "/faq": HelpCircle,
  "/probniy-dars": Gift,
  "/vakansiya": Briefcase,
  "/ommaviy-oferta": FileText,
  "/galereya": ImageIcon,
  "/boglanish": Phone,
};

function HomePage() {
  useHashScroll();
  const { content, t, navLinks } = useSitePreferences();
  const { centerClaim, heroTagline, whyUs } = content.site;
  const { generalFaq } = content.faq;
  const ui = content.ui.home;
  const shared = content.ui.shared;

  const faqs = generalFaq.slice(0, 6);
  const highlightStudent = content.results.studentResults.find((r) => r.highlight) ?? content.results.studentResults[0];

  const marqueePages = useMemo(
    () => [
      ...navLinks.map((link) => ({
        to: link.to,
        hash: link.hash,
        label: link.label,
        icon: marqueeIcons[link.hash ?? link.to] ?? Info,
      })),
      { to: "/galereya" as const, hash: undefined, label: t.nav.gallery, icon: ImageIcon },
      { to: "/boglanish" as const, hash: undefined, label: t.nav.contact, icon: Phone },
    ],
    [navLinks, t.nav.gallery, t.nav.contact],
  );

  return (
    <div className="site-page site-page--light text-ink overflow-hidden">
      <PageMeta page="home" path="/" />

      <section className="hero-section relative min-h-[92svh] sm:min-h-screen flex items-center pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
        <HeroOpeningBg />
        <div className="absolute inset-0 hero-canvas-scrim pointer-events-none" />
        <div className="hero-section__glow pointer-events-none" aria-hidden />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
          <div className="hero-chip chip mb-6 sm:mb-7 animate-slide-up-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e83848] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e83848]" />
            </span>
            <span className="hero-chip__text">
              <span className="hero-chip__flag" aria-hidden>
                🇫🇷
              </span>{" "}
              {centerClaim.replace("France TCF — ", "")}{" "}
              <span className="hero-chip__flag" aria-hidden>
                🇨🇦
              </span>
            </span>
          </div>

          <TypedHeading segments={ui.headingSegments} />

          <p className="hero-tagline text-[0.8125rem] sm:text-[0.9375rem] lg:text-base leading-[1.5] sm:leading-relaxed mb-5 sm:mb-9 max-w-2xl mx-auto animate-slide-up delay-500 font-normal sm:font-medium px-1">
            {heroTagline}
          </p>

          <div className="hero-cta-row grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:flex-wrap sm:gap-4 justify-center mb-6 sm:mb-10 w-full max-w-lg sm:max-w-none mx-auto animate-slide-up delay-300">
            <Link to="/boglanish" className="btn-primary hero-btn-primary hero-cta-row__primary hero-cta--pulse">
              <span className="hero-cta-row__label">{shared.freeConsultation}</span>
              <span className="hero-cta-row__arrow" aria-hidden>
                →
              </span>
            </Link>
            <Link to="/immigratsiya" className="btn-outline hero-btn-outline hero-cta-row__secondary">
              <span className="hero-cta-row__label">{shared.expressEntry}</span>
            </Link>
          </div>

          <div className="hero-trust-row grid grid-cols-2 sm:flex sm:flex-wrap items-stretch sm:items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12 w-full max-w-md sm:max-w-none mx-auto animate-slide-up delay-400">
            {ui.trustBadges.map((b) => (
              <div key={b} className="hero-trust-pill justify-center sm:justify-start">
                <span className="text-[#e83848]" aria-hidden>
                  ✦
                </span>
                {b}
              </div>
            ))}
          </div>

          <div className="hero-stats-panel hero-stats-panel--glass w-full max-w-3xl grid grid-cols-4 gap-px rounded-2xl overflow-hidden animate-scale-in delay-500">
            {ui.heroStats.map((s) => (
              <div key={s.label} className="hero-stats-panel__cell px-4 py-5 text-center">
                <div className="hero-stats-panel__num">
                  <StatCountUp value={s.num} />
                </div>
                <div className="hero-stats-panel__label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 hidden sm:flex flex-col items-center gap-2 text-white/80 animate-float">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">{shared.scrollDown}</span>
            <span className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-1.5">
              <span className="w-1 h-2 rounded-full bg-[#e83848] hero-scroll-dot" />
            </span>
          </div>
        </div>
      </section>

      <Suspense fallback={<SectionSkeleton />}>
        <AboutPageSections embedded />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CoursesPageSections embedded />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ResultsPageSections embedded />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TeachersPageSections embedded />
      </Suspense>

      <section className="relative py-7 stripe-mesh-dark overflow-hidden group site-nav-marquee border-y border-white/8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#0a1628] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#0a1628] to-transparent" />
        <div className="flex animate-marquee site-nav-marquee__track whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {marqueePages.map((p) => {
                const Icon = p.icon;
                const linkKey = p.hash ?? p.to;
                return (
                  <span key={`${dup}-${linkKey}`} className="flex items-center">
                    {p.hash ? (
                      <Link
                        to="/"
                        hash={p.hash}
                        className="site-marquee-link no-underline flex items-center gap-2.5 font-['Syne'] font-bold text-[15px] sm:text-base px-6 py-1 transition-colors"
                      >
                        <Icon className="w-[18px] h-[18px] text-[#e83848] shrink-0" strokeWidth={2} />
                        {p.label}
                      </Link>
                    ) : (
                      <Link
                        to={p.to}
                        className="site-marquee-link no-underline flex items-center gap-2.5 font-['Syne'] font-bold text-[15px] sm:text-base px-6 py-1 transition-colors"
                      >
                        <Icon className="w-[18px] h-[18px] text-[#e83848] shrink-0" strokeWidth={2} />
                        {p.label}
                      </Link>
                    )}
                    <span className="text-white/25 text-xs px-1">◆</span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="site-section site-section--cream py-20 lg:py-28 relative section-ambient">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.whyUsEyebrow}
            </p>
            <h2 className="stripe-display section-heading text-4xl lg:text-5xl leading-tight">{ui.whyUsTitle}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {whyUs.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="reveal card card-hover feature-card-compact group" data-delay={(i % 4) * 80}>
                  <div className="feature-card-compact__icon bg-gradient-to-br from-[#15233B]/10 to-[#2a5286]/15 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e83848]" strokeWidth={1.8} />
                  </div>
                  <h3 className="feature-card-compact__title card-title group-hover:text-[#e83848] transition-colors">
                    {f.title}
                  </h3>
                  <p className="feature-card-compact__desc section-body">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-section site-section--white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.resultEyebrow}
              </p>
              <h2 className="section-heading font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">{ui.resultTitle}</h2>
              <p className="section-body text-lg leading-relaxed mb-8">{ui.resultBody}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlightStudent.scores.map((sc) => {
                  const pct = LEVEL_PCT[sc.l] ?? 50;
                  return (
                    <div
                      key={sc.s}
                      className="result-score-card reveal rounded-2xl p-5 bg-[var(--surface-soft)] border border-[#15233B]/8 hover:border-[#e83848]/25 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)] transition-all duration-400"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="font-['Syne'] font-extrabold text-2xl text-[#e83848]">{sc.l}</span>
                        <span className="text-[#646F82] text-xs font-semibold">{sc.v}</span>
                      </div>
                      <div className="text-[#546074] text-xs font-medium uppercase tracking-wide mb-3">{sc.s}</div>
                      <div className="score-bar" aria-hidden>
                        <span className="score-bar__fill" style={{ ["--score-pct" as string]: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
              <Link
                to="/"
                hash="natijalar"
                className="inline-flex items-center gap-2 text-[#15233B] font-bold text-sm hover:text-[#e83848] hover:gap-3 transition-all no-underline"
              >
                {shared.allResults}
              </Link>
            </div>

            <div className="reveal" data-delay={150}>
              <div className="relative">
                <div className="card p-10 lg:p-12 text-center bg-gradient-to-br from-white to-[#fcefec]">
                  <div className="inline-flex items-center gap-2 bg-[#e83848]/10 px-4 py-1.5 rounded-full text-[#e83848] text-xs font-bold mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e83848] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e83848]" />
                    </span>
                    {ui.resultBadge}
                  </div>
                  <div className="font-['Syne'] font-extrabold text-[120px] leading-none text-gradient-canada mb-2">
                    {highlightStudent.scores[0]?.l ?? "C2"}
                  </div>
                  <div className="text-[#646F82] text-sm font-semibold mb-8">{ui.resultCert}</div>
                  <p className="text-[#3E4B62] text-base italic leading-relaxed border-t border-[#15233B]/8 pt-8">
                    {ui.resultQuote}
                  </p>
                  <div className="text-[#646F82] text-sm mt-3 font-semibold">{ui.resultAuthor}</div>
                </div>
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-4 border-[#e83848]/15 animate-float" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border-4 border-[#2a5286]/15 animate-float-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section--white py-20 lg:py-28 relative overflow-hidden section-ambient">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16 reveal">
            <p className="eyebrow text-[#e83848] mb-4 justify-center flex">
              <span className="w-8 h-px bg-[#e83848] self-center" /> {ui.processEyebrow}
            </p>
            <h2 className="section-heading font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">{ui.processTitle}</h2>
          </div>

          <ol className="process-timeline">
            {ui.steps.map((s, i) => (
              <li key={s.n} className="process-timeline__item reveal" data-delay={i * 90}>
                <div className="process-timeline__node" aria-hidden>
                  <span>{s.n}</span>
                </div>
                <div className="process-timeline__card card card-hover">
                  <h3 className="font-['Syne'] font-bold text-base sm:text-lg text-[#15233B] mb-1.5">{s.t}</h3>
                  <p className="text-[#546074] text-sm leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-section site-section--cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.faqEyebrow}
              </p>
              <h2 className="section-heading font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">{ui.faqTitle}</h2>
              <p className="section-body text-base leading-relaxed mb-8">{ui.faqBody}</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/faq" className="btn-outline">
                  {shared.allFaq}
                </Link>
                <Link to="/boglanish" className="btn-primary">
                  {shared.contactArrow}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
