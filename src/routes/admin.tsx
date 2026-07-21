import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { BrandLogo } from "../components/BrandLogo";
import {
  auth,
  isInquiryLead,
  leadKindLabel,
  leadsStore,
  themeStore,
  type Lead,
  type LeadStatus,
} from "../lib/store";
import { flagEmoji, countryName } from "../lib/country";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin panel — France TCF" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminPage,
});

/* ───── Status meta ───── */
const STATUS: Record<LeadStatus, { label: string; cls: string; dot: string }> = {
  yangi: { label: "Yangi", cls: "bg-blue-50 text-blue-700 border-blue-200", dot: "bg-blue-500" },
  aloqa: { label: "Telefonda gaplashildi", cls: "bg-amber-50 text-amber-700 border-amber-200", dot: "bg-amber-500" },
  kelmoqchi: { label: "Kelmoqchi", cls: "bg-violet-50 text-violet-700 border-violet-200", dot: "bg-violet-500" },
  qayta: { label: "Qayta bog'lanaman", cls: "bg-orange-50 text-orange-700 border-orange-200", dot: "bg-orange-500" },
  belgilangan: { label: "Belgilangan kun", cls: "bg-cyan-50 text-cyan-700 border-cyan-200", dot: "bg-cyan-500" },
  yozildi: { label: "Yozildi", cls: "bg-emerald-50 text-emerald-700 border-emerald-200", dot: "bg-emerald-500" },
  rad: { label: "Rad etildi", cls: "bg-gray-100 text-gray-500 border-gray-200", dot: "bg-gray-400" },
};
const STATUS_KEYS = Object.keys(STATUS) as LeadStatus[];

/* ───── Sidebar bo'limlari ───── */
type Section = "all" | "register" | "inquiry" | "checked" | "unchecked" | "due" | LeadStatus;

const SECTIONS: { key: Section; label: string; icon: string }[] = [
  { key: "all", label: "Barcha arizalar", icon: "📋" },
  { key: "register", label: "Ro'yxatdan o'tganlar", icon: "✍️" },
  { key: "inquiry", label: "Ma'lumot olish", icon: "💬" },
  { key: "yangi", label: "Yangi arizalar", icon: "🆕" },
  { key: "unchecked", label: "Tekshirilmaganlar", icon: "⏳" },
  { key: "checked", label: "Tekshirilganlar", icon: "✅" },
  { key: "aloqa", label: "Telefonda gaplashilganlar", icon: "📞" },
  { key: "kelmoqchi", label: "Kelmoqchi bo'lganlar", icon: "🚶" },
  { key: "qayta", label: "Qayta bog'lanaman deganlar", icon: "🔁" },
  { key: "belgilangan", label: "Belgilangan kun", icon: "📅" },
  { key: "due", label: "Muddati kelganlar", icon: "🔔" },
  { key: "yozildi", label: "Yozilganlar", icon: "🎓" },
  { key: "rad", label: "Rad etilganlar", icon: "🚫" },
];

type SortKey = "new" | "old" | "checked" | "name" | "country" | "daraja";

