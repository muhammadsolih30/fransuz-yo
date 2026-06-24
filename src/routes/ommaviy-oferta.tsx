import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/useReveal";
import {
  ofertaDefinitions,
  ofertaIntro,
  ofertaRequisites,
  ofertaSections,
} from "../lib/oferta-content";

export const Route = createFileRoute("/ommaviy-oferta")({
  head: () => ({
    meta: [
      { title: "Ommaviy oferta — France TCF O'quv Markazi" },
      {
        name: "description",
        content:
          "France TCF o'quv markazi ommaviy oferta shartlari va qoidalari — to'liq matn.",
      },
    ],
  }),
  component: OmmaviyOfertaPage,
});

function OmmaviyOfertaPage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#FAF6EF]">
        <div className="absolute inset-0 bg-aurora" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4">
            <span className="w-8 h-px bg-[#d62839]" /> Ommaviy oferta
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.4rem,7vw,4.5rem)] leading-[1.02] mb-5">
            Xizmat ko'rsatish <span className="text-gradient-canada">shartlari</span>
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl leading-relaxed">{ofertaIntro}</p>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* TOC — sticky */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-28 reveal">
                <div className="card p-6">
                  <h2 className="font-['Syne'] font-bold text-sm uppercase tracking-wider text-[#646F82] mb-4">
                    Bo'limlar
                  </h2>
                  <nav className="flex flex-col gap-1">
                    <a
                      href="#atamalar"
                      className="no-underline text-sm text-[#3E4B62] hover:text-[#d62839] hover:bg-[#FAF6EF] rounded-lg px-3 py-2 transition-colors"
                    >
                      Atama va ta'riflar
                    </a>
                    {ofertaSections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="no-underline text-sm text-[#3E4B62] hover:text-[#d62839] hover:bg-[#FAF6EF] rounded-lg px-3 py-2 transition-colors"
                      >
                        {s.title}
                      </a>
                    ))}
                    <a
                      href="#rekvizitlar"
                      className="no-underline text-sm text-[#3E4B62] hover:text-[#d62839] hover:bg-[#FAF6EF] rounded-lg px-3 py-2 transition-colors"
                    >
                      9. Rekvizitlar
                    </a>
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-10">
              {/* Atamalar */}
              <div id="atamalar" className="scroll-mt-28 reveal">
                <h2 className="font-['Syne'] font-extrabold text-2xl lg:text-3xl mb-6">
                  Atama va ta'riflar
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {ofertaDefinitions.map((d) => (
                    <div key={d.term} className="card p-5">
                      <h3 className="font-['Syne'] font-bold text-[#d62839] text-sm mb-2">
                        {d.term}
                      </h3>
                      <p className="text-[#3E4B62] text-sm leading-relaxed">{d.def}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sections */}
              {ofertaSections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-28 reveal">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-[#d62839] to-[#E0A526]" />
                    <h2 className="font-['Syne'] font-extrabold text-2xl lg:text-3xl">{s.title}</h2>
                  </div>
                  <div className="card divide-y divide-[#15233B]/8 overflow-hidden">
                    {s.items.map((item, i) => {
                      const [clause, ...rest] = item.split(". ");
                      const hasNumber = /^\d/.test(clause);
                      return (
                        <div key={i} className="flex gap-4 p-5 hover:bg-[#FAF6EF] transition-colors">
                          {hasNumber ? (
                            <span className="shrink-0 font-['Syne'] font-bold text-[#d62839] text-sm min-w-[3rem]">
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

              {/* Rekvizitlar */}
              <div id="rekvizitlar" className="scroll-mt-28 reveal">
                <div className="flex items-center gap-3 mb-5">
                  <span className="h-7 w-1.5 rounded-full bg-gradient-to-b from-[#d62839] to-[#E0A526]" />
                  <h2 className="font-['Syne'] font-extrabold text-2xl lg:text-3xl">9. Rekvizitlar</h2>
                </div>
                <div className="card p-7 bg-gradient-to-br from-[#a3182a] to-[#6e1019] text-white">
                  <p className="font-['Syne'] font-bold text-lg mb-1">{ofertaRequisites.name}</p>
                  <p className="text-white/70 text-sm mb-6">{ofertaRequisites.basis}</p>
                  <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    <div>
                      <dt className="text-white/55 text-xs uppercase tracking-wider mb-1">Manzil</dt>
                      <dd className="text-white text-sm">{ofertaRequisites.address}</dd>
                    </div>
                    <div>
                      <dt className="text-white/55 text-xs uppercase tracking-wider mb-1">STIR</dt>
                      <dd className="text-white text-sm">{ofertaRequisites.stir}</dd>
                    </div>
                    <div>
                      <dt className="text-white/55 text-xs uppercase tracking-wider mb-1">Telefon</dt>
                      <dd className="text-white text-sm">
                        <a
                          href="tel:+998947382221"
                          className="no-underline text-white hover:text-[#E0A526] transition-colors"
                        >
                          {ofertaRequisites.phone}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-white/55 text-xs uppercase tracking-wider mb-1">Direktor</dt>
                      <dd className="text-white text-sm">{ofertaRequisites.director}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* CTA */}
              <div className="reveal card p-8 text-center">
                <p className="text-[#3E4B62] text-sm mb-5">
                  Savollaringiz bo'lsa, biz bilan bog'laning — bepul konsultatsiya beramiz.
                </p>
                <Link to="/boglanish" className="btn-primary no-underline">
                  Bog'lanish →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
