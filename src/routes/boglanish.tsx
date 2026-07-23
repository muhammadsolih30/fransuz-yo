import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { BarChart3, MapPin, Phone } from "lucide-react";
import { InstagramIcon, TelegramIcon } from "../components/BrandIcons";
import { DeferredBg } from "../components/DeferredBg";
import { PageMeta } from "../components/PageMeta";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import type { SiteLocale } from "../lib/i18n/locales";

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

type FormMode = "inquiry" | "register";

type ContactForm = {
  ism: string;
  manzil: string;
  tugilganSana: string;
  malumot: string;
  ishTajriba: string;
  oilaviyHolat: string;
  inglizDaraja: string;
  telefon: string;
  telegram: string;
  maqsad: string;
  daraja: string;
  imtihonVaqti: string;
  davlatMaqsad: string;
  kunlikVaqt: string;
  format: string;
  qayerdanEshitdingiz: string;
};

const EMPTY_FORM: ContactForm = {
  ism: "",
  manzil: "",
  tugilganSana: "",
  malumot: "",
  ishTajriba: "",
  oilaviyHolat: "",
  inglizDaraja: "",
  telefon: "",
  telegram: "",
  maqsad: "",
  daraja: "",
  imtihonVaqti: "",
  davlatMaqsad: "",
  kunlikVaqt: "",
  format: "",
  qayerdanEshitdingiz: "",
};

function stripRequiredStar(label: string) {
  return label.replace(/\s*\*?$/, "");
}

function buildRegisterXabar(form: ContactForm, ui: SiteLocale["ui"]["contact"]) {
  const lines: string[] = [];

  const add = (label: string, value: string) => {
    const trimmed = value.trim();
    if (trimmed) lines.push(`${stripRequiredStar(label)}: ${trimmed}`);
  };

  add(ui.addressLabel, form.manzil);
  add(ui.birthDateLabel, form.tugilganSana);
  add(ui.educationLabel, form.malumot);
  add(ui.workLabel, form.ishTajriba);
  add(ui.familyLabel, form.oilaviyHolat);
  add(ui.englishLabel, form.inglizDaraja);
  add(ui.frenchGoalLabel, form.maqsad);
  add(ui.examWhenLabel, form.imtihonVaqti);
  add(ui.countryGoalLabel, form.davlatMaqsad);

  const dailyTime = ui.dailyTimes.find((t) => t.v === form.kunlikVaqt)?.l;
  if (dailyTime) lines.push(`${stripRequiredStar(ui.dailyTimeLabel)}: ${dailyTime}`);

  add(ui.heardFromLabel, form.qayerdanEshitdingiz);

  return lines.length ? lines.join("\n") : "—";
}

export const Route = createFileRoute("/boglanish")({
  validateSearch: (search: Record<string, unknown>) => ({
    mode: search.mode === "register" ? ("register" as const) : undefined,
  }),
  component: BoglanishPage,
});

