// Placeholder for the natijalar route
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/natijalar")({
  head: () => ({
    meta: [
      { title: "Natijalar — France TCF O'quv Markazi" },
      {
        name: "description",
        content: "O'quvchilarimizning haqiqiy TCF Canada natijalari va sertifikatlari.",
      },
    ],
  }),
  component: NatijalarPage,
});

const results = [
  {
    name: "Dilnura Saidbekova",
    period: "1 oy",
    from: "B1",
    scores: [
      { section: "Listening", level: "C2", score: "699/699" },
      { section: "Reading", level: "C2", score: "699/699" },
      { section: "Writing", level: "B2", score: "11/20" },
      { section: "Speaking", level: "B2", score: "10/20" },
    ],
    highlight: true,
    date: "April 2026",
    cert: "TCF Canada",
  },
  {
    name: "Moxinur Salomatova",
    period: "O'rganish jarayonida",
    from: "A2",
    scores: [
      { section: "Listening", level: "B1", score: "55/699" },
      { section: "Reading", level: "B1", score: "50/699" },
      { section: "Writing", level: "B1", score: "51/20" },
      { section: "Speaking", level: "B1", score: "38/20" },
    ],
    highlight: false,
    date: "Iyun 2025",
    cert: "O'zbekiston sertifikati",
  },
];

const levelColors: Record<string, string> = {
  C2: "bg-green-500/15 text-green-400 border-green-500/25",
  C1: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  B2: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  B1: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  A2: "bg-orange-500/15 text-orange-400 border-orange-500/25",
};

const stats = [
  { num: "100+", label: "Jami o'quvchilar" },
  { num: "B2+", label: "O'rtacha natija" },
  { num: "1 oy", label: "Eng tez natija" },
  { num: "C2", label: "Eng yuqori daraja" },
];

const tcfLevels = [
  { level: "A1–A2", listening: "0–180", reading: "0–180", color: "text-orange-400" },
  { level: "B1", listening: "181–297", reading: "181–297", color: "text-yellow-400" },
  { level: "B2", listening: "298–457", reading: "298–457", color: "text-blue-400" },
  { level: "C1", listening: "458–502", reading: "453–498", color: "text-emerald-400" },
  { level: "C2", listening: "503–699", reading: "499–699", color: "text-green-400" },
];

