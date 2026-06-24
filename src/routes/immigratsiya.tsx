import { createFileRoute, Link } from "@tanstack/react-router";
import { FaqAccordion } from "../components/FaqAccordion";
import { useReveal } from "../hooks/useReveal";
import { immigrationFaq } from "../lib/faq-content";
import {
  ageScores,
  crsCalculatorUrl,
  crsCriteria,
  crsFactors,
  educationScores,
  frenchAdvantages,
  frenchDrawStats2026,
  immigrantQuota,
  nclcTable,
  ourHelp,
  prCardInfo,
  prDocuments,
  targetAudience,
  tcfSections,
} from "../lib/immigration-content";

export const Route = createFileRoute("/immigratsiya")({
  head: () => ({
    meta: [
      { title: "Kanada immigratsiyasi — Express Entry orqali PR" },
      {
        name: "description",
        content:
          "Fransuz tili orqali Kanadaga immigratsiya. Express Entry, TCF Canada, PR viza va to'liq ma'lumot.",
      },
    ],
  }),
  component: ImmigratsiyaPage,
});

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
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-[#a3182a]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4">
            <span className="w-8 h-px bg-[#d62839]" /> Kanada immigratsiyasi
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.02] mb-6 max-w-4xl">
            Fransuz tili orqali <span className="text-gradient-canada">Kanadaga immigratsiya</span>
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-3xl leading-relaxed">
            Kanadaga immigratsiya qilishni rejalashtiryapsizmi? Fransuz tilini o'rganish bugungi
            kunda Permanent Residence (PR) olishning eng kuchli yo'llaridan biri hisoblanadi. Kanada
            hukumati Express Entry tizimida fransuz tili uchun alohida tanlovlar (French Language
            Draws) o'tkazmoqda.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Link to="/boglanish" className="btn-primary no-underline">
              Bepul maslahat →
            </Link>
            <Link to="/faq" className="btn-outline no-underline">
              FAQ ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* NEGA FRANSUZ */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> Nega aynan fransuz tili?
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-6">
                Umumiy tanlovda 500+ ball — fransuz tilida ancha past
              </h2>
              <p className="text-[#3E4B62] text-base leading-relaxed mb-4">
                Ko'plab nomzodlar Express Entry umumiy tanlovlarida 500+ CRS ball to'plashga
                qiynaladi. Ammo fransuz tilini biladigan nomzodlar uchun alohida tanlovlarda talab
                qilinadigan ball ko'pincha ancha past bo'ladi.
              </p>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#2C3850] text-sm leading-relaxed">
                  📈 2026-yilda <strong>30 000 dan ortiq</strong> taklifnoma fransuz tili
                  kategoriyasi orqali berildi.
                </p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={120}>
              <div className="bg-[#a3182a] px-6 py-4">
                <span className="text-white font-['Syne'] font-bold text-sm">
                  2026-yilgi Express Entry statistikasi
                </span>
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
                  <span className="font-['Syne'] font-extrabold text-2xl text-[#d62839]">
                    CRS {row.crs}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPRESS ENTRY */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF] relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora opacity-70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Express Entry
            </p>
            <h2 className="font-['Syne'] font-extrabold text-4xl leading-tight">
              Express Entry qanday ishlaydi?
            </h2>
            <p className="text-[#3E4B62] text-base mt-4">
              Express Entry tizimida sizga quyidagi omillar bo'yicha ball beriladi:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {crsFactors.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="reveal card card-hover p-6"
                  data-delay={i * 70}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#fcefec] to-[#f9ddd8] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#d62839]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-['Syne'] font-bold mb-2 text-[#15233B]">{f.title}</h3>
                  <p className="text-[#3E4B62] text-xs leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CRS mezonlari va maksimal ball */}
          <div className="reveal card overflow-hidden bg-white text-[#15233B]">
            <div className="bg-[#d62839] px-6 py-4">
              <span className="text-white font-['Syne'] font-bold text-sm">
                Ball to'plash tizimi — CRS (Comprehensive Ranking System)
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px]">
                <thead>
                  <tr className="bg-[#FAF6EF] text-left">
                    <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">
                      Mezoni
                    </th>
                    <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#546074] text-right">
                      Maksimal ball
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
                      <td className="px-6 py-3.5 text-sm font-['Syne'] font-bold text-[#d62839] text-right whitespace-nowrap">
                        {row.max}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="reveal mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 card p-6">
            <p className="text-[#3E4B62] text-sm">
              🧮 O'z CRS balingizni rasmiy kalkulyator orqali hisoblang:
            </p>
            <a
              href={crsCalculatorUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-gold no-underline whitespace-nowrap"
            >
              Ball hisoblash →
            </a>
          </div>
        </div>
      </section>

      {/* YOSH BALLARI */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> Yosh bo'yicha ball
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-6">
                Yoshga qarab CRS ballari
              </h2>
              <p className="text-[#3E4B62] text-sm leading-relaxed mb-5">
                20–29 yosh oralig'idagi nomzodlar eng yuqori ballni oladi. Yosh oshgan sari ball
                kamayadi, 45 yoshdan keyin esa 0 ball beriladi.
              </p>
              <div className="bg-[#E0A526]/12 border border-[#E0A526]/40 rounded-2xl p-5">
                <p className="text-[#2C3850] text-sm leading-relaxed">
                  💡 Yosh ballingiz tushgan bo'lsa ham, fransuz tili qo'shimcha ballar bilan buni
                  qoplashga yordam beradi.
                </p>
              </div>
            </div>
            <div className="reveal card overflow-hidden" data-delay={120}>
              <div className="overflow-x-auto max-h-[460px] overflow-y-auto">
                <table className="w-full min-w-[360px]">
                  <thead className="sticky top-0">
                    <tr className="bg-[#a3182a] text-white text-left">
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider">Yosh</th>
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-right">
                        Turmush o'rtog'isiz
                      </th>
                      <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-right">
                        Turmush o'rtog'i bilan
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ageScores.map((row) => (
                      <tr
                        key={row.age}
                        className={`border-b border-[#15233B]/8 ${row.highlight ? "bg-[#d62839]/8" : ""}`}
                      >
                        <td className="px-5 py-2.5 text-sm font-medium text-[#15233B]">{row.age}</td>
                        <td className="px-5 py-2.5 text-sm text-right font-['Syne'] font-bold text-[#d62839]">
                          {row.withoutSpouse}
                        </td>
                        <td className="px-5 py-2.5 text-sm text-right text-[#3E4B62]">
                          {row.withSpouse}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TA'LIM BALLARI */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Ta'lim bo'yicha ball
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight">
              Ta'lim darajasiga qarab CRS ballari
            </h2>
          </div>
          <div className="reveal card overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="bg-[#a3182a] text-white text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Ta'lim darajasi</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">
                    Turmush o'rtog'isiz
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">
                    Turmush o'rtog'i bilan
                  </th>
                </tr>
              </thead>
              <tbody>
                {educationScores.map((row, i) => (
                  <tr key={row.level} className={i % 2 === 0 ? "bg-white" : "bg-[#FAF6EF]"}>
                    <td className="px-6 py-3.5 text-sm text-[#3E4B62]">{row.level}</td>
                    <td className="px-6 py-3.5 text-sm text-right font-['Syne'] font-bold text-[#d62839]">
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

      {/* FRANSUZ USTUNLIK */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> Ustunliklar
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-8">
                Fransuz tili qancha ustunlik beradi?
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
              <h3 className="font-['Syne'] font-bold text-xl mb-4">TCF Canada nima?</h3>
              <p className="text-[#3E4B62] text-sm leading-relaxed mb-6">
                TCF Canada — Kanadaga immigratsiya uchun tan olinadigan rasmiy fransuz tili imtihoni.
                Imtihon 4 ta ko'nikmani baholaydi:
              </p>
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
              <p className="text-[#546074] text-xs leading-relaxed">
                Express Entry fransuz tili kategoriyasida qatnashish uchun odatda barcha bo'limlarda
                kamida <strong className="text-[#d62839]">NCLC 7</strong> darajasiga erishish tavsiya
                etiladi.
              </p>
            </div>
          </div>

          {/* NCLC / TCF jadvali */}
          <div className="reveal mt-10 card overflow-hidden overflow-x-auto">
            <div className="bg-[#a3182a] px-6 py-4">
              <span className="text-white font-['Syne'] font-bold text-sm">
                TCF natijalari va NCLC darajalari (Kanada uchun)
              </span>
            </div>
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-[#FAF6EF] text-left">
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">NCLC</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">Gapirish</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">Tinglash</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">O'qish</th>
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#546074]">Yozish</th>
                </tr>
              </thead>
              <tbody>
                {nclcTable.map((row, i) => (
                  <tr
                    key={row.nclc}
                    className={`${i < nclcTable.length - 1 ? "border-b border-[#15233B]/8" : ""} ${row.highlight ? "bg-[#d62839]/8" : ""}`}
                  >
                    <td className="px-5 py-3 font-['Syne'] font-extrabold text-[#15233B]">
                      {row.nclc}
                      {row.highlight && (
                        <span className="ml-2 text-[10px] font-bold text-[#d62839] uppercase">min</span>
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

      {/* KIMLAR UCHUN + YORDAM */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="reveal">
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> Kimlar uchun
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl mb-6">Kimlar uchun mos?</h2>
              <ul className="space-y-3">
                {targetAudience.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#3E4B62]">
                    <span className="w-5 h-5 rounded-full bg-[#d62839]/10 text-[#d62839] flex items-center justify-center shrink-0 text-xs">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal" data-delay={120}>
              <p className="eyebrow text-[#d62839] mb-4">
                <span className="w-8 h-px bg-[#d62839]" /> Markazimiz
              </p>
              <h2 className="font-['Syne'] font-extrabold text-3xl mb-6">Biz sizga qanday yordam beramiz?</h2>
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

      {/* KVOTA JADVALI */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Statistika
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-4">
              Kanada fransuz tilida so'zlashuvchi immigrantlarni qancha qabul qilmoqda?
            </h2>
            <p className="text-[#3E4B62] text-sm leading-relaxed">
              Kanada hukumati har yili fransuz tilida so'zlashuvchi immigrantlar uchun maxsus kvotalar
              belgilaydi. 2029-yilgacha bu ko'rsatkichni <strong>12%</strong> ga yetkazish rejalashtirilgan.
            </p>
          </div>
          <div className="reveal card overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="bg-[#a3182a] text-white text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Yil</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    Jami PR qabul qilish
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                    Fransuz tilini biladigan (Quebecdan tashqari)
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">%</th>
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
                    <td className="px-6 py-4 text-sm font-semibold text-[#d62839]">{row.count}</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#15233B]">{row.pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PR CARD */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> PR viza
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight">
              🇨🇦 Kanada 5 yillik rezident viza (PR Card)
            </h2>
            <p className="text-[#3E4B62] text-sm mt-4 leading-relaxed">
              Kanadada 5 yillik rezident viza, odatda, Permanent Resident (PR) Card yoki doimiy yashash
              huquqi deb ataladi. Bu hujjat immigratsiya orqali Kanadada doimiy yashash, ishlash va
              o'qish huquqini beradi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="reveal space-y-6">
              <div className="card p-6">
                <h3 className="font-['Syne'] font-bold text-lg mb-4">💬 Asosiy ma'lumotlar</h3>
                <ul className="space-y-3 text-sm text-[#3E4B62]">
                  <li>
                    <strong>PR Card muddati:</strong> {prCardInfo.duration}
                  </li>
                  <li>
                    <strong>Narxi:</strong> {prCardInfo.price}
                  </li>
                  <li>
                    <strong>Fuqarolik:</strong> {prCardInfo.citizenship}
                  </li>
                  <li>
                    <strong>Rezidentlik:</strong> {prCardInfo.residency}
                  </li>
                </ul>
              </div>
              <div className="card p-6">
                <h3 className="font-['Syne'] font-bold text-lg mb-4">🇨🇦 Huquqlari</h3>
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
                <h3 className="font-['Syne'] font-bold text-lg mb-4">
                  🟢 Rezidentlik talablarini isbotlash
                </h3>
                <ul className="space-y-2">
                  {prCardInfo.proofDocs.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[#3E4B62]">
                      <span className="text-[#d62839]">✅</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card p-6 bg-[#FAF6EF] border-[#E0A526]/30">
                <h3 className="font-['Syne'] font-bold text-lg mb-4">🛑 Muhim eslatmalar</h3>
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

          <div className="reveal mt-10 card p-8 bg-gradient-to-br from-[#a3182a] to-[#6e1019] text-white">
            <h3 className="font-['Syne'] font-bold text-xl mb-4">
              🔱 Qisqacha xulosa
            </h3>
            <p className="text-white/85 text-sm leading-relaxed">
              Kanadaning 5 yillik rezident vizasi — doimiy yashash huquqini beruvchi, ko'plab
              imkoniyatlarga ega hujjat. PR Card orqali siz Kanadada erkin yashashingiz, ishlashingiz va
              o'qishingiz mumkin. 5 yil davomida kamida 2 yil Kanadada yashasangiz, maqomingizni
              saqlab qolasiz va keyinchalik fuqarolik olish imkoniyati ham mavjud.
            </p>
          </div>
        </div>
      </section>

      {/* HUJJATLAR */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> Hujjatlar
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-4">
              PR vizasiga ariza topshirishda kerakli hujjatlar
            </h2>
            <p className="text-[#546074] text-sm">
              Eslatma: hujjatlar yetarli bo'lmasa yoki to'liq taqdim etilmasa, ariza kechikishi yoki
              rad etilishi mumkin.
            </p>
          </div>
          <div className="reveal grid sm:grid-cols-2 gap-3">
            {prDocuments.map((doc, i) => (
              <div
                key={doc}
                className="flex items-start gap-3 card p-4 hover:border-[#d62839]/20 transition-colors"
              >
                <span className="shrink-0 w-7 h-7 rounded-lg bg-[#a3182a] text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-[#3E4B62] leading-relaxed">{doc}</span>
              </div>
            ))}
          </div>
          <p className="reveal text-center text-[#546074] text-xs mt-8">
            ⚠️ Biz faqat til tayyorgarligi bilan shug'ullanamiz. Hujjat ishlari uchun ishonchli
            agentlik tavsiya qilinadi.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 reveal">
            <p className="eyebrow text-[#d62839] mb-4">
              <span className="w-8 h-px bg-[#d62839]" /> FAQ
            </p>
            <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-4xl leading-tight mb-4">
              Fransuz tili va Kanada immigratsiyasi bo'yicha FAQ
            </h2>
            <Link to="/faq" className="text-[#d62839] font-bold text-sm no-underline hover:underline">
              Barcha FAQ →
            </Link>
          </div>
          <FaqAccordion items={immigrationFaq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#FAF6EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#e23344] via-[#d62839] to-[#ae1b2a] p-12 lg:p-20 text-center">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-['Syne'] font-extrabold text-3xl lg:text-5xl leading-tight mb-5 text-white">
                Kelajagingizni bugundan boshlang
              </h2>
              <p className="text-white/85 text-lg mb-8 leading-relaxed">
                Kanada hozirda fransuz tilida so'zlashuvchi immigrantlarni faol qabul qilmoqda. TCF
                Canada sertifikati va kuchli fransuz tili darajasi immigratsiya imkoniyatingizni
                sezilarli oshirishi mumkin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/boglanish" className="btn-gold no-underline">
                  Hozir boshlash →
                </Link>
                <Link
                  to="/probniy-dars"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all no-underline"
                >
                  Probniy dars
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
