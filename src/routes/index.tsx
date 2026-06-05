import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Leaf, CheckCircle2, Users, Home, BookOpen, Heart, TreePine, Wallet,
  Plane, ChevronDown, MapPin, ArrowRight,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanada haqida — FransuzTili Canada" },
      { name: "description", content: "Fransuz tili orqali Kanadaga doimiy yashovchi bo'lish bo'yicha to'liq qo'llanma: kvotalar, xarajatlar, til talablari va jarayon." },
      { property: "og:title", content: "Fransuz tili orqali Kanadaga PR" },
      { property: "og:description", content: "Eng real va ishonchli yo'l — hozir va yaqin kelajakda ham." },
    ],
  }),
  component: AboutCanada,
});

const reasons = [
  { icon: Leaf, title: "Ko'payib borayotgan kvotalar", text: "2023: 8,700 • 2024: 23,000 • 2025: 30,000 kishi" },
  { icon: CheckCircle2, title: "Eng real natija", text: "Doimiy yashovchi maqomi uchun hozirgi eng samarali usul" },
  { icon: Users, title: "Oila bilan ko'chish", text: "Turmush o'rtog'ingiz va farzandlaringiz bilan birga" },
];

const benefits = [
  { icon: Home, title: "Vizasiz cheksiz yashash" },
  { icon: Plane, title: "3 yildan keyin Kanada pasporti" },
  { icon: BookOpen, title: "Farzandlar uchun bepul ta'lim" },
  { icon: Heart, title: "Bepul tibbiy xizmat" },
  { icon: TreePine, title: "Toza ekologiya va xavfsizlik" },
  { icon: Wallet, title: "Yuqori daromad va rivojlanish" },
];

const costs = [
  { item: "Elchixona davlat boji (har bir katta)", price: "~$670" },
  { item: "Doimiy yashovchi kartasi uchun davlat boji", price: "~$400" },
  { item: "Biometrika to'lovi (14 yoshdan katta)", price: "~$60" },
  { item: "Notarial tarjima va hujjatlar", price: "~$100–$200" },
  { item: "Diplomni xalqaro baholash (WES)", price: "~$180" },
  { item: "Tibbiy ko'rik (voyaga yetganlar)", price: "~$250" },
  { item: "Tibbiy ko'rik (farzandlar)", price: "~$100–$150" },
];

const timeline = [
  { t: "Fransuz tilini o'rganish", d: "3–12 oy" },
  { t: "TCF Canada sertifikati", d: "Imtihon natijasi" },
  { t: "Hujjatlarni tayyorlash", d: "~1 oy" },
  { t: "Elchixona ko'rib chiqishi", d: "4–5 oy" },
  { t: "Viza! 🎉", d: "Kanadaga yo'l ochiq" },
];

const faqs = [
  { q: "Fransuz tili darajasi qancha bo'lishi kerak?", a: "Kamida B2 — TCF Canada sertifikati asosida." },
  { q: "Oiladan faqat bir kishi bilsa yetadimi?", a: "Ha, yetarli. Agar turmush qurmagan bo'lsa, ball yanada yuqori bo'ladi." },
  { q: "Ta'lim darajasiga talab bormi?", a: "Minimum kollej yoki litsey. Bakalavr yaxshiroq, magistr/PhD eng yaxshisi." },
  { q: "Yoshga cheklov bormi?", a: "Yo'q, lekin 20–29 yosh eng yuqori ball beradi. 30–35 o'rtacha, 35+ dan keyin ball pasayadi." },
  { q: "Bu dastur yopilib qolmaydimi?", a: "3 yillik reja e'lon qilingan, har yili 30,000 kvota tasdiqlangan." },
  { q: "Jarayonni qachon boshlash kerak?", a: "Til o'rganish bilan parallel hujjatlarni tayyorlash vaqtdan yutadi." },
  { q: "Bank hisobida pul bo'lishi shartmi?", a: "Hujjat jarayonida bank hisobini qonuniy shakllantirishda yordam beramiz." },
  { q: "Jami qancha xarajat bo'ladi?", a: "Barcha to'lovlar va xizmat haqi bilan jami ~$7,000–$8,000." },
];

