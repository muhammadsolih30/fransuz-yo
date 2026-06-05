import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, CheckCircle2, MessageCircle, Instagram, Youtube, Globe } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/boglanish")({
  head: () => ({
    meta: [
      { title: "Bog'lanish — Ro'yxatdan o'tish" },
      { name: "description", content: "Kurs shartlarini o'qing va ro'yxatdan o'ting. Bizning aloqa kanallarimiz: Telegram, Instagram, YouTube." },
      { property: "og:title", content: "Bog'lanish — FransuzTili Canada" },
      { property: "og:description", content: "Ro'yxatdan o'ting va fransuz tilini o'rganishni boshlang." },
    ],
  }),
  component: Boglanish,
});

const terms = [
  ["Kurs to'lovi", "To'lov kurs boshlanishidan oldin to'liq yoki kelishilgan tartibda amalga oshiriladi."],
  ["Dars jadvali", "Kurs boshlanishidan oldin jadval e'lon qilinadi va o'zgartirilishi mumkin."],
  ["Qatnashish", "Muntazam qatnashish majburiy. Sababsiz qoldirilgan darslar qayta o'tilmaydi."],
  ["Uy vazifalari", "Barcha uy vazifalari belgilangan muddatda topshirilishi shart."],
  ["To'lov qaytarish", "Kurs boshlanganidan keyin to'lov qaytarilmaydi."],
  ["Xulq-atvor", "O'qituvchi va guruhdoshlarga hurmat bilan munosabatda bo'lish majburiy."],
  ["Online darslar", "Zoom yoki Google Meet orqali olib boriladigan darslarda kamera yoqilgan holda qatnashish tavsiya etiladi."],
  ["Sertifikat", "Kursni muvaffaqiyatli tugatgan o'quvchilarga markaz sertifikati beriladi."],
  ["Ma'lumotlar maxfiyligi", "Siz taqdim etgan shaxsiy ma'lumotlar faqat markaz ichki maqsadlari uchun ishlatiladi."],
  ["Immigratsiya maslahat xizmati", "Markaz immigratsiya haqida umumiy ma'lumot va yo'nalish beradi. Hujjat rasmiylashtirishni amalga oshirmaydi."],
];

const courseOptions = [
  { id: "offline", label: "Offline guruh — 700,000 so'm" },
  { id: "online", label: "Online guruh — 490,000 so'm" },
  { id: "mini", label: "Mini-guruh — 900,000 so'm" },
  { id: "individual", label: "Individual — 1,200,000 so'm" },
];

const phoneRegex = /^\+998\d{9}$/;

function Boglanish() {
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "+998",
    phone2: "",
    courses: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const toggleCourse = (id: string) => {
    setForm((f) => ({
      ...f,
      courses: f.courses.includes(id) ? f.courses.filter((c) => c !== id) : [...f.courses, id],
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "Ism kiritilishi shart";
    if (!form.lastName.trim()) errs.lastName = "Familiya kiritilishi shart";
    if (!phoneRegex.test(form.phone)) errs.phone = "Format: +998XXXXXXXXX";
    if (form.phone2 && !phoneRegex.test(form.phone2)) errs.phone2 = "Format: +998XXXXXXXXX";
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden maple-pattern text-primary-foreground">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 md:py-24 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Bog'lanish va Ro'yxatdan o'tish</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-lg text-white/85 max-w-2xl mx-auto">
              Shartlarni o'qib chiqing va arizangizni yuboring — tez orada siz bilan bog'lanamiz.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TERMS */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold">Kurs Shartlari va Qoidalari</h2>
          <p className="mt-2 text-muted-foreground">Iltimos, arizani yuborishdan oldin barcha shartlarni diqqat bilan o'qib chiqing.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 rounded-3xl bg-card border border-border shadow-card max-h-[420px] overflow-y-auto">
            <ol className="divide-y divide-border">
              {terms.map(([title, body], i) => (
                <li key={title} className="px-6 py-5 flex gap-4">
                  <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <label className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-5 cursor-pointer hover:border-primary/40 transition">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 h-5 w-5 accent-[var(--primary)]"
            />
            <span className="font-medium">Barcha shartlarni o'qib chiqdim va roziman</span>
          </label>
        </Reveal>
      </section>

      {/* FORM */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-20">
        <Reveal>
          <div className={`rounded-3xl bg-card border border-border shadow-elegant p-8 md:p-10 transition-all ${!agreed ? "opacity-60" : ""}`}>
            <h2 className="text-2xl md:text-3xl font-bold">Ro'yxatdan o'tish</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              {agreed ? "Ma'lumotlaringizni kiriting." : "Avval yuqoridagi shartlarni qabul qiling."}
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center animate-fade-up">
                <CheckCircle2 className="h-14 w-14 text-primary mx-auto" />
                <h3 className="mt-4 text-xl font-bold">Arizangiz qabul qilindi! 🎉</h3>
                <p className="mt-2 text-muted-foreground">Tez orada siz bilan bog'lanamiz, {form.firstName}.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <fieldset disabled={!agreed} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Ism *" error={errors.firstName}>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        maxLength={50}
                        className="input"
                        placeholder="Ismingiz"
                      />
                    </Field>
                    <Field label="Familiya *" error={errors.lastName}>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        maxLength={50}
                        className="input"
                        placeholder="Familiyangiz"
                      />
                    </Field>
                  </div>

                  <Field label="Asosiy telefon raqami *" error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      maxLength={13}
                      className="input"
                      placeholder="+998901234567"
                    />
                  </Field>

                  <Field label="Qo'shimcha telefon raqami (ixtiyoriy)" error={errors.phone2}>
                    <input
                      type="tel"
                      value={form.phone2}
                      onChange={(e) => setForm({ ...form, phone2: e.target.value })}
                      maxLength={13}
                      className="input"
                      placeholder="+998..."
                    />
                  </Field>

                  <div>
                    <label className="block text-sm font-medium mb-2">Qaysi kurs qiziqtiradi?</label>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {courseOptions.map((c) => {
                        const checked = form.courses.includes(c.id);
                        return (
                          <label
                            key={c.id}
                            className={`flex items-center gap-3 rounded-xl border p-3 cursor-pointer transition ${
                              checked ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleCourse(c.id)}
                              className="h-4 w-4 accent-[var(--primary)]"
                            />
                            <span className="text-sm">{c.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-3.5 font-semibold hover:opacity-95 transition shadow-card disabled:cursor-not-allowed"
                  >
                    YUBORISH <Send className="h-4 w-4" />
                  </button>
                </fieldset>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 pb-24">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold text-center">Bizning aloqa kanallari</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {[
            { Icon: MessageCircle, label: "Telegram", value: "@Canadali", href: "https://t.me/Canadali" },
            { Icon: Instagram, label: "Instagram", value: "@kanadalik_uzbek", href: "https://instagram.com/kanadalik_uzbek" },
            { Icon: Youtube, label: "YouTube", value: "@canadAli", href: "https://youtube.com/@canadAli" },
            { Icon: Globe, label: "Website", value: "canadali.net", href: "https://www.canadali.net" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl bg-card border border-border p-6 text-center hover:-translate-y-1 hover:border-primary/40 hover:shadow-card transition-all"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-sm font-semibold">{c.label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.value}</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.7rem 1rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 18%, transparent);
        }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-maple">{error}</p>}
    </div>
  );
}
