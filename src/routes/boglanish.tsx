import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/boglanish")({
  head: () => ({
    meta: [
      { title: "Bog'lanish — France TCF O'quv Markazi" },
      {
        name: "description",
        content: "France TCF O'quv markazi bilan bog'laning. Bepul konsultatsiya oling.",
      },
    ],
  }),
  component: BoglanishPage,
});

type FormData = {
  ism: string;
  telefon: string;
  format: string;
  daraja: string;
  xabar: string;
};

const formats = [
  { value: "offline", label: "Offline guruh", emoji: "🏫" },
  { value: "online", label: "Online guruh", emoji: "💻" },
  { value: "mini", label: "Mini-guruh", emoji: "👥" },
  { value: "individual", label: "Individual", emoji: "🎯" },
  { value: "bilmayman", label: "Bilmayman, maslahat kerak", emoji: "❓" },
];

const darajalar = [
  { value: "nol", label: "0 dan boshlayman" },
  { value: "a1", label: "A1 — Boshlang'ich" },
  { value: "a2", label: "A2 — Elementary" },
  { value: "b1", label: "B1 — Intermediate" },
  { value: "b2", label: "B2 — Upper Intermediate" },
  { value: "bilmayman", label: "Bilmayman" },
];

const contacts = [
  {
    icon: "📞",
    title: "Telefon",
    value: "+998 77 220 08 09",
    href: "tel:+998772200809",
    sub: "Du–Shan, 9:00–20:00",
  },
  {
    icon: "✈️",
    title: "Telegram",
    value: "@Fransuz_lingua",
    href: "https://t.me/Fransuz_lingua",
    sub: "Tezkor javob",
  },
  {
    icon: "📧",
    title: "Email",
    value: "muhammadsolih08091011@gmail.com",
    href: "mailto:muhammadsolih08091011@gmail.com",
    sub: "24 soat ichida javob",
  },
  {
    icon: "📍",
    title: "Manzil",
    value: "Oybek metro, Farmatsevtika instituti ichida",
    href: "https://maps.google.com/?q=Oybek+metro+Tashkent",
    sub: "Toshkent, O'zbekiston",
  },
];

const socials = [
  { label: "Telegram kanal", href: "https://t.me/Canadali", icon: "✈️" },
  { label: "Instagram", href: "https://instagram.com/kanadalik_uzbek", icon: "📸" },
  { label: "YouTube", href: "https://youtube.com/@canadAli", icon: "▶️" },
  { label: "Shaxsiy Telegram", href: "https://t.me/Mr_Ali_Canada", icon: "👤" },
];

