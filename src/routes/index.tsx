import { createFileRoute, Link } from "@tanstack/react-router";
import { CountUp } from "../components/CountUp";
import { useReveal } from "../hooks/useReveal";

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

const stats = [
  { num: 30000, suffix: "+", label: "2025 yil PR kvotasi" },
  { num: 50, suffix: " ball", label: "Fransuz tili bonusi" },
  { num: 399, suffix: "", label: "Oxirgi saralash bali" },
  { num: 100, suffix: "+", label: "Bizning o'quvchilar" },
];

const features = [
  {
    icon: "🍁",
    title: "Eng oson yo'l",
    desc: "Fransuz tili Kanadaga ishlash yoki o'qish uchun ketishning eng oson va ishonchli yo'li.",
  },
  {
    icon: "🎯",
    title: "+50 CRS ball",
    desc: "Fransuz tili bilan qo'shimcha 50 ball, kamroq raqobat va maxsus French-speaking tanlovlar.",
  },
  {
    icon: "👩‍🏫",
    title: "C1–C2 ustozlar",
    desc: "Yuqori darajali, tajribali ustozlar va native speaker mentorlar bilan jonli darslar.",
  },
  {
    icon: "📜",
    title: "Rasmiy sertifikatlar",
    desc: "TCF Canada, TEF Canada, DELF, DALF va Milliy sertifikatga to'liq tayyorgarlik.",
  },
  {
    icon: "💻",
    title: "Online & Offline",
    desc: "Sizga qulay formatda — masofadan yoki Oybek metrodagi darsxonamizda.",
  },
  {
    icon: "🚀",
    title: "Natijaga yo'naltirilgan",
    desc: "B2 (CLB 7) va undan yuqori — Express Entry uchun yetarli balgacha olib chiqamiz.",
  },
];

const steps = [
  { n: "01", t: "Murojaat qiling", d: "Telefon yoki Telegram orqali bepul maslahat oling" },
  { n: "02", t: "Daraja aniqlanadi", d: "Boshlang'ich test orqali darajangiz belgilanadi" },
  { n: "03", t: "Kursni boshlaysiz", d: "Qulay format va jadvalda darslar boshlanadi" },
  { n: "04", t: "TCF / TEF topshirasiz", d: "B2+ (CLB 7) natija bilan imtihondan o'tasiz" },
  { n: "05", t: "Kanadaga yo'l", d: "Express Entry orqali PR jarayoni boshlanadi" },
];

const faqs = [
  {
    q: "Express Entry nima?",
    a: "Express Entry — Kanadaning asosiy immigratsiya tizimi. U orqali Kanadaga doimiy yashash (PR), ishlash va keyin fuqarolik olish mumkin.",
  },
  {
    q: "Fransuz tili nega katta PLUS?",
    a: "Kanada fransuz tilini qattiq qo'llab-quvvatlaydi: qo'shimcha 50 ball (CRS), kamroq raqobat va maxsus French-speaking tanlovlar (draws) mavjud.",
  },
  {
    q: "Qanday daraja kerak?",
    a: "Fransuz tilidan minimum B2 (CLB 7). TCF Canada yoki TEF Canada imtihoni topshiriladi. Qanchalik yuqori bo'lsa — shuncha yaxshi.",
  },
  {
    q: "Inglizsiz ham bo'ladimi?",
    a: "Ha. Inglizsiz ham mumkin, lekin ingliz tili (hatto IELTS 5) bo'lsa profil yanada kuchli bo'ladi. Fransuz + ingliz = juda kuchli profil.",
  },
  {
    q: "Yoshga talab bormi?",
    a: "Ideal: 20–35 yosh. 40 dan keyin ball kamayadi, lekin baribir mumkin. 35 dan katta bo'lsangiz, ingliz va fransuz tilini bilishingiz tavsiya etiladi.",
  },
  {
    q: "Yiliga qancha kishi qabul qilinadi?",
    a: "Fransuz tili orqali yiliga 20 000 – 30 000 kishi PR oladi. Trend har yili o'smoqda: 2022 (~6,200) → 2025 (~30,000+).",
  },
];

