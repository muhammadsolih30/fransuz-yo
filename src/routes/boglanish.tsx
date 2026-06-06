import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/boglanish")({
  head: () => ({
    meta: [
      { title: "Bog'lanish — France TCF O'quv Markazi" },
      { name: "description", content: "France TCF O'quv markazi bilan bog'laning." },
    ],
  }),
  component: BoglanishPage,
});

const formats = [
  { v: "offline", l: "🏫 Offline guruh" },
  { v: "online", l: "💻 Online guruh" },
  { v: "mini", l: "👥 Mini-guruh" },
  { v: "individual", l: "🎯 Individual" },
  { v: "bilmayman", l: "❓ Bilmayman" },
];

const darajalar = [
  { v: "nol", l: "0 dan boshlayman" },
  { v: "a1", l: "A1 — Boshlang'ich" },
  { v: "a2", l: "A2 — Elementary" },
  { v: "b1", l: "B1 — Intermediate" },
  { v: "b2", l: "B2 — Upper Intermediate" },
  { v: "bilmayman", l: "Bilmayman" },
];

const contacts = [
  {
    icon: "📞",
    title: "Telefon",
    value: "+998 77 220 08 09",
    href: "tel:+998772200809",
    sub: "Du–Shan 9:00–20:00",
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
    sub: "24 soat ichida",
  },
  {
    icon: "📍",
    title: "Manzil",
    value: "Oybek metro, Farmatsevtika instituti ichida",
    href: "#",
    sub: "Toshkent",
  },
];

const socials = [
  { l: "Telegram kanal", href: "https://t.me/Canadali" },
  { l: "Instagram", href: "https://instagram.com/kanadalik_uzbek" },
  { l: "YouTube", href: "https://youtube.com/@canadAli" },
  { l: "Alimardon (shaxsiy)", href: "https://t.me/Mr_Ali_Canada" },
];

function BoglanishPage() {
  const [form, setForm] = useState({ ism: "", telefon: "", format: "", daraja: "", xabar: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.ism || !form.telefon) return;
    setLoading(true);
    const msg = `🆕 Yangi ariza — France TCF\n\n👤 ${form.ism}\n📞 ${form.telefon}\n📚 ${form.format || "—"}\n🎯 ${form.daraja || "—"}\n💬 ${form.xabar || "—"}`;
    try {
      await fetch(`https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: "YOUR_CHAT_ID", text: msg }),
      });
    } catch {
      // Handle error silently
    }
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 800);
  };

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex flex-col justify-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full opacity-12"
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
            Bog'lanish
          </p>
          <h1
            className="font-['Syne'] font-black leading-none mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            Bepul
            <br />
            <span className="text-[#E8192C]">maslahat</span>
          </h1>
          <p className="text-white/40 text-lg max-w-lg">
            Qaysi format siz uchun mos — birgalikda aniqlaymiz.
          </p>
        </div>
      </section>

      {/* FORMA + KONTAKT */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-white/5">
            {/* FORMA */}
            <div className="lg:col-span-3 bg-black p-10">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="font-['Syne'] font-black text-8xl text-[#E8192C] mb-4">✓</div>
                  <h3 className="font-['Syne'] font-black text-3xl mb-3">Qabul qilindi!</h3>
                  <p className="text-white/40 text-sm mb-8">Tez orada siz bilan bog'lanamiz.</p>
                  <a
                    href="https://t.me/Fransuz_lingua"
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white font-medium px-8 py-4 rounded-xl text-sm transition-all"
                  >
                    Telegramda yozish →
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="font-['Syne'] font-black text-3xl mb-10">Ariza qoldiring</h2>

                  <div className="mb-6">
                    <label className="block text-white/25 text-xs tracking-widest uppercase mb-3">
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      placeholder="Ism Familiya"
                      value={form.ism}
                      onChange={(e) => setForm((p) => ({ ...p, ism: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/10 focus:border-[#E8192C] pb-3 text-white text-base outline-none transition-colors placeholder:text-white/15"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/25 text-xs tracking-widest uppercase mb-3">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      placeholder="+998 90 000 00 00"
                      value={form.telefon}
                      onChange={(e) => setForm((p) => ({ ...p, telefon: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/10 focus:border-[#E8192C] pb-3 text-white text-base outline-none transition-colors placeholder:text-white/15"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/25 text-xs tracking-widest uppercase mb-3">
                      Format
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {formats.map((f) => (
                        <button
                          key={f.v}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, format: f.v }))}
                          className={`text-left px-4 py-3 text-sm border transition-all ${
                            form.format === f.v
                              ? "border-[#E8192C] text-white bg-[#E8192C]/5"
                              : "border-white/8 text-white/40 hover:border-white/20 hover:text-white/70"
                          }`}
                        >
                          {f.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-white/25 text-xs tracking-widest uppercase mb-3">
                      Hozirgi daraja
                    </label>
                    <select
                      value={form.daraja}
                      onChange={(e) => setForm((p) => ({ ...p, daraja: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/10 focus:border-[#E8192C] pb-3 text-white text-sm outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-black">
                        Tanlang...
                      </option>
                      {darajalar.map((d) => (
                        <option key={d.v} value={d.v} className="bg-black">
                          {d.l}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-10">
                    <label className="block text-white/25 text-xs tracking-widest uppercase mb-3">
                      Savol / xabar
                    </label>
                    <textarea
                      placeholder="Savolingizni yozing..."
                      rows={3}
                      value={form.xabar}
                      onChange={(e) => setForm((p) => ({ ...p, xabar: e.target.value }))}
                      className="w-full bg-transparent border-b border-white/10 focus:border-[#E8192C] pb-3 text-white text-sm outline-none transition-colors placeholder:text-white/15 resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={loading || !form.ism || !form.telefon}
                    className="w-full bg-[#E8192C] hover:bg-[#c4111f] disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold py-5 text-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {loading ? "Yuborilmoqda..." : "Ariza yuborish →"}
                  </button>
                </>
              )}
            </div>

            {/* KONTAKT */}
            <div className="lg:col-span-2 bg-black">
              {/* Aloqa */}
              <div className="p-10 border-b border-white/5">
                <h3 className="font-['Syne'] font-bold text-lg mb-8 text-white/60">Aloqa</h3>
                <div className="flex flex-col gap-6">
                  {contacts.map((c) => (
                    <a
                      key={c.title}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="no-underline flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 border border-white/8 group-hover:border-[#E8192C]/50 flex items-center justify-center text-base flex-shrink-0 transition-colors">
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-white/25 text-xs mb-0.5">{c.title}</div>
                        <div className="text-white/70 group-hover:text-white text-sm transition-colors break-all">
                          {c.value}
                        </div>
                        <div className="text-white/20 text-xs mt-0.5">{c.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Ijtimoiy tarmoqlar */}
              <div className="p-10">
                <h3 className="font-['Syne'] font-bold text-lg mb-6 text-white/60">
                  Ijtimoiy tarmoqlar
                </h3>
                <div className="flex flex-col gap-1">
                  {socials.map((s) => (
                    <a
                      key={s.l}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline flex items-center justify-between px-4 py-3 border-b border-white/5 text-white/40 hover:text-white transition-colors group"
                    >
                      <span className="text-sm">{s.l}</span>
                      <span className="text-[#E8192C] opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