function BoglanishPage() {
  const [form, setForm] = useState<FormData>({
    ism: "",
    telefon: "",
    format: "",
    daraja: "",
    xabar: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormatSelect = (value: string) => {
    setForm((prev) => ({ ...prev, format: value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.ism || !form.telefon) return;
    setLoading(true);

    // Telegram bot orqali yuborish (keyinroq bot token qo'shiladi)
    const message = `
🆕 Yangi ariza — France TCF

👤 Ism: ${form.ism}
📞 Telefon: ${form.telefon}
📚 Format: ${form.format || "Ko'rsatilmagan"}
🎯 Daraja: ${form.daraja || "Ko'rsatilmagan"}
💬 Xabar: ${form.xabar || "Yo'q"}
    `.trim();

    try {
      // Bot token va chat ID ni keyinroq qo'shing
      const BOT_TOKEN = "YOUR_BOT_TOKEN";
      const CHAT_ID = "YOUR_CHAT_ID";

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
    } catch {
      // Bot sozlanmagan bo'lsa ham forma ishlaydi
    }

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
  };

  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-20 w-125 h-125 rounded-full bg-[#E8192C] opacity-8 blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#E8192C] text-xs font-medium tracking-widest uppercase">
            Bog'lanish
          </span>
          <h1 className="font-['Syne'] font-black text-4xl md:text-6xl mt-3 mb-5 leading-tight">
            Bepul maslahat
            <br />
            <span className="text-[#E8192C]">oling</span>
          </h1>
          <p className="text-white/55 text-lg max-w-xl leading-relaxed">
            Qaysi format siz uchun mos ekanini birgalikda aniqlaymiz. Hech qanday majburiyat yo'q.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* FORMA */}
            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-[#12121A] border border-green-500/25 rounded-2xl p-12 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-['Syne'] font-bold text-2xl mb-3">
                    Arizangiz qabul qilindi!
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-8">
                    Tez orada siz bilan bog'lanamiz. Telegram orqali ham murojaat qilishingiz
                    mumkin.
                  </p>
                  <a
                    href="https://t.me/Fransuz_lingua"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex bg-[#E8192C] hover:bg-[#c4111f] text-white font-medium px-6 py-3 rounded-lg transition-all no-underline text-sm"
                  >
                    Telegramda yozish →
                  </a>
                </div>
              ) : (
                <div className="bg-[#12121A] border border-white/5 rounded-2xl p-8">
                  <h2 className="font-['Syne'] font-bold text-xl mb-8">Ariza qoldiring</h2>

                  {/* Ism */}
                  <div className="mb-5">
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      name="ism"
                      value={form.ism}
                      onChange={handleChange}
                      placeholder="Ism Familiya"
                      className="w-full bg-[#0A0A0F] border border-white/10 focus:border-[#E8192C]/50 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors placeholder:text-white/25"
                    />
                  </div>

                  {/* Telefon */}
                  <div className="mb-5">
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Telefon raqam *
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      value={form.telefon}
                      onChange={handleChange}
                      placeholder="+998 90 000 00 00"
                      className="w-full bg-[#0A0A0F] border border-white/10 focus:border-[#E8192C]/50 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors placeholder:text-white/25"
                    />
                  </div>

                  {/* Format */}
                  <div className="mb-5">
                    <label className="block text-white/50 text-xs font-medium mb-3 uppercase tracking-wider">
                      Qaysi format qiziqtiradi?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {formats.map((f) => (
                        <button
                          key={f.value}
                          type="button"
                          onClick={() => handleFormatSelect(f.value)}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm text-left transition-all ${
                            form.format === f.value
                              ? "bg-[#E8192C]/15 border border-[#E8192C]/40 text-white"
                              : "bg-[#0A0A0F] border border-white/8 text-white/55 hover:border-white/20"
                          }`}
                        >
                          <span>{f.emoji}</span>
                          <span>{f.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Daraja */}
                  <div className="mb-5">
                    <label
                      htmlFor="daraja"
                      className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider"
                    >
                      Hozirgi fransuz tili darajangiz
                    </label>
                    <select
                      id="daraja"
                      name="daraja"
                      value={form.daraja}
                      onChange={handleChange}
                      className="w-full bg-[#0A0A0F] border border-white/10 focus:border-[#E8192C]/50 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Tanlang...</option>
                      {darajalar.map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Xabar */}
                  <div className="mb-7">
                    <label className="block text-white/50 text-xs font-medium mb-2 uppercase tracking-wider">
                      Qo'shimcha savol yoki xabar
                    </label>
                    <textarea
                      name="xabar"
                      value={form.xabar}
                      onChange={handleChange}
                      placeholder="Savolingizni yozing..."
                      rows={4}
                      className="w-full bg-[#0A0A0F] border border-white/10 focus:border-[#E8192C]/50 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition-colors placeholder:text-white/25 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.ism || !form.telefon}
                    className="w-full bg-[#E8192C] hover:bg-[#c4111f] disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-4 rounded-xl transition-all text-sm"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Yuborilmoqda...
                      </span>
                    ) : (
                      "Ariza yuborish →"
                    )}
                  </button>

                  <p className="text-white/25 text-xs text-center mt-4">
                    Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi
                  </p>
                </div>
              )}
            </div>

            {/* ALOQA MA'LUMOTLARI */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              {/* Kontaktlar */}
              <div className="bg-[#12121A] border border-white/5 rounded-2xl p-6">
                <h3 className="font-['Syne'] font-semibold text-base mb-5">Aloqa ma'lumotlari</h3>
                <div className="flex flex-col gap-4">
                  {contacts.map((c) => (
                    <a
                      key={c.title}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer noopener"
                      className="flex items-start gap-4 group no-underline"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 border border-[#E8192C]/20 flex items-center justify-center text-lg shrink-0 group-hover:bg-[#E8192C]/20 transition-colors">
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-white/40 text-xs mb-0.5">{c.title}</div>
                        <div className="text-white text-sm font-medium group-hover:text-[#E8192C] transition-colors break-all">
                          {c.value}
                        </div>
                        <div className="text-white/30 text-xs mt-0.5">{c.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Ijtimoiy tarmoqlar */}
              <div className="bg-[#12121A] border border-white/5 rounded-2xl p-6">
                <h3 className="font-['Syne'] font-semibold text-base mb-5">Ijtimoiy tarmoqlar</h3>
                <div className="flex flex-col gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-between px-4 py-3 bg-[#0A0A0F] border border-white/5 hover:border-white/15 rounded-xl transition-all group no-underline"
                    >
                      <div className="flex items-center gap-3">
                        <span>{s.icon}</span>
                        <span className="text-white/65 group-hover:text-white text-sm transition-colors">
                          {s.label}
                        </span>
                      </div>
                      <span className="text-white/25 group-hover:text-white/60 text-sm transition-colors">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Xarita placeholder */}
              <div className="bg-[#12121A] border border-white/5 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.5!2d69.2832!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE3JzU4LjIiTiA2OcKwMTcnMDIuMyJF!5e0!3m2!1suz!2suz!4v1234567890"
                  width="100%"
                  height="200"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="France TCF manzili"
                  className="grayscale opacity-70 border-0"
                />
                <div className="px-5 py-4">
                  <p className="text-white/60 text-xs">
                    📍 Oybek metro, Farmatsevtika instituti ichida
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
