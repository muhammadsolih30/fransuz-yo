import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import { PageMeta } from "../components/PageMeta";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import { useReveal } from "../hooks/useReveal";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});

type TabId = "general" | "immigration";

function FaqPage() {
  const { content } = useSitePreferences();
  const { generalFaq, immigrationFaq } = content.faq;
  const ui = content.ui.faq;

  const tabs = [
    { id: "general" as const, label: ui.tabs.general, count: generalFaq.length },
    { id: "immigration" as const, label: ui.tabs.immigration, count: immigrationFaq.length },
  ];

  const [tab, setTab] = useState<TabId>("general");
  useReveal([tab]);

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <PageMeta page="faq" />

      <section className="relative pt-36 pb-16 overflow-hidden bg-[#FAF6EF]">
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#e83848]/10 blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] mb-5">
            {ui.title}
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl">{ui.subtitle}</p>
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
                    ? "bg-[#e83848] text-white shadow-[0_8px_24px_-8px_rgba(232,56,72,0.5)]"
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
              <h2 className="font-['Syne'] font-extrabold text-2xl mb-6">{ui.generalHeading}</h2>
              <FaqAccordion items={generalFaq} />
            </div>
          )}

          {tab === "immigration" && (
            <div>
              <h2 className="font-['Syne'] font-extrabold text-2xl mb-6">{ui.immigrationHeading}</h2>
              <FaqAccordion items={immigrationFaq} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
