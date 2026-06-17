import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useReveal } from "../hooks/useReveal";
import { leadsStore } from "../lib/store";

export const Route = createFileRoute("/boglanish")({
  head: () => ({
    meta: [
      { title: "Bog'lanish — France TCF O'quv Markazi" },
      { name: "description", content: "France TCF O'quv markazi bilan bog'laning. Bepul maslahat oling." },
    ],
  }),
  component: BoglanishPage,
});

const formats = [
  { v: "offline", l: "🏫 Offline guruh" },
  { v: "online", l: "💻 Online guruh" },
  { v: "mini", l: "👥 Mini-guruh" },
  { v: "individual", l: "🎯 Individual" },
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
  { icon: "📞", title: "Telefon", value: "+998 94 738 22 21", href: "tel:+998947382221", sub: "Qo'ng'iroq qiling" },
  { icon: "💬", title: "Admin", value: "@France_TCF", href: "https://t.me/France_TCF", sub: "Barcha savollarga javob" },
  { icon: "✈️", title: "Telegram kanal", value: "@Francais_languee", href: "https://t.me/Francais_languee", sub: "Yangiliklar va darslar" },
  { icon: "📍", title: "Manzil", value: "Chilonzor metro, Toshkent", href: "https://www.google.com/maps/search/?api=1&query=Chilonzor+metro+Toshkent", sub: "Offline darslar manzili" },
];

const socials = [
  { l: "Telegram kanal", href: "https://t.me/Francais_languee", icon: "✈️" },
  { l: "Instagram", href: "https://www.instagram.com/francais_languee/reels/", icon: "📷" },
  { l: "Natijalar", href: "https://t.me/Fransuzu", icon: "📊" },
  { l: "Admin", href: "https://t.me/France_TCF", icon: "💬" },
];

