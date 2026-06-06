import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/immigratsiya")({
  head: () => ({
    meta: [
      { title: "Immigratsiya — France TCF O'quv Markazi" },
      {
        name: "description",
        content:
          "Kanada immigratsiyasi, Express Entry dasturi va TCF Canada haqida to'liq ma'lumot.",
      },
    ],
  }),
  component: ImmigratsiayPage,
});

const kvota = [
  { year: "2023", n: "8 700", note: "Yangi dastur boshlandi" },
  { year: "2024", n: "23 000", note: "+164% o'sish" },
  { year: "2025", n: "30 000+", note: "Tasdiqlangan kvota" },
];

const opportunities = [
  {
    level: "Ideal",
    color: "border-green-500/30",
    badge: "text-green-400",
    items: [
      "22–30 yosh",
      "Bakalavr / Magistr / PhD",
      "Ingliz tili IELTS 5.5–6.0",
      "Fransuz tili B2+",
    ],
  },
  {
    level: "Yaxshi",
    color: "border-blue-500/30",
    badge: "text-blue-400",
    items: ["30–35 yosh", "Bakalavr", "Ingliz tili IELTS 5.0", "Fransuz tili B2+"],
  },
  {
    level: "O'rtacha",
    color: "border-yellow-500/30",
    badge: "text-yellow-400",
    items: ["35–40 yosh", "O'rta ma'lumot", "Ingliz tili yo'q", "Fransuz tili B2+"],
  },
  {
    level: "Pastroq",
    color: "border-red-500/30",
    badge: "text-red-400",
    items: ["40 yoshdan katta", "O'rta ma'lumot", "Ingliz tili yo'q", "Fransuz tili B2+"],
  },
];

const eduBalls = [
  { edu: "2 yillik kollej", single: "98", family: "91" },
  { edu: "3 yillik kollej / Bakalavr", single: "120", family: "112" },
  { edu: "Magistr", single: "135", family: "126" },
];

const costs = [
  { item: "Doimiy yashovchi statusi (davlat boji)", price: "~$670/kishi" },
  { item: "Doimiy yashovchi kartasi", price: "~$400/kishi" },
  { item: "Biometrika (14 yoshdan katta)", price: "~$60/kishi" },
  { item: "Notarial tarjima va hujjatlar", price: "$100–200" },
  { item: "Diplomlarni baholatish (WES)", price: "~$180" },
  { item: "Tibbiy ko'rik (voyaga yetgan)", price: "~$250/kishi" },
  { item: "Tibbiy ko'rik (farzandlar)", price: "$100–150/kishi" },
];

const benefits = [
  {
    icon: "🏥",
    t: "Bepul tibbiyot",
    d: "Davlat sog'liqni saqlash tizimi barcha doimiy yashovchilarga bepul.",
  },
  { icon: "🎓", t: "Sifatli ta'lim", d: "Farzandlar uchun yuqori sifatli bepul maktab ta'limi." },
  {
    icon: "💰",
    t: "Yuqori daromad",
    d: "Kanadada o'rtacha ish haqi va hayot sifati dunyoda eng yuqorilar qatorida.",
  },
  { icon: "🔒", t: "Xavfsizlik", d: "Kanada dunyodagi eng xavfsiz mamlakatlardan biri." },
  {
    icon: "🌿",
    t: "Toza ekologiya",
    d: "Toza havo, keng hududlar va yuqori ekologik standartlar.",
  },
  { icon: "🚀", t: "Shaxsiy rivojlanish", d: "Keng imkoniyatlar va xalqaro tajriba." },
];

