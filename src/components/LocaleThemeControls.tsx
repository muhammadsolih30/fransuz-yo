import { Monitor, Moon, Sun } from "lucide-react";
import { useSitePreferences } from "../contexts/SitePreferencesContext";
import type { Locale, ThemeMode } from "../lib/i18n/types";

const locales: { id: Locale; label: string }[] = [
  { id: "uz", label: "UZ" },
  { id: "en", label: "EN" },
  { id: "ru", label: "RU" },
];

const themes: { id: ThemeMode; icon: typeof Sun; labelKey: "themeLight" | "themeDark" | "themeAuto" }[] = [
  { id: "light", icon: Sun, labelKey: "themeLight" },
  { id: "dark", icon: Moon, labelKey: "themeDark" },
  { id: "auto", icon: Monitor, labelKey: "themeAuto" },
];

type Props = {
  variant?: "header" | "footer";
  ink?: string;
  inkFaint?: string;
};

export function LocaleThemeControls({
  variant = "footer",
  ink = "text-black hover:text-white",
  inkFaint = "text-black/45 hover:text-white",
}: Props) {
  const { locale, theme, t, setLocale, setTheme } = useSitePreferences();

  if (variant === "header") {
    const headerPill =
      "min-w-[2rem] h-7 px-2 rounded-lg text-[11px] font-bold transition-all duration-200";
    const headerActive = "bg-[#15233B] text-white shadow-sm";
    const headerIdle = "text-[#3E4B62] hover:text-[#15233B] hover:bg-[#15233B]/8";

    const themeBtn =
      "w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200";
    const themeActive = "bg-[#15233B] text-white shadow-sm";
    const themeIdle = "text-[#3E4B62] hover:text-[#15233B] hover:bg-[#15233B]/8";

    return (
      <div
        className="flex items-center gap-2 shrink-0"
        role="group"
        aria-label={`${t.footer.language}, ${t.footer.theme}`}
      >
        <div className="flex items-center gap-0.5 p-0.5 rounded-xl bg-[#15233B]/5 border border-[#15233B]/10">
          {locales.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLocale(l.id)}
              className={`${headerPill} ${locale === l.id ? headerActive : headerIdle}`}
              aria-pressed={locale === l.id}
              aria-label={l.label}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="hidden sm:block w-px h-5 bg-[#15233B]/12" aria-hidden />

        <div className="flex items-center gap-0.5 p-0.5 rounded-xl bg-[#15233B]/5 border border-[#15233B]/10">
          {themes.map((th) => {
            const Icon = th.icon;
            return (
              <button
                key={th.id}
                type="button"
                onClick={() => setTheme(th.id)}
                className={`${themeBtn} ${theme === th.id ? themeActive : themeIdle}`}
                aria-pressed={theme === th.id}
                title={t.footer[th.labelKey]}
                aria-label={t.footer[th.labelKey]}
              >
                <Icon className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const pill =
    "px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all duration-300 border footer-theme-pill";
  const activePill = "footer-theme-pill--active";
  const idlePill = "footer-theme-pill--idle";

  return (
    <div className="mt-6 pt-5 border-t footer-theme-divider space-y-4">
      <div>
        <p className="footer-ink-faint text-[10px] font-bold uppercase tracking-widest mb-2">{t.footer.language}</p>
        <div className="flex gap-1">
          {locales.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setLocale(l.id)}
              className={`${pill} ${locale === l.id ? activePill : idlePill}`}
              aria-pressed={locale === l.id}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="footer-ink-faint text-[10px] font-bold uppercase tracking-widest mb-2">{t.footer.theme}</p>
        <div className="flex gap-1">
          {themes.map((th) => {
            const Icon = th.icon;
            return (
              <button
                key={th.id}
                type="button"
                onClick={() => setTheme(th.id)}
                className={`${pill} flex items-center gap-1 ${theme === th.id ? activePill : idlePill}`}
                aria-pressed={theme === th.id}
                title={t.footer[th.labelKey]}
              >
                <Icon className="w-3 h-3" strokeWidth={2} />
                <span className="hidden sm:inline">{t.footer[th.labelKey]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
