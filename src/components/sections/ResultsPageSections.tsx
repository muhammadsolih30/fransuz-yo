import { CertificateCarousel } from "../CertificateCarousel";
import { useSitePreferences } from "../../contexts/SitePreferencesContext";

type Props = { embedded?: boolean };

export function ResultsPageSections({ embedded = false }: Props) {
  const { content } = useSitePreferences();
  const { resultFeedbacks, resultStats, tcfLevels } = content.results;
  const { studentCertificates } = content.certificates;
  const ui = content.ui.results;

  const heroClass = embedded
    ? "relative py-16 lg:py-20 overflow-hidden scroll-mt-28"
    : "relative pt-36 pb-20 overflow-hidden";

  return (
    <div id="natijalar" className="scroll-mt-28">
      <section className={heroClass}>
        <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] rounded-full bg-[#e83848]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6">
            {ui.title}
          </h2>
          <p className="text-[#3E4B62] text-lg max-w-2xl">{ui.subtitle}</p>
          <a
            href="https://t.me/Fransuzu"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-7 text-[#e83848] font-bold text-sm hover:gap-3 transition-all no-underline"
          >
            {ui.channelLink}
          </a>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white border-y border-[#15233B]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {resultStats.map((s, i) => (
              <div key={s.l} className="reveal text-center" data-delay={i * 80}>
                <div className="font-['Syne'] font-extrabold text-5xl lg:text-6xl text-gradient-canada mb-2">
                  {s.n}
                </div>
                <div className="text-[#546074] text-sm font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 relative overflow-hidden scroll-mt-28">
        <div className="absolute inset-0 bg-[#FAF6EF]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#e83848]/6 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] rounded-full bg-[#E0A526]/8 blur-[90px]" />
        <div className="absolute inset-0 bg-dots opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14 reveal">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white border border-[#e83848]/15 text-[#e83848] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              {ui.certsEyebrow}
            </span>
            <h3 className="font-['Syne'] font-extrabold text-[clamp(2rem,5vw,3.25rem)] leading-tight text-[#15233B]">
              {ui.certsTitle}{" "}
              <span className="text-gradient-canada">{ui.certsTitleAccent}</span>
            </h3>
            <p className="text-[#546074] text-base mt-5 max-w-lg mx-auto leading-relaxed">
              {ui.certsSubtitle}
            </p>
          </div>
        </div>

        <div className="relative z-10 reveal" data-delay={80}>
          <CertificateCarousel
            certificates={studentCertificates}
            labels={{
              viewDetails: ui.certViewDetails,
              mediaSoon: content.ui.shared.mediaSoon,
              scrollHint: ui.certScrollHint,
              total: ui.certTotal.replace("{n}", String(studentCertificates.length)),
              carouselAria: content.ui.a11y.certificatesCarousel,
              examLabel: ui.examLabel,
            }}
          />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.feedbackEyebrow}
            </p>
            <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">{ui.feedbackTitle}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {resultFeedbacks.map((f, i) => (
              <div
                key={`${f.name}-${i}`}
                className="reveal card card-hover p-7 flex flex-col"
                data-delay={i * 90}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: f.rating }).map((_, j) => (
                    <span key={j} className="text-[#E0A526] text-sm">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[#3E4B62] text-sm leading-relaxed italic flex-1 mb-6">"{f.text}"</p>
                <div className="border-t border-[#15233B]/8 pt-4">
                  <div className="font-['Syne'] font-bold text-sm">{f.name}</div>
                  <div className="text-[#646F82] text-xs">{f.cert}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal mt-6 card border-2 border-dashed border-[#15233B]/15 p-8 text-center">
            <p className="text-[#646F82] text-sm">{ui.feedbackSoon}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.levelsEyebrow}
              </p>
              <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                {ui.levelsTitle}
              </h3>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#2C3850] text-sm leading-relaxed">{ui.levelsTip}</p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={150}>
              <div className="grid grid-cols-3 table-head-dark px-6 py-4">
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider">{ui.tableLevel}</span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider text-center">
                  {ui.tableListening}
                </span>
                <span className="text-white/80 text-xs font-bold uppercase tracking-wider text-center">
                  {ui.tableReading}
                </span>
              </div>
              {tcfLevels.map((row, i) => (
                <div
                  key={row.level}
                  className={`grid grid-cols-3 px-6 py-4 items-center ${i < tcfLevels.length - 1 ? "border-b border-[#15233B]/8" : ""} hover:bg-[#FAF6EF] transition-colors`}
                >
                  <span className={`font-['Syne'] font-extrabold ${row.c}`}>{row.level}</span>
                  <span className="text-[#546074] text-sm text-center">{row.l}</span>
                  <span className="text-[#546074] text-sm text-center">{row.r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
