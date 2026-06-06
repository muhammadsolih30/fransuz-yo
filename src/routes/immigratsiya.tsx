// Placeholder for the immigratsiya route
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/immigratsiya")({
  head: () => ({
    meta: [
      { title: "Immigratsiya — France TCF O'quv Markazi" },
      {
        name: "description",
        content:
          "Kanada immigratsiyasi, Express Entry dasturi, TCF Canada va ball tizimi haqida to'liq ma'lumot.",
      },
    ],
  }),
  component: ImmigratsiayPage,
});

const whyFrench = [
  {
    icon: "📈",
    title: "Kvotalar oshmoqda",
    text: "2023: 8,700 — 2024: 23,000 — 2025: 30,000+ kvota. Har yili oshib bormoqda.",
  },
  {
    icon: "🏆",
    title: "Eng real yo'l",
    text: "Hozirda Kanadaga doimiy yashovchi maqomini olishning eng ishonchli usuli fransuz tili orqali.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Butun oila bilan",
    text: "Turmush o'rtog'ingiz va farzandlaringiz bilan birgalikda ko'chib kelish mumkin.",
  },
  {
    icon: "🍁",
    title: "3 yilda pasport",
    text: "Doimiy yashovchi sifatida 3 yil yashagandan so'ng Kanada pasportiga ariza berish mumkin.",
  },
];

const benefits = [
  {
    icon: "🏥",
    title: "Bepul tibbiyot",
    text: "Kanada davlat sog'liqni saqlash tizimi barcha doimiy yashovchilarga bepul.",
  },
  {
    icon: "🎓",
    title: "Sifatli ta'lim",
    text: "Farzandlar uchun yuqori sifatli bepul maktab ta'limi.",
  },
  {
    icon: "💰",
    title: "Yuqori daromad",
    text: "Kanadada o'rtacha ish haqi juda yuqori, hayot sifati dunyoda eng yuqorilar qatorida.",
  },
  { icon: "🔒", title: "Xavfsizlik", text: "Kanada dunyodagi eng xavfsiz mamlakatlardan biri." },
  {
    icon: "🌿",
    title: "Toza ekologiya",
    text: "Toza havo, keng hududlar va yuqori ekologik standartlar.",
  },
  {
    icon: "🚀",
    title: "Shaxsiy rivojlanish",
    text: "Keng imkoniyatlar, xalqaro tajriba va rivojlanish muhiti.",
  },
];

const opportunities = [
  {
    level: "Ideal",
    color: "border-green-500/30 bg-green-500/5",
    badge: "bg-green-500/15 text-green-400",
    items: [
      "22–30 yosh",
      "Bakalavr, Magistr, PhD",
      "Ingliz tili IELTS 5.5–6.0",
      "Fransuz tili B2+",
    ],
  },
  {
    level: "Yaxshi",
    color: "border-blue-500/30 bg-blue-500/5",
    badge: "bg-blue-500/15 text-blue-400",
    items: ["30–35 yosh", "Bakalavr", "Ingliz tili IELTS 5.0", "Fransuz tili B2+"],
  },
  {
    level: "O'rtacha",
    color: "border-yellow-500/30 bg-yellow-500/5",
    badge: "bg-yellow-500/15 text-yellow-400",
    items: ["35–40 yosh", "O'rta ma'lumot", "Ingliz tili 0", "Fransuz tili B2+"],
  },
  {
    level: "Pastroq",
    color: "border-red-500/30 bg-red-500/5",
    badge: "bg-red-500/15 text-red-400",
    items: ["40 yoshdan katta", "O'rta ma'lumot", "Ingliz tili 0", "Fransuz tili B2+"],
  },
];

const educationBalls = [
  { edu: "2 yillik kollej", single: "98 ball", family: "91 ball" },
  { edu: "3 yillik kollej / Bakalavr", single: "120 ball", family: "112 ball" },
  { edu: "Magistr", single: "135 ball", family: "126 ball" },
];

const costs = [
  { item: "Doimiy yashovchi statusi uchun davlat boji", price: "~$670 / kishi" },
  { item: "Doimiy yashovchi kartasi uchun davlat boji", price: "~$400 / kishi" },
  { item: "Biometrika to'lovi (14 yoshdan katta)", price: "~$60 / kishi" },
  { item: "Notarial tarjima va hujjatlar", price: "$100–200" },
  { item: "Diplomlarni xalqaro baholatish (WES)", price: "~$180" },
  { item: "Tibbiy ko'rik (voyaga yetgan)", price: "~$250 / kishi" },
  { item: "Tibbiy ko'rik (farzandlar)", price: "$100–150 / kishi" },
];

