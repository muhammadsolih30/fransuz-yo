import { CertificateReveal } from "../CertificateReveal";
import { useSitePreferences } from "../../contexts/SitePreferencesContext";

type Props = { embedded?: boolean };

export function ResultsPageSections({ embedded = false }: Props) {
  const { content } = useSitePreferences();
  const { levelColor, studentResults, resultFeedbacks, resultStats, tcfLevels } = content.results;
  const { certificateImages } = content.certificates;
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

      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.certsEyebrow}
            </p>
            <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">{ui.certsTitle}</h3>
            <p className="text-[#546074] text-sm mt-4">{ui.certsSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {studentResults.map((r, idx) => (
              <div
                key={r.name}
                className={`reveal card p-6 lg:p-8 ${r.highlight ? "ring-2 ring-[#e83848] shadow-[var(--shadow-glow)]" : ""}`}
                data-delay={idx * 100}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <CertificateReveal
                    src={certificateImages[idx]?.src ?? certificateImages[0].src}
                    alt={certificateImages[idx]?.alt ?? r.name}
                    index={idx}
                  />
                  <div>
                    {r.highlight && (
                      <div className="inline-flex items-center gap-2 bg-[#e83848]/10 px-3 py-1 rounded-full text-[#e83848] text-[10px] font-bold mb-4">
                        {ui.oneMonthBadge}
                      </div>
                    )}
                    <h4 className="font-['Syne'] font-extrabold text-xl mb-1">{r.name}</h4>
                    <p className="text-[#646F82] text-xs mb-4">
                      {r.cert} • {r.date} • {r.period}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {r.scores.map((sc) => (
                        <div
                          key={sc.s}
                          className={`border rounded-xl p-3 ${levelColor[sc.l] || "border-gray-200"}`}
                        >
                          <div className="text-[10px] font-semibold opacity-70">{sc.s}</div>
                          <div className="font-['Syne'] font-extrabold text-lg">{sc.l}</div>
                          <div className="text-[10px]">{sc.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificateImages.slice(2).map((cert, i) => (
              <CertificateReveal key={cert.src} src={cert.src} alt={cert.alt} index={i + 2} />
            ))}
          </div>
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