function AdminPage() {
  const [logged, setLogged] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setLogged(auth.isLoggedIn());
    setTheme(themeStore.get());
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    themeStore.set(next);
  };

  if (!logged)
    return (
      <div className={`admin-root ${theme}`}>
        <LoginScreen onSuccess={() => setLogged(true)} theme={theme} toggleTheme={toggleTheme} />
      </div>
    );

  return (
    <div className={`admin-root ${theme}`}>
      <Dashboard onLogout={() => setLogged(false)} theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

/* ───── Tema tugmasi ───── */
function ThemeToggle({ theme, toggle, variant = "light" }: { theme: "light" | "dark"; toggle: () => void; variant?: "light" | "dark" }) {
  const onDark = variant === "dark";
  return (
    <button
      onClick={toggle}
      aria-label="Rejimni almashtirish"
      className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all ${onDark
        ? "border border-white/15 text-white/80 hover:bg-white/10"
        : "border border-[var(--a-border-strong)] text-[var(--a-text-soft)] hover:bg-[var(--a-surface-2)]"
        }`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

/* ═══════════ LOGIN ═══════════ */
function LoginScreen({
  onSuccess,
  theme,
  toggleTheme,
}: {
  onSuccess: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.login(password)) onSuccess();
    else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1422] px-4 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-[#e83848]/25 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#E0A526]/15 blur-[140px] animate-float" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="absolute top-5 right-5">
        <ThemeToggle theme={theme} toggle={toggleTheme} variant="dark" />
      </div>

      <form
        onSubmit={submit}
        className="relative w-full max-w-md bg-[var(--a-surface)] backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] border border-[var(--a-border)]"
      >
        <div className="flex flex-col items-center mb-8">
          <BrandLogo size="md" className="mb-5" />
          <h1 className="font-['Syne'] font-extrabold text-2xl text-[var(--a-text)]">Admin panel</h1>
          <p className="text-[var(--a-text-muted)] text-sm mt-1">France TCF · Boshqaruv tizimi</p>
        </div>

        <label className="block text-[var(--a-text-soft)] text-xs font-bold tracking-wider uppercase mb-2.5">
          Maxfiy parol
        </label>
        <div className="relative">
          <input
            type={show ? "text" : "password"}
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            placeholder="••••••••"
            className={`w-full bg-[var(--a-surface-2)] border rounded-2xl pl-4 pr-12 py-4 text-[var(--a-text)] text-base outline-none transition-all focus:ring-4 ${error
              ? "border-[#e83848] focus:ring-[#e83848]/10 animate-shake"
              : "border-[var(--a-border-strong)] focus:border-[#e83848] focus:ring-[#e83848]/10"
              }`}
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--a-text-muted)] hover:text-[var(--a-text)] text-lg"
            aria-label="Parolni ko'rsatish"
          >
            {show ? "🙈" : "👁"}
          </button>
        </div>
        {error && <p className="text-[#e83848] text-xs mt-2.5 font-medium">Parol noto'g'ri. Qayta urinib ko'ring.</p>}

        <button
          type="submit"
          className="w-full mt-6 bg-[#e83848] hover:bg-[#e84858] text-white font-bold py-4 rounded-2xl transition-all hover:-translate-y-0.5 shadow-[0_14px_34px_-10px_rgba(232,56,72,0.6)]"
        >
          Kirish →
        </button>

        <a href="/" className="no-underline block text-center text-[var(--a-text-muted)] hover:text-[#e83848] text-sm font-semibold mt-5 transition-colors">
          ← Saytga qaytish
        </a>
      </form>
    </div>
  );
}

/* ═══════════ DASHBOARD ═══════════ */
function Dashboard({
  onLogout,
  theme,
  toggleTheme,
}: {
  onLogout: () => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
}) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [section, setSection] = useState<Section>("all");
  const [sort, setSort] = useState<SortKey>("new");
  const [query, setQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [remoteHealth, setRemoteHealth] = useState<{
    ok: boolean;
    message: string;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;
    let initialDone = false;

    const sync = async (mode: "initial" | "poll" = "poll") => {
      if (mode === "initial") setLoading(true);
      else if (initialDone) setRefreshing(true);
      try {
        const next = await leadsStore.all();
        if (!cancelled) setLeads(next);
      } catch (e) {
        console.error(e);
      } finally {
        if (!cancelled) {
          if (mode === "initial") {
            setLoading(false);
            initialDone = true;
          }
          setRefreshing(false);
        }
      }
    };

    sync("initial");
    leadsStore.checkRemoteHealth().then((h) => {
      if (!cancelled) setRemoteHealth({ ok: h.ok, message: h.message });
    });

    const onEvent = () => {
      void sync("poll");
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") void sync("poll");
    };
    window.addEventListener("leads-updated", onEvent);
    window.addEventListener("storage", onEvent);
    document.addEventListener("visibilitychange", onVisible);
    const poll = window.setInterval(() => {
      void sync("poll");
    }, 2500);
    const healthPoll = window.setInterval(() => {
      leadsStore.checkRemoteHealth().then((h) => {
        if (!cancelled) setRemoteHealth({ ok: h.ok, message: h.message });
      });
    }, 60_000);

    return () => {
      cancelled = true;
      window.removeEventListener("leads-updated", onEvent);
      window.removeEventListener("storage", onEvent);
      document.removeEventListener("visibilitychange", onVisible);
      window.clearInterval(poll);
      window.clearInterval(healthPoll);
    };
  }, []);

  const todayStr = new Date().toISOString().slice(0, 10);

  const counts = useMemo(() => {
    const c: Record<string, number> = {
      all: leads.length,
      register: leads.filter((l) => !isInquiryLead(l)).length,
      inquiry: leads.filter((l) => isInquiryLead(l)).length,
      checked: leads.filter((l) => l.checked).length,
      unchecked: leads.filter((l) => !l.checked).length,
      due: leads.filter((l) => l.scheduledDate && l.scheduledDate <= todayStr && l.status !== "yozildi" && l.status !== "rad").length,
    };
    STATUS_KEYS.forEach((s) => (c[s] = leads.filter((l) => l.status === s).length));
    return c;
  }, [leads, todayStr]);

  const list = useMemo(() => {
    let arr = leads.filter((l) => {
      if (section === "all") return true;
      if (section === "register") return !isInquiryLead(l);
      if (section === "inquiry") return isInquiryLead(l);
      if (section === "checked") return l.checked;
      if (section === "unchecked") return !l.checked;
      if (section === "due")
        return l.scheduledDate && l.scheduledDate <= todayStr && l.status !== "yozildi" && l.status !== "rad";
      return l.status === section;
    });

    const q = query.trim().toLowerCase();
    if (q) arr = arr.filter((l) => l.ism.toLowerCase().includes(q) || l.telefon.toLowerCase().includes(q));

    const sorters: Record<SortKey, (a: Lead, b: Lead) => number> = {
      new: (a, b) => b.createdAt - a.createdAt,
      old: (a, b) => a.createdAt - b.createdAt,
      checked: (a, b) => (b.checkedAt ?? 0) - (a.checkedAt ?? 0),
      name: (a, b) => a.ism.localeCompare(b.ism, "uz"),
      country: (a, b) => countryName(a.country).localeCompare(countryName(b.country), "uz"),
      daraja: (a, b) => a.daraja.localeCompare(b.daraja, "uz"),
    };
    return [...arr].sort(sorters[sort]);
  }, [leads, section, query, sort, todayStr]);

  const handleLogout = () => {
    auth.logout();
    onLogout();
  };

  const activeSection = SECTIONS.find((s) => s.key === section)!;

  return (
    <div className="min-h-screen bg-[var(--a-bg)] flex">
      {/* ───── SIDEBAR ───── */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-72 bg-[var(--a-sidebar)] text-white flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
      >
        <div className="px-5 h-16 flex items-center gap-2.5 border-b border-white/10 shrink-0">
          <div className="relative w-9 h-9 rounded-lg bg-[#e83848] flex items-center justify-center overflow-hidden">
            <span className="text-white font-['Syne'] font-extrabold text-base">F</span>
            <div className="absolute -right-1 -bottom-1 w-2.5 h-2.5 bg-[#E0A526] rounded-tl-md" />
          </div>
          <div>
            <div className="font-['Syne'] font-extrabold leading-none">France TCF</div>
            <div className="text-white/50 text-[11px]">Admin panel</div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
          {SECTIONS.map((s) => {
            const active = section === s.key;
            const count = counts[s.key] ?? 0;
            const showKindDivider = s.key === "register";
            const showStatusDivider = s.key === "yangi";
            return (
              <div key={s.key}>
                {showKindDivider && (
                  <div className="px-3.5 pt-2 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-white/35">
                    Ariza turi
                  </div>
                )}
                {showStatusDivider && (
                  <div className="px-3.5 pt-3 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-white/35">
                    Holat
                  </div>
                )}
                <button
                  onClick={() => {
                    setSection(s.key);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all text-left ${active ? "bg-[#e83848] text-white shadow-[0_8px_20px_-8px_rgba(232,56,72,0.7)]" : "text-white/70 hover:bg-white/8 hover:text-white"
                    }`}
                >
                  <span className="text-base shrink-0">{s.icon}</span>
                  <span className="flex-1 leading-tight">{s.label}</span>
                  {count > 0 && (
                    <span className={`shrink-0 text-[11px] font-bold px-2 py-0.5 rounded-full ${active ? "bg-white/25" : "bg-white/10 text-white/70"}`}>
                      {count}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        <div className="p-3 border-t border-white/10 shrink-0 flex flex-col gap-2">
          <a
            href="/"
            onClick={() => auth.logout()}
            className="no-underline text-white/60 hover:text-white text-sm font-semibold px-3.5 py-2 rounded-xl hover:bg-white/8 transition-all"
          >
            ← Saytga qaytish
          </a>
          <button
            onClick={handleLogout}
            className="text-left text-white/60 hover:text-white text-sm font-semibold px-3.5 py-2 rounded-xl hover:bg-[#e83848] transition-all"
          >
            ⏻ Tizimdan chiqish
          </button>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ───── MAIN ───── */}
      <div className="flex-1 min-w-0">
        <header className="sticky top-0 z-20 bg-[var(--a-topbar)] backdrop-blur-xl border-b border-[var(--a-border)]">
          <div className="px-4 sm:px-6 h-16 flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-10 h-10 rounded-xl border border-[var(--a-border-strong)] flex items-center justify-center text-[var(--a-text)]"
              aria-label="Menyu"
            >
              ☰
            </button>
            <div className="min-w-0">
              <h1 className="font-['Syne'] font-extrabold text-lg sm:text-xl text-[var(--a-text)] truncate flex items-center gap-2">
                <span>{activeSection.icon}</span> {activeSection.label}
              </h1>
              <p className="text-[var(--a-text-muted)] text-xs flex items-center gap-2">
                {loading ? (
                  <>
                    <span className="inline-block w-3 h-3 rounded-full border-2 border-[#e83848] border-t-transparent animate-spin" />
                    Arizalar yuklanmoqda...
                  </>
                ) : (
                  <>
                    {list.length} ta ariza
                    {refreshing && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-[var(--a-text-muted)]">
                        <span className="inline-block w-2.5 h-2.5 rounded-full border-2 border-[#e83848]/70 border-t-transparent animate-spin" />
                        yangilanmoqda
                      </span>
                    )}
                  </>
                )}
              </p>
            </div>

            <div className="ml-auto flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="🔍 Qidirish..."
                className="hidden sm:block bg-[var(--a-surface-2)] border border-[var(--a-border-strong)] focus:border-[#e83848] focus:ring-4 focus:ring-[#e83848]/10 rounded-xl px-4 py-2.5 text-sm text-[var(--a-text)] outline-none transition-all w-40 lg:w-52"
              />
              <ThemeToggle theme={theme} toggle={toggleTheme} />
            </div>
          </div>

          <div className="px-4 sm:px-6 pt-4">
            {remoteHealth && !remoteHealth.ok && (
              <div className="mb-3 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-800 dark:text-amber-200 text-xs sm:text-sm leading-relaxed">
                <strong>Diqqat:</strong> {remoteHealth.message}
              </div>
            )}
            {remoteHealth?.ok && (
              <div className="mb-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm leading-relaxed">
                {remoteHealth.message}
              </div>
            )}
          </div>

          <div className="px-4 sm:px-6 pb-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔍 Ism yoki telefon..."
              className="sm:hidden bg-[var(--a-surface-2)] border border-[var(--a-border-strong)] rounded-xl px-3 py-2 text-sm text-[var(--a-text)] outline-none w-full mb-1"
            />
            <span className="text-[var(--a-text-muted)] text-xs font-semibold shrink-0 hidden sm:inline">Saralash:</span>
            {([
              ["new", "Oxirgi qo'shilgan"],
              ["old", "Eng eski"],
              ["checked", "Oxirgi tekshirilgan"],
              ["name", "Ism (A–Z)"],
              ["country", "Davlat"],
              ["daraja", "Daraja"],
            ] as [SortKey, string][]).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSort(key)}
                className={`shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all ${sort === key
                  ? "bg-[#e83848] text-white border-[#e83848]"
                  : "bg-[var(--a-surface)] border-[var(--a-border-strong)] text-[var(--a-text-soft)] hover:border-[#e83848]/50"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        {/* Stats */}
        <div className="px-4 sm:px-6 pt-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { label: "Jami arizalar", value: counts.all, accent: "text-[var(--a-text)]" },
              { label: "Ro'yxatdan o'tganlar", value: counts.register, accent: "text-[#e83848]" },
              { label: "Ma'lumot olish", value: counts.inquiry, accent: "text-violet-500" },
              { label: "Tekshirilmagan", value: counts.unchecked, accent: "text-amber-500" },
            ].map((s) => (
              <div key={s.label} className="bg-[var(--a-surface)] rounded-2xl border border-[var(--a-border)] p-4 sm:p-5">
                <div className={`font-['Syne'] font-extrabold text-2xl sm:text-3xl ${s.accent}`}>
                  {loading ? "—" : s.value}
                </div>
                <div className="text-[var(--a-text-muted)] text-xs sm:text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* List */}
        <main className="px-4 sm:px-6 py-6">
          {loading ? (
            <div className="bg-[var(--a-surface)] rounded-2xl border border-[var(--a-border)] p-10 sm:p-16 text-center">
              <div className="mx-auto mb-4 w-12 h-12 rounded-full border-[3px] border-[#e83848]/25 border-t-[#e83848] animate-spin" />
              <p className="font-['Syne'] font-bold text-[var(--a-text)] text-base sm:text-lg mb-1">
                Arizalar yuklanmoqda
              </p>
              <p className="text-[var(--a-text-muted)] text-sm max-w-sm mx-auto">
                Serverdan ro‘yxatdan o‘tganlar olinmoqda. Iltimos, biroz kuting...
              </p>
              <div className="mt-8 space-y-3 max-w-2xl mx-auto">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="h-20 rounded-xl bg-[var(--a-surface-2)] border border-[var(--a-border)] animate-pulse"
                    style={{ animationDelay: `${i * 120}ms` }}
                  />
                ))}
              </div>
            </div>
          ) : list.length === 0 ? (
            <div className="bg-[var(--a-surface)] rounded-2xl border border-dashed border-[var(--a-border-strong)] p-16 text-center">
              <div className="text-5xl mb-3 opacity-40">📭</div>
              <p className="text-[var(--a-text-muted)] text-sm">
                {leads.length === 0 ? "Hozircha arizalar yo'q." : "Bu bo'limda ariza topilmadi."}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {list.map((lead) => (
                <LeadCard key={lead.id} lead={lead} todayStr={todayStr} />
              ))}
            </div>
          )}

          {leads.length > 0 && (
            <button
              onClick={() => {
                if (confirm("Barcha arizalarni o'chirishni tasdiqlaysizmi? Bu amalni qaytarib bo'lmaydi.")) {
                  leadsStore.clearAll();
                }
              }}
              className="mt-8 text-[var(--a-text-muted)] hover:text-[#e83848] text-xs font-semibold transition-colors"
            >
              🗑 Barcha arizalarni tozalash
            </button>
          )}
        </main>
      </div>
    </div>
  );
}

/* ═══════════ LEAD CARD ═══════════ */
function fmt(ts: number | null): string {
  if (!ts) return "—";
  return new Date(ts).toLocaleString("uz", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function LeadCard({ lead, todayStr }: { lead: Lead; todayStr: string }) {
  const [menu, setMenu] = useState(false);
  const meta = STATUS[lead.status];
  const inquiry = isInquiryLead(lead);
  const kind = leadKindLabel(lead);
  const isDue = lead.scheduledDate && lead.scheduledDate <= todayStr && lead.status !== "yozildi" && lead.status !== "rad";

  return (
    <div className={`bg-[var(--a-surface)] rounded-2xl border p-5 transition-all hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.25)] ${isDue ? "border-[#e83848]/50 ring-1 ring-[#e83848]/25" : "border-[var(--a-border)]"}`}>
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xl" title={countryName(lead.country)}>{flagEmoji(lead.country)}</span>
            <h3 className="font-['Syne'] font-bold text-lg text-[var(--a-text)]">{lead.ism}</h3>
            <span
              className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                inquiry
                  ? "bg-violet-50 text-violet-700 border-violet-200"
                  : "bg-rose-50 text-rose-700 border-rose-200"
              }`}
            >
              {inquiry ? "💬" : "✍️"} {kind}
            </span>
            <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${meta.cls}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} /> {meta.label}
            </span>
            {lead.checked ? (
              <span className="text-[11px] font-bold text-emerald-500">✓ tekshirilgan</span>
            ) : (
              <span className="text-[11px] font-bold text-amber-500">⏳ tekshirilmagan</span>
            )}
            {isDue && <span className="text-[11px] font-bold text-[#f25c5c] animate-pulse">🔔 muddati keldi</span>}
          </div>
          <div className="text-[var(--a-text-muted)] text-xs mt-1">{countryName(lead.country)}</div>
        </div>
        <a href={`tel:${lead.telefon}`} className="no-underline font-['Syne'] font-bold text-[#f25c5c] text-base hover:underline">
          📞 {lead.telefon}
        </a>
      </div>

      {/* Telegram username */}
      {lead.telegram && (
        <div className="mb-3">
          <a
            href={`https://t.me/${lead.telegram}`}
            target="_blank"
            rel="noreferrer"
            className="no-underline inline-flex items-center gap-1.5 text-sm font-semibold text-[#3ba9dd] hover:underline"
          >
            ✈️ @{lead.telegram}
          </a>
        </div>
      )}

      {/* Body */}
      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-4 text-sm">
        {!inquiry && (
          <div className="flex gap-2"><span className="text-[var(--a-text-muted)]">📚 Format:</span><span className="text-[var(--a-text)] font-medium">{lead.format}</span></div>
        )}
        <div className="flex gap-2"><span className="text-[var(--a-text-muted)]">🎯 Daraja:</span><span className="text-[var(--a-text)] font-medium">{lead.daraja}</span></div>
        {lead.xabar && lead.xabar !== "—" && (
          <div className="flex gap-2 sm:col-span-2"><span className="text-[var(--a-text-muted)] shrink-0">{inquiry ? "📱 Zaxira:" : "💬 Xabar:"}</span><span className="text-[var(--a-text-soft)]">{lead.xabar.replace(/^Zaxira telefon:\s*/i, "").replace(/^Backup phone:\s*/i, "").replace(/^Резервный телефон:\s*/i, "")}</span></div>
        )}
        {lead.scheduledDate && (
          <div className="flex gap-2"><span className="text-[var(--a-text-muted)]">📅 Belgilangan kun:</span><span className="text-[var(--a-text)] font-semibold">{lead.scheduledDate}</span></div>
        )}
      </div>

      {/* Timestamps */}
      <div className="flex flex-wrap gap-x-5 gap-y-1 text-[11px] text-[var(--a-text-muted)] mb-4 pb-4 border-b border-[var(--a-border)]">
        <span>🕐 Qo'shilgan: <b className="text-[var(--a-text-soft)]">{fmt(lead.createdAt)}</b></span>
        <span>🔍 Tekshirilgan: <b className="text-[var(--a-text-soft)]">{fmt(lead.checkedAt)}</b></span>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2">
        <a href={`tel:${lead.telefon}`} className="no-underline text-xs font-bold text-white bg-[#22a45d] hover:bg-[#1c8a4e] px-3.5 py-2 rounded-lg transition-colors">
          📞 Qo'ng'iroq
        </a>
        <a
          href={lead.telegram ? `https://t.me/${lead.telegram}` : "https://t.me/France_TCF"}
          target="_blank"
          rel="noreferrer"
          className="no-underline text-xs font-bold text-white bg-[#229ED9] hover:bg-[#1b8cc2] px-3.5 py-2 rounded-lg transition-colors"
        >
          ✈️ Telegram
        </a>
        <button
          onClick={() => leadsStore.toggleChecked(lead.id, lead.checked)}
          className={`text-xs font-bold px-3.5 py-2 rounded-lg border transition-all ${lead.checked ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-[var(--a-surface)] border-[var(--a-border-strong)] text-[var(--a-text-soft)] hover:border-emerald-400"}`}
        >
          {lead.checked ? "✓ Tekshirildi" : "Tekshirildi deb belgilash"}
        </button>

        <label className="text-xs font-bold text-[var(--a-text-soft)] flex items-center gap-1.5 bg-[var(--a-surface)] border border-[var(--a-border-strong)] px-3 py-1.5 rounded-lg cursor-pointer">
          📅
          <input
            type="date"
            value={lead.scheduledDate ?? ""}
            onChange={(e) => leadsStore.setScheduled(lead.id, e.target.value || null)}
            className="bg-transparent outline-none text-xs text-[var(--a-text)] cursor-pointer"
          />
        </label>

        <div className="relative ml-auto">
          <button
            onClick={() => setMenu((m) => !m)}
            className="text-xs font-bold text-white bg-[#15233B] hover:bg-[#0b1422] px-3.5 py-2 rounded-lg transition-colors"
          >
            Kategoriyaga ko'chirish ▾
          </button>
          {menu && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenu(false)} />
              <div className="absolute right-0 mt-2 z-20 w-56 bg-[var(--a-surface)] rounded-xl shadow-[0_16px_40px_-12px_rgba(0,0,0,0.4)] border border-[var(--a-border-strong)] p-1.5">
                {STATUS_KEYS.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      leadsStore.setStatus(lead.id, s);
                      setMenu(false);
                    }}
                    className={`w-full flex items-center gap-2.5 text-left text-sm font-medium px-3 py-2 rounded-lg transition-colors text-[var(--a-text)] ${lead.status === s ? "bg-[var(--a-surface-2)]" : "hover:bg-[var(--a-surface-2)]"}`}
                  >
                    <span className={`w-2 h-2 rounded-full ${STATUS[s].dot}`} />
                    {STATUS[s].label}
                    {lead.status === s && <span className="ml-auto text-[#e83848]">✓</span>}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <button
          onClick={() => {
            if (!confirm("Bu arizani o'chirasizmi?")) return;
            void leadsStore.remove(lead.id);
          }}
          className="text-xs font-bold text-[var(--a-text-muted)] hover:text-[#e83848] px-2 py-2 transition-colors"
        >
          🗑
        </button>
      </div>
    </div>
  );
}