const faqs = [
  {
    q: "Fransuz tilini qancha vaqtda o'rganish mumkin?",
    a: "3–4 oyda (baza yaxshi bo'lsa) yoki 6–12 oy. Nomzodning qobiliyatiga qarab.",
  },
  {
    q: "Oiladan bir kishi bilsa yetadimi?",
    a: "Ha, yetarli. Turmush qurmagan nomzod uchun ball yanada yuqori chiqadi.",
  },
  {
    q: "Ta'lim darajasiga talab qo'yilganmi?",
    a: "Minimum kollej yoki litseyni tagatganlik. Bakalavr bo'lsa yaxshi, magistr bo'lsa eng yaxshi. Tibbiyot, veterinariya, stomatologiya, farmatsevtika yoki huquq yo'nalishida bakalavr — magistrga tenglashtiriladi.",
  },
  {
    q: "Yoshga talab bormi?",
    a: "Rasmiy cheklov yo'q, lekin 20–29 yosh maksimal ball, 30–35 o'rtacha, 35 dan keyin ball tushib boradi.",
  },
  {
    q: "Viza olishga qancha vaqt ketadi?",
    a: "Sertifikat olgandan keyin o'rtacha 5–6 oy. 1 oy hujjat, 4–5 oy elchixona ko'rib chiqishi.",
  },
  {
    q: "Dastur yopilib qolmaydimi?",
    a: "3 yillik reja e'lon qilingan. 2025-yilga 30,000 kvota tasdiqlangan. Kvotalar bundan ham oshishi ehtimoli yuqori.",
  },
  {
    q: "Qaysi shaharga borish ma'qul?",
    a: "Montreal (Quebec) — o'zbeklar ko'p, uy-joy arzon, ish topish imkoniyati yaxshi.",
  },
  { q: "Jami qancha xarajat ketadi?", a: "Barcha xarajatlar bilan jami $7,000–8,000 atrofida." },
];

