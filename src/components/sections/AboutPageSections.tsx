import { CountUp } from "../CountUp";
import { useSitePreferences } from "../../contexts/SitePreferencesContext";

type Props = { embedded?: boolean };

export function AboutPageSections({ embedded = false }: Props) {
  const { content } = useSitePreferences();
  const { centerClaim, centerStats, heroTagline, whyUs } = content.site;
  const ui = content.ui.about;

  const titleWords = ui.titleSuffix.split(" ");
  const titleHighlight = titleWords.slice(0, 2).join(" ");
  const titleRest = titleWords.slice(2).join(" ");

  const heroClass = embedded
    ? "section-intro relative py-16 lg:py-20 overflow-hidden scroll-mt-28"
    : "section-intro relative pt-36 pb-20 overflow-hidden";

  return (
    <div id="haqimizda" className="scroll-mt-28">
      <section className={heroClass}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] mb-6 animate-slide-up delay-100">
            {centerClaim.split(" — ")[0]}{" "}
            <span className="text-gradient-canada">{titleHighlight}</span> {titleRest}
          </h2>
          <p className="text-[#3E4B62] text-lg max-w-3xl animate-slide-up delay-200 leading-relaxed">
            {heroTagline} {ui.extraBody}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {centerStats.map((s, i) => (
              <div
                key={s.label}
                className="reveal text-center p-5 lg:p-6 rounded-3xl bg-white border border-[#15233B]/6 hover:border-[#e83848]/20 hover:shadow-[var(--shadow-card)] transition-all duration-500"
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

      <section className="py-20 lg:py-28 bg-white relative">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.whyUsEyebrow}
            </p>
            <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              {ui.whyUsTitle}
            </h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {whyUs.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="reveal card card-hover feature-card-compact group" data-delay={(i % 4) * 80}>
                  <div className="feature-card-compact__icon bg-gradient-to-br from-[#fcefec] to-[#f9ddd8]">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e83848]" strokeWidth={1.8} />
                  </div>
                  <h4 className="feature-card-compact__title card-title group-hover:text-[#e83848] transition-colors">
                    {f.title}
                  </h4>
                  <p className="feature-card-compact__desc section-body">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
