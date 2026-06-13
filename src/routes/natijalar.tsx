import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/natijalar")({
  head: () => ({
    meta: [
      { title: "Natijalar — France TCF O'quv Markazi" },
      { name: "description", content: "O'quvchilarimizning haqiqiy TCF Canada natijalari." },
    ],
  }),
  component: NatijalarPage,
});

const levelColor: Record<string, string> = {
  C2: "text-emerald-700 bg-emerald-50 border-emerald-200",
  C1: "text-emerald-700 bg-emerald-50 border-emerald-200",
  B2: "text-blue-700 bg-blue-50 border-blue-200",
  B1: "text-amber-700 bg-amber-50 border-amber-200",
};

const results = [
  {
    name: "Dilnura Saidbekova",
    period: "1 oy",
    from: "B1",
    cert: "TCF Canada",
    date: "2026",
    quote: "Finally 🎉 Alhamdulillah. Rahmat ustoz, sizga ham bergan ilmlaringizga 🤗",
    scores: [
      { s: "Listening", l: "C2", v: "699/699" },
      { s: "Reading", l: "C2", v: "699/699" },
      { s: "Writing", l: "B2", v: "11/20" },
      { s: "Speaking", l: "B2", v: "10/20" },
    ],
    highlight: true,
  },
  {
    name: "Moxinur Salomatova",
    period: "Jarayonda",
    from: "A2",
    cert: "Milliy sertifikat",
    date: "2025",
    quote: "",
    scores: [
      { s: "Listening", l: "B1", v: "55" },
      { s: "Reading", l: "B1", v: "50" },
      { s: "Writing", l: "B1", v: "51" },
      { s: "Speaking", l: "B1", v: "38" },
    ],
    highlight: false,
  },
];

const tcfLevels = [
  { level: "A1–A2", l: "0–180", r: "0–180", c: "text-orange-600" },
  { level: "B1", l: "181–297", r: "181–297", c: "text-amber-600" },
  { level: "B2", l: "298–457", r: "298–457", c: "text-blue-600" },
  { level: "C1", l: "458–502", r: "453–498", c: "text-emerald-600" },
  { level: "C2", l: "503–699", r: "499–699", c: "text-green-600" },
];

const stats = [
  { n: "100+", l: "Bizning o'quvchilar" },
  { n: "B2+", l: "O'rtacha natija" },
  { n: "1 oy", l: "Eng tez natija" },
  { n: "C2", l: "Eng yuqori daraja" },
];

function NatijalarPage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6EF] via-white to-[#fcefec]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#d62839]" /> Natijalar
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
            Haqiqiy <span className="text-gradient-canada">natijalar</span>
          </h1>
          <p className="text-[#15233B]/70 text-lg max-w-2xl animate-slide-up delay-200">
            Har bir natija haqiqiy sertifikat bilan tasdiqlangan. Biz reklama emas, ish bilan
            gaplashamiz.
          </p>
          <a
            href="https://t.me/Fransuzu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-7 text-[#d62839] font-bold text-sm hover:gap-3 transition-all no-underline animate-slide-up delay-300"
          >
            📊 Barcha natijalar kanali: @Fransuzu →
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 lg:py-20 bg-white border-y border-[#15233B]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s, i) => (
              <div key={s.l} className="reveal text-center" data-delay={i * 80}>
                <div className="font-['Syne'] font-extrabold text-5xl lg:text-6xl text-gradient-canada mb-2">{s.n}</div>
                <div className="text-[#15233B]/60 text-sm font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATIJALAR */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> Sertifikatlar</p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              O'quvchilar <span className="text-gradient-canada">natijalari</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-7">
            {results.map((r, idx) => (
              <div
                key={r.name}
                className={`reveal card p-8 lg:p-10 ${r.highlight ? "ring-2 ring-[#d62839] shadow-[var(--shadow-glow)]" : "card-hover"}`}
                data-delay={idx * 100}
              >
                {r.highlight && (
                  <div className="inline-flex items-center gap-2 bg-[#d62839]/10 px-4 py-1.5 rounded-full text-[#d62839] text-xs font-bold mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d62839] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d62839]" />
                    </span>
                    1 OYLIK NATIJA
                  </div>
                )}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="font-['Syne'] font-extrabold text-2xl">{r.name}</h3>
                    <p className="text-[#15233B]/50 text-sm mt-1">{r.cert} • {r.date} • {r.period}</p>
                  </div>
                  <div className="text-right bg-[#FAF6EF] rounded-xl px-4 py-2">
                    <div className="text-[#15233B]/45 text-xs">Boshlang'ich</div>
                    <div className="font-['Syne'] font-bold text-[#15233B] text-lg">{r.from}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {r.scores.map((sc) => (
                    <div key={sc.s} className={`border rounded-2xl p-4 ${levelColor[sc.l] || "border-gray-200"} transition-all hover:scale-105`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold opacity-70">{sc.s}</span>
                        <span className="text-xs font-bold">{sc.l}</span>
                      </div>
                      <div className="font-['Syne'] font-extrabold text-xl">{sc.v}</div>
                    </div>
                  ))}
                </div>
                {r.quote && (
                  <p className="text-[#15233B]/70 text-sm italic leading-relaxed border-t border-[#15233B]/8 pt-6">"{r.quote}"</p>
                )}
              </div>
            ))}
          </div>

          <div className="reveal mt-7 card border-2 border-dashed border-[#15233B]/15 bg-transparent p-12 text-center">
            <div className="font-['Syne'] font-extrabold text-5xl text-[#15233B]/15 mb-3">+</div>
            <p className="text-[#15233B]/50 text-sm">Yangi natijalar muntazam qo'shilib boriladi...</p>
          </div>
        </div>
      </section>

      {/* TCF JADVALI */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> Ma'lumotnoma</p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                TCF ball <span className="text-gradient-canada">darajalari</span>
              </h2>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#15233B]/80 text-sm leading-relaxed">
                  💡 Kanada uchun kamida <strong>B2 daraja (CLB 7)</strong> talab qilinadi.
                </p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={150}>
              <div className="grid grid-cols-3 bg-[#15233B] px-6 py-4">
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Daraja</span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider text-center">Listening</span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider text-center">Reading</span>
              </div>
              {tcfLevels.map((row, i) => (
                <div key={row.level} className={`grid grid-cols-3 px-6 py-4 items-center ${i < tcfLevels.length - 1 ? "border-b border-[#15233B]/8" : ""} hover:bg-[#FAF6EF] transition-colors`}>
                  <span className={`font-['Syne'] font-extrabold ${row.c}`}>{row.level}</span>
                  <span className="text-[#15233B]/60 text-sm text-center">{row.l}</span>
                  <span className="text-[#15233B]/60 text-sm text-center">{row.r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#d62839] via-[#c01f2e] to-[#15233B] p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.25),transparent_50%)]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-white">
                Keyingi natija — sizniki!
              </h2>
              <p className="text-white/85 text-lg mb-10">
                Siz ham TCF Canada sertifikatiga ega bo'lishingiz mumkin. Hoziroq boshlang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/boglanish" className="btn-gold">Hozir boshlash →</Link>
                <Link to="/kurslar" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all no-underline backdrop-blur-sm">
                  Kurslarni ko'rish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
