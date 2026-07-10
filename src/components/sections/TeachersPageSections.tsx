import { MediaPlaceholder } from "../MediaPlaceholder";
import { useSitePreferences } from "../../contexts/SitePreferencesContext";

type Props = { embedded?: boolean };

export function TeachersPageSections({ embedded = false }: Props) {
  const { content } = useSitePreferences();
  const { teachers, teacherValues, teacherCerts } = content.teachers;
  const ui = content.ui.teachers;
  const shared = content.ui.shared;

  const heroClass = embedded
    ? "section-intro relative py-16 lg:py-20 overflow-hidden scroll-mt-28"
    : "section-intro relative pt-36 pb-20 overflow-hidden";

  return (
    <div id="ustoz" className="scroll-mt-28">
      <section className={heroClass}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h2 className="teachers-section__title font-['Syne'] font-extrabold text-[clamp(2.15rem,6.2vw,5rem)] leading-[1.05] mb-6 text-balance">
            {ui.title}
          </h2>
          <p className="text-[#3E4B62] text-lg max-w-2xl">{ui.subtitle}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-7">
            {teachers.map((t, i) => (
              <div key={t.name} className="reveal card card-hover overflow-hidden group" data-delay={i * 100}>
                <MediaPlaceholder
                  type="video"
                  label={`${t.name} — ${shared.introVideo}`}
                  sublabel={shared.videoSoon}
                  aspect="video"
                  className="rounded-none border-0 border-b border-[#15233B]/8"
                />
                <div className="p-6 lg:p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-['Syne'] font-extrabold text-xl mb-1 group-hover:text-[#e83848] transition-colors">
                        {t.name}
                      </h3>
                      <p className="text-[#546074] text-sm">{t.role}</p>
                    </div>
                    <span className="bg-[#e83848] text-white font-['Syne'] font-bold text-xs px-3 py-1.5 rounded-lg shrink-0">
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
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 card p-8 panel-soft-accent">
            <p className="text-[#546074] text-sm font-semibold mb-5 text-center">{ui.certsTitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {teacherCerts.map((c) => (
                <span
                  key={c}
                  className="flex items-center gap-2 bg-white border border-[#15233B]/10 px-4 py-2 rounded-xl font-['Syne'] font-bold text-xs sm:text-sm text-[#15233B]"
                >
                  <span className="text-[#E0A526]">✦</span> {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section site-section--cream py-20 lg:py-28 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.valuesEyebrow}
            </p>
            <h3 className="stripe-display section-heading text-4xl lg:text-5xl leading-tight">{ui.valuesTitle}</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {teacherValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={v.t} className="reveal card card-hover feature-card-compact group" data-delay={(i % 4) * 90}>
                  <div className="feature-card-compact__icon bg-gradient-to-br from-[#eaf0f8] to-[#d6e3f3]">
                    <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#15233B]" strokeWidth={1.8} />
                  </div>
                  <h4 className="feature-card-compact__title card-title group-hover:text-[#e83848] transition-colors">
                    {v.t}
                  </h4>
                  <p className="feature-card-compact__desc section-body">{v.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
