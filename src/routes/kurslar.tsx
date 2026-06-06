import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/kurslar")({
  head: () => ({
    meta: [
      { title: "Kurslar — France TCF O'quv Markazi" },
      {
        name: "description",
        content: "Offline, online, mini-guruh va individual fransuz tili kurslari.",
      },
    ],
  }),
  component: KurslarPage,
});

const courses = [
  {
    emoji: "🏫",
    type: "Offline guruh",
    prices: [
      { label: "A1–A2 daraja", price: "700 000" },
      { label: "B1+ daraja", price: "800 000" },
    ],
    schedule: "Talabga qarab jadval belgilanadi",
    students: "5–10 kishi",
    duration: "6–8 oy",
    features: [
      "Yuzma-yuz darslar",
      "Darsxonada materiallar",
      "Speaking amaliyoti",
      "O'qituvchi bilan to'g'ridan-to'g'ri",
    ],
    highlight: false,
  },
  {
    emoji: "👥",
    type: "Mini-guruh",
    prices: [{ label: "2–3 kishi", price: "900 000" }],
    schedule: "O'quvchiga qulay vaqtga moslashtiriladi",
    students: "2–3 kishi",
    duration: "6–8 oy",
    features: [
      "Intensiv darslar",
      "Har biriga alohida e'tibor",
      "Tez natija",
      "Moslashuvchan jadval",
    ],
    highlight: true,
  },
  {
    emoji: "💻",
    type: "Online guruh",
    prices: [{ label: "Zoom / Google Meet", price: "490 000" }],
    schedule: "Asosan kechki vaqtlarda",
    students: "5–12 kishi",
    duration: "6–8 oy",
    features: [
      "Istalgan joydan",
      "Zoom / Google Meet",
      "Yozib olingan darslar",
      "Online materiallar",
    ],
    highlight: false,
  },
  {
    emoji: "🎯",
    type: "Individual",
    prices: [{ label: "Online", price: "1 200 000" }],
    schedule: "To'liq moslashtiriladi",
    students: "1 kishi",
    duration: "6–8 oy",
    features: [
      "Shaxsiy tayyorgarlik",
      "O'z sur'atida",
      "Zaif tomonlarga e'tibor",
      "Maksimal natija",
    ],
    highlight: false,
  },
];

const subjects = [
  {
    icon: "🎧",
    t: "Listening",
    d: "TCF formatidagi audio mashqlar va vaqt boshqaruvi strategiyalari",
  },
  { icon: "📖", t: "Reading", d: "Matn tushunish, tez o'qish va javob topish texnikalari" },
  { icon: "✍️", t: "Writing", d: "Rasmiy va norasmiy yozuv, TCF mezonlari bo'yicha baholash" },
  { icon: "🗣️", t: "Speaking", d: "Amaliy suhbat, monolog va dialog mashqlari" },
  { icon: "📚", t: "Grammar", d: "Fransuz grammatikasi asoslari va murakkab konstruktsiyalar" },
  { icon: "💬", t: "Vocabulary", d: "TCF imtihoniga oid leksika va kundalik muloqot so'zlari" },
];

const nlcTable = [
  { section: "Speaking", score: "10–11 / 20" },
  { section: "Listening", score: "458–502 / 699" },
  { section: "Reading", score: "453–498 / 699" },
  { section: "Writing", score: "10–11 / 20" },
];

