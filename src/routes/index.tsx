import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "France TCF O'quv Markazi — Fransuz tili orqali Kanadaga" },
      { name: "description", content: "TCF Canada imtihoniga professional tayyorgarlik." },
    ],
  }),
  component: HomePage,
});

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let cur = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else setCount(Math.floor(cur));
          }, 30);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { num: 100, suffix: "+", label: "O'quvchilar" },
  { num: 30000, suffix: "+", label: "2025 kvotasi" },
  { num: 6, suffix: " oy", label: "Kurs davomiyligi" },
  { num: 10, suffix: "+", label: "Yil tajriba" },
];

const features = [
  {
    icon: "🎯",
    title: "TCF Canada tayyorgarlik",
    desc: "Listening, Reading, Writing, Speaking — barcha bo'limlar bo'yicha strategiyalar va maxsus metodika.",
  },
  {
    icon: "👨‍🏫",
    title: "C1+ o'qituvchilar",
    desc: "10 yildan ortiq pedagogik tajribaga ega, native speaker va xalqaro sertifikatli mutaxassislar.",
  },
  {
    icon: "📅",
    title: "Moslashuvchan jadval",
    desc: "Offline, online, mini-guruh va individual — siz tanlagan vaqt va formatda darslar.",
  },
  {
    icon: "🇨🇦",
    title: "Immigratsiya yo'nalishi",
    desc: "Express Entry dasturi va hujjatlar bo'yicha umumiy yo'nalish va maslahat.",
  },
  {
    icon: "📊",
    title: "Ball optimallashtirish",
    desc: "Yosh, ta'lim va ingliz tili balingizga qarab maksimal CRS ball strategiyasi.",
  },
  {
    icon: "🏆",
    title: "Kafolatlangan natija",
    desc: "O'quvchilarimiz 1 oyda B1 dan C2 gacha — haqiqiy sertifikatlar bilan tasdiqlangan.",
  },
];

