import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqAccordion } from "../components/FaqAccordion";
import { ImmigrationCtaBand } from "../components/ImmigrationCtaBand";
import { PageMeta } from "../components/PageMeta";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

export const Route = createFileRoute("/immigratsiya")({
  component: ImmigratsiyaPage,
});

function ImmigratsiyaPage() {
  const { content } = useSitePreferences();
  const {
    frenchDrawStats2026,
    immigrantQuota,
    crsCriteria,
    ageScores,
    educationScores,
    nclcTable,
    crsCalculatorUrl,
    crsFactors,
    frenchAdvantages,
    targetAudience,
    ourHelp,
    prCardInfo,
    prDocuments,
    tcfSections,
  } = content.immigration;
  const { immigrationFaq } = content.faq;
  const ui = content.ui.immigration;
  const shared = content.ui.shared;

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <PageMeta page="immigration" path="/immigratsiya" />

      <section className="relative pt-36 pb-20 overflow-hidden bg-[#FAF6EF]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF6EF] via-white to-[#fcefec]" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#e83848]/8 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.02] mb-6 max-w-4xl">
            {ui.title}
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-3xl leading-relaxed">{ui.heroBody}</p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link to="/boglanish" className="btn-primary no-underline">
              {ui.freeConsultArrow}
            </Link>
            <Link to="/faq" className="btn-outline no-underline">
              {ui.viewFaq}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.whyFrenchEyebrow}
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-6">
                {ui.whyFrenchTitle}
              </h2>
              <p className="text-[#3E4B62] text-base leading-relaxed mb-4">{ui.whyFrenchBody}</p>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#2C3850] text-sm leading-relaxed">📈 {ui.stats2026}</p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={120}>
              <div className="bg-[#15233B] px-6 py-4">
                <span className="text-white font-['Syne'] font-bold text-sm">{ui.drawStatsTitle}</span>
              </div>
              {frenchDrawStats2026.map((row, i) => (
                <div
                  key={row.date}
                  className={`flex items-center justify-between px-6 py-4 ${i < frenchDrawStats2026.length - 1 ? "border-b border-[#15233B]/8" : ""}`}
                >
                  <div>
                    <div className="font-semibold text-sm">{row.date}</div>
                    <div className="text-[#646F82] text-xs">{row.note}</div>
                  </div>
                  <span className="font-['Syne'] font-extrabold text-2xl text-[#e83848]">CRS {row.crs}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.expressEntryEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl leading-tight">{ui.expressEntryTitle}</h2>
            <p className="text-[#3E4B62] text-base mt-4">{ui.expressEntryBody}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {crsFactors.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="reveal card card-hover p-6" data-delay={i * 70}>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#e83848]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-['Syne'] font-bold mb-2 text-[#15233B]">{f.title}</h3>
                  <p className="text-[#3E4B62] text-xs leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="reveal card overflow-hidden bg-white text-[#15233B]">
            <div className="bg-[#e83848] px-6 py-4">
              <span className="text-white font-['Syne'] font-bold text-sm">{ui.crsTableTitle}</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px]">
                <thead>
                  <tr className="bg-[#FAF6EF] text-left">
                    <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">
                      {ui.crsFactor}
                    </th>
                    <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#546074] text-right">
                      {ui.crsMaxScore}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {crsCriteria.map((row, i) => (
                    <tr
                      key={row.factor}
                      className={i < crsCriteria.length - 1 ? "border-b border-[#15233B]/8" : ""}
                    >
                      <td className="px-6 py-3.5 text-sm text-[#3E4B62]">{row.factor}</td>
                      <td className="px-6 py-3.5 text-sm font-['Syne'] font-bold text-[#e83848] text-right whitespace-nowrap">
                        {row.max}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="reveal mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 card p-6">
            <p className="text-[#3E4B62] text-sm">{ui.crsCalculator}</p>
            <a href={crsCalculatorUrl} target="_blank" rel="noreferrer" className="btn-gold no-underline whitespace-nowrap">
              {ui.crsCalculatorBtn}
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.ageEyebrow}
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-6">{ui.ageTitle}</h2>
              <p className="text-[#3E4B62] text-sm leading-relaxed mb-5">{ui.ageBody}</p>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#2C3850] text-sm leading-relaxed">{ui.ageTip}</p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={120}>
              <div className="overflow-x-auto max-h-[460px] overflow-y-auto">
                <table className="w-full min-w-[360px]">
                  <thead className="sticky top-0">
                    <tr className="bg-[#15233B] text-white text-left">
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider">{ui.ageCol}</th>
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-right">
                        {ui.withoutSpouse}
                      </th>
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-right">
                        {ui.withSpouse}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ageScores.map((row) => (
                      <tr
                        key={row.age}
                        className={`border-b border-[#15233B]/8 ${row.highlight ? "bg-[#e83848]/8" : ""}`}
                      >
                        <td className="px-5 py-2.5 text-sm font-medium text-[#15233B]">{row.age}</td>
                        <td className="px-5 py-2.5 text-sm text-right font-['Syne'] font-bold text-[#e83848]">
                          {row.withoutSpouse}
                        </td>
                        <td className="px-5 py-2.5 text-sm text-right text-[#3E4B62]">{row.withSpouse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.educationEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight">{ui.educationTitle}</h2>
          </div>
          <div className="reveal card overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="bg-[#15233B] text-white text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">{ui.educationLevel}</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">
                    {ui.withoutSpouse}
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">{ui.withSpouse}</th>
                </tr>
              </thead>
              <tbody>
                {educationScores.map((row, i) => (
                  <tr key={row.level} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF6EF]"}>
                    <td className="px-6 py-3.5 text-sm text-[#3E4B62]">{row.level}</td>
                    <td className="px-6 py-3.5 text-sm text-right font-['Syne'] font-bold text-[#e83848]">
                      {row.withoutSpouse}
                    </td>
                    <td className="px-6 py-3.5 text-sm text-right text-[#3E4B62]">{row.withSpouse}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.advantagesEyebrow}
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-8">
                {ui.advantagesTitle}
              </h2>
              <ul className="space-y-4">
                {frenchAdvantages.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[#3E4B62] text-sm">
                    <span className="text-green-600 shrink-0">✅</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal card p-8" data-delay={120}>
              <h3 className="font-['Syne'] font-bold text-xl mb-4">{ui.tcfWhatTitle}</h3>
              <p className="text-[#3E4B62] text-sm leading-relaxed mb-6">{ui.tcfWhatBody}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {tcfSections.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold px-3 py-2 rounded-xl bg-[#FAF6EF] border border-[#15233B]/8 text-center"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-[#546074] text-xs leading-relaxed">{ui.tcfNclcNote}</p>
            </div>
          </div>

          <div className="reveal mt-10 card overflow-hidden overflow-x-auto">
            <div className="bg-[#15233B] px-6 py-4">
              <span className="text-white font-['Syne'] font-bold text-sm">{ui.nclcTableTitle}</span>
            </div>
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-[#FAF6EF] text-left">
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">
                    {ui.nclcCols.nclc}
                  </th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">
                    {ui.nclcCols.speaking}
                  </th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">
                    {ui.nclcCols.listening}
                  </th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">
                    {ui.nclcCols.reading}
                  </th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">
                    {ui.nclcCols.writing}
                  </th>
                </tr>
              </thead>
              <tbody>
                {nclcTable.map((row, i) => (
                  <tr
                    key={row.nclc}
                    className={`${i < nclcTable.length - 1 ? "border-b border-[#15233B]/8" : ""} ${row.highlight ? "bg-[#e83848]/8" : ""}`}
                  >
                    <td className="px-5 py-3 font-['Syne'] font-extrabold text-[#15233B]">
                      {row.nclc}
                      {row.highlight && (
                        <span className="ml-2 text-[10px] font-bold text-[#e83848] uppercase">{ui.nclcMin}</span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-sm text-[#3E4B62]">{row.oral}</td>
                    <td className="px-5 py-3 text-sm text-[#3E4B62]">{row.listening}</td>
                    <td className="px-5 py-3 text-sm text-[#3E4B62]">{row.reading}</td>
                    <td className="px-5 py-3 text-sm text-[#3E4B62]">{row.written}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.audienceEyebrow}
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl mb-6">{ui.audienceTitle}</h2>
              <ul className="space-y-3">
                {targetAudience.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#3E4B62]">
                    <span className="w-5 h-5 rounded-full bg-[#e83848]/10 text-[#e83848] flex items-center justify-center shrink-0 text-xs">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" data-delay={120}>
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.helpEyebrow}
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl mb-6">{ui.helpTitle}</h2>
              <ul className="space-y-3">
                {ourHelp.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-[#3E4B62]">
                    <span className="text-[#E0A526] shrink-0">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.quotaEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-4">{ui.quotaTitle}</h2>
            <p className="text-[#3E4B62] text-sm leading-relaxed">{ui.quotaBody}</p>
          </div>
          <div className="reveal card overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="bg-[#15233B] text-white text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">{ui.quotaCols.year}</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">{ui.quotaCols.total}</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">{ui.quotaCols.french}</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">{ui.quotaCols.pct}</th>
                </tr>
              </thead>
              <tbody>
                {immigrantQuota.map((row, i) => (
                  <tr
                    key={row.year}
                    className={i % 2 === 0 ? "bg-white" : "bg-[#FAF6EF] hover:bg-[#f5efe4]"}
                  >
                    <td className="px-6 py-4 font-['Syne'] font-bold">{row.year}</td>
                    <td className="px-6 py-4 text-sm text-[#3E4B62]">{row.total}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#e83848]">{row.count}</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#15233B]">{row.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.prEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight">{ui.prTitle}</h2>
            <p className="text-[#3E4B62] text-sm mt-4 leading-relaxed">{ui.prBody}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="reveal space-y-6">
              <div className="card p-6">
                <h3 className="font-['Syne'] font-bold text-lg mb-4">{ui.prInfoTitle}</h3>
                <ul className="space-y-3 text-sm text-[#3E4B62]">
                  <li>
                    <strong>{ui.prDuration}</strong> {prCardInfo.duration}
                  </li>
                  <li>
                    <strong>{ui.prPrice}</strong> {prCardInfo.price}
                  </li>
                  <li>
                    <strong>{ui.prCitizenship}</strong> {prCardInfo.citizenship}
                  </li>
                  <li>
                    <strong>{ui.prResidency}</strong> {prCardInfo.residency}
                  </li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-['Syne'] font-bold text-lg mb-4">{ui.prRightsTitle}</h3>
                <ul className="space-y-2">
                  {prCardInfo.rights.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-[#3E4B62]">
                      <span className="text-green-600">✓</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="reveal space-y-6" data-delay={120}>
              <div className="card p-6">
                <h3 className="font-['Syne'] font-bold text-lg mb-4">{ui.prProofTitle}</h3>
                <ul className="space-y-2">
                  {prCardInfo.proofDocs.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#3E4B62]">
                      <span className="text-[#e83848]">✅</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6 bg-[#FAF6EF] border-[#E0A526]/30">
                <h3 className="font-['Syne'] font-bold text-lg mb-4">{ui.prNotesTitle}</h3>
                <ul className="space-y-2">
                  {prCardInfo.notes.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-sm text-[#3E4B62]">
                      <span>☑️</span> {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="reveal mt-10 card p-8 panel-soft-accent">
            <h3 className="font-['Syne'] font-bold text-xl mb-4 text-[#e83848]">{ui.prSummaryTitle}</h3>
            <p className="text-[#3E4B62] text-sm leading-relaxed">{ui.prSummary}</p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.prDocsEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-4">{ui.prDocsTitle}</h2>
            <p className="text-[#546074] text-sm">{ui.prDocsNote}</p>
          </div>
          <div className="reveal grid sm:grid-cols-2 gap-3">
            {prDocuments.map((doc, i) => (
              <div
                key={doc}
                className="flex items-start gap-3 card p-4 hover:border-[#e83848]/20 transition-colors"
              >
                <span className="shrink-0 w-7 h-7 rounded-lg bg-[#15233B] text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-[#3E4B62] leading-relaxed">{doc}</span>
              </div>
            ))}
          </div>
          <p className="reveal text-center text-[#546074] text-xs mt-8">{ui.prDocsDisclaimer}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.immigrationFaqEyebrow}
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-4">
              {ui.immigrationFaqTitle}
            </h2>
            <Link to="/faq" className="text-[#e83848] font-bold text-sm no-underline hover:underline">
              {shared.allFaq}
            </Link>
          </div>
          <FaqAccordion items={immigrationFaq} />
        </div>
      </section>

      <ImmigrationCtaBand />
    </div>
  );
}