function AboutCanada() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden maple-pattern text-primary-foreground">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <Leaf className="absolute top-10 left-[10%] h-20 w-20 animate-float text-maple" fill="currentColor" />
          <Leaf className="absolute top-32 right-[12%] h-14 w-14 animate-float text-white anim-delay-1200" fill="currentColor" />
          <Leaf className="absolute bottom-16 left-[20%] h-10 w-10 animate-float text-maple anim-delay-2400" fill="currentColor" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-36 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium ring-1 ring-white/25">
              🍁 Kanada Express Entry — Frankofon dasturi
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              Fransuz tili orqali Kanadaga<br />
              <span className="text-maple">doimiy yashovchi</span> bo'ling
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Eng real va ishonchli yo'l — hozir va yaqin kelajakda ham.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3 justify-center">
              <a href="#nega" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3 font-semibold hover:bg-white/90 transition shadow-elegant">
                Batafsil ma'lumot <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/boglanish" className="inline-flex items-center gap-2 rounded-full bg-maple text-maple-foreground px-7 py-3 font-semibold hover:opacity-90 transition">
                Ro'yxatdan o'tish
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section id="nega" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Nega <span className="text-gradient">fransuz tili</span> orqali?</h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">Kanada hukumati har yili minglab frankofon muhojirlarni qabul qiladi.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 120}>
              <div className="group h-full rounded-3xl bg-card border border-border p-8 shadow-card hover:-translate-y-1 hover:shadow-elegant transition-all">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-primary to-primary-glow text-primary-foreground mb-5">
                  <r.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{r.title}</h3>
                <p className="mt-3 text-muted-foreground">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-linear-to-b from-accent/40 to-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Doimiy Yashovchi Maqomi Sizga Nima Beradi?</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-primary/30 transition">
                  <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <p className="font-medium pt-2">{b.title}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COSTS */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Xarajatlar Ro'yxati</h2>
          <p className="text-center text-muted-foreground mt-3">Summalar AQSh dollarida</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 rounded-3xl bg-card border border-border overflow-hidden shadow-card">
            {costs.map((c, i) => (
              <div key={c.item} className={`flex items-center justify-between gap-4 px-6 py-5 ${i !== 0 ? "border-t border-border" : ""}`}>
                <span className="text-foreground/85">{c.item}</span>
                <span className="font-semibold text-primary whitespace-nowrap">{c.price}</span>
              </div>
            ))}
            <div className="flex items-center justify-between gap-4 px-6 py-6 bg-linear-to-r from-primary to-primary-glow text-primary-foreground">
              <span className="font-semibold">JAMI (xizmat haqi bilan)</span>
              <span className="text-xl font-bold">~$7,000–$8,000</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* LANGUAGE */}
      <section className="bg-accent/30 py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Til Talablari</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Reveal>
              <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">🇫🇷 Fransuz tili</h3>
                  <span className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">Majburiy</span>
                </div>
                <p className="mt-3 text-muted-foreground">Kamida B2 darajasi — TCF Canada sertifikati</p>
                <div className="mt-5 h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-linear-to-r from-primary to-primary-glow w-85p" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">B2 darajasi</p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-3xl bg-card border border-border p-8 shadow-card">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">🇬🇧 Ingliz tili</h3>
                  <span className="rounded-full bg-maple text-maple-foreground px-3 py-1 text-xs font-semibold">Bonus</span>
                </div>
                <p className="mt-3 text-muted-foreground">Qo'shimcha ustunlik beradi — yuqori ball</p>
                <div className="mt-5 h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full bg-maple w-45p" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Tavsiya etiladi</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CITY */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Qaysi Shaharga Borish Ma'qul?</h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 rounded-3xl overflow-hidden border border-border shadow-elegant grid md:grid-cols-2">
            <div className="maple-pattern text-primary-foreground p-10 flex flex-col justify-center">
              <MapPin className="h-10 w-10" />
              <h3 className="mt-4 text-3xl font-bold">Montreal, Quebec</h3>
              <p className="mt-2 text-white/85">Frankofon Kanadaning yuragi</p>
            </div>
            <div className="bg-card p-10">
              <ul className="space-y-4">
                {[
                  "Aholisi asosan fransuz tilida so'zlashadi",
                  "O'zbeklar diasporasi ko'p",
                  "Uy-joy narxi arzonroq",
                  "Ish topish imkoniyati yaxshi",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* TIMELINE */}
      <section className="bg-linear-to-b from-background to-accent/40 py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Jarayon Qancha Vaqt Oladi?</h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((s, i) => (
                <Reveal key={s.t} delay={i * 100}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 mt-2 h-5 w-5 rounded-full bg-linear-to-br from-primary to-maple ring-4 ring-background z-10" />
                    <div className="ml-16 md:ml-0 md:w-1/2 md:px-10">
                      <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
                        <div className="text-xs font-semibold text-maple uppercase tracking-wider">Bosqich {i + 1}</div>
                        <h3 className="mt-1 text-xl font-semibold">{s.t}</h3>
                        <p className="text-muted-foreground mt-1">{s.d}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Ko'p So'raladigan Savollar</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full text-left rounded-2xl bg-card border border-border hover:border-primary/40 transition overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <span className="font-semibold">{f.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
                  </div>
                  <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-20">
        <Reveal>
          <div className="rounded-3xl maple-pattern text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold">Yo'lingizni bugun boshlang</h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">TCF Canada imtihoniga professional tayyorgarlik kurslarimizga ro'yxatdan o'ting.</p>
            <Link to="/boglanish" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3 font-semibold hover:bg-white/90 transition">
              Ro'yxatdan o'tish <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
