import { useEffect, useRef, useState } from "react";
import { Check, Languages, Monitor, Moon, Sun } from "lucide-react";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import type { Locale, ThemeMode } from "../lib/i18n/types";

const themes: { id: ThemeMode; icon: typeof Sun; labelKey: "themeLight" | "themeDark" | "themeAuto" }[] = [
  { id: "light", icon: Sun, labelKey: "themeLight" },
  { id: "dark", icon: Moon, labelKey: "themeDark" },
  { id: "auto", icon: Monitor, labelKey: "themeAuto" },
];

export function PreferencesMenu() {
  const { locale, theme, t, setLocale, setTheme } = useSitePreferences();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const touchedRef = useRef({ locale: false, theme: false });

  useEffect(() => {
    if (open) touchedRef.current = { locale: false, theme: false };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleLocale = (id: Locale) => {
    if (id === locale) return;
    setLocale(id);
    if (touchedRef.current.theme) {
      setOpen(false);
      return;
    }
    touchedRef.current.locale = true;
  };

  const handleTheme = (id: ThemeMode) => {
    if (id === theme) return;
    setTheme(id);
    if (touchedRef.current.locale) {
      setOpen(false);
      return;
    }
    touchedRef.current.theme = true;
  };

  const rowBtn =
    "w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-xs font-semibold transition-colors duration-150";
  const rowIdle = "text-[#3E4B62] hover:bg-[#15233B]/6 hover:text-[#15233B]";
  const rowActive = "bg-[#15233B]/8 text-[#15233B]";

  const ThemeIcon = themes.find((th) => th.id === theme)?.icon ?? Sun;

  const locales: { id: Locale; label: string; name: string }[] = [
    { id: "uz", label: "UZ", name: t.footer.localeUz },
    { id: "en", label: "EN", name: t.footer.localeEn },
    { id: "ru", label: "RU", name: t.footer.localeRu },
  ];

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${t.footer.language}, ${t.footer.theme}`}
        className={`relative w-9 h-9 rounded-full flex items-center justify-center text-[#3E4B62] hover:text-[#15233B] border border-[#15233B]/10 transition-all duration-200 ${
          open ? "bg-[#15233B]/12 text-[#15233B]" : "bg-[#15233B]/5 hover:bg-[#15233B]/10"
        }`}
      >
        <Languages className="w-[18px] h-[18px]" strokeWidth={2} />
        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white border border-[#15233B]/12 flex items-center justify-center shadow-sm">
          <ThemeIcon className="w-2.5 h-2.5 text-[#15233B]" strokeWidth={2.2} />
        </span>
      </button>

      <div
        className={`absolute right-0 top-[calc(100%+8px)] z-[60] w-[min(100vw-2rem,12.5rem)] origin-top-right transition-all duration-200 ease-out ${
          open
            ? "opacity-100 visible scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 invisible scale-95 -translate-y-1 pointer-events-none"
        }`}
        role="menu"
      >
        <div className="rounded-xl bg-white border border-[#15233B]/10 shadow-[0_12px_36px_-10px_rgba(21,35,59,0.24)] overflow-hidden">
          <div className="px-2.5 pt-2 pb-0.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#646F82] px-1 mb-0.5">
              {t.footer.language}
            </p>
            <div className="flex flex-col gap-px">
              {locales.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  role="menuitemradio"
                  aria-checked={locale === l.id}
                  onClick={() => handleLocale(l.id)}
                  className={`${rowBtn} ${locale === l.id ? rowActive : rowIdle}`}
                >
                  <span className="w-6 text-[10px] font-extrabold text-[#15233B]/70">{l.label}</span>
                  <span className="flex-1">{l.name}</span>
                  {locale === l.id && <Check className="w-3.5 h-3.5 text-[#e83848] shrink-0" strokeWidth={2.5} />}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-2.5 my-1.5 h-px bg-[#15233B]/8" />

          <div className="px-2.5 pb-2 pt-0.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#646F82] px-1 mb-0.5">
              {t.footer.theme}
            </p>
            <div className="flex flex-col gap-px">
              {themes.map((th) => {
                const Icon = th.icon;
                return (
                  <button
                    key={th.id}
                    type="button"
                    role="menuitemradio"
                    aria-checked={theme === th.id}
                    onClick={() => handleTheme(th.id)}
                    className={`${rowBtn} ${theme === th.id ? rowActive : rowIdle}`}
                  >
                    <span className="w-6 flex justify-center">
                      <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    </span>
                    <span className="flex-1">{t.footer[th.labelKey]}</span>
                    {theme === th.id && <Check className="w-3.5 h-3.5 text-[#e83848] shrink-0" strokeWidth={2.5} />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