function ImmigratsiayPage() {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 right-0 w-[700px] h-[500px] rounded-full opacity-12"
            style={{ background: "radial-gradient(ellipse, #003DA5 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
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
            Immigratsiya
          </p>
          <h1
            className="font-['Syne'] font-black leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Kanadaga
            <br />
            doimiy
            <br />
            <span className="text-[#E8192C]">yashovchi</span>
          </h1>
          <p className="text-white/40 text-lg max-w-xl">
            Express Entry dasturi orqali Kanada PR olishning eng real usuli — hozirda fransuz tili
            orqali.
          </p>
        </div>
      </section>

      {/* KVOTA STATISTIKA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Statistika
              </p>
              <h2
                className="font-['Syne'] font-black leading-none"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Kvotalar
                <br />
                oshmoqda
              </h2>
            </div>
            <p className="text-white/30 text-xs max-w-xs">
              Kanada hukumati rasmiy ma'lumotlari asosida
            </p>
          </div>
          <div className="grid grid-cols-3 gap-px bg-white/5">
            {kvota.map((k) => (
              <div
                key={k.year}
                className="bg-black px-10 py-12 text-center hover:bg-white/[0.02] transition-colors"
              >
                <div className="text-white/25 text-sm mb-3 font-medium">{k.year}</div>
                <div className="font-['Syne'] font-black text-5xl md:text-6xl text-[#E8192C] mb-3">
                  {k.n}
                </div>
                <div className="text-white/30 text-xs">{k.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMKONIYAT DARAJALARI */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Sizning imkoniyatingiz
            </p>
            <h2
              className="font-['Syne'] font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Ball darajangiz
              <br />
              qanday?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {opportunities.map((o) => (
              <div
                key={o.level}
                className={`bg-black p-10 border-t-2 ${o.color} hover:bg-white/[0.02] transition-all`}
              >
                <div className={`font-['Syne'] font-black text-2xl mb-6 ${o.badge}`}>{o.level}</div>
                <ul className="flex flex-col gap-3">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/50 text-sm">
                      <span className="w-1 h-1 rounded-full bg-white/20" />
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
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Ball tizimi
              </p>
              <h2
                className="font-['Syne'] font-black leading-none mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Ta'lim
                <br />
                darajasiga
                <br />
                qarab ball
              </h2>
              <p className="text-white/30 text-xs leading-relaxed">
                💡 Tibbiyot, veterinariya, stomatologiya, farmatsevtika yoki huquq yo'nalishida
                bakalavr — magistr diplomiga tenglashtiriladi.
              </p>
            </div>
            <div>
              <div className="border border-white/8 rounded-2xl overflow-hidden mb-6">
                <div className="grid grid-cols-3 border-b border-white/5 px-6 py-3">
                  <span className="text-white/25 text-xs uppercase tracking-wider">Ta'lim</span>
                  <span className="text-white/25 text-xs uppercase tracking-wider text-center">
                    Bo'ydoq
                  </span>
                  <span className="text-white/25 text-xs uppercase tracking-wider text-center">
                    Oilali
                  </span>
                </div>
                {eduBalls.map((r, i) => (
                  <div
                    key={r.edu}
                    className={`grid grid-cols-3 px-6 py-5 ${i < eduBalls.length - 1 ? "border-b border-white/5" : ""} hover:bg-white/[0.02] transition-colors`}
                  >
                    <span className="text-white/60 text-sm">{r.edu}</span>
                    <span className="font-['Syne'] font-black text-[#E8192C] text-center">
                      {r.single}
                    </span>
                    <span className="font-['Syne'] font-bold text-white/50 text-center">
                      {r.family}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XARAJATLAR */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Xarajatlar
              </p>
              <h2
                className="font-['Syne'] font-black leading-none mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Qancha
                <br />
                xarajat
                <br />
                ketadi?
              </h2>
              <div className="bg-[#E8192C]/8 border border-[#E8192C]/20 rounded-2xl p-8 text-center">
                <p className="text-white/40 text-xs mb-2">Bizning xizmat haqi bilan jami</p>
                <div className="font-['Syne'] font-black text-6xl text-[#E8192C]">$7–8K</div>
                <p className="text-white/30 text-xs mt-2">AQSH dollari</p>
              </div>
            </div>
            <div className="border border-white/8 rounded-2xl overflow-hidden">
              {costs.map((c, i) => (
                <div
                  key={c.item}
                  className={`flex items-center justify-between px-6 py-4 ${i < costs.length - 1 ? "border-b border-white/5" : ""} hover:bg-white/[0.02] transition-colors`}
                >
                  <span className="text-white/50 text-sm">{c.item}</span>
                  <span className="font-['Syne'] font-semibold text-white text-sm flex-shrink-0 ml-4">
                    {c.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AFZALLIKLAR */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-[#E8192C] text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Nima olasiz
            </p>
            <h2
              className="font-['Syne'] font-black leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Kanada PR
              <br />
              sizga beradi
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {benefits.map((b) => (
              <div key={b.t} className="bg-black p-8 hover:bg-white/[0.02] transition-all group">
                <div className="text-3xl mb-5">{b.icon}</div>
                <h3 className="font-['Syne'] font-bold text-base mb-2 group-hover:text-[#E8192C] transition-colors">
                  {b.t}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">{b.d}</p>
              </div>
            ))}
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
                className="font-['Syne'] font-black leading-none mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                Immigratsiya
                <br />
                bo'yicha
                <br />
                savollar
              </h2>
              <Link
                to="/boglanish"
                className="no-underline inline-flex bg-[#E8192C] hover:bg-[#c4111f] text-white text-sm font-medium px-6 py-3 rounded-xl transition-all"
              >
                Bepul maslahat →
              </Link>
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
                Kanadaga borish
                <br />
                <span className="text-[#E8192C]">orzungizmi?</span>
              </h2>
              <p className="text-white/40 mb-10">
                Birinchi qadam — fransuz tilini o'rganish. Biz siz bilan!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  to="/boglanish"
                  className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white font-semibold px-10 py-5 rounded-xl text-sm transition-all hover:scale-105"
                >
                  Hozir boshlash →
                </Link>
                <a
                  href="https://t.me/Mr_Ali_Canada"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline border border-white/15 hover:border-white/40 text-white/70 hover:text-white font-medium px-10 py-5 rounded-xl text-sm transition-all"
                >
                  Alimardon bilan bog'lanish
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
