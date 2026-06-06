import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/natijalar")({
  head: () => ({
    meta: [
      { title: "Natijalar — France TCF O'quv Markazi" },
      { name: "description", content: "O'quvchilarimizning haqiqiy TCF Canada natijalari." },
    ],
  }),
  component: NatijalarPage,
});

const levelColor: Record<string, string> = {
  C2: "text-green-400 border-green-500/30 bg-green-500/5",
  B2: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  B1: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5",
};

const results = [
  {
    name: "Dilnura Saidbekova",
    period: "1 oy",
    from: "B1",
    cert: "TCF Canada",
    date: "April 2026",
    quote: "Finally 🎉 Alhamdulillah. Rahmat ustoz, sizga ham bergan ilmlarizga 🤗",
    scores: [
      { s: "Listening", l: "C2", v: "699/699" },
      { s: "Reading", l: "C2", v: "699/699" },
      { s: "Writing", l: "B2", v: "11/20" },
      { s: "Speaking", l: "B2", v: "10/20" },
    ],
    highlight: true,
  },
  {
    name: "Moxinur Salomatova",
    period: "O'rganish jarayonida",
    from: "A2",
    cert: "O'zbekiston sertifikati",
    date: "Iyun 2025",
    quote: "",
    scores: [
      { s: "Listening", l: "B1", v: "55" },
      { s: "Reading", l: "B1", v: "50" },
      { s: "Writing", l: "B1", v: "51" },
      { s: "Speaking", l: "B1", v: "38" },
    ],
    highlight: false,
  },
];

const tcfLevels = [
  { level: "A1–A2", l: "0–180", r: "0–180", c: "text-orange-400" },
  { level: "B1", l: "181–297", r: "181–297", c: "text-yellow-400" },
  { level: "B2", l: "298–457", r: "298–457", c: "text-blue-400" },
  { level: "C1", l: "458–502", r: "453–498", c: "text-emerald-400" },
  { level: "C2", l: "503–699", r: "499–699", c: "text-green-400" },
];

function NatijalarPage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-12"
            style={{ background: "radial-gradient(ellipse, #E8192C 0%, transparent 70%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36">
          <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Natijalar
          </p>
          <h1
            className="font-['Syne'] font-black leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Haqiqiy
            <br />
            <span className="text-[#E8192C]">natijalar</span>
          </h1>
          <p className="text-white/40 text-lg max-w-lg">
            Har bir natija haqiqiy sertifikat bilan tasdiqlangan. Biz reklama emas, ish bilan
            gaplashamiz.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {[
              { n: "100+", l: "Jami o'quvchilar" },
              { n: "B2+", l: "O'rtacha natija" },
              { n: "1 oy", l: "Eng tez natija" },
              { n: "C2", l: "Eng yuqori daraja" },
            ].map((s) => (
              <div
                key={s.l}
                className="bg-black px-10 py-10 text-center hover:bg-white/[0.02] transition-colors"
              >
                <div className="font-['Syne'] font-black text-4xl text-[#E8192C] mb-2">{s.n}</div>
                <div className="text-white/30 text-xs tracking-wider uppercase">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATIJALAR */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Sertifikatlar
            </p>
            <h2
              className="font-['Syne'] font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              O'quvchilar
              <br />
              natijalari
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {results.map((r) => (
              <div
                key={r.name}
                className={`bg-black p-10 hover:bg-white/[0.02] transition-all ${r.highlight ? "border-t-2 border-[#E8192C]" : ""}`}
              >
                {r.highlight && (
                  <div className="inline-flex items-center gap-2 bg-[#E8192C]/10 border border-[#E8192C]/20 px-3 py-1 rounded-full text-[#E8192C] text-xs mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] animate-pulse" />1 oylik
                    natija
                  </div>
                )}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="font-['Syne'] font-bold text-xl">{r.name}</h3>
                    <p className="text-white/30 text-xs mt-1">
                      {r.cert} • {r.date} • {r.period}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-white/20 text-xs">Boshlang'ich</div>
                    <div className="font-['Syne'] font-bold text-white/40">{r.from}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {r.scores.map((sc) => (
                    <div
                      key={sc.s}
                      className={`border rounded-xl p-4 ${levelColor[sc.l] || "border-white/10"}`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs opacity-60">{sc.s}</span>
                        <span className="text-xs font-bold">{sc.l}</span>
                      </div>
                      <div className="font-['Syne'] font-black text-xl">{sc.v}</div>
                    </div>
                  ))}
                </div>

                {r.quote && (
                  <div className="border-t border-white/5 pt-6">
                    <p className="text-white/40 text-sm italic">"{r.quote}"</p>
                  </div>
                )}

                {/* Sertifikat placeholder */}
                <div className="mt-6 border-2 border-dashed border-white/5 rounded-xl p-6 text-center">
                  <p className="text-white/15 text-xs">Sertifikat rasmi tez orada</p>
                </div>
              </div>
            ))}
          </div>

          {/* Yangi natijalar */}
          <div className="mt-px bg-white/5">
            <div className="bg-black p-10 text-center">
              <div className="font-['Syne'] font-black text-6xl text-white/5 mb-3">+</div>
              <p className="text-white/25 text-sm">Yangi natijalar qo'shilmoqda...</p>
            </div>
          </div>
        </div>
      </section>

      {/* TCF JADVALI */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Ma'lumotnoma
              </p>
              <h2
                className="font-['Syne'] font-black leading-none mb-4"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                TCF ball
                <br />
                darajalari
              </h2>
              <p className="text-white/30 text-sm">
                Kanada uchun kamida B2 daraja (NLC Level 7) talab qilinadi.
              </p>
            </div>
            <div className="border border-white/8 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 border-b border-white/5 px-6 py-3">
                <span className="text-white/20 text-xs uppercase tracking-wider">Daraja</span>
                <span className="text-white/20 text-xs uppercase tracking-wider text-center">
                  Listening
                </span>
                <span className="text-white/20 text-xs uppercase tracking-wider text-center">
                  Reading
                </span>
              </div>
              {tcfLevels.map((row, i) => (
                <div
                  key={row.level}
                  className={`grid grid-cols-3 px-6 py-4 ${i < tcfLevels.length - 1 ? "border-b border-white/5" : ""} hover:bg-white/[0.02] transition-colors`}
                >
                  <span className={`font-['Syne'] font-black ${row.c}`}>{row.level}</span>
                  <span className="text-white/50 text-sm text-center">{row.l}</span>
                  <span className="text-white/50 text-sm text-center">{row.r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-white/8 p-16 text-center">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(232,25,44,0.12) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2
                className="font-['Syne'] font-black leading-none mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                Keyingi natija
                <br />
                <span className="text-[#E8192C]">sizniki!</span>
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/boglanish"
                  className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white font-semibold px-10 py-5 rounded-xl text-sm transition-all hover:scale-105"
                >
                  Hozir boshlash →
                </Link>
                <Link
                  to="/kurslar"
                  className="no-underline border border-white/15 hover:border-white/40 text-white/70 hover:text-white font-medium px-10 py-5 rounded-xl text-sm transition-all"
                >
                  Kurslarni ko'rish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