function KurslarPage() {
  const [active, setActive] = useState<number | null>(null);

  const faqs = [
    {
      q: "Darslar qaysi platformada o'tiladi?",
      a: "Online darslar Zoom va Google Meet orqali. Offline darslar Oybek metro, Farmatsevtika instituti ichidagi darsxonamizda.",
    },
    {
      q: "Kurs davomida materiallar beriladi mi?",
      a: "Ha, barcha o'quvchilarga kerakli materiallar, testlar va topshiriqlar beriladi.",
    },
    {
      q: "Sababsiz qoldirilgan darslar qaytariladimi?",
      a: "Yo'q. Sababsiz qoldirilgan darslar qayta o'tilmaydi — markaz qoidasi.",
    },
    {
      q: "To'lovni qanday amalga oshirish mumkin?",
      a: "To'lovlar belgilangan muddatda amalga oshirilishi shart. To'lov usullari haqida murojaat qiling.",
    },
    {
      q: "Daraja aniqlanadi mi?",
      a: "Ha. Birinchi dars oldidan boshlang'ich test o'tkaziladi va sizga mos guruh tanlanadi.",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-15"
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
            Kurslar
          </p>
          <h1
            className="font-['Syne'] font-black leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Format
            <br />
            tanlang
          </h1>
          <p className="text-white/40 text-lg max-w-lg">
            TCF Canada imtihoniga tayyorgarlik uchun 4 xil format — har bir o'quvchining ehtiyojiga
            mos.
          </p>
        </div>
      </section>

      {/* KURSLAR */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {courses.map((c) => (
              <div
                key={c.type}
                className={`bg-black p-10 hover:bg-white/[0.02] transition-all group relative ${c.highlight ? "border-t-2 border-[#E8192C]" : ""}`}
              >
                {c.highlight && (
                  <div className="absolute top-6 right-6 bg-[#E8192C] text-white text-xs font-medium px-3 py-1 rounded-full">
                    Eng mashhur
                  </div>
                )}
                <div className="text-4xl mb-6">{c.emoji}</div>
                <h3 className="font-['Syne'] font-black text-2xl mb-1 group-hover:text-[#E8192C] transition-colors">
                  {c.type}
                </h3>
                <p className="text-white/30 text-xs mb-8">
                  {c.students} • {c.duration}
                </p>

                {/* Narx */}
                <div className="mb-8">
                  {c.prices.map((p) => (
                    <div
                      key={p.label}
                      className="flex justify-between items-baseline border-b border-white/5 pb-3 mb-3"
                    >
                      <span className="text-white/40 text-sm">{p.label}</span>
                      <span className="font-['Syne'] font-black text-2xl text-white">
                        {p.price}
                        <span className="text-white/30 text-sm font-normal"> so'm/oy</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Jadval */}
                <p className="text-white/30 text-xs mb-6">🕐 {c.schedule}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-8">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/50">
                      <span className="w-1 h-1 rounded-full bg-[#E8192C]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/boglanish"
                  className={`no-underline block text-center py-3.5 rounded-xl text-sm font-medium transition-all ${
                    c.highlight
                      ? "bg-[#E8192C] hover:bg-[#c4111f] text-white"
                      : "border border-white/10 hover:border-white/30 text-white/70 hover:text-white"
                  }`}
                >
                  Ro'yxatdan o'tish →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARS DASTURI */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Dastur
              </p>
              <h2
                className="font-['Syne'] font-black leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Darslarda
                <br />
                nima o'tiladi
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {subjects.map((s) => (
              <div key={s.t} className="bg-black p-8 hover:bg-white/[0.02] transition-all group">
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="font-['Syne'] font-bold text-lg mb-2 group-hover:text-[#E8192C] transition-colors">
                  {s.t}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TCF NLC JADVALI */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                TCF Canada
              </p>
              <h2
                className="font-['Syne'] font-black leading-none mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Kerakli
                <br />
                ball darajasi
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                Express Entry dasturiga muvaffaqiyatli murojaat qilish uchun TCF Canada imtihonida
                barcha bo'limlardan <span className="text-white">NLC Level 7 (B2+)</span> daraja
                kerak.
              </p>
              <p className="text-white/30 text-xs">
                💡 Ingliz tili balingiz fransuz tilidan yuqori bo'lsa — ingliz tilini primary
                language qilib belgilang. Ball yuqoriroq chiqadi.
              </p>
            </div>
            <div className="border border-white/8 rounded-2xl overflow-hidden">
              <div className="border-b border-white/5 px-6 py-4">
                <span className="text-white/30 text-xs tracking-widest uppercase">
                  NLC Level 7 = B2+
                </span>
              </div>
              {nlcTable.map((row, i) => (
                <div
                  key={row.section}
                  className={`flex items-center justify-between px-6 py-5 ${i < nlcTable.length - 1 ? "border-b border-white/5" : ""} hover:bg-white/[0.02] transition-colors`}
                >
                  <span className="text-white/60 text-sm">{row.section}</span>
                  <span className="font-['Syne'] font-bold text-white">{row.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                FAQ
              </p>
              <h2
                className="font-['Syne'] font-black leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Kurslar
                <br />
                bo'yicha
                <br />
                savollar
              </h2>
            </div>
            <div className="flex flex-col gap-1">
              {faqs.map((f, i) => (
                <details key={i} className="group border-b border-white/5">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none">
                    <span className="font-['Syne'] font-semibold text-sm text-white/70 group-open:text-white transition-colors">
                      {f.q}
                    </span>
                    <span className="text-[#E8192C] text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <p className="text-white/40 text-sm leading-relaxed pb-5">{f.a}</p>
                </details>
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
                Qaysi format
                <br />
                <span className="text-[#E8192C]">sizga mos?</span>
              </h2>
              <p className="text-white/40 mb-10">
                Bepul maslahat oling — biz to'g'ri yo'naltiramiz.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/boglanish"
                  className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white font-semibold px-10 py-5 rounded-xl text-sm transition-all hover:scale-105"
                >
                  Hozir murojaat qiling →
                </Link>
                <a
                  href="https://t.me/Fransuz_lingua"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline border border-white/15 hover:border-white/40 text-white/70 hover:text-white font-medium px-10 py-5 rounded-xl text-sm transition-all"
                >
                  Telegramda yozish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
