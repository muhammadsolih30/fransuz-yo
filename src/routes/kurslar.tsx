import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/kurslar")({
  head: () => ({
    meta: [
      { title: "Kurslar — France TCF O'quv Markazi" },
      {
        name: "description",
        content:
          "Offline, online, mini-guruh va individual fransuz tili kurslari. TCF Canada imtihoniga tayyorgarlik.",
      },
    ],
  }),
  component: KurslarPage,
});

const courses = [
  {
    id: 1,
    type: "Offline guruh",
    emoji: "🏫",
    prices: [
      { label: "A1–A2 daraja", price: "700,000" },
      { label: "B1+ daraja", price: "800,000" },
    ],
    duration: "6–8 oy",
    schedule: "Talabga qarab jadval belgilanadi",
    students: "5–10 kishi",
    features: [
      "Yuzma-yuz darslar",
      "Speaking amaliyoti guruhda",
      "Darsxonada materiallar",
      "O'qituvchi bilan to'g'ridan-to'g'ri muloqot",
    ],
    popular: false,
    color: "border-white/10",
    badge: "",
  },
  {
    id: 2,
    type: "Mini-guruh",
    emoji: "👥",
    prices: [{ label: "2–3 kishi", price: "900,000" }],
    duration: "6–8 oy",
    schedule: "O'quvchiga qulay vaqtga moslashtiriladi",
    students: "2–3 kishi",
    features: [
      "Kichik guruhda intensiv darslar",
      "Har bir o'quvchiga e'tibor",
      "Tez natija",
      "Moslashuvchan jadval",
    ],
    popular: true,
    color: "border-[#E8192C]/40",
    badge: "Eng mashhur",
  },
  {
    id: 3,
    type: "Online guruh",
    emoji: "💻",
    prices: [{ label: "Zoom / Google Meet", price: "490,000" }],
    duration: "6–8 oy",
    schedule: "Asosan kechki vaqtlarda",
    students: "5–12 kishi",
    features: [
      "Zoom va Google Meet orqali",
      "Istalgan joydan qatnashish",
      "Yozib olingan darslar",
      "Onlayn materiallar",
    ],
    popular: false,
    color: "border-white/10",
    badge: "",
  },
  {
    id: 4,
    type: "Individual",
    emoji: "🎯",
    prices: [{ label: "Online", price: "1,200,000" }],
    duration: "6–8 oy",
    schedule: "O'quvchiga to'liq moslashtiriladi",
    students: "1 kishi",
    features: [
      "To'liq shaxsiy tayyorgarlik",
      "O'z sur'atida o'rganish",
      "Zaif tomonlarga e'tibor",
      "Maksimal natija",
    ],
    popular: false,
    color: "border-[#D4AF37]/30",
    badge: "Premium",
  },
];

const subjects = [
  {
    icon: "🎧",
    title: "Listening",
    text: "TCF formatidagi audio mashqlar, savol turlari va vaqt boshqaruvi strategiyalari",
  },
  { icon: "📖", title: "Reading", text: "Matn tushunish, tez o'qish va javob topish texnikalari" },
  {
    icon: "✍️",
    title: "Writing",
    text: "Rasmiy va norasmiy yozuv, TCF mezonlari bo'yicha baholash",
  },
  { icon: "🗣️", title: "Speaking", text: "Amaliy suhbat, monolog va dialog mashqlari" },
  {
    icon: "📚",
    title: "Grammar",
    text: "Fransuz grammatikasi asoslari va murakkab konstruktsiyalar",
  },
  {
    icon: "💬",
    title: "Vocabulary",
    text: "TCF imtihoniga oid leksika va kundalik muloqot so'zlari",
  },
];

const rules = [
  "Darslarga o'z vaqtida qatnashish",
  "Uy vazifalarini muntazam bajarish",
  "To'lovlarni belgilangan muddatda amalga oshirish",
  "O'qituvchi va guruhdoshlarni hurmat qilish",
  "Sababsiz qoldirilgan darslar qayta o'tilmaydi",
];

