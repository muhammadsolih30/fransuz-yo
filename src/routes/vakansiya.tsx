import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { centerStats } from "../lib/site-content";
import { vacancies } from "../lib/vacancy-content";

export const Route = createFileRoute("/vakansiya")({
  head: () => ({
    meta: [
      { title: "Vakansiya — France TCF O'quv Markazi" },
      {
        name: "description",
        content:
          "France TCF o'quv markazida bo'sh ish o'rinlari: fransuz tili o'qituvchisi, administrator, call operator, brand face, SMM menejer.",
      },
    ],
  }),
  component: VakansiyaPage,
});

const perks = [
  "2 ta filial — Oybek metro atrofida",
  "30+ jamoa a'zolari",
  "TCF metodikasi va maxsus darsliklar",
  "Bonus tizimi va professional rivojlanish",
];

function VakansiyaPage() {
  useReveal();
  const [active, setActive] = useState(vacancies[0].id);
  const current = vacancies.find((v) => v.id === active) ?? vacancies[0];

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#E0A526]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4">
            <span className="w-8 h-px bg-[#d62839]" /> Vakansiya
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] mb-6">
            Bizning <span className="text-gradient-canada">jamoa</span>ga qo'shiling
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl mb-8">
            Biz faqat dars beradigan emas, balki natija chiqaradigan jamoa quramiz. Bu yerda siz ham
            professional darajada o'sasiz.
          </p>
          <div className="flex flex-wrap gap-2">
            {centerStats.map((s) => (
              <span
                key={s.label}
                className="bg-[#FAF6EF] border border-[#15233B]/8 px-4 py-2 rounded-full text-sm"
              >
                <strong className="text-[#d62839] font-['Syne']">
                  {s.num}
                  {s.suffix}
                </strong>{" "}
                <span className="text-[#546074]">{s.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VAKANSIYALAR */}
      <section className="py-12 lg:py-20 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Tablar */}
            <div className="lg:col-span-4">
              <div className="reveal flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-28">
                {vacancies.map((v) => {
                  const Icon = v.icon;
                  return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setActive(v.id)}
                    className={`text-left shrink-0 lg:shrink w-auto lg:w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition-all ${
                      active === v.id
                        ? "bg-[#d62839] text-white shadow-[0_10px_30px_-8px_rgba(214,40,57,0.45)]"
                        : "bg-white text-[#15233B] hover:bg-white/70 border border-[#15233B]/8"
                    }`}
                  >
                    <Icon className={`w-6 h-6 shrink-0 ${active === v.id ? "text-white" : "text-[#d62839]"}`} strokeWidth={1.8} />
                    <span>
                      <span className="block font-['Syne'] font-bold text-sm leading-tight">
                        {v.title}
                      </span>
                      <span
                        className={`block text-xs mt-0.5 ${active === v.id ? "text-white/80" : "text-[#646F82]"}`}
                      >
                        {v.format}
                      </span>
                    </span>
                  </button>
                  );
                })}
              </div>
            </div>

            {/* Tafsilot */}
            <div className="lg:col-span-8">
              <div key={current.id} className="card p-6 lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6 pb-6 border-b border-[#15233B]/8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center">
                      <current.icon className="w-7 h-7 text-[#d62839]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h2 className="font-['Syne'] font-extrabold text-2xl">{current.title}</h2>
                      <p className="text-[#646F82] text-sm">
                        {current.format}
                        {current.age ? ` • ${current.age}` : ""}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#a3182a] text-white rounded-2xl px-5 py-3 text-right">
                    <div className="text-white/60 text-[10px] uppercase tracking-wider">Oylik maosh</div>
                    <div className="font-['Syne'] font-bold text-sm">{current.salary}</div>
                  </div>
                </div>

                <p className="text-[#3E4B62] text-sm leading-relaxed mb-8">{current.about}</p>

                <div className="grid sm:grid-cols-2 gap-8">
                  {current.duties && (
                    <div>
                      <h3 className="font-['Syne'] font-bold text-sm mb-4 flex items-center gap-2">
                        <span className="text-[#d62839]">📣</span> Vazifalar
                      </h3>
                      <ul className="space-y-2.5">
                        {current.duties.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-[#3E4B62]">
                            <span className="text-[#d62839] shrink-0">→</span> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h3 className="font-['Syne'] font-bold text-sm mb-4 flex items-center gap-2">
                      <span className="text-[#d62839]">❗</span> Talablar
                    </h3>
                    <ul className="space-y-2.5">
                      {current.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-[#3E4B62]">
                          <span className="text-green-600 shrink-0">✓</span> {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="font-['Syne'] font-bold text-sm mb-4 flex items-center gap-2">
                      <span>🌟</span> Biz taklif qilamiz
                    </h3>
                    <ul className="space-y-2.5">
                      {current.offer.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm text-[#3E4B62]">
                          <span className="text-[#E0A526] shrink-0">✦</span> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {current.schedule && (
                    <div>
                      <h3 className="font-['Syne'] font-bold text-sm mb-4 flex items-center gap-2">
                        <span>⏰</span> Ish vaqti
                      </h3>
                      <ul className="space-y-2.5">
                        {current.schedule.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-[#3E4B62]">
                            <span className="text-[#15233B] shrink-0">•</span> {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-10 pt-8 border-t border-[#15233B]/8 flex flex-col sm:flex-row gap-3">
                  <Link to="/boglanish" className="btn-primary no-underline text-center">
                    Ariza yuborish →
                  </Link>
                  <a
                    href="https://t.me/France_TCF"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline no-underline text-center"
                  >
                    💬 Telegram orqali yozish
                  </a>
                </div>
              </div>

              <div className="reveal card p-6 mt-6 bg-gradient-to-br from-[#a3182a] to-[#6e1019] text-white">
                <h3 className="font-['Syne'] font-bold text-base mb-4">Nima uchun bizda ishlash?</h3>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/85">
                      <span className="text-[#E0A526]">✦</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