function HomePage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        {/* Background image — Kanada & Fransiya */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/opening/ckanada%20va%20firansiya.png')",
            opacity: 0.95,
          }}
        />
        <div className="absolute -top-32 -right-20 w-[600px] h-[600px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-[#15233B]/10 blur-[120px] animate-float" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-white border border-[#d62839]/15 px-4 py-2 rounded-full text-xs font-semibold text-[#d62839] mb-7 shadow-sm animate-slide-up-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d62839] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d62839]" />
                </span>
                🍁 2025 — 30 000+ kvota • Express Entry ochiq
              </div>

              <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
                Fransuz tili
                <br />
                orqali{" "}
                <span className="text-gradient-canada">Kanadaga</span>
              </h1>

              <p className="text-[#15233B] text-lg lg:text-xl leading-relaxed mb-9 max-w-xl animate-slide-up delay-200 font-medium bg-white/65 backdrop-blur-md border border-white/60 rounded-2xl px-5 py-4 shadow-sm">
                Kanadaga ishlash yoki o'qish uchun ketishning eng oson yo'li — fransuz tili.
                Express Entry tizimida <span className="font-bold text-[#d62839]">+50 ball</span> va
                kamroq raqobat. TCF Canada'ga professional tayyorgarlik.
              </p>

              <div className="flex flex-wrap gap-4 mb-12 animate-slide-up delay-300">
                <Link to="/boglanish" className="btn-primary">
                  Bepul maslahat olish
                  <span aria-hidden>→</span>
                </Link>
                <Link to="/immigratsiya" className="btn-outline">
                  Express Entry haqida
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 animate-slide-up delay-400">
                {["TCF Canada", "TEF Canada", "DELF · DALF", "Milliy sertifikat"].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-[#15233B] font-semibold bg-white/70 backdrop-blur-sm border border-white/60 px-3.5 py-1.5 rounded-full shadow-sm">
                    <span className="text-[#E0A526]">✦</span>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual card */}
            <div className="lg:col-span-5 animate-scale-in delay-300">
              <div className="relative">
                <div className="card p-8 lg:p-10 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#d62839] flex items-center justify-center text-2xl shadow-[0_8px_20px_-6px_rgba(213,43,30,0.5)]">
                        🍁
                      </div>
                      <div>
                        <div className="font-['Syne'] font-bold text-base">CRS Profilingiz</div>
                        <div className="text-[#15233B]/50 text-xs">Express Entry hisoblagich</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full">
                      Yetarli
                    </span>
                  </div>

                  <div className="space-y-5">
                    {[
                      { label: "Fransuz tili (B2–C1)", val: 88, color: "bg-[#d62839]" },
                      { label: "Yosh (20–35)", val: 95, color: "bg-[#15233B]" },
                      { label: "Ta'lim (Bakalavr+)", val: 80, color: "bg-[#E0A526]" },
                      { label: "Ingliz tili (bonus)", val: 60, color: "bg-[#2a5286]" },
                    ].map((bar, i) => (
                      <div key={bar.label}>
                        <div className="flex justify-between text-xs font-semibold mb-2">
                          <span className="text-[#15233B]/70">{bar.label}</span>
                          <span className="text-[#15233B]">{bar.val}%</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-[#15233B]/8 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${bar.color}`}
                            style={{
                              width: `${bar.val}%`,
                              animation: `slide-up 1.2s ease-out ${i * 0.15}s both`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#15233B]/8 flex items-center justify-between">
                    <span className="text-[#15233B]/60 text-sm font-medium">Taxminiy CRS ball</span>
                    <span className="font-['Syne'] font-extrabold text-3xl text-gradient-canada">
                      400–470+
                    </span>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-5 -right-4 bg-[#E0A526] text-[#15233B] font-bold text-sm px-4 py-2.5 rounded-2xl shadow-xl animate-float z-20">
                  +50 ball 🎯
                </div>
                <div className="absolute -bottom-5 -left-4 bg-white border border-[#15233B]/10 text-[#15233B] font-bold text-xs px-4 py-2.5 rounded-2xl shadow-xl animate-float-slow z-20">
                  🇨🇦 PR maqomi
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ MARQUEE ════════════ */}
      <section className="py-6 bg-[#15233B] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-10 px-5 shrink-0">
              {[
                "🍁 Express Entry",
                "🇫🇷 Fransuz tili +50 ball",
                "📜 TCF Canada",
                "✦ DELF · DALF",
                "🇨🇦 Doimiy yashash (PR)",
                "🎓 C1–C2 ustozlar",
                "💼 Ishlash imkoniyati",
              ].map((t) => (
                <span key={t} className="text-white/70 font-semibold text-sm tracking-wide">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ STATS ════════════ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal text-center p-6 rounded-3xl bg-[#FAF6EF] border border-[#15233B]/6 hover:border-[#d62839]/20 hover:shadow-[var(--shadow-card)] transition-all duration-500"
                data-delay={i * 80}
              >
                <div className="font-['Syne'] font-extrabold text-4xl lg:text-5xl text-gradient-canada mb-2">
                  <CountUp target={s.num} suffix={s.suffix} />
                </div>
                <div className="text-[#15233B]/60 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
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
              Kanada yo'lida <span className="text-gradient-canada">ishonchli hamroh</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="reveal card card-hover p-8 group"
                data-delay={(i % 3) * 100}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                  {f.icon}
                </div>
                <h3 className="font-['Syne'] font-bold text-xl mb-3 group-hover:text-[#d62839] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[#15233B]/65 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
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
                1 oyda B1 dan{" "}
                <span className="text-gradient-canada">C2</span> gacha
              </h2>
              <p className="text-[#15233B]/70 text-lg leading-relaxed mb-8">
                O'quvchimiz Dilnura Saidbekova — atigi 1 oy o'qib, TCF Canada imtihonida C2
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
                      <span className="text-[#15233B]/50 text-xs font-semibold">{sc.v}</span>
                    </div>
                    <div className="text-[#15233B]/60 text-xs font-medium uppercase tracking-wide">{sc.s}</div>
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
                    1 OYLIK NATIJA
                  </div>
                  <div className="font-['Syne'] font-extrabold text-[120px] leading-none text-gradient-canada mb-2">
                    C2
                  </div>
                  <div className="text-[#15233B]/50 text-sm font-semibold mb-8">TCF Canada • 2026</div>
                  <p className="text-[#15233B]/75 text-base italic leading-relaxed border-t border-[#15233B]/8 pt-8">
                    "Finally 🎉 Alhamdulillah. Rahmat ustoz!"
                  </p>
                  <div className="text-[#15233B]/50 text-sm mt-3 font-semibold">— Dilnura Saidbekova</div>
                </div>
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border-4 border-[#E0A526]/30 animate-float" />
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full border-4 border-[#d62839]/20 animate-float-slow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ JARAYON ════════════ */}
      <section className="py-20 lg:py-28 bg-[#15233B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#d62839]/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#E0A526]/10 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="eyebrow text-[#E0A526] mb-4 justify-center flex">
              <span className="w-8 h-px bg-[#E0A526] self-center" /> Jarayon
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              5 qadamda Kanadaga
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-7 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500"
                data-delay={i * 90}
              >
                <div className="font-['Syne'] font-extrabold text-5xl text-white/15 mb-4">{s.n}</div>
                <h3 className="font-['Syne'] font-bold text-lg mb-2">{s.t}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.d}</p>
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
              <p className="text-[#15233B]/65 text-base leading-relaxed mb-8">
                Express Entry va fransuz tili haqida eng muhim savollar. Boshqa savol bo'lsa —
                bizga yozing.
              </p>
              <Link to="/boglanish" className="btn-primary">
                Bog'lanish →
              </Link>
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
                  <p className="text-[#15233B]/65 text-sm leading-relaxed px-6 pb-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#d62839] via-[#c01f2e] to-[#15233B] p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.25),transparent_50%)]" />
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
