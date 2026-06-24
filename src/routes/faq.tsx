import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import { useReveal } from "../hooks/useReveal";
import { generalFaq, immigrationFaq } from "../lib/faq-content";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Ko'p so'raladigan savollar | France TCF" },
      {
        name: "description",
        content:
          "TCF Canada, kurslar va Kanada immigratsiyasi bo'yicha ko'p so'raladigan savollar va javoblar.",
      },
    ],
  }),
  component: FaqPage,
});

const tabs = [
  { id: "general", label: "Umumiy FAQ", count: generalFaq.length },
  { id: "immigration", label: "Immigratsiya FAQ", count: immigrationFaq.length },
] as const;

type TabId = (typeof tabs)[number]["id"];

function FaqPage() {
  useReveal();
  const [tab, setTab] = useState<TabId>("general");

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#FAF6EF]">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#d62839]/10 blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4">
            <span className="w-8 h-px bg-[#d62839]" /> FAQ
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] mb-5">
            Ko'p so'raladigan <span className="text-gradient-canada">savollar</span>
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl">
            TCF Canada, kurslar va Kanada immigratsiyasi haqida eng muhim savollar va batafsil
            javoblar.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal flex flex-wrap gap-2 mb-10 p-1.5 bg-[#FAF6EF] rounded-2xl border border-[#15233B]/8">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex-1 min-w-[140px] px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  tab === t.id
                    ? "bg-[#d62839] text-white shadow-[0_8px_24px_-8px_rgba(214,40,57,0.5)]"
                    : "text-[#3E4B62] hover:bg-white"
                }`}
              >
                {t.label}
                <span
                  className={`ml-2 text-xs font-semibold ${tab === t.id ? "text-white/80" : "text-[#646F82]"}`}
                >
                  ({t.count})
                </span>
              </button>
            ))}
          </div>

          {tab === "general" && (
            <div>
              <h2 className="font-['Syne'] font-extrabold text-2xl mb-6 reveal">
                TCF Canada va kurslar
              </h2>
              <FaqAccordion items={generalFaq} />
            </div>
          )}

          {tab === "immigration" && (
            <div>
              <h2 className="font-['Syne'] font-extrabold text-2xl mb-6 reveal">
                Fransuz tili va Kanada immigratsiyasi
              </h2>
              <FaqAccordion items={immigrationFaq} />
            </div>
          )}

          <div className="reveal mt-12 card p-8 text-center bg-gradient-to-br from-[#a3182a] to-[#6e1019] text-white">
            <h3 className="font-['Syne'] font-bold text-xl mb-3">Javob topa olmadingizmi?</h3>
            <p className="text-white/80 text-sm mb-6">
              Bepul konsultatsiya oling — mutaxassislarimiz barcha savollaringizga javob beradi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/boglanish" className="btn-gold no-underline">
                Bog'lanish →
              </Link>
              <Link to="/immigratsiya" className="btn-outline no-underline !border-white/30 !text-white hover:!bg-white/10">
                Immigratsiya ma'lumot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
