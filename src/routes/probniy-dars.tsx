import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgePercent, ClipboardList, Gauge, Play, UserCheck } from "lucide-react";
import { PageMeta } from "../components/PageMeta";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

const BENEFIT_ICONS = [Gauge, UserCheck, ClipboardList, BadgePercent] as const;

export const Route = createFileRoute("/probniy-dars")({
  component: ProbniyDarsPage,
});

function ProbniyDarsPage() {
  const { content } = useSitePreferences();
  const ui = content.ui.trial;
  const shared = content.ui.shared;

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <PageMeta page="trial" />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6EF] via-white to-[#fcefec]" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-[#e83848]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e83848]/10 border border-[#e83848]/20 px-4 py-2 rounded-full text-xs font-bold text-[#e83848] mb-6">
                {ui.badge}
              </div>
              <h1 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4rem)] leading-[1.02] mb-5">
                {ui.title}
              </h1>
              <p className="text-[#3E4B62] text-lg leading-relaxed mb-8">{ui.subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/boglanish" className="btn-primary no-underline">
                  {ui.cta}
                </Link>
                <a
                  href="https://t.me/France_TCF"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline no-underline"
                >
                  {ui.telegram}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="card p-8 lg:p-10 bg-white border-2 border-[#e83848]/12 shadow-[var(--shadow-card)]">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#fef3f3] via-white to-[#f9ddd8] border-2 border-dashed border-[#e83848]/20 flex flex-col items-center justify-center mb-6 overflow-hidden relative">
                  <div className="relative z-10 text-center px-6">
                    <div className="w-16 h-16 rounded-full bg-[#e83848] flex items-center justify-center mx-auto mb-4 shadow-[0_8px_24px_-8px_rgba(232,56,72,0.55)]">
                      <Play className="w-7 h-7 text-white ml-0.5" fill="currentColor" strokeWidth={0} />
                    </div>
                    <p className="font-['Syne'] font-bold text-lg text-[#15233B]">{shared.lessonProcess}</p>
                    <p className="text-[#546074] text-sm mt-1.5 font-medium">{shared.videoSoon}</p>
                  </div>
                </div>
                <ul className="space-y-3.5">
                  {ui.steps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm text-[#15233B] font-medium leading-relaxed">
                      <span className="shrink-0 w-7 h-7 rounded-lg bg-[#e83848] text-white font-['Syne'] font-bold text-xs flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#E0A526] text-[#15233B] font-bold text-sm px-4 py-2 rounded-2xl shadow-xl animate-float">
                {shared.freeGift}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.benefitsEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl leading-tight">{ui.benefitsTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ui.benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <div key={b.title} className="reveal card card-hover p-7" data-delay={i * 80}>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#e83848]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-['Syne'] font-bold text-base mb-2">{b.title}</h3>
                  <p className="text-[#3E4B62] text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
