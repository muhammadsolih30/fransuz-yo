import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Globe, BookOpen, Users, Monitor, User, UsersRound, Award, Check, X, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/kurslar")({
  head: () => ({
    meta: [
      { title: "Kurslar — TCF Canada tayyorgarlik" },
      { name: "description", content: "Offline, online, mini-guruh va individual fransuz tili kurslari. TCF Canada imtihoniga professional tayyorgarlik." },
      { property: "og:title", content: "Kurslar — FransuzTili Canada" },
      { property: "og:description", content: "Express Entry uchun B2 darajasiga professional tayyorgarlik." },
    ],
  }),
  component: Kurslar,
});

const courses = [
  { icon: Users, title: "Offline guruh", price: "700,000", note: "Jadval guruhga qarab", popular: false },
  { icon: Monitor, title: "Online guruh", price: "490,000", note: "Kechki vaqtlarda", popular: true },
  { icon: UsersRound, title: "Mini-guruh", price: "900,000", note: "2–3 kishi, qulay vaqtda", popular: false },
  { icon: User, title: "Individual darslar", price: "1,200,000", note: "Har qanday vaqtda", popular: false },
];

const teachers = [
  { icon: "🎓", text: "Fransuz tilini C1 va undan yuqori darajada biladi" },
  { icon: "📅", text: "10 yildan ortiq pedagogik tajriba" },
  { icon: "🌍", text: "Native speaker va xalqaro imtihon mutaxassislari" },
  { icon: "📖", text: "Zamonaviy metodika: nazariya + amaliyot" },
];

function Kurslar() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden maple-pattern text-primary-foreground">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 md:py-32 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs font-medium ring-1 ring-white/25">
              🎯 TCF Canada Tayyorgarlik
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              TCF Canada Imtihoniga<br />
              <span style={{ color: "var(--maple)" }}>Professional Tayyorgarlik</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto">
              Kanadaga immigratsiya qilish uchun zarur B2 darajasiga erishishga yordam beramiz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Biz Haqimizda</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {[
            { icon: BookOpen, t: "Fransuz tili o'qitiladi", d: "O'quv markazimizda zamonaviy metodika asosida fransuz tili dars beramiz." },
            { icon: Globe, t: "Express Entry tayyorgarligi", d: "O'quvchilarni Kanada immigratsiyasining Express Entry (PR) dasturiga tayyorlaymiz." },
            { icon: GraduationCap, t: "TCF Canada maqsadli", d: "Asosan TCF Canada imtihoniga maqsadli professional tayyorgarlik." },
            { icon: Award, t: "To'liq dastur", d: "Speaking, Listening, Reading, Writing, Grammar va Vocabulary." },
          ].map((b, i) => (
            <Reveal key={b.t} delay={i * 100}>
              <div className="rounded-3xl bg-card border border-border p-8 shadow-card hover:-translate-y-1 transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{b.t}</h3>
                <p className="mt-2 text-muted-foreground">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gradient-to-b from-accent/40 to-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Kurs Turlari</h2>
            <p className="text-center text-muted-foreground mt-3">Kurs davomiyligi: o'rtacha 6–8 oy</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {courses.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className={`relative h-full rounded-3xl border p-7 transition-all hover:-translate-y-2 ${
                  c.popular
                    ? "bg-gradient-to-br from-primary to-primary-glow text-primary-foreground border-primary shadow-elegant"
                    : "bg-card border-border shadow-card hover:shadow-elegant"
                }`}>
                  {c.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-maple text-maple-foreground px-3 py-1 text-xs font-semibold shadow">
                      Mashhur
                    </span>
                  )}
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.popular ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{c.title}</h3>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{c.price}</span>
                    <span className={`text-sm ${c.popular ? "text-white/80" : "text-muted-foreground"}`}>so'm</span>
                  </div>
                  <p className={`mt-2 text-sm ${c.popular ? "text-white/80" : "text-muted-foreground"}`}>{c.note}</p>
                  <Link
                    to="/boglanish"
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                      c.popular ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary-glow"
                    }`}
                  >
                    Tanlash <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center">O'qituvchilar Haqida</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mt-14">
          {teachers.map((t, i) => (
            <Reveal key={t.text} delay={i * 100}>
              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border p-6 hover:border-primary/40 transition">
                <span className="text-3xl">{t.icon}</span>
                <p className="font-medium pt-1">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FORMAT */}
      <section className="bg-accent/30 py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold">Dars Formati</h2>
            <p className="mt-4 text-muted-foreground">Sizga qulay tarzda — onlayn yoki oflayn, guruh yoki yakkama-yakka.</p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3">
              {[
                "Online va offline guruh darslari",
                "Mini-guruh va individual darslar",
                "Online: Zoom va Google Meet orqali",
                "Jadval o'quvchiga qulay tarzda",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-xl bg-card border border-border px-5 py-4">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-20 md:py-28 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold">Sertifikatlar</h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {["DELF", "DALF", "CEFR", "TCF Canada"].map((b, i) => (
            <Reveal key={b} delay={i * 80}>
              <span className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold shadow-card ${
                b === "TCF Canada" ? "bg-gradient-to-r from-primary to-maple text-primary-foreground" : "bg-card border border-border"
              }`}>
                <Award className="h-4 w-4" /> {b}
              </span>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <p className="mt-8 text-muted-foreground">Asosan <span className="font-semibold text-primary">TCF Canada</span> sertifikatiga tayyorlaymiz.</p>
        </Reveal>
      </section>

      {/* GOAL */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20">
        <Reveal>
          <div className="rounded-3xl maple-pattern text-primary-foreground p-10 md:p-14 shadow-elegant">
            <span className="text-5xl leading-none">"</span>
            <p className="mt-2 text-xl md:text-2xl font-medium leading-relaxed">
              O'quvchilarni nafaqat fransuz tilida erkin muloqot qila oladigan darajaga olib chiqish,
              balki TCF Canada imtihonidan yuqori natija olib, Kanada immigratsiya dasturlariga
              muvaffaqiyatli murojaat qila olishlariga yordam berishdir.
            </p>
            <p className="mt-6 text-sm uppercase tracking-wider text-white/70">— Bizning maqsadimiz</p>
          </div>
        </Reveal>
      </section>

      {/* RULES */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center">O'quv Markazi Qoidalari</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {[
            { ok: true, t: "Darslarga o'z vaqtida qatnashish" },
            { ok: true, t: "Uy vazifalarini muntazam bajarish" },
            { ok: true, t: "To'lovlarni belgilangan muddatda amalga oshirish" },
            { ok: true, t: "O'qituvchi va guruhdoshlarni hurmat qilish" },
            { ok: false, t: "Sababsiz qoldirilgan darslar qayta o'tilmaydi" },
          ].map((r, i) => (
            <Reveal key={r.t} delay={i * 60}>
              <div className="flex items-start gap-4 rounded-2xl bg-card border border-border px-6 py-4">
                {r.ok ? (
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                ) : (
                  <X className="h-5 w-5 text-maple mt-0.5 shrink-0" />
                )}
                <span>{r.t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
