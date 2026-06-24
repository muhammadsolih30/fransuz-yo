import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, HeartHandshake, Target, TrendingUp } from "lucide-react";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
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
    name: "Bosh ustoz",
    role: "TCF / TEF Canada mutaxassisi",
    level: "C1–C2",
    exp: "10+ yil tajriba",
    desc: "Fransuz tilidan TCF Canada, DELF, DALF sertifikatlariga tayyorlash bo'yicha keng tajribaga ega. Express Entry strategiyasini chuqur biladi.",
    skills: ["Speaking", "Writing", "Grammar", "TCF strategiya"],
  },
  {
    name: "Native mentor",
    role: "Speaking & Listening",
    level: "Native",
    exp: "Xalqaro tajriba",
    desc: "Talaffuz va jonli muloqot ko'nikmalarini rivojlantirishga ixtisoslashgan native speaker mentor. Tabiiy fransuzcha muhit yaratadi.",
    skills: ["Listening", "Speaking", "Talaffuz", "Suhbat"],
  },
  {
    name: "Qo'shimcha o'qituvchi",
    role: "Individual support",
    level: "C1+",
    exp: "Har bir o'quvchi bilan",
    desc: "Darsdan tashqari har bir o'quvchi bilan individual ishlaydi. Zaif tomonlarga alohida e'tibor qaratadi.",
    skills: ["Individual", "Academic support", "Mock test", "Feedback"],
  },
];

const values = [
  { icon: Target, t: "Maqsadli yondashuv", d: "Har bir o'quvchining darajasi va maqsadiga moslashtirilgan dastur." },
  { icon: TrendingUp, t: "Natijaga yo'naltirilgan", d: "TCF Canada CLB 8+ natijaga erishish — asosiy vazifamiz." },
  { icon: HeartHandshake, t: "To'liq qo'llab-quvvatlash", d: "Kurs davomida va imtihongacha doimiy yordam va maslahat." },
  { icon: Globe, t: "Xalqaro standartlar", d: "CEFR va TCF mezonlariga to'liq mos zamonaviy metodika." },
];

const certs = [
  "TCF Canada",
  "TEF Canada",
  "DELF",
  "DALF",
  "TCF Tout Public",
  "TCF Québec",
  "Milliy sertifikat",
];

function UstozPage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/opening/ustozlarBo%27limi.png')", opacity: 0.95 }}
        />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#E0A526]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4">
            <span className="w-8 h-px bg-[#d62839]" /> Ustozlar
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6">
            <span className="text-gradient-canada">C1–C2</span> darajali ustozlar
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl">
            30+ xodim, tajribali ustozlar va native mentorlar. Rasm va videolar tez orada qo'shiladi.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-7">
            {teachers.map((t, i) => (
              <div key={t.name} className="reveal card card-hover overflow-hidden group" data-delay={i * 100}>
                <MediaPlaceholder
                  type="photo"
                  label={t.name}
                  sublabel="Ustoz rasmi tez orada"
                  aspect="video"
                  className="rounded-none border-0 border-b-2 border-dashed border-[#15233B]/10"
                />
                <div className="p-6 lg:p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-['Syne'] font-extrabold text-xl mb-1 group-hover:text-[#d62839] transition-colors">
                        {t.name}
                      </h3>
                      <p className="text-[#546074] text-sm">{t.role}</p>
                    </div>
                    <span className="bg-[#a3182a] text-white font-['Syne'] font-bold text-xs px-3 py-1.5 rounded-lg shrink-0">
                      {t.level}
                    </span>
                  </div>
                  <p className="text-[#646F82] text-xs mb-4">⏱️ {t.exp}</p>
                  <p className="text-[#3E4B62] text-sm leading-relaxed mb-5">{t.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {t.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FAF6EF] border border-[#15233B]/8 text-[#3E4B62]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <MediaPlaceholder
                    type="video"
                    label={`${t.name} — tanishtiruv`}
                    sublabel="Video tez orada qo'shiladi"
                    aspect="video"
                    className="rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 card p-8 bg-gradient-to-br from-[#a3182a] to-[#6e1019] text-white">
            <p className="text-white/80 text-sm font-semibold mb-5 text-center">
              Biz tayyorlaydigan sertifikatlar
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {certs.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-xl font-['Syne'] font-bold text-xs sm:text-sm"
                >
                  <span className="text-[#E0A526]">✦</span> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Yondashuv
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              Nima uchun <span className="text-gradient-canada">biz?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
              <div key={v.t} className="reveal card card-hover p-8 group" data-delay={(i % 4) * 90}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eaf0f8] to-[#d6e3f3] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                  <Icon className="w-7 h-7 text-[#15233B]" strokeWidth={1.8} />
                </div>
                <h3 className="font-['Syne'] font-bold text-lg mb-3 group-hover:text-[#d62839] transition-colors">
                  {v.t}
                </h3>
                <p className="text-[#3E4B62] text-sm leading-relaxed">{v.d}</p>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#e23344] via-[#d62839] to-[#ae1b2a] p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-white">
                Ustozlar bilan boshlang
              </h2>
              <p className="text-white/85 text-lg mb-10">
                Probniy dars orqali ustozlarimiz bilan tanishing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/probniy-dars" className="btn-gold no-underline">
                  Probniy dars →
                </Link>
                <Link
                  to="/kurslar"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all no-underline"
                >
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
