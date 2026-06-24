import { createFileRoute, Link } from "@tanstack/react-router";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/natijalar")({
  head: () => ({
    meta: [
      { title: "Natijalar — France TCF O'quv Markazi" },
      { name: "description", content: "O'quvchilarimizning haqiqiy TCF Canada natijalari va sertifikatlar." },
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

const feedbacks = [
  {
    name: "Dilnura Saidbekova",
    text: "Finally 🎉 Alhamdulillah. Rahmat ustoz, sizga ham bergan ilmlaringizga 🤗",
    cert: "TCF Canada — C2",
    rating: 5,
  },
  {
    name: "O'quvchi",
    text: "Markaz metodikasi juda aniq. 2 ta kitob va intensive guruh orqali tez natija oldim.",
    cert: "TCF Canada",
    rating: 5,
  },
  {
    name: "O'quvchi",
    text: "Speaking club va qo'shimcha o'qituvchi tufayli gapirish ko'nikmam sezilarli oshdi.",
    cert: "TCF Canada",
    rating: 5,
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
  { n: "500+", l: "Faol o'quvchilar" },
  { n: "3000+", l: "Bitiruvchilar" },
  { n: "1 oy", l: "Eng tez natija" },
  { n: "C2", l: "Eng yuqori daraja" },
];

function NatijalarPage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/opening/natijalarBo%27limi.png')", opacity: 0.95 }}
        />
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4">
            <span className="w-8 h-px bg-[#d62839]" /> Natijalar
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6">
            Haqiqiy <span className="text-gradient-canada">natijalar</span>
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl">
            Har bir natija haqiqiy sertifikat bilan tasdiqlangan. Sertifikat rasmlari va feedbacklar
            muntazam qo'shilmoqda.
          </p>
          <a
            href="https://t.me/Fransuzu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-7 text-[#d62839] font-bold text-sm hover:gap-3 transition-all no-underline"
          >
            📊 Barcha natijalar kanali: @Fransuzu →
          </a>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-y border-[#15233B]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((s, i) => (
              <div key={s.l} className="reveal text-center" data-delay={i * 80}>
                <div className="font-['Syne'] font-extrabold text-5xl lg:text-6xl text-gradient-canada mb-2">
                  {s.n}
                </div>
                <div className="text-[#546074] text-sm font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERTIFIKAT RASMLARI */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Sertifikatlar
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              Sertifikat <span className="text-gradient-canada">rasmlari</span>
            </h2>
            <p className="text-[#546074] text-sm mt-4">
              Haqiqiy sertifikat rasmlari tez orada joylashtiriladi. Hozircha natija ma'lumotlari
              ko'rsatilgan.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {results.map((r, idx) => (
              <div
                key={r.name}
                className={`reveal card p-6 lg:p-8 ${r.highlight ? "ring-2 ring-[#d62839] shadow-[var(--shadow-glow)]" : ""}`}
                data-delay={idx * 100}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <MediaPlaceholder
                    type="certificate"
                    label={`${r.name} — ${r.cert}`}
                    sublabel="Sertifikat rasmi tez orada"
                  />
                  <div>
                    {r.highlight && (
                      <div className="inline-flex items-center gap-2 bg-[#d62839]/10 px-3 py-1 rounded-full text-[#d62839] text-[10px] font-bold mb-4">
                        ⭐ 1 OYLIK NATIJA
                      </div>
                    )}
                    <h3 className="font-['Syne'] font-extrabold text-xl mb-1">{r.name}</h3>
                    <p className="text-[#646F82] text-xs mb-4">
                      {r.cert} • {r.date} • {r.period}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {r.scores.map((sc) => (
                        <div
                          key={sc.s}
                          className={`border rounded-xl p-3 ${levelColor[sc.l] || "border-gray-200"}`}
                        >
                          <div className="text-[10px] font-semibold opacity-70">{sc.s}</div>
                          <div className="font-['Syne'] font-extrabold text-lg">{sc.l}</div>
                          <div className="text-[10px]">{sc.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <MediaPlaceholder
                key={n}
                type="certificate"
                label={`Sertifikat #${n}`}
                sublabel="Rasm tez orada qo'shiladi"
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Feedback
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              O'quvchilar <span className="text-gradient-canada">fikrlari</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {feedbacks.map((f, i) => (
              <div key={`${f.name}-${i}`} className="reveal card card-hover p-7 flex flex-col" data-delay={i * 90}>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: f.rating }).map((_, j) => (
                    <span key={j} className="text-[#E0A526] text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[#3E4B62] text-sm leading-relaxed italic flex-1 mb-6">
                  "{f.text}"
                </p>
                <div className="border-t border-[#15233B]/8 pt-4">
                  <div className="font-['Syne'] font-bold text-sm">{f.name}</div>
                  <div className="text-[#646F82] text-xs">{f.cert}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal mt-6 card border-2 border-dashed border-[#15233B]/15 p-8 text-center">
            <p className="text-[#646F82] text-sm">
              Video feedback va qo'shimcha sharhlar tez orada qo'shiladi...
            </p>
          </div>
        </div>
      </section>

      {/* TCF JADVALI */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> Ma'lumotnoma
              </p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                TCF ball <span className="text-gradient-canada">darajalari</span>
              </h2>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#2C3850] text-sm leading-relaxed">
                  💡 Kanada uchun kamida <strong>B2 daraja (NCLC 7+)</strong> talab qilinadi. Biz CLB
                  8+ maqsad qilamiz.
                </p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={150}>
              <div className="grid grid-cols-3 bg-[#a3182a] px-6 py-4">
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Daraja</span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider text-center">
                  Listening
                </span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider text-center">
                  Reading
                </span>
              </div>
              {tcfLevels.map((row, i) => (
                <div
                  key={row.level}
                  className={`grid grid-cols-3 px-6 py-4 items-center ${i < tcfLevels.length - 1 ? "border-b border-[#15233B]/8" : ""} hover:bg-[#FAF6EF] transition-colors`}
                >
                  <span className={`font-['Syne'] font-extrabold ${row.c}`}>{row.level}</span>
                  <span className="text-[#546074] text-sm text-center">{row.l}</span>
                  <span className="text-[#546074] text-sm text-center">{row.r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#e23344] via-[#d62839] to-[#ae1b2a] p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-white">
                Keyingi natija — sizniki!
              </h2>
              <p className="text-white/85 text-lg mb-10">
                Siz ham TCF Canada sertifikatiga ega bo'lishingiz mumkin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/boglanish" className="btn-gold no-underline">
                  Hozir boshlash →
                </Link>
                <Link
                  to="/probniy-dars"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all no-underline"
                >
                  Probniy dars
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
