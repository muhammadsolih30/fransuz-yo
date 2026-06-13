import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "../hooks/useReveal";
import { CountUp } from "../components/CountUp";

export const Route = createFileRoute("/immigratsiya")({
  head: () => ({
    meta: [
      { title: "Immigratsiya — Express Entry orqali Kanadaga" },
      {
        name: "description",
        content:
          "Express Entry tizimi orqali fransuz tili bilan Kanadaga PR. +50 CRS ball, French-speaking tanlovlar va to'liq ma'lumot.",
      },
    ],
  }),
  component: ImmigratsiyaPage,
});

const itaTrend = [
  { year: "2022", n: 6200, label: "~6 200" },
  { year: "2023", n: 15000, label: "~15 000" },
  { year: "2024", n: 24300, label: "~24 300" },
  { year: "2025", n: 30000, label: "~30 000+" },
];

const eeBenefits = [
  { icon: "🏡", t: "Doimiy yashash (PR)", d: "Express Entry orqali Kanadada doimiy yashash maqomini olasiz." },
  { icon: "💼", t: "Ishlash huquqi", d: "Butun Kanada bo'ylab cheklovsiz ishlash imkoniyati." },
  { icon: "🛂", t: "Fuqarolik", d: "PR dan keyin belgilangan muddat o'tib, fuqarolik olish mumkin." },
];

const frenchPlus = [
  { icon: "🎯", t: "+50 ball", d: "Fransuz tili bilan CRS ballingizga qo'shimcha 50 ball qo'shiladi." },
  { icon: "📉", t: "Kamroq raqobat", d: "Fransuzzabon nomzodlar kam — raqobat ingliz yo'lidan ancha past." },
  { icon: "🎫", t: "Maxsus tanlovlar", d: "French-speaking draws — faqat fransuzzabonlar uchun alohida saralashlar." },
];

const requirements = [
  {
    icon: "🎂",
    title: "Yosh",
    items: ["Ideal: 20–35 yosh", "40 dan keyin ball kamayadi", "Lekin baribir imkoniyat bor"],
  },
  {
    icon: "🎓",
    title: "Ta'lim",
    items: ["Kamida kollej yoki universitet", "Diplom ECA orqali tasdiqlanadi", "WES va boshqa tashkilotlar"],
  },
  {
    icon: "🗣️",
    title: "Til",
    items: ["Fransuz: TEF yoki TCF Canada", "Minimum CLB 7 (B2)", "Ingliz tili — qo'shimcha bonus"],
  },
];

const exams = [
  {
    flag: "🇫🇷",
    title: "Fransuz tili",
    subtitle: "Majburiy — asosiy qism",
    items: ["TEF Canada yoki TCF Canada", "Minimal: B2 (CLB 7)", "Qanchalik yuqori — shuncha yaxshi"],
    primary: true,
  },
  {
    flag: "🇬🇧",
    title: "Ingliz tili",
    subtitle: "Ixtiyoriy — qo'shimcha ball",
    items: ["IELTS General", "Hatto IELTS 5 ham foydali", "Fransuz + ingliz = kuchli profil 💪"],
    primary: false,
  },
];

const crsFactors = ["Yosh", "Ta'lim", "Fransuz tili", "Ingliz tili", "Turmush holati"];

const faqs = [
  {
    q: "Express Entry nima?",
    a: "Kanadaning asosiy immigratsiya tizimi. U orqali doimiy yashash (PR), ishlash va keyin fuqarolik olish mumkin.",
  },
  {
    q: "Qancha CRS ball kerak?",
    a: "Fransuz B2–C1 va ingliz kamida basic bo'lsa, 400–470+ ball chiqishi mumkin. 2025-yil dekabr oyidagi oxirgi saralash 399 ball bo'ldi — bu ITA (taklif) olish uchun yetarli.",
  },
  {
    q: "Hujjat ishlarini kim qiladi?",
    a: "Biz til tayyorlash bilan shug'ullanamiz. Hujjat topshirish va PR jarayoni uchun ishonchli agentlik tavsiya qilamiz.",
  },
  {
    q: "Yiliga qancha kishi qabul qilinadi?",
    a: "Fransuz tili orqali yiliga 20 000 – 30 000 kishi. Trend o'smoqda: 2022 (~6,200) → 2025 (~30,000+).",
  },
  {
    q: "35 yoshdan katta bo'lsam-chi?",
    a: "35 dan katta bo'lsangiz, ingliz va fransuz tilini bilishingiz zarur. Aks holda viza chiqmaslik ehtimoli yuqori.",
  },
  {
    q: "Inglizsiz bo'ladimi?",
    a: "Ha, inglizsiz ham mumkin. Lekin ingliz tili bo'lsa profil yanada kuchli va yo'l osonroq bo'ladi.",
  },
];

