import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
import { useReveal } from "../hooks/useReveal";
import {
  centerClaim,
  heroTagline,
  whyUs,
} from "../lib/site-content";
import { generalFaq } from "../lib/faq-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "France TCF O'quv Markazi — Fransuz tili orqali Kanadaga" },
      {
        name: "description",
        content:
          "Fransuz tili orqali Kanadaga Express Entry. TCF Canada, DELF, DALF imtihonlariga C1-C2 darajali ustozlardan professional tayyorgarlik.",
      },
    ],
  }),
  component: HomePage,
});

const steps = [
  { n: "01", t: "Murojaat qiling", d: "Telefon yoki Telegram orqali bepul konsultatsiya oling" },
  { n: "02", t: "Daraja aniqlanadi", d: "Boshlang'ich test orqali darajangiz belgilanadi" },
  { n: "03", t: "Kursni boshlaysiz", d: "Intensive guruh yoki individual formatda darslar boshlanadi" },
  { n: "04", t: "TCF topshirasiz", d: "CLB 8+ (B2+) natija bilan TCF Canada imtihonidan o'tasiz" },
  { n: "05", t: "Kanadaga yo'l", d: "Express Entry orqali PR jarayoni boshlanadi" },
];

const faqs = generalFaq.slice(0, 6);

const marqueePages = [
  { to: "/haqimizda", label: "Biz haqimizda", icon: Info },
  { to: "/kurslar", label: "Kurs narxlar", icon: GraduationCap },
  { to: "/natijalar", label: "Natijalar", icon: Trophy },
  { to: "/ustoz", label: "Ustozlar", icon: Users },
  { to: "/immigratsiya", label: "Immigratsiya", icon: Plane },
  { to: "/faq", label: "FAQ", icon: HelpCircle },
  { to: "/probniy-dars", label: "Probniy dars", icon: Gift },
  { to: "/vakansiya", label: "Vakansiya", icon: Briefcase },
  { to: "/ommaviy-oferta", label: "Oferta", icon: FileText },
  { to: "/galereya", label: "Galereya", icon: ImageIcon },
  { to: "/boglanish", label: "Bog'lanish", icon: Phone },
] as const;

/** Sarlavhani harf-harflab, har 5 soniyada har xil rangda qayta chiqaruvchi komponent */
const headingSegments = ["Biz bilan ", "Kanada va Fransiyaga ", "ilk qadam"];

const headingPalettes = [
  ["#15233b", "#d62839", "#15233b"],
  ["#d62839", "#e0a526", "#d62839"],
  ["#15233b", "#2a5286", "#d62839"],
  ["#ae1b2a", "#15233b", "#e0a526"],
];

