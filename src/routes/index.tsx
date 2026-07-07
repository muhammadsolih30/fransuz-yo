import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
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
import { HeroVideoBg } from "../components/HeroVideoBg";
import { PageMeta } from "../components/PageMeta";
import { AboutPageSections } from "../components/sections/AboutPageSections";
import { CoursesPageSections } from "../components/sections/CoursesPageSections";
import { ResultsPageSections } from "../components/sections/ResultsPageSections";
import { TeachersPageSections } from "../components/sections/TeachersPageSections";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { useHashScroll } from "../hooks/useHashScroll";
import { useReducedMotion } from "../hooks/useReducedMotion";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const headingPalettes = [
  ["#15233b", "#e83848", "#15233b"],
  ["#e83848", "#e0a526", "#e83848"],
  ["#15233b", "#2a5286", "#e83848"],
  ["#e84858", "#15233b", "#e0a526"],
];

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

function TypedHeading({ segments }: { segments: readonly string[] }) {
  const reducedMotion = useReducedMotion();
  const [cycle, setCycle] = useState(0);

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
      className="font-['Syne'] font-extrabold text-[clamp(2.7rem,7vw,5.6rem)] leading-[1.02] mb-6 hero-text-halo"
    >
      {segments.map((seg, si) => (
        <span key={si} style={{ color: colors[si], transition: "color 0.4s ease" }}>
          {reducedMotion
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
      ))}
    </h1>
  );
}

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
    <div className="bg-white text-[#15233B] overflow-hidden">
      <PageMeta page="home" />

      <section className="hero-section relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#faf6ef]">
        <HeroVideoBg videoId="HfTkZmKK1b0" rate={1.2} endTrim={15} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf6ef]/5 to-[#faf6ef]/45" />
        <div className="absolute -top-32 -right-20 w-[600px] h-[600px] rounded-full bg-[#e83848]/10 blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-[#E0A526]/10 blur-[120px] animate-float" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
          <div className="chip mb-7 animate-slide-up-sm border-[#e83848]/15 text-[#e83848]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e83848] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e83848]" />
            </span>
            🇫🇷 {centerClaim.replace("France TCF — ", "")} 🇨🇦
          </div>

          <TypedHeading segments={ui.headingSegments} />

          <p className="hero-tagline text-lg lg:text-xl leading-relaxed mb-9 max-w-2xl mx-auto animate-slide-up delay-500 font-semibold">
            {heroTagline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10 animate-slide-up delay-300">
            <Link to="/boglanish" className="btn-primary">
              {shared.freeConsultation}
              <span aria-hidden>→</span>
            </Link>
            <Link to="/immigratsiya" className="btn-outline">
              {shared.expressEntry}
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 animate-slide-up delay-400">
            {ui.trustBadges.map((b) => (
              <div
                key={b}
                className="flex items-center gap-2 text-sm text-[#15233B] font-semibold bg-white/70 backdrop-blur-sm border border-white/60 px-3.5 py-1.5 rounded-full shadow-sm"
              >
                <span className="text-[#E0A526]">✦</span>
                {b}
              </div>
            ))}
          </div>

          <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur-md shadow-[var(--shadow-card)] animate-scale-in delay-500">
            {ui.heroStats.map((s) => (
              <div key={s.label} className="bg-white/40 px-4 py-5">
                <div className="font-['Syne'] font-extrabold text-2xl lg:text-3xl text-gradient-canada">{s.num}</div>
                <div className="text-[#546074] text-xs font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 hidden sm:flex flex-col items-center gap-2 text-[#646F82] animate-float">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">{shared.scrollDown}</span>
            <span className="w-6 h-10 rounded-full border-2 border-[#15233B]/20 flex items-start justify-center p-1.5">
              <span className="w-1 h-2 rounded-full bg-[#e83848]" />
            </span>
          </div>
        </div>
      </section>

      <AboutPageSections embedded />
      <CoursesPageSections embedded />
      <ResultsPageSections embedded />
      <TeachersPageSections embedded />

      <section className="relative py-7 bg-gradient-to-r from-[#ec5058] via-[#e83848] to-[#ec5058] overflow-hidden group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#e83848] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#e83848] to-transparent" />
        <div className="flex animate-marquee [animation-duration:22s] whitespace-nowrap group-hover:[animation-play-state:paused]">
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
                        <Icon className="w-[18px] h-[18px] text-[#FFD666] shrink-0" strokeWidth={2} />
                        {p.label}
                      </Link>
                    ) : (
                      <Link
                        to={p.to}
                        className="site-marquee-link no-underline flex items-center gap-2.5 font-['Syne'] font-bold text-[15px] sm:text-base px-6 py-1 transition-colors"
                      >
                        <Icon className="w-[18px] h-[18px] text-[#FFD666] shrink-0" strokeWidth={2} />
                        {p.label}
                      </Link>
                    )}
                    <span className="text-[#FFD666]/50 text-xs px-1">◆</span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.whyUsEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">{ui.whyUsTitle}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="reveal card card-hover p-7 group" data-delay={(i % 4) * 80}>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-[#e83848]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-['Syne'] font-bold text-base mb-2 group-hover:text-[#e83848] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-[#3E4B62] text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.resultEyebrow}
              </p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">{ui.resultTitle}</h2>
              <p className="text-[#3E4B62] text-lg leading-relaxed mb-8">{ui.resultBody}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlightStudent.scores.map((sc) => (
                  <div
                    key={sc.s}
                    className="rounded-2xl p-5 bg-[#FAF6EF] border border-[#15233B]/8 hover:border-[#e83848]/25 hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-['Syne'] font-extrabold text-2xl text-[#e83848]">{sc.l}</span>
                      <span className="text-[#646F82] text-xs font-semibold">{sc.v}</span>
                    </div>
                    <div className="text-[#546074] text-xs font-medium uppercase tracking-wide">{sc.s}</div>
                  </div>
                ))}
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
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-4 border-[#E0A526]/30 animate-float" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border-4 border-[#e83848]/20 animate-float-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="eyebrow text-[#e83848] mb-4 justify-center flex">
              <span className="w-8 h-px bg-[#e83848] self-center" /> {ui.processEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">{ui.processTitle}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {ui.steps.map((s, i) => (
              <div key={s.n} className="reveal card card-hover relative p-7" data-delay={i * 90}>
                <div className="font-['Syne'] font-extrabold text-5xl text-[#e83848]/15 mb-4">{s.n}</div>
                <h3 className="font-['Syne'] font-bold text-lg mb-2 text-[#15233B]">{s.t}</h3>
                <p className="text-[#3E4B62] text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.faqEyebrow}
              </p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">{ui.faqTitle}</h2>
              <p className="text-[#3E4B62] text-base leading-relaxed mb-8">{ui.faqBody}</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/faq" className="btn-outline">
                  {shared.allFaq}
                </Link>
                <Link to="/boglanish" className="btn-primary">
                  {shared.contactArrow}
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-3">
              {faqs.map((f, i) => (
                <details key={i} className="reveal group card overflow-hidden" data-delay={i * 60}>
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-['Syne'] font-bold text-base group-open:text-[#e83848] transition-colors pr-4">
                      {f.q}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e83848]/10 text-[#e83848] flex items-center justify-center text-xl group-open:rotate-45 group-open:bg-[#e83848] group-open:text-white transition-all duration-300">
                      +
                    </span>
                  </summary>
                  <p className="text-[#3E4B62] text-sm leading-relaxed px-6 pb-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