const faqs = [
  {
    q: "Fransuz tilini qancha vaqtda o'rganish mumkin?",
    a: "Kimdir bazasi yaxshi bo'lsa 3–4 oyda, yana kimgadir 6 oydan 1 yilgacha ketishi mumkin. Bu nomzodning qobiliyatiga bog'liq.",
  },
  {
    q: "Oiladan bir kishi bilsa yetadimi?",
    a: "Ha, yetarli. Agarda turmush qurmagan odam bir o'zi harakat qilsa ball yanada yuqori chiqadi.",
  },
  {
    q: "Ta'lim darajasiga talab qo'yilganmi?",
    a: "Minimum kollej yoki litseyni tugatganlik talab qilinadi. Bakalavr bo'lsa undan ham yaxshi, magistr yoki PhD bo'lsa eng yaxshisi. Tibbiyot, veterinariya, stomatologiya, farmatsevtika yoki huquq yo'nalishlarida bakalavr bo'lsa magistr diplomiga tenglashtiriladi.",
  },
  {
    q: "Yoshga talab qo'yilganmi?",
    a: "Rasmiy cheklov yo'q, lekin 20–29 yosh maksimal ball beradi, 30–35 o'rtacha, 35 dan keyin ball tushib boradi.",
  },
  {
    q: "Viza olishga qancha vaqt ketadi?",
    a: "Til sertifikatiga ega bo'lgandan keyin o'rtacha 5–6 oy. 1 oy hujjat tayyorlash, 4–5 oy elchixonada ko'rib chiqish.",
  },
  {
    q: "Bu dastur yopilib qolmaydimi?",
    a: "Hozirda 3 yillik reja oldindan e'lon qilingan. Har yilgi 30,000 kvota tasdiqlangan. Yaqin 3 yil ichida yopilmaydi.",
  },
  {
    q: "Qaysi shaharga borgan ma'qul?",
    a: "Asosan Quebec provinsiyasidagi Montreal shahri yaxshiroq. O'zbeklar ko'pligi, uy-joy narxi arzonroq va ish topish imkoniyati yaxshi.",
  },
  {
    q: "Bank hisobida ma'lum miqdorda mablag' bo'lishi kerakmi?",
    a: "Hujjat jarayonida bank hisobini qanday qilib qonuniy va sifatli shakllantirish usullarini o'rgatib boramiz.",
  },
  {
    q: "Ingliz tilini bilish shart bo'lgan masalalar bo'lsa nima qilish kerak?",
    a: "Ingliz tili balingiz fransuz tilidan yuqori bo'lsa — ingliz tilini primary language qilib belgilang. Ball yuqoriroq chiqadi.",
  },
];