function KurslarPage() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-125 h-125 rounded-full bg-[#E8192C] opacity-8 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
            Kurslar
          </span>
          <h1 className="font-['Syne'] font-black text-4xl md:text-6xl mt-3 mb-5 leading-tight">
            O'zingizga mos
            <br />
            <span className="text-[#E8192C]">format</span> tanlang
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            TCF Canada imtihoniga tayyorgarlik uchun 4 xil format — har bir o'quvchining ehtiyojiga
            mos.
          </p>
        </div>
      </section>

      {/* KURS KARTOCHKALARI */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((c) => (
              <div
                key={c.id}
                className={`bg-[#12121A] border-2 ${c.color} rounded-2xl p-8 relative transition-all hover:-translate-y-1 duration-300`}
              >
                {/* Badge */}
                {c.badge && (
                  <div
                    className={`absolute top-6 right-6 text-xs font-medium px-3 py-1 rounded-full ${
                      c.badge === "Eng mashhur"
                        ? "bg-[#E8192C] text-white"
                        : "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"
                    }`}
                  >
                    {c.badge}
                  </div>
                )}

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{c.emoji}</span>
                  <div>
                    <h3 className="font-['Syne'] font-bold text-xl">{c.type}</h3>
                    <p className="text-white/40 text-xs">
                      {c.students} • {c.duration}
                    </p>
                  </div>
                </div>

                {/* Narx */}
                <div className="mb-6">
                  {c.prices.map((p) => (
                    <div key={p.label} className="flex items-baseline justify-between mb-2">
                      <span className="text-white/50 text-sm">{p.label}</span>
                      <span className="font-['Syne'] font-bold text-2xl text-white">
                        {p.price}
                        <span className="text-white/40 text-sm font-normal"> so'm/oy</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mb-6" />

                {/* Jadval */}
                <div className="flex items-start gap-2 mb-5">
                  <span className="text-sm">🕐</span>
                  <p className="text-white/50 text-sm">{c.schedule}</p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-7">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/boglanish"
                  className={`block text-center py-3 rounded-xl text-sm font-medium transition-all no-underline ${
                    c.popular
                      ? "bg-[#E8192C] hover:bg-[#c4111f] text-white"
                      : "border border-white/15 hover:border-white/40 text-white"
                  }`}
                >
                  Ro'yxatdan o'tish
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARS MAVZULARI */}
      <section className="py-20 bg-[#12121A] mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Dastur
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Darslarda nima o'tiladi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {subjects.map((s) => (
              <div
                key={s.title}
                className="bg-[#0A0A0F] border border-white/5 hover:border-[#E8192C]/25 rounded-2xl p-6 transition-all"
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-['Syne'] font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TCF DARAJALAR */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              TCF Canada
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Kanada uchun kerakli daraja
            </h2>
            <p className="text-white/50 text-sm mt-3 max-w-lg mx-auto">
              Express Entry dasturiga muvaffaqiyatli murojaat qilish uchun TCF Canada imtihonida
              kamida B2 daraja kerak.
            </p>
          </div>

          {/* NLC Ball jadvali */}
          <div className="bg-[#12121A] border border-white/5 rounded-2xl overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-white/5">
              <h3 className="font-['Syne'] font-semibold text-sm">
                TCF NLC Ball jadvali (Level 7 = B2+)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-3 text-white/40 font-medium">Bo'lim</th>
                    <th className="text-left px-6 py-3 text-white/40 font-medium">NLC Level 7</th>
                    <th className="text-left px-6 py-3 text-white/40 font-medium">Ball oralig'i</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { section: "Speaking", nlc: "Level 7", score: "10–11 / 20" },
                    { section: "Listening", nlc: "Level 7", score: "458–502 / 699" },
                    { section: "Reading", nlc: "Level 7", score: "453–498 / 699" },
                    { section: "Writing", nlc: "Level 7", score: "10–11 / 20" },
                  ].map((row, i) => (
                    <tr
                      key={row.section}
                      className={
                        i % 2 === 0
                          ? "border-b border-white/5 bg-white/2"
                          : "border-b border-white/5"
                      }
                    >
                      <td className="px-6 py-4 font-medium">{row.section}</td>
                      <td className="px-6 py-4">
                        <span className="bg-[#E8192C]/15 text-[#ff6b7a] text-xs px-2 py-0.5 rounded">
                          {row.nlc}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/60">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-white/40 text-xs text-center">
            💡 Ingliz tili balingiz fransuz tilidan yuqori bo'lsa — ingliz tilini primary language
            qilib belgilang. Ball yuqoriroq chiqadi.
          </p>
        </div>
      </section>

      {/* KURS QOIDALARI */}
      <section className="py-16 bg-[#12121A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
                Qoidalar
              </span>
              <h2 className="font-['Syne'] font-bold text-2xl md:text-3xl mt-3">
                O'quv markazi qoidalari
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {rules.map((r, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-[#0A0A0F] border border-white/5 rounded-xl px-5 py-4"
                >
                  <span className="font-['Syne'] font-bold text-[#E8192C] text-sm shrink-0">
                    0{i + 1}
                  </span>
                  <p className="text-white/70 text-sm leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-[#E8192C]/10 via-transparent to-[#003DA5]/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mb-4">
            Qaysi kurs sizga mos?
          </h2>
          <p className="text-white/50 mb-8 text-sm">
            Biz bilan bog'laning — bepul maslahat beramiz.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/boglanish"
              className="bg-[#E8192C] hover:bg-[#c4111f] text-white font-medium px-8 py-4 rounded-lg transition-all no-underline text-sm"
            >
              Ro'yxatdan o'tish
            </Link>
            <a
              href="https://t.me/Fransuz_lingua"
              target="_blank"
              rel="noreferrer noopener"
              className="border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded-lg transition-all no-underline text-sm"
            >
              Telegramda yozish
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