function BoglanishPage() {
  const { content } = useSitePreferences();
  const ui = content.ui.contact;
  const shared = content.ui.shared;
  const { mode: searchMode } = Route.useSearch();

  const [mode, setMode] = useState<FormMode>(() => searchMode ?? "inquiry");
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (searchMode === "register") setMode("register");
  }, [searchMode]);

  const phoneOk = isValidPhoneNumber(form.telefon || "");

  const canSubmitInquiry = !!form.ism.trim() && phoneOk && !!form.daraja && !loading;

  const canSubmitRegister =
    !!form.ism.trim() &&
    !!form.manzil.trim() &&
    !!form.tugilganSana.trim() &&
    phoneOk &&
    agreed &&
    !loading;

  const canSubmit = mode === "inquiry" ? canSubmitInquiry : canSubmitRegister;

  const switchMode = (next: FormMode) => {
    setMode(next);
    setSubmitError("");
    setSent(false);
  };

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

    const levelLabel = ui.levels.find((d) => d.v === form.daraja)?.l ?? "—";

    try {
      const { leadsStore, INQUIRY_FORMAT } = await import("../lib/store");

      if (mode === "inquiry") {
        await leadsStore.add({
          ism: form.ism.trim(),
          telefon: form.telefon,
          telegram: "",
          country,
          format: INQUIRY_FORMAT,
          daraja: levelLabel,
          xabar: "—",
        });
      } else {
        await leadsStore.add({
          ism: form.ism.trim(),
          telefon: form.telefon,
          telegram: form.telegram.trim(),
          country,
          format: ui.formats.find((f) => f.v === form.format)?.l ?? "—",
          daraja: levelLabel,
          xabar: buildRegisterXabar(form, ui),
        });
      }
      setSent(true);
    } catch (e) {
      console.error(e);
      const msg = e instanceof Error && e.message ? e.message : ui.submitError;
      setSubmitError(msg);
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full bg-[#FAF6EF] border border-[#15233B]/10 focus:border-[#e83848] focus:ring-4 focus:ring-[#e83848]/10 rounded-xl px-4 py-3.5 text-[#15233B] text-base outline-none transition-all placeholder:text-[#15233B]/35";
  const labelClass = "block text-[#546074] text-xs font-bold tracking-wider uppercase mb-2.5";

  return (
    <div className="bg-white text-[#15233B] overflow-hidden">
      <PageMeta page="contact" path="/boglanish" />

      <section className="relative pt-36 pb-16 overflow-hidden page-hero">
        <DeferredBg
          src="/image/opening/ruyxatdanOtishBOLIMI.png"
          className="page-hero__image bg-cover bg-center"
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
                  <h2 className="font-['Syne'] font-extrabold text-3xl mb-6">{ui.formTitle}</h2>

                  <div
                    className="contact-form-tabs grid grid-cols-2 gap-2 p-1.5 mb-8 rounded-2xl bg-[#FAF6EF] border border-[#15233B]/8"
                    role="tablist"
                    aria-label={ui.formTitle}
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected={mode === "inquiry"}
                      onClick={() => switchMode("inquiry")}
                      className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${
                        mode === "inquiry"
                          ? "bg-white text-[#e83848] shadow-[0_4px_14px_-6px_rgba(21,35,59,0.25)]"
                          : "text-[#546074] hover:text-[#15233B]"
                      }`}
                    >
                      {ui.tabInquiry}
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={mode === "register"}
                      onClick={() => switchMode("register")}
                      className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${
                        mode === "register"
                          ? "bg-white text-[#e83848] shadow-[0_4px_14px_-6px_rgba(21,35,59,0.25)]"
                          : "text-[#546074] hover:text-[#15233B]"
                      }`}
                    >
                      {ui.tabRegister}
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    {mode === "inquiry" && (
                      <>
                        <div className="mb-5">
                          <label htmlFor="contact-name" className={labelClass}>
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
                            className={fieldClass}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-level" className={labelClass}>
                            {ui.levelLabel} *
                          </label>
                          <select
                            id="contact-level"
                            name="daraja"
                            value={form.daraja}
                            onChange={(e) => setForm((p) => ({ ...p, daraja: e.target.value }))}
                            className={`${fieldClass} text-sm cursor-pointer`}
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
                          <label htmlFor="contact-phone-inquiry" className={labelClass}>
                            {ui.phoneLabel}
                          </label>
                          <PhoneInput
                            id="contact-phone-inquiry"
                            international
                            defaultCountry="UZ"
                            countryCallingCodeEditable={false}
                            placeholder={ui.phonePlaceholder}
                            value={form.telefon}
                            onChange={(value) => setForm((p) => ({ ...p, telefon: value ?? "" }))}
                            className="france-phone"
                          />
                        </div>
                      </>
                    )}

                    {mode === "register" && (
                      <>
                        <div className="mb-5">
                          <label htmlFor="contact-full-name" className={labelClass}>
                            {ui.fullNameLabel}
                          </label>
                          <input
                            id="contact-full-name"
                            name="ism"
                            type="text"
                            autoComplete="name"
                            placeholder={ui.fullNamePlaceholder}
                            value={form.ism}
                            onChange={(e) => setForm((p) => ({ ...p, ism: e.target.value }))}
                            className={fieldClass}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-address" className={labelClass}>
                            {ui.addressLabel}
                          </label>
                          <input
                            id="contact-address"
                            name="manzil"
                            type="text"
                            autoComplete="street-address"
                            placeholder={ui.addressPlaceholder}
                            value={form.manzil}
                            onChange={(e) => setForm((p) => ({ ...p, manzil: e.target.value }))}
                            className={fieldClass}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-birth-date" className={labelClass}>
                            {ui.birthDateLabel}
                          </label>
                          <input
                            id="contact-birth-date"
                            name="tugilganSana"
                            type="date"
                            value={form.tugilganSana}
                            onChange={(e) => setForm((p) => ({ ...p, tugilganSana: e.target.value }))}
                            className={`${fieldClass} text-sm`}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-education" className={labelClass}>
                            {ui.educationLabel}
                          </label>
                          <input
                            id="contact-education"
                            name="malumot"
                            type="text"
                            placeholder={ui.educationPlaceholder}
                            value={form.malumot}
                            onChange={(e) => setForm((p) => ({ ...p, malumot: e.target.value }))}
                            className={fieldClass}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-work" className={labelClass}>
                            {ui.workLabel}
                          </label>
                          <input
                            id="contact-work"
                            name="ishTajriba"
                            type="text"
                            placeholder={ui.workPlaceholder}
                            value={form.ishTajriba}
                            onChange={(e) => setForm((p) => ({ ...p, ishTajriba: e.target.value }))}
                            className={fieldClass}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-family" className={labelClass}>
                            {ui.familyLabel}
                          </label>
                          <input
                            id="contact-family"
                            name="oilaviyHolat"
                            type="text"
                            placeholder={ui.familyPlaceholder}
                            value={form.oilaviyHolat}
                            onChange={(e) => setForm((p) => ({ ...p, oilaviyHolat: e.target.value }))}
                            className={fieldClass}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-english" className={labelClass}>
                            {ui.englishLabel}
                          </label>
                          <input
                            id="contact-english"
                            name="inglizDaraja"
                            type="text"
                            placeholder={ui.englishPlaceholder}
                            value={form.inglizDaraja}
                            onChange={(e) => setForm((p) => ({ ...p, inglizDaraja: e.target.value }))}
                            className={fieldClass}
                          />
                        </div>

                        <p className={labelClass}>{ui.phoneTelegramLabel}</p>
                        <div className="grid sm:grid-cols-2 gap-5 mb-5">
                          <div>
                            <label htmlFor="contact-phone" className="sr-only">
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
                          <div>
                            <label htmlFor="contact-telegram" className="sr-only">
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
                                  setForm((p) => ({
                                    ...p,
                                    telegram: e.target.value.replace(/[@\s]/g, ""),
                                  }))
                                }
                                className="flex-1 min-w-0 bg-transparent border-0 shadow-none py-3.5 pl-1 text-[#15233B] text-base outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0 focus-visible:outline-none focus-visible:shadow-none focus-visible:ring-0 placeholder:text-[#15233B]/35"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-goal" className={labelClass}>
                            {ui.frenchGoalLabel}
                          </label>
                          <textarea
                            id="contact-goal"
                            name="maqsad"
                            placeholder={ui.frenchGoalPlaceholder}
                            rows={3}
                            value={form.maqsad}
                            onChange={(e) => setForm((p) => ({ ...p, maqsad: e.target.value }))}
                            className={`${fieldClass} text-sm resize-none`}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-level-register" className={labelClass}>
                            {ui.levelLabel}
                          </label>
                          <select
                            id="contact-level-register"
                            name="daraja"
                            value={form.daraja}
                            onChange={(e) => setForm((p) => ({ ...p, daraja: e.target.value }))}
                            className={`${fieldClass} text-sm cursor-pointer`}
                          >
                            <option value="">{shared.selectPlaceholder}</option>
                            {ui.levels.map((d) => (
                              <option key={d.v} value={d.v}>
                                {d.l}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-exam-when" className={labelClass}>
                            {ui.examWhenLabel}
                          </label>
                          <input
                            id="contact-exam-when"
                            name="imtihonVaqti"
                            type="text"
                            placeholder={ui.examWhenPlaceholder}
                            value={form.imtihonVaqti}
                            onChange={(e) => setForm((p) => ({ ...p, imtihonVaqti: e.target.value }))}
                            className={fieldClass}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-country-goal" className={labelClass}>
                            {ui.countryGoalLabel}
                          </label>
                          <input
                            id="contact-country-goal"
                            name="davlatMaqsad"
                            type="text"
                            placeholder={ui.countryGoalPlaceholder}
                            value={form.davlatMaqsad}
                            onChange={(e) => setForm((p) => ({ ...p, davlatMaqsad: e.target.value }))}
                            className={fieldClass}
                          />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="contact-daily-time" className={labelClass}>
                            {ui.dailyTimeLabel}
                          </label>
                          <select
                            id="contact-daily-time"
                            name="kunlikVaqt"
                            value={form.kunlikVaqt}
                            onChange={(e) => setForm((p) => ({ ...p, kunlikVaqt: e.target.value }))}
                            className={`${fieldClass} text-sm cursor-pointer`}
                          >
                            <option value="">{shared.selectPlaceholder}</option>
                            {ui.dailyTimes.map((t) => (
                              <option key={t.v} value={t.v}>
                                {t.l}
                              </option>
                            ))}
                          </select>
                        </div>

                        <fieldset className="mb-5 border-0 p-0">
                          <legend className={labelClass}>{ui.formatLabel}</legend>
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

                        <div className="mb-8">
                          <label htmlFor="contact-heard-from" className={labelClass}>
                            {ui.heardFromLabel}
                          </label>
                          <input
                            id="contact-heard-from"
                            name="qayerdanEshitdingiz"
                            type="text"
                            placeholder={ui.heardFromPlaceholder}
                            value={form.qayerdanEshitdingiz}
                            onChange={(e) =>
                              setForm((p) => ({ ...p, qayerdanEshitdingiz: e.target.value }))
                            }
                            className={fieldClass}
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
                      </>
                    )}

                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="w-full bg-[#e83848] hover:bg-[#e84858] disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl text-sm transition-all hover:-translate-y-0.5 shadow-[0_10px_30px_-8px_rgba(232,56,72,0.5)]"
                    >
                      {loading
                        ? ui.submitting
                        : mode === "inquiry"
                          ? ui.inquirySubmit
                          : ui.submit}
                    </button>

                    {submitError && (
                      <p className="text-[#e83848] text-sm text-center mt-3 font-medium" role="alert">
                        {submitError}
                      </p>
                    )}

                    {mode === "inquiry" && form.ism && !form.daraja && (
                      <p className="text-[#646F82] text-xs text-center mt-3">{ui.levelRequired}</p>
                    )}
                    {mode === "inquiry" && form.ism && form.daraja && !phoneOk && (
                      <p className="text-[#646F82] text-xs text-center mt-3">{ui.phoneRequired}</p>
                    )}
                    {mode === "register" && form.ism && !form.manzil.trim() && (
                      <p className="text-[#646F82] text-xs text-center mt-3">{ui.addressRequired}</p>
                    )}
                    {mode === "register" && form.ism && form.manzil.trim() && !form.tugilganSana && (
                      <p className="text-[#646F82] text-xs text-center mt-3">{ui.birthDateRequired}</p>
                    )}
                    {mode === "register" && form.ism && form.manzil.trim() && form.tugilganSana && !phoneOk && (
                      <p className="text-[#646F82] text-xs text-center mt-3">{ui.phoneRequired}</p>
                    )}
                    {mode === "register" && !agreed && (form.ism || form.telefon) && (
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

              <div className="reveal card p-7 panel-soft-accent" data-delay={200}>
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