function BoglanishPage() {
  useReveal();
  const [form, setForm] = useState({ ism: "", telefon: "", telegram: "", format: "", daraja: "", xabar: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [opened, setOpened] = useState(false); // oferta ochib ko'rilganmi

  const canSubmit = !!form.ism && isValidPhoneNumber(form.telefon || "") && agreed && !loading;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setLoading(true);

    // Telefon raqamidan davlat kodini aniqlaymiz
    let country = "UZ";
    try {
      const parsed = parsePhoneNumber(form.telefon);
      if (parsed?.country) country = parsed.country;
    } catch {
      /* ignore */
    }

    // Arizani saqlaymiz (Supabase yoki localStorage).
    // Telegram avtomatik OCHILMAYDI — ariza shunchaki qabul qilinadi.
    try {
      await leadsStore.add({
        ism: form.ism,
        telefon: form.telefon,
        telegram: form.telegram.trim(),
        country,
        format: formats.find((f) => f.v === form.format)?.l ?? "—",
        daraja: darajalar.find((d) => d.v === form.daraja)?.l ?? "—",
        xabar: form.xabar || "—",
      });
    } catch (e) {
      console.error(e);
    }

    setLoading(false);
    setSent(true);
  };


  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      {/* HERO */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/image/opening/ruyxatdanOtishBOLIMI.png')", opacity: 0.95 }}
        />
        <div className="absolute -top-20 left-1/4 w-[500px] h-[400px] rounded-full bg-[#d62839]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#d62839] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#d62839]" /> Bog'lanish
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
            Bepul <span className="text-gradient-canada">maslahat</span> oling
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl animate-slide-up delay-200">
            Qaysi format siz uchun mos — birgalikda aniqlaymiz. Ariza qoldiring yoki to'g'ridan-to'g'ri
            adminamizga yozing.
          </p>
        </div>
      </section>

      {/* FORMA + KONTAKT */}
      <section className="py-12 lg:py-20 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* FORMA */}
            <div className="lg:col-span-3 reveal card p-8 lg:p-10">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-scale-in">
                    <span className="font-['Syne'] font-extrabold text-5xl text-green-600">✓</span>
                  </div>
                  <h3 className="font-['Syne'] font-extrabold text-3xl mb-3">Qabul qilindi!</h3>
                  <p className="text-[#546074] text-sm mb-8 max-w-sm">
                    Arizangiz qabul qilindi. Tezroq bog'lanish uchun adminga to'g'ridan-to'g'ri yozing.
                  </p>
                  <a href="https://t.me/France_TCF" target="_blank" rel="noreferrer" className="btn-primary">
                    💬 Telegram: @France_TCF
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="font-['Syne'] font-extrabold text-3xl mb-8">Ariza qoldiring</h2>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">Ismingiz *</label>
                      <input
                        type="text"
                        placeholder="Ism Familiya"
                        value={form.ism}
                        onChange={(e) => setForm((p) => ({ ...p, ism: e.target.value }))}
                        className="w-full bg-[#FAF6EF] border border-[#15233B]/10 focus:border-[#d62839] focus:ring-4 focus:ring-[#d62839]/10 rounded-xl px-4 py-3.5 text-[#15233B] text-base outline-none transition-all placeholder:text-[#15233B]/35"
                      />
                    </div>
                    <div>
                      <label className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">Telefon *</label>
                      <PhoneInput
                        international
                        defaultCountry="UZ"
                        countryCallingCodeEditable={false}
                        placeholder="90 000 00 00"
                        value={form.telefon}
                        onChange={(value) => setForm((p) => ({ ...p, telefon: value ?? "" }))}
                        className="france-phone"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">Telegram username</label>
                    <div className="flex items-center bg-[#FAF6EF] border border-[#15233B]/10 focus-within:border-[#d62839] focus-within:ring-4 focus-within:ring-[#d62839]/10 rounded-xl px-4 transition-all">
                      <span className="text-[#646F82] font-semibold">@</span>
                      <input
                        type="text"
                        placeholder="username"
                        value={form.telegram}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, telegram: e.target.value.replace(/[@\s]/g, "") }))
                        }
                        className="flex-1 bg-transparent py-3.5 pl-1 text-[#15233B] text-base outline-none placeholder:text-[#15233B]/35"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">Format</label>
                    <div className="grid grid-cols-2 gap-3">
                      {formats.map((f) => (
                        <button
                          key={f.v}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, format: f.v }))}
                          className={`text-left px-4 py-3 text-sm rounded-xl border-2 transition-all ${form.format === f.v
                            ? "border-[#d62839] text-[#d62839] bg-[#d62839]/5 font-semibold"
                            : "border-[#15233B]/10 text-[#3E4B62] hover:border-[#15233B]/25"
                            }`}
                        >
                          {f.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">Hozirgi daraja</label>
                    <select
                      value={form.daraja}
                      onChange={(e) => setForm((p) => ({ ...p, daraja: e.target.value }))}
                      className="w-full bg-[#FAF6EF] border border-[#15233B]/10 focus:border-[#d62839] focus:ring-4 focus:ring-[#d62839]/10 rounded-xl px-4 py-3.5 text-[#15233B] text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="">Tanlang...</option>
                      {darajalar.map((d) => (
                        <option key={d.v} value={d.v}>{d.l}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">Savol / xabar</label>
                    <textarea
                      placeholder="Savolingizni yozing..."
                      rows={3}
                      value={form.xabar}
                      onChange={(e) => setForm((p) => ({ ...p, xabar: e.target.value }))}
                      className="w-full bg-[#FAF6EF] border border-[#15233B]/10 focus:border-[#d62839] focus:ring-4 focus:ring-[#d62839]/10 rounded-xl px-4 py-3.5 text-[#15233B] text-sm outline-none transition-all placeholder:text-[#15233B]/35 resize-none"
                    />
                  </div>

                  {/* Ommaviy oferta rozilik */}
                  <div className="mb-5 bg-[#FAF6EF] border border-[#15233B]/8 rounded-xl p-4">
                    <a
                      href="/ommaviy oferta.pdf"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpened(true)}
                      className="no-underline flex items-center gap-3 group"
                    >
                      <span className="w-10 h-10 rounded-xl bg-[#d62839]/10 text-[#d62839] flex items-center justify-center text-lg shrink-0">
                        📄
                      </span>
                      <span className="flex-1">
                        <span className="block text-[#15233B] text-sm font-bold group-hover:text-[#d62839] transition-colors">
                          Ommaviy oferta {opened && <span className="text-green-600">✓</span>}
                        </span>
                        <span className="block text-[#646F82] text-xs">Bosib tanishib chiqing →</span>
                      </span>
                    </a>

                    <label className="flex items-start gap-3 mt-4 pt-4 border-t border-[#15233B]/8 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 w-5 h-5 shrink-0 accent-[#d62839] cursor-pointer"
                      />
                      <span className="text-[#3E4B62] text-sm leading-snug">
                        Men ommaviy oferta bilan tanishib chiqdim va barcha shartlarga roziman.
                      </span>
                    </label>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="w-full bg-[#d62839] hover:bg-[#ae1b2a] disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl text-sm transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_-8px_rgba(213,43,30,0.5)]"
                  >
                    {loading ? "Yuborilmoqda..." : "Ro'yxatdan o'tish →"}
                  </button>
                  {!agreed && (form.ism || form.telefon) && (
                    <p className="text-[#646F82] text-xs text-center mt-3">
                      Davom etish uchun ommaviy oferta shartlariga rozilik bildiring.
                    </p>
                  )}
                </>
              )}
            </div>

            {/* KONTAKT */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="reveal card p-7" data-delay={100}>
                <h3 className="font-['Syne'] font-bold text-lg mb-6">Aloqa ma'lumotlari</h3>
                <div className="flex flex-col gap-5">
                  {contacts.map((c) => (
                    <a
                      key={c.title}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="no-underline flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF6EF] border border-[#15233B]/8 group-hover:bg-[#d62839] group-hover:border-[#d62839] flex items-center justify-center text-lg flex-shrink-0 transition-all">
                        <span className="group-hover:scale-110 transition-transform">{c.icon}</span>
                      </div>
                      <div>
                        <div className="text-[#646F82] text-xs">{c.title}</div>
                        <div className="text-[#15233B] group-hover:text-[#d62839] text-sm font-bold transition-colors break-all">{c.value}</div>
                        <div className="text-[#15233B]/40 text-xs mt-0.5">{c.sub}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="reveal card p-7 bg-gradient-to-br from-[#15233B] to-[#1d3a5f] text-white" data-delay={200}>
                <h3 className="font-['Syne'] font-bold text-lg mb-5">Ijtimoiy tarmoqlar</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.l}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="no-underline flex items-center gap-2 px-4 py-3 rounded-xl bg-white/8 hover:bg-[#d62839] border border-white/10 text-white/85 hover:text-white text-xs font-semibold transition-all hover:-translate-y-0.5"
                    >
                      <span>{s.icon}</span> {s.l}
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