function TypedHeading() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycle((c) => c + 1), 5000);
    return () => clearInterval(id);
  }, []);

  const colors = headingPalettes[cycle % headingPalettes.length];
  let charIndex = 0;
  const startDelay = 0.1;
  const step = 0.03;

  return (
    <h1
      key={cycle}
      data-no-reveal
      className="font-['Syne'] font-extrabold text-[clamp(2.7rem,7vw,5.6rem)] leading-[1.02] mb-6 hero-text-halo"
    >
      {headingSegments.map((seg, si) => (
        <span key={si} style={{ color: colors[si], transition: "color 0.4s ease" }}>
          {Array.from(seg).map((ch, ci) => {
            const delay = startDelay + charIndex * step;
            charIndex += 1;
            return (
              <span
                key={`${si}-${ci}`}
                className="char"
                style={{ animationDelay: `${delay}s` }}
              >
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
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#faf6ef]">
        <HeroVideoBg videoId="HfTkZmKK1b0" rate={1.2} endTrim={15} />
        {/* Juda yengil overlay — video tiniq ko'rinadi, matn esa o'qiladi */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf6ef]/5 to-[#faf6ef]/45" />
        <div className="absolute -top-32 -right-20 w-[600px] h-[600px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-[#E0A526]/10 blur-[120px] animate-float" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
          <div className="chip mb-7 animate-slide-up-sm border-[#d62839]/15 text-[#d62839]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d62839] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d62839]" />
            </span>
            🇫🇷 {centerClaim.replace("France TCF — ", "")} 🇨🇦
          </div>

          <TypedHeading />

          <p className="text-[#3E4B62] text-lg lg:text-xl leading-relaxed mb-9 max-w-2xl mx-auto animate-slide-up delay-500 font-medium hero-text-halo">
            {heroTagline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10 animate-slide-up delay-300">
            <Link to="/boglanish" className="btn-primary">
              Bepul maslahat olish
              <span aria-hidden>→</span>
            </Link>
            <Link to="/immigratsiya" className="btn-outline">
              Express Entry haqida
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12 animate-slide-up delay-400">
            {["TCF Canada", "TEF Canada", "DELF · DALF", "Milliy sertifikat"].map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-[#15233B] font-semibold bg-white/70 backdrop-blur-sm border border-white/60 px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="text-[#E0A526]">✦</span>
                {b}
              </div>
            ))}
          </div>

          {/* Hero stat strip */}
          <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-white/60 bg-white/60 backdrop-blur-md shadow-[var(--shadow-card)] animate-scale-in delay-500">
            {[
              { num: "2", label: "Filiallar" },
              { num: "4 yil", label: "Tajriba" },
              { num: "500+", label: "O'quvchilar" },
              { num: "3000+", label: "Bitiruvchilar" },
            ].map((s) => (
              <div key={s.label} className="bg-white/40 px-4 py-5">
                <div className="font-['Syne'] font-extrabold text-2xl lg:text-3xl text-gradient-canada">
                  {s.num}
                </div>
                <div className="text-[#546074] text-xs font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll cue */}
          <div className="mt-12 hidden sm:flex flex-col items-center gap-2 text-[#646F82] animate-float">
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase">Pastga</span>
            <span className="w-6 h-10 rounded-full border-2 border-[#15233B]/20 flex items-start justify-center p-1.5">
              <span className="w-1 h-2 rounded-full bg-[#d62839]" />
            </span>
          </div>
        </div>
      </section>

      {/* ════════════ MARQUEE — sahifalar ════════════ */}
      <section className="relative py-6 bg-gradient-to-r from-[#d62839] via-[#c01f2e] to-[#ae1b2a] overflow-hidden group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#d62839] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#ae1b2a] to-transparent" />
        <div className="flex animate-marquee [animation-duration:18s] whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {marqueePages.map((p) => {
                const Icon = p.icon;
                return (
                  <span key={`${dup}-${p.to}`} className="flex items-center">
                    <Link
                      to={p.to}
                      className="no-underline flex items-center gap-2 text-white/75 hover:text-[#E0A526] font-['Syne'] font-bold text-base px-5 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#E0A526]" strokeWidth={1.8} />
                      {p.label}
                    </Link>
                    <span className="text-[#E0A526]/40 text-xs">◆</span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ FEATURES ════════════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Nega biz
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              Nega aynan <span className="text-gradient-canada">bizni tanlashadi?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="reveal card card-hover p-7 group"
                  data-delay={(i % 4) * 80}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-[#d62839]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-['Syne'] font-bold text-base mb-2 group-hover:text-[#d62839] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-[#3E4B62] text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════ NATIJA HIGHLIGHT ════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> Haqiqiy natija
              </p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                6 oyda B1 dan{" "}
                <span className="text-gradient-canada">C2</span> gacha
              </h2>
              <p className="text-[#3E4B62] text-lg leading-relaxed mb-8">
                O'quvchimiz Dilnura Saidbekova — 6 oy o'qib, TCF Canada imtihonida C2
                darajaga erishdi. Bu reklama emas, haqiqiy sertifikat bilan tasdiqlangan natija.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { s: "Listening", l: "C2", v: "699/699" },
                  { s: "Reading", l: "C2", v: "699/699" },
                  { s: "Writing", l: "B2", v: "11/20" },
                  { s: "Speaking", l: "B2", v: "10/20" },
                ].map((sc) => (
                  <div key={sc.s} className="rounded-2xl p-5 bg-[#FAF6EF] border border-[#15233B]/8 hover:border-[#d62839]/25 hover:-translate-y-1 transition-all">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-['Syne'] font-extrabold text-2xl text-[#d62839]">{sc.l}</span>
                      <span className="text-[#646F82] text-xs font-semibold">{sc.v}</span>
                    </div>
                    <div className="text-[#546074] text-xs font-medium uppercase tracking-wide">{sc.s}</div>
                  </div>
                ))}
              </div>
              <Link to="/natijalar" className="inline-flex items-center gap-2 text-[#15233B] font-bold text-sm hover:text-[#d62839] hover:gap-3 transition-all no-underline">
                Barcha natijalar →
              </Link>
            </div>

            <div className="reveal" data-delay={150}>
              <div className="relative">
                <div className="card p-10 lg:p-12 text-center bg-gradient-to-br from-white to-[#fcefec]">
                  <div className="inline-flex items-center gap-2 bg-[#d62839]/10 px-4 py-1.5 rounded-full text-[#d62839] text-xs font-bold mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d62839] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d62839]" />
                    </span>
                    6 OYLIK NATIJA
                  </div>
                  <div className="font-['Syne'] font-extrabold text-[120px] leading-none text-gradient-canada mb-2">
                    C2
                  </div>
                  <div className="text-[#646F82] text-sm font-semibold mb-8">TCF Canada • 2026</div>
                  <p className="text-[#3E4B62] text-base italic leading-relaxed border-t border-[#15233B]/8 pt-8">
                    "Finally 🎉 Alhamdulillah. Rahmat ustoz!"
                  </p>
                  <div className="text-[#646F82] text-sm mt-3 font-semibold">— Dilnura Saidbekova</div>
                </div>
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-4 border-[#E0A526]/30 animate-float" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border-4 border-[#d62839]/20 animate-float-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ JARAYON ════════════ */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="eyebrow text-[#d62839] mb-4 justify-center flex">
              <span className="w-8 h-px bg-[#d62839] self-center" /> Jarayon
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              CLB 8+ ga — <span className="text-gradient-canada">5 qadamda</span> Kanadaga
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal card card-hover relative p-7"
                data-delay={i * 90}
              >
                <div className="font-['Syne'] font-extrabold text-5xl text-[#d62839]/15 mb-4">{s.n}</div>
                <h3 className="font-['Syne'] font-bold text-lg mb-2 text-[#15233B]">{s.t}</h3>
                <p className="text-[#3E4B62] text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FAQ ════════════ */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal">
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> FAQ
              </p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                Ko'p so'raladigan savollar
              </h2>
              <p className="text-[#3E4B62] text-base leading-relaxed mb-8">
                TCF Canada va kurslar haqida eng muhim savollar. Barcha FAQ uchun alohida sahifaga
                o'ting.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/faq" className="btn-outline">
                  Barcha FAQ →
                </Link>
                <Link to="/boglanish" className="btn-primary">
                  Bog'lanish →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-3">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="reveal group card overflow-hidden"
                  data-delay={i * 60}
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-['Syne'] font-bold text-base group-open:text-[#d62839] transition-colors pr-4">
                      {f.q}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d62839]/10 text-[#d62839] flex items-center justify-center text-xl group-open:rotate-45 group-open:bg-[#d62839] group-open:text-white transition-all duration-300">
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

      {/* ════════════ CTA ════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#e23344] via-[#d62839] to-[#ae1b2a] p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,165,38,0.30),transparent_50%)]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-float" />
            <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#E0A526]/20 blur-3xl animate-float-slow" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="text-5xl mb-6">🍁</div>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-white">
                Kanada orzungizni boshlang
              </h2>
              <p className="text-white/85 text-lg lg:text-xl mb-10 leading-relaxed">
                Birinchi qadam — fransuz tili. Biz sizni Express Entry uchun kerakli balgacha
                professional tarzda olib chiqamiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/boglanish" className="btn-gold">
                  Hozir boshlash →
                </Link>
                <a href="tel:+998947382221" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all no-underline backdrop-blur-sm">
                  📞 +998 94 738 22 21
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
