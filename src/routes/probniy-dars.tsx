import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgePercent, ClipboardList, Gauge, UserCheck } from "lucide-react";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
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
    <div className="site-page site-page--light text-ink overflow-hidden">
      <PageMeta page="trial" path="/probniy-dars" />

      <section className="trial-page__hero section-intro relative pt-28 sm:pt-36 pb-12 sm:pb-20 overflow-hidden page-hero">
        <div className="absolute inset-0 page-hero-mesh" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e83848]/10 border border-[#e83848]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[0.68rem] sm:text-xs font-bold text-[#e83848] mb-4 sm:mb-6">
                {ui.badge}
              </div>
              <h1 className="stripe-display section-heading text-[clamp(1.85rem,7.5vw,4rem)] leading-[1.05] mb-4 sm:mb-5">
                {ui.title}
              </h1>
              <p className="section-body text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">{ui.subtitle}</p>
              <div className="trial-page__cta flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/boglanish" className="btn-primary no-underline text-center w-full sm:w-auto">
                  {ui.cta}
                </Link>
                <a
                  href="https://t.me/France_TCF"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline no-underline text-center w-full sm:w-auto"
                >
                  {ui.telegram}
                </a>
              </div>
            </div>

            <div className="relative mt-2 sm:mt-0">
              <div className="card p-4 sm:p-8 lg:p-10 border-2 border-[#e83848]/12 shadow-[var(--shadow-card)]">
                <div className="trial-videos-grid grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                  {ui.videos.map((video) => (
                    <MediaPlaceholder
                      key={video.title}
                      type="video"
                      label={video.title}
                      sublabel={video.desc}
                      aspect="video"
                      className="rounded-xl min-h-[10.5rem] sm:min-h-[9rem] w-full"
                    />
                  ))}
                </div>
                <ul className="space-y-3.5">
                  {ui.steps.map((s, i) => (
                    <li key={s} className="flex items-start gap-3 text-sm section-body font-medium leading-relaxed">
                      <span className="shrink-0 w-7 h-7 rounded-lg bg-[#e83848] text-white font-['Syne'] font-bold text-xs flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-2 right-2 sm:-top-4 sm:-right-4 bg-[#E0A526] text-[#15233B] font-bold text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-xl animate-float">
                {shared.freeGift}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section--cream py-12 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8 sm:mb-12 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.benefitsEyebrow}
            </p>
            <h2 className="stripe-display section-heading text-4xl leading-tight">{ui.benefitsTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ui.benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i];
              return (
                <div key={b.title} className="reveal card card-hover p-7" data-delay={i * 80}>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#e83848]" strokeWidth={1.8} />
                  </div>
                  <h3 className="card-title font-['Syne'] font-bold text-base mb-2">{b.title}</h3>
                  <p className="section-body text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