function ImmigratsiayPage() {
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-125 h-125 rounded-full bg-[#E8192C] opacity-8 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
            Immigratsiya
          </span>
          <h1 className="font-['Syne'] font-black text-4xl md:text-6xl mt-3 mb-5 leading-tight">
            Kanadaga fransuz tili
            <br />
            orqali <span className="text-[#E8192C]">doimiy yashovchi</span>
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            Express Entry dasturi orqali Kanada doimiy yashovchi maqomini olishning eng real va
            ishonchli yo'li — hozirda aynan fransuz tili orqali.
          </p>
        </div>
      </section>

      {/* NEGA FRANSUZ TILI */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Sabab
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Nega fransuz tili orqali?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whyFrench.map((w) => (
              <div
                key={w.title}
                className="bg-[#12121A] border border-white/5 hover:border-[#E8192C]/25 rounded-2xl p-7 flex gap-5 transition-all"
              >
                <span className="text-3xl shrink-0">{w.icon}</span>
                <div>
                  <h3 className="font-['Syne'] font-semibold text-base mb-2">{w.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{w.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KVOTA STATISTIKA */}
      <section className="py-16 bg-[#12121A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Statistika
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Kvotalar yildan yilga oshmoqda
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { year: "2023", count: "8,700", note: "Yangi dastur boshlandi" },
              { year: "2024", count: "23,000", note: "+164% o'sish" },
              { year: "2025", count: "30,000+", note: "Tasdiqlangan kvota" },
            ].map((s) => (
              <div
                key={s.year}
                className="bg-[#0A0A0F] border border-white/5 rounded-2xl p-8 text-center"
              >
                <div className="text-white/30 text-sm font-medium mb-2">{s.year}</div>
                <div className="font-['Syne'] font-black text-4xl md:text-5xl text-[#E8192C] mb-2">
                  {s.count}
                </div>
                <div className="text-white/40 text-xs">{s.note}</div>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs text-center mt-6">
            Manba: Kanada hukumati rasmiy statistikasi
          </p>
        </div>
      </section>

      {/* IMKONIYATLAR */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Sizning imkoniyatingiz
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Ball darajangizni aniqlang
            </h2>
            <p className="text-white/40 text-sm mt-3">
              Yoshingiz, ta'lim va til darajangizga qarab imkoniyatingiz qanday?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {opportunities.map((o) => (
              <div key={o.level} className={`border-2 ${o.color} rounded-2xl p-7`}>
                <div
                  className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full mb-5 ${o.badge}`}
                >
                  {o.level} imkoniyat
                </div>
                <ul className="flex flex-col gap-3">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TA'LIM BALLARI */}
      <section className="py-16 bg-[#12121A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Ball tizimi
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Ta'lim darajasiga qarab ball
            </h2>
          </div>
          <div className="bg-[#0A0A0F] border border-white/5 rounded-2xl overflow-hidden mb-5">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-4 text-white/40 font-medium">
                      Ta'lim darajasi
                    </th>
                    <th className="text-center px-6 py-4 text-white/40 font-medium">Bo'ydoq</th>
                    <th className="text-center px-6 py-4 text-white/40 font-medium">Oilali</th>
                  </tr>
                </thead>
                <tbody>
                  {educationBalls.map((row, i) => (
                    <tr
                      key={row.edu}
                      className={
                        i % 2 === 0
                          ? "border-b border-white/5 bg-white/2"
                          : "border-b border-white/5"
                      }
                    >
                      <td className="px-6 py-4 text-white/80">{row.edu}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-['Syne'] font-bold text-[#E8192C]">{row.single}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="font-['Syne'] font-bold text-white/70">{row.family}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-white/40 text-xs text-center">
            💡 Tibbiyot, veterinariya, stomatologiya, farmatsevtika yoki huquq yo'nalishlarida
            bakalavr — magistr diplomiga tenglashtiriladi.
          </p>
        </div>
      </section>

      {/* XARAJATLAR */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Xarajatlar
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Qancha xarajat ketadi?
            </h2>
            <p className="text-white/40 text-sm mt-3">Summalar AQSH dollarida</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#12121A] border border-white/5 rounded-2xl overflow-hidden mb-6">
              {costs.map((c, i) => (
                <div
                  key={c.item}
                  className={`flex items-center justify-between px-6 py-4 ${i < costs.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  <span className="text-white/65 text-sm">{c.item}</span>
                  <span className="font-['Syne'] font-semibold text-white text-sm shrink-0 ml-4">
                    {c.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-[#E8192C]/10 border border-[#E8192C]/25 rounded-2xl p-6 text-center">
              <p className="text-white/60 text-sm mb-2">Bizning xizmat haqi bilan birga jami</p>
              <div className="font-['Syne'] font-black text-4xl text-[#E8192C]">$7,000–8,000</div>
              <p className="text-white/40 text-xs mt-2">
                Barcha xarajatlar shu summada: elchixona to'lovlari, hujjat ishlari, tibbiy
                ko'riklar va xizmat haqi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AFZALLIKLAR */}
      <section className="py-16 bg-[#12121A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              Nima olasiz
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Kanada doimiy yashovchi maqomi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-[#0A0A0F] border border-white/5 hover:border-[#E8192C]/20 rounded-2xl p-6 transition-all"
              >
                <div className="text-2xl mb-3">{b.icon}</div>
                <h3 className="font-['Syne'] font-semibold text-base mb-2">{b.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mt-3">
              Ko'p so'raladigan savollar
            </h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="bg-[#12121A] border border-white/5 hover:border-white/10 rounded-2xl px-6 py-5 group transition-all"
              >
                <summary className="font-['Syne'] font-semibold text-sm cursor-pointer list-none flex items-center justify-between gap-4">
                  {f.q}
                  <span className="text-[#E8192C] shrink-0 text-lg group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <p className="text-white/55 text-sm leading-relaxed mt-4 border-t border-white/5 pt-4">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-linear-to-br from-[#E8192C]/10 via-transparent to-[#003DA5]/10 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-['Syne'] font-bold text-3xl md:text-4xl mb-4">
            Kanadaga borishga tayyormisiz?
          </h2>
          <p className="text-white/50 mb-8 text-sm max-w-lg mx-auto">
            Birinchi qadam — fransuz tilini o'rganish. Biz sizga to'liq yo'l ko'rsatamiz.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/boglanish"
              className="bg-[#E8192C] hover:bg-[#c4111f] text-white font-medium px-8 py-4 rounded-lg transition-all no-underline text-sm"
            >
              Bepul maslahat olish
            </Link>
            <a
              href="https://t.me/Mr_Ali_Canada"
              target="_blank"
              rel="noreferrer noopener"
              className="border border-white/20 hover:border-white/50 text-white font-medium px-8 py-4 rounded-lg transition-all no-underline text-sm"
            >
              Alimardon bilan bog'lanish
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
