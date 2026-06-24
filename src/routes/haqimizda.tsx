import { createFileRoute, Link } from "@tanstack/react-router";
import { CountUp } from "../components/CountUp";
import { useReveal } from "../hooks/useReveal";
import { centerClaim, centerStats, heroTagline, whyUs } from "../lib/site-content";

export const Route = createFileRoute("/haqimizda")({
  head: () => ({
    meta: [
      { title: "Biz haqimizda — France TCF O'quv Markazi" },
      {
        name: "description",
        content:
          "France TCF — O'zbekistondagi eng yirik fransuz tili o'quv markazi. 4 yillik tajriba, 500+ o'quvchi, 3000+ bitiruvchi.",
      },
    ],
  }),
  component: HaqimizdaPage,
});

const milestones = [
  {
    year: "2022",
    title: "Markaz tashkil etildi",
    desc: "Fransuz tili va TCF Canada yo'nalishida professional o'quv markazi sifatida faoliyat boshlandi.",
  },
  {
    year: "2023",
    title: "Metodika ishlab chiqildi",
    desc: "TCF uchun 0–B2 darajasigacha 2 ta maxsus darslik va intensive guruh dasturi yaratildi.",
  },
  {
    year: "2024",
    title: "Ikkinchi filial",
    desc: "O'quvchilar soni o'sishi bilan ikkinchi filial ochildi. Online va offline formatlar kengaytirildi.",
  },
  {
    year: "2026",
    title: "Eng yirik markaz",
    desc: "O'zbekistondagi eng yirik fransuz tili o'quv markazi sifatida 500+ faol o'quvchi va 3000+ bitiruvchi.",
  },
];

function HaqimizdaPage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#d62839]" /> Biz haqimizda
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] mb-6 animate-slide-up delay-100">
            {centerClaim.split(" — ")[0]}{" "}
            <span className="text-gradient-canada">eng yirik</span> fransuz tili markazi
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-3xl animate-slide-up delay-200 leading-relaxed">
            {heroTagline} Biz faqat til tayyorgarligi bilan shug'ullanamiz — TCF Canada, DELF, DALF va
            Express Entry yo'lida professional hamrohlik.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {centerStats.map((s, i) => (
              <div
                key={s.label}
                className="reveal text-center p-5 lg:p-6 rounded-3xl bg-white border border-[#15233B]/6 hover:border-[#d62839]/20 hover:shadow-[var(--shadow-card)] transition-all duration-500"
                data-delay={i * 70}
              >
                <div className="font-['Syne'] font-extrabold text-3xl lg:text-4xl text-gradient-canada mb-2">
                  <CountUp target={s.num} suffix={s.suffix} />
                </div>
                <div className="text-[#546074] text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> Bizning vazifamiz
              </p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                Fransuz tilini <span className="text-gradient-canada">CLB 8+</span> darajaga olib chiqish
              </h2>
              <p className="text-[#3E4B62] text-base leading-relaxed mb-5">
                France TCF o'quv markazi o'quvchilarni kamida B2 (CLB 7) darajadan boshlab, CLB 8 va undan
                yuqori natijaga erishishga yo'naltiradi. Speaking, listening, reading, writing, grammar va
                vocabulary bo'yicha to'liq dastur.
              </p>
              <p className="text-[#3E4B62] text-base leading-relaxed">
                C1–C2 darajali ustozlar, native speaker mentorlar va xalqaro imtihon bo'yicha tajribali
                mutaxassislar bilan ishlaymiz. Hujjat ishlari bilan shug'ullanmaymiz — faqat til
                tayyorgarligi.
              </p>
            </div>
            <div className="reveal space-y-4" data-delay={120}>
              {milestones.map((m) => (
                <div
                  key={m.year}
                  className="card p-6 flex gap-5 hover:border-[#d62839]/20 transition-colors"
                >
                  <div className="font-['Syne'] font-extrabold text-2xl text-[#d62839] shrink-0 w-16">
                    {m.year}
                  </div>
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg mb-1">{m.title}</h3>
                    <p className="text-[#3E4B62] text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
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
                <div key={f.title} className="reveal card card-hover p-7 group" data-delay={(i % 4) * 80}>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
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

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#e23344] via-[#d62839] to-[#ae1b2a] p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-5xl leading-tight mb-5 text-white">
                Bepul maslahat oling
              </h2>
              <p className="text-white/85 text-lg mb-8">
                Kanada yo'lida birinchi qadam — biz bilan bog'laning.
              </p>
              <Link to="/boglanish" className="btn-gold">
                Bog'lanish →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
