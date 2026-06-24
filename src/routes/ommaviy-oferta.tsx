import { createFileRoute, Link } from "@tanstack/react-router";
import { PageMeta } from "../components/PageMeta";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

export const Route = createFileRoute("/ommaviy-oferta")({
  component: OmmaviyOfertaPage,
});

function OmmaviyOfertaPage() {
  const { content } = useSitePreferences();
  const { ofertaTitle, ofertaIntro, ofertaDefinitions, ofertaSections, ofertaRequisites } = content.oferta;
  const ui = content.ui.oferta;
  const shared = content.ui.shared;

  return (
    <div className="bg-white text-[#15233B]">
      <PageMeta page="oferta" />

      <section className="relative pt-36 pb-16 overflow-hidden bg-[#FAF6EF]">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] mb-5">
            {ui.title} <span className="text-gradient-canada">{ui.titleHighlight}</span>
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl leading-relaxed mb-4">{ofertaIntro}</p>
          <a
            href="/ommaviy%20oferta.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#e83848] no-underline hover:underline"
          >
            {ui.downloadPdf}
          </a>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:items-stretch">
            <aside className="lg:col-span-4 xl:col-span-3 h-full">
              <div data-no-reveal className="sticky-below-header self-start w-full">
                <div className="card p-6">
                  <h2 className="font-['Syne'] font-bold text-sm uppercase tracking-wider text-[#646F82] mb-4">
                    {ui.sectionsNav}
                  </h2>
                  <nav className="flex flex-col gap-1">
                    <a
                      href="#atamalar"
                      className="no-underline text-sm text-[#3E4B62] hover:text-[#e83848] hover:bg-[#FAF6EF] rounded-lg px-3 py-2 transition-colors"
                    >
                      {ui.definitionsNav}
                    </a>
                    {ofertaSections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="no-underline text-sm text-[#3E4B62] hover:text-[#e83848] hover:bg-[#FAF6EF] rounded-lg px-3 py-2 transition-colors"
                      >
                        {s.title}
                      </a>
                    ))}
                    <a
                      href="#rekvizitlar"
                      className="no-underline text-sm text-[#3E4B62] hover:text-[#e83848] hover:bg-[#FAF6EF] rounded-lg px-3 py-2 transition-colors"
                    >
                      {ui.requisitesNav}
                    </a>
                  </nav>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-8 xl:col-span-9 space-y-10">
              <div id="atamalar" className="scroll-mt-28 reveal">
                <h2 className="font-['Syne'] font-extrabold text-2xl lg:text-3xl mb-2">{ui.definitionsTitle}</h2>
                <p className="text-[#646F82] text-sm mb-6">{ofertaTitle}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {ofertaDefinitions.map((d) => (
                    <div key={d.term} className="card p-5">
                      <h3 className="font-['Syne'] font-bold text-[#e83848] text-sm mb-2">{d.term}</h3>
                      <p className="text-[#3E4B62] text-sm leading-relaxed">{d.def}</p>
                    </div>
                  ))}
                </div>
              </div>

              {ofertaSections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-28 reveal">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-[#e83848] to-[#E0A526]" />
                    <h2 className="font-['Syne'] font-extrabold text-2xl lg:text-3xl">{s.title}</h2>
                  </div>
                  <div className="card divide-y divide-[#15233B]/8 overflow-hidden">
                    {s.items.map((item, i) => {
                      const [clause, ...rest] = item.split(". ");
                      const hasNumber = /^\d/.test(clause);
                      return (
                        <div key={i} className="flex gap-4 p-5 hover:bg-[#FAF6EF] transition-colors">
                          {hasNumber ? (
                            <span className="shrink-0 font-['Syne'] font-bold text-[#e83848] text-sm min-w-[3rem]">
                              {clause}.
                            </span>
                          ) : null}
                          <p className="text-[#3E4B62] text-sm leading-relaxed">
                            {hasNumber ? rest.join(". ") : item}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              <div id="rekvizitlar" className="scroll-mt-28 reveal">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-[#e83848] to-[#E0A526]" />
                  <h2 className="font-['Syne'] font-extrabold text-2xl lg:text-3xl">{ui.requisitesNav}</h2>
                </div>
                <div className="card p-7 panel-soft-accent">
                  <p className="font-['Syne'] font-bold text-lg mb-1">{ofertaRequisites.name}</p>
                  <p className="text-[#546074] text-sm mb-6">{ofertaRequisites.basis}</p>
                  <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <dt className="text-[#646F82] text-xs uppercase tracking-wider mb-1">{ui.addressLabel}</dt>
                      <dd className="text-[#15233B] text-sm">{ofertaRequisites.address}</dd>
                    </div>
                    <div>
                      <dt className="text-[#646F82] text-xs uppercase tracking-wider mb-1">{ui.stirLabel}</dt>
                      <dd className="text-[#15233B] text-sm">{ofertaRequisites.stir}</dd>
                    </div>
                    <div>
                      <dt className="text-[#646F82] text-xs uppercase tracking-wider mb-1">{ui.phoneLabel}</dt>
                      <dd className="text-[#15233B] text-sm">
                        <a
                          href="tel:+998947382221"
                          className="no-underline text-[#15233B] hover:text-[#e83848] transition-colors"
                        >
                          {ofertaRequisites.phone}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#646F82] text-xs uppercase tracking-wider mb-1">{ui.directorLabel}</dt>
                      <dd className="text-[#15233B] text-sm">{ofertaRequisites.director}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="reveal card p-8 text-center">
                <p className="text-[#3E4B62] text-sm mb-5">{ui.ctaBody}</p>
                <Link to="/boglanish" className="btn-primary no-underline">
                  {shared.contactArrow}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