const steps = [
  { n: "01", t: "Murojaat qiling", d: "Telefon yoki Telegram orqali bog'laning" },
  { n: "02", t: "Daraja aniqlanadi", d: "Boshlang'ich test orqali darajangiz belgilanadi" },
  { n: "03", t: "Kursni boshlaysiz", d: "Qulay format va jadvalda darslar boshlanadi" },
  { n: "04", t: "TCF topshirasiz", d: "B2+ natija bilan imtihondan o'tasiz" },
  { n: "05", t: "Kanadaga yo'l", d: "Express Entry orqali PR jarayoni boshlanadi" },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Gradient orqa fon */}
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, #E8192C 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: "radial-gradient(ellipse, #003DA5 0%, transparent 70%)" }}
          />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur px-4 py-2 rounded-full text-xs text-white/70 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E8192C] animate-pulse" />
              2025 — 30,000 kvota tasdiqlangan • Kanada hukumati ma'lumoti
            </div>

            <h1
              className="font-['Syne'] font-black leading-[1.0] tracking-tight mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
            >
              Fransuz tili
              <br />
              orqali
              <br />
              <span className="text-[#E8192C]">Kanadaga.</span>
            </h1>

            <p className="text-white/50 text-xl leading-relaxed mb-10 max-w-xl">
              TCF Canada imtihoniga professional tayyorgarlik. Offline, online, mini-guruh va
              individual darslar.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/boglanish"
                className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white font-semibold px-8 py-4 rounded-xl text-sm transition-all hover:scale-105 active:scale-95"
              >
                Bepul maslahat olish →
              </Link>
              <Link
                to="/kurslar"
                className="no-underline border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded-xl text-sm transition-all"
              >
                Kurslar haqida
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-white animate-pulse" />
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="border-y border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-black px-10 py-10 text-center hover:bg-white/[0.03] transition-colors"
              >
                <div className="font-['Syne'] font-black text-5xl text-[#E8192C] mb-2">
                  <CountUp target={s.num} suffix={s.suffix} />
                </div>
                <div className="text-white/40 text-sm tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Nima beramiz
              </p>
              <h2 className="font-['Syne'] font-black text-5xl md:text-6xl leading-none">
                Bizni ajratib
                <br />
                turadi
              </h2>
            </div>
            <Link
              to="/kurslar"
              className="no-underline text-white/50 hover:text-white text-sm transition-colors self-start md:self-auto"
            >
              Barcha kurslar →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`bg-black p-10 hover:bg-white/[0.03] transition-all group ${i === 1 ? "md:border-t-2 md:border-[#E8192C]" : ""}`}
              >
                <div className="text-4xl mb-6">{f.icon}</div>
                <h3 className="font-['Syne'] font-bold text-xl mb-3 group-hover:text-[#E8192C] transition-colors">
                  {f.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 1 OYLIK NATIJA ═══ */}
      <section className="py-28 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Haqiqiy natija
              </p>
              <h2 className="font-['Syne'] font-black text-5xl md:text-6xl leading-none mb-6">
                1 oyda
                <br />
                B1 → <span className="text-[#E8192C]">C2</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-10">
                O'quvchimiz Dilnura Saidbekova — faqat 1 oy o'qib, TCF Canada imtihonida C2 darajaga
                erishdi.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {[
                  {
                    s: "Listening",
                    l: "C2",
                    c: "border-green-500/30 bg-green-500/5 text-green-400",
                  },
                  { s: "Reading", l: "C2", c: "border-green-500/30 bg-green-500/5 text-green-400" },
                  { s: "Writing", l: "B2", c: "border-blue-500/30 bg-blue-500/5 text-blue-400" },
                  { s: "Speaking", l: "B2", c: "border-blue-500/30 bg-blue-500/5 text-blue-400" },
                ].map((sc) => (
                  <div key={sc.s} className={`border rounded-xl p-4 ${sc.c}`}>
                    <div className="font-['Syne'] font-black text-2xl">{sc.l}</div>
                    <div className="text-xs opacity-70 mt-1">{sc.s}</div>
                  </div>
                ))}
              </div>
              <Link
                to="/natijalar"
                className="no-underline inline-flex items-center gap-2 text-white border-b border-white/30 hover:border-white pb-1 text-sm transition-all"
              >
                Barcha natijalar →
              </Link>
            </div>

            {/* Sertifikat karta */}
            <div className="relative">
              <div className="bg-white/[0.03] border border-white/8 rounded-3xl p-10 text-center">
                <div className="inline-flex items-center gap-2 bg-[#E8192C]/10 border border-[#E8192C]/20 px-4 py-1.5 rounded-full text-[#E8192C] text-xs mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] animate-pulse" />1 oylik
                  natija
                </div>
                <div className="font-['Syne'] font-black text-8xl text-[#E8192C] mb-2">C2</div>
                <div className="text-white/40 text-sm mb-8">TCF Canada • April 2026</div>
                <div className="text-white/60 text-sm italic border-t border-white/5 pt-6">
                  "Finally 🎉 Alhamdulillah. Rahmat ustoz!"
                </div>
                <div className="text-white/30 text-xs mt-2">— Dilnura Saidbekova</div>
              </div>
              {/* Decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#E8192C]/20 opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border border-white/10 opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ JARAYON ═══ */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Jarayon
            </p>
            <h2 className="font-['Syne'] font-black text-5xl md:text-6xl leading-none">
              Qanday ishlaydi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5">
            {steps.map((s, i) => (
              <div key={s.n} className="bg-black p-8 hover:bg-white/[0.03] transition-colors group">
                <div className="font-['Syne'] font-black text-5xl text-white/8 mb-6 group-hover:text-[#E8192C]/20 transition-colors">
                  {s.n}
                </div>
                <h3 className="font-['Syne'] font-bold text-base mb-2">{s.t}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{s.d}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-white/20 text-lg">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                FAQ
              </p>
              <h2 className="font-['Syne'] font-black text-5xl md:text-6xl leading-none mb-6">
                Ko'p
                <br />
                so'raladigan
                <br />
                savollar
              </h2>
              <p className="text-white/40 text-sm leading-relaxed">
                Qo'shimcha savollaringiz bo'lsa — bizga murojaat qiling.
              </p>
              <Link
                to="/boglanish"
                className="no-underline mt-8 inline-flex bg-[#E8192C] text-white text-sm font-medium px-6 py-3 rounded-xl transition-all hover:bg-[#c4111f]"
              >
                Bog'lanish →
              </Link>
            </div>
            <div className="flex flex-col gap-1">
              {[
                {
                  q: "Fransuz tilini qancha vaqtda o'rganish mumkin?",
                  a: "3–4 oyda (baza yaxshi bo'lsa) yoki 6–12 oy. Nomzodning qobiliyatiga qarab.",
                },
                {
                  q: "TCF Canada uchun qanday daraja kerak?",
                  a: "Kamida B2 daraja (NLC Level 7). Listening, Reading, Writing, Speaking — barchasidan.",
                },
                {
                  q: "Kurs qancha turadi?",
                  a: "Offline: 700–800 ming, Online: 490 ming, Mini-guruh: 900 ming, Individual: 1,200,000 so'm/oy.",
                },
                {
                  q: "Oiladan bir kishi bilsa yetadimi?",
                  a: "Ha, yetarli. Turmush qurmagan nomzod uchun ball yanada yuqori chiqadi.",
                },
                {
                  q: "Viza olishga qancha vaqt ketadi?",
                  a: "Sertifikat olgandan keyin o'rtacha 5–6 oy. 1 oy hujjat, 4–5 oy elchixonada ko'rib chiqish.",
                },
                {
                  q: "Jami qancha xarajat ketadi?",
                  a: "Barcha xarajatlar (elchixona, hujjat, tibbiy ko'rik, xizmat haqi) bilan jami $7,000–8,000.",
                },
              ].map((f, i) => (
                <details key={i} className="group border-b border-white/5">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                    <span className="font-['Syne'] font-semibold text-sm text-white/80 group-open:text-white transition-colors">
                      {f.q}
                    </span>
                    <span className="text-[#E8192C] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="text-white/45 text-sm leading-relaxed pb-5">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/8 p-16 text-center">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(232,25,44,0.15) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="font-['Syne'] font-black text-5xl md:text-7xl leading-none mb-6">
                Tayyor
                <br />
                <span className="text-[#E8192C]">boshlashga?</span>
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
                Birinchi qadam — fransuz tilini o'rganish. Biz siz bilan to'liq yo'lda.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/boglanish"
                  className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white font-semibold px-10 py-5 rounded-xl text-base transition-all hover:scale-105"
                >
                  Hozir boshlash →
                </Link>
                <a
                  href="tel:+998772200809"
                  className="no-underline border border-white/20 hover:border-white/50 text-white font-medium px-10 py-5 rounded-xl text-base transition-all"
                >
                  +998 77 220 08 09
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
