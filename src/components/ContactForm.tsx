// Placeholder for the ContactForm component
import { useState } from "react";

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

export function ContactForm() {
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

  if (sent) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-20">
        <div className="font-['Syne'] font-black text-8xl text-[#E8192C] mb-4">✓</div>
        <h3 className="font-['Syne'] font-black text-3xl mb-3">Qabul qilindi!</h3>
        <p className="text-gray-600 text-sm mb-8">Tez orada siz bilan bog'lanamiz.</p>
        <a
          href="https://t.me/Fransuz_lingua"
          target="_blank"
          rel="noreferrer"
          className="no-underline bg-[#E8192C] hover:bg-[#c4111f] text-white font-medium px-8 py-4 rounded-xl text-sm transition-all"
        >
          Telegramda yozish →
        </a>
      </div>
    );
  }

  return (
    <div>
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
        <label className="block text-white/25 text-xs tracking-widest uppercase mb-3">Format</label>
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
          className="w-full bg-transparent border-b border-gray-300 focus:border-[#E8192C] pb-3 text-gray-900 text-sm outline-none transition-colors placeholder:text-gray-400 resize-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading || !form.ism || !form.telefon}
        className="w-full bg-[#E8192C] hover:bg-[#c4111f] disabled:opacity-30 disabled:cursor-not-allowed text-white font-semibold py-5 text-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
      >
        {loading ? "Yuborilmoqda..." : "Ariza yuborish →"}
      </button>

      <p className="text-gray-400 text-xs text-center mt-4">
        Ma'lumotlaringiz faqat siz bilan bog'lanish uchun ishlatiladi
      </p>
    </div>
  );
}