function NatijalarPage() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-125 h-125 rounded-full bg-[#E8192C] opacity-8 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
            Natijalar
          </span>
          <h1 className="font-['Syne'] font-black text-4xl md:text-6xl mt-3 mb-5 leading-tight">
            Haqiqiy o'quvchilar,
            <br />
            <span className="text-[#E8192C]">haqiqiy natijalar</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Har bir natija — haqiqiy sertifikat bilan tasdiqlangan. Biz reklama emas, ish bilan
            gaplashamiz.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#12121A] hover:bg-[#E8192C]/5 transition-colors p-8 text-center"
              >
                <div className="font-['Syne'] font-black text-3xl text-[#E8192C] mb-2">{s.num}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATIJALAR KARTOCHKALARI */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Sertifikatlar
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              O'quvchilar natijalari
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((r) => (
              <div
                key={r.name}
                className={`bg-[#12121A] rounded-2xl p-8 border-2 transition-all ${
                  r.highlight ? "border-[#E8192C]/40" : "border-white/5"
                }`}
              >
                {r.highlight && (
                  <div className="inline-flex items-center gap-1.5 bg-[#E8192C]/10 border border-[#E8192C]/25 text-[#ff6b7a] text-xs px-3 py-1 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] animate-pulse" />1 oylik
                    natija
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-['Syne'] font-bold text-lg">{r.name}</h3>
                    <p className="text-white/40 text-xs mt-1">
                      {r.cert} • {r.date} • {r.period} o'qib
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-white/30 text-xs">Boshlang'ich daraja</div>
                    <div className="font-['Syne'] font-bold text-white/50">{r.from}</div>
                  </div>
                </div>

                {/* Scores */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {r.scores.map((sc) => (
                    <div
                      key={sc.section}
                      className="bg-[#0A0A0F] border border-white/5 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/50 text-xs">{sc.section}</span>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded border ${levelColors[sc.level] || "bg-white/10 text-white border-white/10"}`}
                        >
                          {sc.level}
                        </span>
                      </div>
                      <div className="font-['Syne'] font-bold text-xl text-white">{sc.score}</div>
                    </div>
                  ))}
                </div>

                {/* Sertifikat placeholder */}
                <div className="bg-[#0A0A0F] border-2 border-dashed border-white/8 rounded-xl p-5 text-center">
                  <p className="text-white/25 text-xs">Sertifikat rasmi</p>
                  <p className="text-white/15 text-[10px] mt-1">Tez orada qo'shiladi</p>
                </div>
              </div>
            ))}
          </div>

          {/* Yangi natijalar qo'shiladi */}
          <div className="mt-6 bg-[#12121A] border-2 border-dashed border-white/8 rounded-2xl p-10 text-center">
            <div className="font-['Syne'] font-bold text-2xl text-white/10 mb-2">+</div>
            <p className="text-white/30 text-sm">Yangi natijalar qo'shilmoqda...</p>
            <p className="text-white/20 text-xs mt-1">
              Har oy yangi o'quvchilar natijalari chiqmoqda
            </p>
          </div>
        </div>
      </section>

      {/* 1 OYLIK NATIJA TAFSILOT */}
      <section className="py-16 bg-[#12121A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
                Case study
              </span>
              <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
                1 oyda B1 dan C2 gacha
              </h2>
            </div>

            <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-[#E8192C]/15 border border-[#E8192C]/25 flex items-center justify-center font-['Syne'] font-bold text-[#E8192C]">
                  DS
                </div>
                <div>
                  <div className="font-['Syne'] font-semibold">Dilnura Saidbekova</div>
                  <div className="text-white/40 text-xs">
                    Tashkent, Alliance Française • April 2026
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { section: "Listening", level: "C2", score: "699", max: "699" },
                  { section: "Reading", level: "C2", score: "699", max: "699" },
                  { section: "Writing", level: "B2", score: "11", max: "20" },
                  { section: "Speaking", level: "B2", score: "10", max: "20" },
                ].map((sc) => (
                  <div key={sc.section} className="text-center">
                    <div
                      className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full border mb-2 ${levelColors[sc.level]}`}
                    >
                      {sc.level}
                    </div>
                    <div className="font-['Syne'] font-black text-2xl text-white">{sc.score}</div>
                    <div className="text-white/30 text-xs">/ {sc.max}</div>
                    <div className="text-white/50 text-xs mt-1">{sc.section}</div>
                  </div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="space-y-3">
                {[
                  { label: "Listening", pct: 100, level: "C2" },
                  { label: "Reading", pct: 100, level: "C2" },
                  { label: "Writing", pct: 55, level: "B2" },
                  { label: "Speaking", pct: 50, level: "B2" },
                ].map((p) => {
                  const pctClass = p.pct === 100 ? "w-full" : p.pct === 50 ? "w-1/2" : "w-[55%]";
                  return (
                    <div key={p.label} className="flex items-center gap-4">
                      <div className="w-20 text-white/50 text-xs shrink-0">{p.label}</div>
                      <div className="flex-1 bg-white/5 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-[#E8192C] transition-all duration-1000 ${pctClass}`}
                        />
                      </div>
                      <div
                        className={`text-xs font-semibold w-6 ${levelColors[p.level]?.split(" ")[1] || ""}`}
                      >
                        {p.level}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* O'quvchi izohi */}
            <div className="bg-[#E8192C]/8 border border-[#E8192C]/20 rounded-2xl p-6">
              <p className="text-white/70 text-sm leading-relaxed italic mb-4">
                "Finally 🎉 Alhamdulillah. Rahmat ustoz, sizga ham bergan ilmlarizga 🤗"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E8192C]/20 flex items-center justify-center text-xs font-bold text-[#E8192C]">
                  D
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Dilnura</div>
                  <div className="text-white/40 text-xs">O'quvchi, Online guruh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TCF DARAJALAR JADVALI */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Ma'lumotnoma
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              TCF ball darajalari
            </h2>
          </div>
          <div className="max-w-2xl mx-auto bg-[#12121A] border border-white/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-4 text-white/40 font-medium">Daraja</th>
                    <th className="text-center px-6 py-4 text-white/40 font-medium">Listening</th>
                    <th className="text-center px-6 py-4 text-white/40 font-medium">Reading</th>
                  </tr>
                </thead>
                <tbody>
                  {tcfLevels.map((row, i) => (
                    <tr
                      key={row.level}
                      className={
                        i % 2 === 0
                          ? "border-b border-white/5 bg-white/2"
                          : "border-b border-white/5"
                      }
                    >
                      <td className="px-6 py-4">
                        <span className={`font-['Syne'] font-bold ${row.color}`}>{row.level}</span>
                      </td>
                      <td className="px-6 py-4 text-center text-white/60">{row.listening}</td>
                      <td className="px-6 py-4 text-center text-white/60">{row.reading}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-white/30 text-xs text-center mt-4">
            Kanada uchun kamida B2 daraja (NLC Level 7) talab qilinadi
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-[#E8192C]/10 via-transparent to-[#003DA5]/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mb-4">
            Keyingi natija sizniki bo'lsin!
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            Hoziroq ro'yxatdan o'ting va o'z yo'lingizni boshlang.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/boglanish"
              className="bg-[#E8192C] hover:bg-[#c4111f] text-white font-medium px-8 py-4 rounded-lg transition-all no-underline text-sm"
            >
              Ro'yxatdan o'tish
            </Link>
            <Link
              to="/kurslar"
              className="border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded-lg transition-all no-underline text-sm"
            >
              Kurslarni ko'rish
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
