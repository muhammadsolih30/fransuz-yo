import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { BarChart3, MapPin, Phone } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "../components/BrandIcons";
import { PageMeta } from "../components/PageMeta";
import { useSitePreferences } from "../contexts/SitePreferencesContext";

const CONTACT_HREFS = [
  "tel:+998947382221",
  "https://t.me/France_TCF",
  "https://t.me/Francais_languee",
  "https://www.google.com/maps/search/?api=1&query=Chilonzor+metro+Toshkent",
] as const;

const CONTACT_ICONS = [Phone, TelegramIcon, TelegramIcon, MapPin] as const;

const SOCIAL_HREFS = [
  "https://t.me/Francais_languee",
  "https://www.instagram.com/francais_languee/reels/",
  "https://t.me/Fransuzu",
  "https://t.me/France_TCF",
] as const;

const SOCIAL_ICONS = [TelegramIcon, InstagramIcon, BarChart3, TelegramIcon] as const;

export const Route = createFileRoute("/boglanish")({
  component: BoglanishPage,
});

function BoglanishPage() {
  const { content } = useSitePreferences();
  const ui = content.ui.contact;
  const shared = content.ui.shared;

  const [form, setForm] = useState({ ism: "", telefon: "", telegram: "", format: "", daraja: "", xabar: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [opened, setOpened] = useState(false);

  const canSubmit = !!form.ism && isValidPhoneNumber(form.telefon || "") && agreed && !loading;

  const handleSubmit = async (event?: FormEvent) => {
    event?.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setSubmitError("");

    let country = "UZ";
    try {
      const parsed = parsePhoneNumber(form.telefon);
      if (parsed?.country) country = parsed.country;
    } catch {
      /* ignore */
    }

    try {
      const { leadsStore } = await import("../lib/store");
      await leadsStore.add({
        ism: form.ism.trim(),
        telefon: form.telefon,
        telegram: form.telegram.trim(),
        country,
        format: ui.formats.find((f) => f.v === form.format)?.l ?? "—",
        daraja: ui.levels.find((d) => d.v === form.daraja)?.l ?? "—",
        xabar: form.xabar.trim() || "—",
      });
      setSent(true);
    } catch (e) {
      console.error(e);
      setSubmitError(ui.submitError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <PageMeta page="contact" path="/boglanish" />

      <section className="relative pt-36 pb-16 overflow-hidden page-hero">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-95 page-hero__image"
          style={{ backgroundImage: "url('/image/opening/ruyxatdanOtishBOLIMI.png')" }}
        />
        <div className="absolute inset-0 page-hero__scrim" aria-hidden />
        <div className="absolute -top-20 left-1/4 w-[500px] h-[400px] rounded-full bg-[#e83848]/10 blur-[120px] animate-float-slow" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-[#e83848] mb-4 animate-slide-up-sm">
            <span className="w-8 h-px bg-[#e83848]" /> {ui.eyebrow}
          </p>
          <h1 className="font-['Syne'] font-extrabold text-[clamp(2.6rem,7vw,5rem)] leading-[0.98] mb-6 animate-slide-up delay-100">
            {ui.title}
          </h1>
          <p className="text-[#3E4B62] text-lg max-w-2xl animate-slide-up delay-200">{ui.subtitle}</p>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-[#FAF6EF] relative">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 reveal card p-8 lg:p-10">
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6 animate-scale-in">
                    <span className="font-['Syne'] font-extrabold text-5xl text-green-600">✓</span>
                  </div>
                  <h3 className="font-['Syne'] font-extrabold text-3xl mb-3">{ui.successTitle}</h3>
                  <p className="text-[#546074] text-sm mb-8 max-w-sm">{ui.successBody}</p>
                  <a href="https://t.me/France_TCF" target="_blank" rel="noreferrer" className="btn-primary">
                    {ui.successTelegram}
                  </a>
                </div>
              ) : (
                <>
                  <h2 className="font-['Syne'] font-extrabold text-3xl mb-8">{ui.formTitle}</h2>

                  <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">
                        {ui.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        name="ism"
                        type="text"
                        autoComplete="name"
                        placeholder={ui.namePlaceholder}
                        value={form.ism}
                        onChange={(e) => setForm((p) => ({ ...p, ism: e.target.value }))}
                        className="w-full bg-[#FAF6EF] border border-[#15233B]/10 focus:border-[#e83848] focus:ring-4 focus:ring-[#e83848]/10 rounded-xl px-4 py-3.5 text-[#15233B] text-base outline-none transition-all placeholder:text-[#15233B]/35"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">
                        {ui.phoneLabel}
                      </label>
                      <PhoneInput
                        id="contact-phone"
                        international
                        defaultCountry="UZ"
                        countryCallingCodeEditable={false}
                        placeholder={ui.phonePlaceholder}
                        value={form.telefon}
                        onChange={(value) => setForm((p) => ({ ...p, telefon: value ?? "" }))}
                        className="france-phone"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="contact-telegram" className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">
                      {ui.telegramLabel}
                    </label>
                    <div className="field-shell flex items-center bg-[#FAF6EF] border border-[#15233B]/10 focus-within:border-[#e83848] focus-within:ring-4 focus-within:ring-[#e83848]/10 rounded-xl px-4 transition-all">
                      <span className="text-[#646F82] font-semibold shrink-0" aria-hidden>
                        @
                      </span>
                      <input
                        id="contact-telegram"
                        name="telegram"
                        type="text"
                        autoComplete="off"
                        placeholder="username"
                        value={form.telegram}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, telegram: e.target.value.replace(/[@\s]/g, "") }))
                        }
                        className="flex-1 min-w-0 bg-transparent border-0 shadow-none py-3.5 pl-1 text-[#15233B] text-base outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none focus-visible:shadow-none focus-visible:ring-0 placeholder:text-[#15233B]/35"
                      />
                    </div>
                  </div>

                  <fieldset className="mb-5 border-0 p-0">
                    <legend className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">
                      {ui.formatLabel}
                    </legend>
                    <div className="grid grid-cols-2 gap-3">
                      {ui.formats.map((f) => (
                        <button
                          key={f.v}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, format: f.v }))}
                          aria-pressed={form.format === f.v}
                          className={`text-left px-4 py-3 text-sm rounded-xl border-2 transition-all ${
                            form.format === f.v
                              ? "border-[#e83848] text-[#e83848] bg-[#e83848]/5 font-semibold"
                              : "border-[#15233B]/10 text-[#3E4B62] hover:border-[#15233B]/25"
                          }`}
                        >
                          {f.l}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mb-5">
                    <label htmlFor="contact-level" className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">
                      {ui.levelLabel}
                    </label>
                    <select
                      id="contact-level"
                      name="daraja"
                      value={form.daraja}
                      onChange={(e) => setForm((p) => ({ ...p, daraja: e.target.value }))}
                      className="w-full bg-[#FAF6EF] border border-[#15233B]/10 focus:border-[#e83848] focus:ring-4 focus:ring-[#e83848]/10 rounded-xl px-4 py-3.5 text-[#15233B] text-sm outline-none transition-all cursor-pointer"
                    >
                      <option value="">{shared.selectPlaceholder}</option>
                      {ui.levels.map((d) => (
                        <option key={d.v} value={d.v}>
                          {d.l}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-8">
                    <label htmlFor="contact-message" className="block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5">
                      {ui.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      name="xabar"
                      placeholder={ui.messagePlaceholder}
                      rows={3}
                      value={form.xabar}
                      onChange={(e) => setForm((p) => ({ ...p, xabar: e.target.value }))}
                      className="w-full bg-[#FAF6EF] border border-[#15233B]/10 focus:border-[#e83848] focus:ring-4 focus:ring-[#e83848]/10 rounded-xl px-4 py-3.5 text-[#15233B] text-sm outline-none transition-all placeholder:text-[#15233B]/35 resize-none"
                    />
                  </div>

                  <div className="mb-5 bg-[#FAF6EF] border border-[#15233B]/8 rounded-xl p-4">
                    <Link
                      to="/ommaviy-oferta"
                      onClick={() => setOpened(true)}
                      className="no-underline flex items-center gap-3 group"
                    >
                      <span className="w-10 h-10 rounded-xl bg-[#e83848]/10 text-[#e83848] flex items-center justify-center text-lg shrink-0">
                        📄
                      </span>
                      <span className="flex-1">
                        <span className="block text-[#15233B] text-sm font-bold group-hover:text-[#e83848] transition-colors">
                          {ui.ofertaLink} {opened && <span className="text-green-600">✓</span>}
                        </span>
                        <span className="block text-[#646F82] text-xs">{ui.ofertaHint}</span>
                      </span>
                    </Link>

                    <label className="flex items-start gap-3 mt-4 pt-4 border-t border-[#15233B]/8 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 w-5 h-5 shrink-0 accent-[#e83848] cursor-pointer"
                      />
                      <span className="text-[#3E4B62] text-sm leading-snug">{ui.ofertaAgree}</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full bg-[#e83848] hover:bg-[#e84858] disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl text-sm transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_-8px_rgba(232,56,72,0.5)]"
                  >
                    {loading ? ui.submitting : ui.submit}
                  </button>
                  {submitError && (
                    <p className="text-[#e83848] text-sm text-center mt-3 font-medium" role="alert">
                      {submitError}
                    </p>
                  )}
                  {!agreed && (form.ism || form.telefon) && (
                    <p className="text-[#646F82] text-xs text-center mt-3">{ui.ofertaRequired}</p>
                  )}
                  </form>
                </>
              )}
            </div>

            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="reveal card p-7" data-delay={100}>
                <h3 className="font-['Syne'] font-bold text-lg mb-6">{ui.contactsTitle}</h3>
                <div className="flex flex-col gap-5">
                  {ui.contacts.map((c, i) => {
                    const Icon = CONTACT_ICONS[i];
                    const href = CONTACT_HREFS[i];
                    return (
                      <a
                        key={c.title}
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="no-underline flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-[#FAF6EF] border border-[#15233B]/8 text-[#e83848] group-hover:bg-[#e83848] group-hover:border-[#e83848] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all">
                          <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <div className="text-[#646F82] text-xs">{c.title}</div>
                          <div className="text-[#15233B] group-hover:text-[#e83848] text-sm font-bold transition-colors break-all">
                            {c.value}
                          </div>
                          <div className="text-[#15233B]/40 text-xs mt-0.5">{c.sub}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div
                className="reveal card p-7 panel-soft-accent"
                data-delay={200}
              >
                <h3 className="font-['Syne'] font-bold text-lg mb-5">{ui.socialTitle}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {ui.socials.map((s, i) => {
                    const Icon = SOCIAL_ICONS[i];
                    const href = SOCIAL_HREFS[i];
                    return (
                      <a
                        key={s.l}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="social-chip no-underline flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-[#15233B]/10 text-[#15233B] hover:bg-[#e83848] hover:border-[#e83848] hover:text-white text-xs font-semibold transition-all hover:-translate-y-0.5"
                      >
                        <Icon className="w-4 h-4 shrink-0" /> {s.l}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
