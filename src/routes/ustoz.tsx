import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/ustoz")({
  head: () => ({
    meta: [
      { title: "Ustozlar — France TCF O'quv Markazi" },
      { name: "description", content: "C1–C2 darajali tajribali fransuz tili ustozlari va native mentorlar." },
    ],
  }),
  component: UstozPage,
});

const teachers = [
  {
    emoji: "👨‍🏫",
    name: "Bosh ustoz",
    role: "TCF / TEF Canada mutaxassisi",
    level: "C1–C2",
    exp: "Ko'p yillik tajriba",
    desc: "Fransuz tilidan TCF Canada, DELF, DALF sertifikatlariga tayyorlash bo'yicha keng tajribaga ega. Express Entry strategiyasini chuqur biladi.",
    skills: ["Speaking", "Writing", "Grammar", "TCF strategiya"],
  },
  {
    emoji: "👩‍🏫",
    name: "Native mentor",
    role: "Speaking & Listening",
    level: "Native",
    exp: "Xalqaro tajriba",
    desc: "Talaffuz va jonli muloqot ko'nikmalarini rivojlantirishga ixtisoslashgan native speaker mentor. Tabiiy fransuzcha muhit yaratadi.",
    skills: ["Listening", "Speaking", "Talaffuz", "Suhbat"],
  },
];

const values = [
  { icon: "🎯", t: "Maqsadli yondashuv", d: "Har bir o'quvchining darajasi va maqsadiga moslashtirilgan dastur." },
  { icon: "📊", t: "Natijaga yo'naltirilgan", d: "TCF Canada B2+ (CLB 7) natijaga erishish — asosiy vazifamiz." },
  { icon: "🤝", t: "To'liq qo'llab-quvvatlash", d: "Kurs davomida va imtihongacha doimiy yordam va maslahat." },
  { icon: "🌍", t: "Xalqaro standartlar", d: "CEFR va TCF mezonlariga to'liq mos zamonaviy metodika." },
];

const certs = ["TCF Canada", "TEF Canada", "DELF", "DALF", "Milliy sertifikat"];

function UstozPage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6EF] via-white to-[#eaf0f8]" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#15233B]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#d62839]" /> Ustozlar
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
            <span className="text-gradient-canada">C1–C2</span> darajali ustozlar
          </h1>
          <p className="text-[#15233B]/70 text-lg max-w-2xl animate-slide-up delay-200">
            Tajribali fransuz tili ustozlari va native mentorlar bilan TCF Canada uchun
            professional tayyorgarlik.
          </p>
        </div>
      </section>

      {/* USTOZLAR */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-7">
            {teachers.map((t, i) => (
              <div key={t.name} className="reveal card card-hover p-8 lg:p-10 group" data-delay={i * 100}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                    {t.emoji}
                  </div>
                  <span className="bg-[#15233B] text-white font-['Syne'] font-bold text-sm px-4 py-2 rounded-xl">{t.level}</span>
                </div>
                <h3 className="font-['Syne'] font-extrabold text-2xl mb-1 group-hover:text-[#d62839] transition-colors">{t.name}</h3>
                <p className="text-[#15233B]/55 text-sm mb-1">{t.role}</p>
                <p className="text-[#15233B]/45 text-xs mb-6">⏱️ {t.exp}</p>
                <p className="text-[#15233B]/70 text-sm leading-relaxed mb-6">{t.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.map((s) => (
                    <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FAF6EF] border border-[#15233B]/8 text-[#15233B]/70">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sertifikatlar lentasi */}
          <div className="reveal mt-10 card p-8 bg-gradient-to-br from-[#15233B] to-[#1d3a5f] text-white">
            <p className="text-white/60 text-sm font-semibold mb-5 text-center">Biz tayyorlaydigan sertifikatlar</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {certs.map((c) => (
                <span key={c} className="flex items-center gap-2 bg-white/10 border border-white/15 px-5 py-2.5 rounded-xl font-['Syne'] font-bold text-sm">
                  <span className="text-[#E0A526]">✦</span> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QADRIYATLAR */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> Yondashuv</p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              Nima uchun <span className="text-gradient-canada">biz?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.t} className="reveal card card-hover p-8 group" data-delay={(i % 4) * 90}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eaf0f8] to-[#d6e3f3] flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform">{v.icon}</div>
                <h3 className="font-['Syne'] font-bold text-lg mb-3 group-hover:text-[#d62839] transition-colors">{v.t}</h3>
                <p className="text-[#15233B]/65 text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#15233B] via-[#1d3a5f] to-[#d62839] p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.25),transparent_50%)]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-white">
                Ustozlar bilan boshlang
              </h2>
              <p className="text-white/85 text-lg mb-10">
                Tajribali ustozlarimiz bilan TCF Canada yo'lini birgalikda bosib o'tamiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/boglanish" className="btn-gold">Bog'lanish →</Link>
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