function ImmigratsiyaPage() {
  useReveal();

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/opening/imigratsiyaBo%27limi.png')", opacity: 0.95 }}
        />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#15233B]/10 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#d62839]" /> Express Entry
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100 max-w-4xl">
            Fransuz tili orqali <span className="text-gradient-canada">Kanadaga</span> ketish
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl animate-slide-up delay-200">
            Express Entry — Kanadaning asosiy immigratsiya tizimi. Fransuz tili bu yo'lning eng
            oson va ishonchli kalitidir: +50 ball, kamroq raqobat, maxsus tanlovlar.
          </p>
          <div className="flex flex-wrap gap-4 mt-9 animate-slide-up delay-300">
            <Link to="/boglanish" className="btn-primary">Bepul maslahat →</Link>
            <Link to="/kurslar" className="btn-outline">Kurslarni ko'rish</Link>
          </div>
        </div>
      </section>

      {/* EXPRESS ENTRY NIMA */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> 1-qism</p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              Express Entry orqali <span className="text-gradient-bleu">nima olasiz</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {eeBenefits.map((b, i) => (
              <div key={b.t} className="reveal card card-hover p-8 group" data-delay={i * 100}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#eaf0f8] to-[#d6e3f3] flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">{b.icon}</div>
                <h3 className="font-['Syne'] font-bold text-xl mb-3 group-hover:text-[#d62839] transition-colors">{b.t}</h3>
                <p className="text-[#3E4B62] text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRANSUZ TILI PLUS */}
      <section className="py-20 lg:py-28 bg-[#15233B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#d62839]/20 blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#E0A526] mb-4"><span className="w-8 h-px bg-[#E0A526]" /> 2-qism</p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              🇫🇷 Fransuz tili nega katta <span className="text-[#E0A526]">PLUS</span>?
            </h2>
            <p className="text-white/85 text-lg mt-5">
              Kanada fransuz tilini juda qattiq qo'llab-quvvatlaydi. Shu sabab fransuz tili —
              eng oson yo'llardan biri.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {frenchPlus.map((b, i) => (
              <div key={b.t} className="reveal bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500" data-delay={i * 100}>
                <div className="text-4xl mb-5">{b.icon}</div>
                <h3 className="font-['Syne'] font-bold text-xl mb-3">{b.t}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TALABLAR */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> 3-qism</p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              Kimlar topshira oladi? <span className="text-gradient-canada">Minimal talablar</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {requirements.map((r, i) => (
              <div key={r.title} className="reveal card card-hover p-8" data-delay={i * 100}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center text-2xl">{r.icon}</div>
                  <h3 className="font-['Syne'] font-bold text-xl">{r.title}</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {r.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-[#3E4B62]">
                      <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIL IMTIHONLARI */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> 4-qism · Eng muhim</p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              Til imtihonlari
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {exams.map((e, i) => (
              <div
                key={e.title}
                className={`reveal card p-8 lg:p-10 ${e.primary ? "ring-2 ring-[#d62839] shadow-[var(--shadow-glow)]" : "card-hover"}`}
                data-delay={i * 100}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{e.flag}</span>
                  <div>
                    <h3 className="font-['Syne'] font-extrabold text-2xl">{e.title}</h3>
                    <p className={`text-sm font-semibold ${e.primary ? "text-[#d62839]" : "text-[#546074]"}`}>{e.subtitle}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-3">
                  {e.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm text-[#3E4B62]">
                      <span className="w-5 h-5 rounded-full bg-[#d62839]/10 text-[#d62839] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">★</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRS BALL */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> 5-qism</p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                CRS ball tizimi
              </h2>
              <p className="text-[#3E4B62] text-base leading-relaxed mb-6">
                Ball quyidagilarga qarab beriladi:
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {crsFactors.map((c) => (
                  <span key={c} className="bg-[#FAF6EF] border border-[#15233B]/10 text-[#3E4B62] text-sm font-semibold px-4 py-2 rounded-xl">
                    {c}
                  </span>
                ))}
              </div>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-6">
                <p className="text-[#2C3850] text-sm leading-relaxed">
                  😍 <strong>2025-yil dekabr oyidagi oxirgi saralash 399 ball bo'ldi.</strong> Bu esa
                  taklif (ITA) olish uchun yetarli.
                </p>
              </div>
            </div>
            <div className="reveal" data-delay={150}>
              <div className="card p-10 text-center bg-gradient-to-br from-white to-[#FAF6EF]">
                <p className="text-[#546074] text-sm font-semibold mb-3">O'rtacha vaziyatda (Fransuz B2–C1 + ingliz basic)</p>
                <div className="font-['Syne'] font-extrabold text-6xl lg:text-7xl text-gradient-canada mb-3">
                  400–470+
                </div>
                <p className="text-[#646F82] text-sm font-medium">taxminiy CRS ball</p>
                <div className="mt-8 pt-8 border-t border-[#15233B]/8">
                  <div className="font-['Syne'] font-extrabold text-4xl text-[#15233B] mb-1">
                    <CountUp target={399} />
                  </div>
                  <p className="text-[#546074] text-sm">2025 dekabr — oxirgi saralash bali</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITA TREND */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> Statistika</p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">
              Fransuz tili orqali ITA olganlar <span className="text-gradient-canada">o'smoqda</span>
            </h2>
            <p className="text-[#3E4B62] text-lg mt-5">
              So'nggi yillar bo'yicha real raqamlar (rasmiy trend asosida).
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {itaTrend.map((k, i) => (
              <div key={k.year} className="reveal card card-hover p-8 text-center" data-delay={i * 80}>
                <div className="text-[#646F82] text-sm font-semibold mb-3">{k.year}</div>
                <div className="font-['Syne'] font-extrabold text-4xl lg:text-5xl text-gradient-canada mb-2">
                  <CountUp target={k.n} suffix="+" />
                </div>
                <div className="text-[#546074] text-xs">ITA (taklif)</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#546074] text-sm mt-8 reveal">
            📈 Kanada hukumati fransuz tilini biladigan immigrantlarni yuqori darajada qo'llab-quvvatlamoqda.
          </p>
        </div>
      </section>

      {/* XULOSA */}
      <section className="py-20 lg:py-28 bg-[#15233B] text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#E0A526]/10 blur-[120px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="eyebrow text-[#E0A526] mb-4 justify-center flex"><span className="w-8 h-px bg-[#E0A526] self-center" /> Xulosa</p>
            <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight">🔑 Eng muhim xulosalar</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "Fransuz tili — eng kuchli karta",
              "Express Entry — rasmiy va ishonchli yo'l",
              "Inglizsiz ham mumkin, ingliz bo'lsa yanada oson",
              "Fransuz tili orqali yiliga 30 ming+ kishi PR oladi",
            ].map((x, i) => (
              <div key={x} className="reveal flex items-center gap-4 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6" data-delay={i * 80}>
                <span className="text-2xl text-[#E0A526]">✔️</span>
                <span className="font-semibold">{x}</span>
              </div>
            ))}
          </div>
          <div className="reveal mt-6 bg-[#d62839]/20 border border-[#d62839]/30 rounded-2xl p-6 flex items-start gap-4">
            <span className="text-2xl">⚠️</span>
            <p className="text-white/80 text-sm leading-relaxed">
              <strong>Diqqat:</strong> Yoshingiz 35 dan katta bo'lsa, ingliz va fransuz tilini
              bilishingiz zarur. Aks holda viza chiqmaslik ehtimoli yuqori.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 reveal">
              <p className="eyebrow text-[#d62839] mb-4"><span className="w-8 h-px bg-[#d62839]" /> FAQ</p>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-5xl leading-tight mb-6">
                Immigratsiya bo'yicha savollar
              </h2>
              <Link to="/boglanish" className="btn-primary">Bepul maslahat →</Link>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-3">
              {faqs.map((f, i) => (
                <details key={i} className="reveal group card overflow-hidden" data-delay={i * 60}>
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-['Syne'] font-bold text-base group-open:text-[#d62839] transition-colors pr-4">{f.q}</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#d62839]/10 text-[#d62839] flex items-center justify-center text-xl group-open:rotate-45 group-open:bg-[#d62839] group-open:text-white transition-all duration-300">+</span>
                  </summary>
                  <p className="text-[#3E4B62] text-sm leading-relaxed px-6 pb-6">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#15233B] via-[#1d3a5f] to-[#d62839] p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,165,38,0.30),transparent_50%)]" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="text-5xl mb-6">🇨🇦</div>
              <h2 className="font-['Syne'] font-extrabold text-4xl lg:text-6xl leading-tight mb-6 text-white">
                Kanadaga borish orzungizmi?
              </h2>
              <p className="text-white/85 text-lg mb-10">
                Birinchi qadam — fransuz tili. Biz siz bilan butun yo'l davomida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/boglanish" className="btn-gold">Hozir boshlash →</Link>
                <a href="https://t.me/France_TCF" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all no-underline backdrop-blur-sm">
                  💬 Admin: @France_TCF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
