import { Link } from "@tanstack/react-router";
import { useSitePreferences } from "../../contexts/SitePreferencesContext";

type Props = { embedded?: boolean };

export function CoursesPageSections({ embedded = false }: Props) {
  const { content } = useSitePreferences();
  const { courses, courseSubjects, nlcTable, courseFaqs } = content.courses;
  const ui = content.ui.courses;
  const shared = content.ui.shared;

  const heroClass = embedded
    ? "relative py-16 lg:py-20 overflow-hidden scroll-mt-28"
    : "relative pt-36 pb-20 overflow-hidden";

  return (
    <div id="kurslar" className="scroll-mt-28">
      <section className={heroClass}>
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#e83848]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h2 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
            {ui.title}
          </h2>
          <p className="text-[#3E4B62] text-lg max-w-2xl animate-slide-up delay-200">{ui.subtitle}</p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {courses.map((c, idx) => (
              <div
                key={c.type}
                className={`reveal relative card p-5 lg:p-6 group ${c.highlight ? "ring-2 ring-[#e83848] shadow-[var(--shadow-glow)]" : "card-hover"}`}
                data-delay={(idx % 2) * 100}
              >
                {c.highlight && (
                  <div className="absolute -top-3 left-6 bg-[#E0A526] text-[#15233B] text-[11px] font-extrabold px-4 py-1 rounded-full shadow-lg">
                    {shared.mostPopular}
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <c.icon className="w-5 h-5 text-[#e83848]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="font-['Syne'] font-extrabold text-lg leading-tight group-hover:text-[#e83848] transition-colors">
                      {c.type}
                    </h3>
                    <p className="text-[#646F82] text-xs">
                      👥 {c.students} • ⏱️ {c.duration}
                    </p>
                  </div>
                </div>

                <div className="mb-3 bg-[#FAF6EF] rounded-xl px-4 py-2.5">
                  {c.prices.map((p) => (
                    <div
                      key={p.label}
                      className="flex justify-between items-center py-1.5 border-b border-[#15233B]/8 last:border-0"
                    >
                      <span className="text-[#3E4B62] text-xs font-medium">{p.label}</span>
                      <span className="font-['Syne'] font-extrabold text-lg text-[#15233B]">
                        {p.price}
                        <span className="text-[#646F82] text-[10px] font-normal ml-1">{shared.perMonth}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-3 text-xs text-[#546074]">
                  <span>🕐</span>
                  <span>{c.schedule}</span>
                </div>

                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-[#3E4B62]">
                      <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/boglanish"
                  className={`no-underline block text-center py-2.5 rounded-xl text-sm font-bold transition-all ${
                    c.highlight
                      ? "bg-[#e83848] text-white hover:bg-[#e84858] shadow-[0_10px_30px_-8px_rgba(232,56,72,0.5)] hover:-translate-y-0.5"
                      : "border-2 border-[#15233B]/12 text-[#15233B] hover:border-[#e83848] hover:text-[#e83848]"
                  }`}
                >
                  {shared.registerArrow}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#e83848] mb-4">
              <span className="w-8 h-px bg-[#e83848]" /> {ui.programEyebrow}
            </p>
            <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">{ui.programTitle}</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseSubjects.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.t} className="reveal card card-hover p-8 group" data-delay={(i % 3) * 100}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eaf0f8] to-[#d6e3f3] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                    <Icon className="w-7 h-7 text-[#15233B]" strokeWidth={1.8} />
                  </div>
                  <h4 className="font-['Syne'] font-bold text-xl mb-3 group-hover:text-[#e83848] transition-colors">
                    {s.t}
                  </h4>
                  <p className="text-[#3E4B62] text-sm leading-relaxed">{s.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.tcfEyebrow}
              </p>
              <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">{ui.tcfTitle}</h3>
              <p className="text-[#3E4B62] text-base leading-relaxed mb-6">{ui.tcfBody}</p>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#2C3850] text-sm leading-relaxed">{ui.tcfTip}</p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={150}>
              <div className="table-head-dark px-6 py-4">
                <span className="text-white font-['Syne'] font-bold text-sm">{ui.clbTarget}</span>
              </div>
              {nlcTable.map((row, i) => (
                <div
                  key={row.section}
                  className={`flex items-center justify-between px-6 py-5 ${i < nlcTable.length - 1 ? "border-b border-[#15233B]/8" : ""} hover:bg-[#FAF6EF] transition-colors`}
                >
                  <span className="text-[#3E4B62] font-medium">{row.section}</span>
                  <span className="font-['Syne'] font-bold text-lg text-[#e83848]">{row.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal">
              <p className="eyebrow text-[#e83848] mb-4">
                <span className="w-8 h-px bg-[#e83848]" /> {ui.faqEyebrow}
              </p>
              <h3 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">{ui.faqTitle}</h3>
              <Link to="/boglanish" className="btn-primary">
                {shared.contactArrow}
              </Link>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-3">
              {courseFaqs.map((f, i) => (
                <details key={i} className="reveal group card overflow-hidden" data-delay={i * 60}>
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-['Syne'] font-bold text-base group-open:text-[#e83848] transition-colors pr-4">
                      {f.q}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e83848]/10 text-[#e83848] flex items-center justify-center text-xl group-open:rotate-45 group-open:bg-[#e83848] group-open:text-white transition-all duration-300">
                      +
                    </span>
                  </summary>
                  <p className="text-[#3E4B62] text-sm leading-relaxed px-6 pb-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
