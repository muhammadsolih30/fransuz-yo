import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgePercent, ClipboardList, Gauge, Play, UserCheck } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/probniy-dars")({
  head: () => ({
    meta: [
      { title: "Probniy dars — France TCF O'quv Markazi" },
      {
        name: "description",
        content: "Fransuz tili bo'yicha bepul sinov darsi. TCF Canada kurslarini sinab ko'ring.",
      },
    ],
  }),
  component: ProbniyDarsPage,
});

const benefits = [
  {
    icon: Gauge,
    title: "Darajangizni bilasiz",
    desc: "Boshlang'ich test orqali hozirgi fransuz tili darajangiz aniqlanadi.",
  },
  {
    icon: UserCheck,
    title: "Ustoz bilan tanishasiz",
    desc: "TCF Canada mutaxassisi bilan jonli dars — metodikamizni sinab ko'rasiz.",
  },
  {
    icon: ClipboardList,
    title: "Shaxsiy reja",
    desc: "Maqsadingizga (TCF Canada, immigratsiya) mos o'quv rejasi tavsiya qilinadi.",
  },
  {
    icon: BadgePercent,
    title: "Mutlaqo bepul",
    desc: "Probniy dars va konsultatsiya bepul — hech qanday majburiyat yo'q.",
  },
];

const steps = [
  "Bog'lanish sahifasida ariza qoldiring yoki Telegram orqali yozing",
  "Admin siz bilan bog'lanib, qulay vaqtni kelishadi",
  "Online yoki offline formatda 30–45 daqiqalik probniy dars",
  "Natija va keyingi qadamlar bo'yicha maslahat olish",
];

function ProbniyDarsPage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6EF] via-white to-[#fcefec]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#d62839]/10 border border-[#d62839]/20 px-4 py-2 rounded-full text-xs font-bold text-[#d62839] mb-6">
                🆓 Bepul • Online & Offline
              </div>
              <h1 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4rem)] leading-[1.02] mb-5">
                <span className="text-gradient-canada">Probniy dars</span> — bepul sinab ko'ring
              </h1>
              <p className="text-[#3E4B62] text-lg leading-relaxed mb-8">
                TCF Canada kurslarimiz qanday o'tishini o'zingiz ko'ring. Birinchi dars bepul —
                darajangizni aniqlaymiz va sizga mos yo'nalishni tavsiya qilamiz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/boglanish" className="btn-primary no-underline">
                  Probniy darsga yozilish →
                </Link>
                <a
                  href="https://t.me/France_TCF"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline no-underline"
                >
                  💬 Telegram
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="card p-8 lg:p-10 bg-gradient-to-br from-white to-[#FAF6EF] border-2 border-[#d62839]/15">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#a3182a] to-[#6e1019] flex flex-col items-center justify-center text-white mb-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,40,57,0.3),transparent_70%)]" />
                  <div className="relative z-10 text-center px-6">
                    <div className="w-16 h-16 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4 border border-white/20">
                      <Play className="w-7 h-7 text-white" fill="currentColor" strokeWidth={0} />
                    </div>
                    <p className="font-['Syne'] font-bold text-lg">Dars jarayoni</p>
                    <p className="text-white/70 text-sm mt-1">Video tez orada qo'shiladi</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {steps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-[#3E4B62]">
                      <span className="shrink-0 w-7 h-7 rounded-lg bg-[#d62839] text-white font-['Syne'] font-bold text-xs flex items-center justify-center">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E0A526] text-[#15233B] font-bold text-sm px-4 py-2 rounded-2xl shadow-xl animate-float">
                Bepul 🎁
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Nima olasiz
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl leading-tight">
              Probniy darsda <span className="text-gradient-canada">nima bo'ladi?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
              <div key={b.title} className="reveal card card-hover p-7" data-delay={i * 80}>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#d62839]" strokeWidth={1.8} />
                </div>
                <h3 className="font-['Syne'] font-bold text-base mb-2">{b.title}</h3>
                <p className="text-[#3E4B62] text-sm leading-relaxed">{b.desc}</p>
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
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-5xl text-white mb-5">
                Bugun probniy darsga yoziling
              </h2>
              <p className="text-white/85 text-lg mb-8">
                O'rinlar cheklangan — hoziroq ariza qoldiring.
              </p>
              <Link to="/boglanish" className="btn-gold no-underline">
                Ro'yxatdan o'tish →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
