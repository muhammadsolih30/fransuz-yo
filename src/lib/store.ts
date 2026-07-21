/**
 * Ma'lumot qatlami — Appwrite backend bilan (asosiy), Supabase (ixtiyoriy),
 * aks holda localStorage zaxira rejimida ishlaydi.
 *
 * Agar .env to'ldirilmagan bo'lsa, hammasi localStorage'da saqlanadi.
 */
import { supabase, isSupabaseEnabled } from "./supabase";
import {
  databases,
  isAppwriteEnabled,
  APPWRITE_DB,
  APPWRITE_LEADS,
  ID,
  Query,
} from "./appwrite";
import {
  proxyClearLeads,
  proxyCreateLead,
  proxyDeleteLead,
  proxyHealth,
  proxyListLeads,
  proxyPatchLead,
  shouldPreferLeadsProxy,
} from "./leads-proxy";

export type LeadStatus =
  | "yangi"
  | "aloqa"
  | "kelmoqchi"
  | "qayta"
  | "belgilangan"
  | "yozildi"
  | "rad";

export type Lead = {
  id: string;
  ism: string;
  telefon: string;
  telegram: string;
  country: string;
  format: string;
  daraja: string;
  xabar: string;
  status: LeadStatus;
  checked: boolean;
  scheduledDate: string | null;
  createdAt: number;
  checkedAt: number | null;
};

const LEADS_KEY = "france_tcf_leads";

/* ─────────────────────────────────────────────
   localStorage zaxira (fallback)
   ───────────────────────────────────────────── */
function lsRead(): Lead[] {
  try {
    const raw = localStorage.getItem(LEADS_KEY);
    return raw ? (JSON.parse(raw) as Lead[]) : [];
  } catch {
    return [];
  }
}
function lsWrite(leads: Lead[], opts?: { silent?: boolean }) {
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  if (!opts?.silent) {
    window.dispatchEvent(new Event("leads-updated"));
  }
}

/* ─────────────────────────────────────────────
   Supabase qator ↔ Lead konvertatsiyasi
   ───────────────────────────────────────────── */
type Row = {
  id: string;
  ism: string;
  telefon: string;
  telegram: string | null;
  country: string | null;
  format: string | null;
  daraja: string | null;
  xabar: string | null;
  status: LeadStatus;
  checked: boolean;
  scheduled_date: string | null;
  created_at: string;
  checked_at: string | null;
};

function rowToLead(r: Row): Lead {
  return {
    id: r.id,
    ism: r.ism,
    telefon: r.telefon,
    telegram: r.telegram ?? "",
    country: r.country ?? "UZ",
    format: r.format ?? "—",
    daraja: r.daraja ?? "—",
    xabar: r.xabar ?? "—",
    status: r.status,
    checked: r.checked,
    scheduledDate: r.scheduled_date,
    createdAt: new Date(r.created_at).getTime(),
    checkedAt: r.checked_at ? new Date(r.checked_at).getTime() : null,
  };
}

/* ─────────────────────────────────────────────
   Appwrite hujjat ↔ Lead konvertatsiyasi
   ───────────────────────────────────────────── */
type AwDoc = {
  $id: string;
  $createdAt: string;
  ism: string;
  telefon: string;
  telegram?: string;
  country?: string;
  format?: string;
  daraja?: string;
  xabar?: string;
  status: LeadStatus;
  scheduledDate?: string | null;
  checkedAt?: string | null;
};

function docToLead(d: AwDoc): Lead {
  return {
    id: d.$id,
    ism: d.ism,
    telefon: d.telefon,
    telegram: d.telegram ?? "",
    country: d.country ?? "UZ",
    format: d.format ?? "—",
    daraja: d.daraja ?? "—",
    xabar: d.xabar ?? "—",
    status: d.status,
    checked: !!d.checkedAt,
    scheduledDate: d.scheduledDate ?? null,
    createdAt: new Date(d.$createdAt).getTime(),
    checkedAt: d.checkedAt ? new Date(d.checkedAt).getTime() : null,
  };
}

/* ─────────────────────────────────────────────
   Public API (async)
   ───────────────────────────────────────────── */

function pushLocal(lead: Lead): void {
  const leads = lsRead();
  leads.push(lead);
  lsWrite(leads);
}

function upsertLocal(lead: Lead): void {
  const leads = lsRead().filter((l) => l.id !== lead.id);
  leads.push(lead);
  lsWrite(leads);
}

export const leadsStore = {
  /** Backend ulanganmi (Appwrite/Supabase yoki production proxy) */
  get hasRemoteBackend(): boolean {
    return isAppwriteEnabled || isSupabaseEnabled || shouldPreferLeadsProxy();
  },

  /** Serverga ulanish holati (admin banner uchun) */
  async checkRemoteHealth(): Promise<{
    ok: boolean;
    provider: "appwrite" | "supabase" | "proxy" | "none";
    message: string;
  }> {
    if (shouldPreferLeadsProxy()) {
      const ok = await proxyHealth();
      return ok
        ? {
            ok: true,
            provider: "proxy",
            message: "Server (Neon) ulangan — arizalar barcha qurilmalarda ko‘rinadi.",
          }
        : {
            ok: false,
            provider: "proxy",
            message:
              "Neon/API ulanmagan. Vercel’da DATABASE_URL (Neon) qo‘ying va sql/leads.sql ni ishga tushiring — aks holda arizalar faqat shu brauzerda qoladi.",
          };
    }

    if (isAppwriteEnabled && databases) {
      try {
        await databases.listDocuments(APPWRITE_DB!, APPWRITE_LEADS!, [Query.limit(1)]);
        return { ok: true, provider: "appwrite", message: "Appwrite ulangan — arizalar barcha qurilmalarda ko‘rinadi." };
      } catch (e) {
        const raw = e instanceof Error ? e.message : String(e);
        const paused = /paused|inactivity/i.test(raw);
        const badOrigin = /invalid origin|origin/i.test(raw);
        return {
          ok: false,
          provider: "appwrite",
          message: paused
            ? "Appwrite loyihasi pauzada (inactivity). cloud.appwrite.io → Restore qiling, aks holda arizalar faqat shu brauzerda qoladi."
            : badOrigin
              ? "Appwrite CORS: domen ro‘yxatdan o‘tmagan. Console → Platforms ga fransuz-yo.uz va www.fransuz-yo.uz qo‘shing."
              : `Appwrite xatosi: ${raw}. Arizalar hozircha faqat shu brauzerda saqlanadi.`,
        };
      }
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.from("leads").select("id").limit(1);
      if (error) {
        return {
          ok: false,
          provider: "supabase",
          message: `Supabase xatosi: ${error.message}. Arizalar hozircha faqat shu brauzerda saqlanadi.`,
        };
      }
      return { ok: true, provider: "supabase", message: "Supabase ulangan — arizalar barcha qurilmalarda ko‘rinadi." };
    }
    return {
      ok: false,
      provider: "none",
      message:
        "Remote backend yo‘q. Vercel’da VITE_APPWRITE_* sozlang yoki Appwrite loyihasini yoqing — aks holda har qurilma o‘z localStorageida saqlaydi.",
    };
  },

  async all(): Promise<Lead[]> {
    if (shouldPreferLeadsProxy()) {
      try {
        const remote = (await proxyListLeads()) as Lead[];
        // Server — yagona manba: o'chirilganlar localStorage'dan qayta chiqmasin
        const sorted = [...remote].sort((a, b) => b.createdAt - a.createdAt);
        lsWrite(sorted, { silent: true });
        return sorted;
      } catch (e) {
        console.error("Proxy all() xatosi:", e);
        throw e instanceof Error
          ? e
          : new Error("Serverdan arizalar o‘qilmadi. Internet / Neon holatini tekshiring.");
      }
    }

    if (isAppwriteEnabled && databases) {
      try {
        const res = await databases.listDocuments(APPWRITE_DB!, APPWRITE_LEADS!, [
          Query.orderDesc("$createdAt"),
          Query.limit(1000),
        ]);
        const remote = (res.documents as unknown as AwDoc[]).map(docToLead);
        const sorted = [...remote].sort((a, b) => b.createdAt - a.createdAt);
        lsWrite(sorted, { silent: true });
        return sorted;
      } catch (e) {
        console.error("Appwrite all() xatosi, localStorage zaxira:", e);
        return lsRead().sort((a, b) => b.createdAt - a.createdAt);
      }
    }
    if (isSupabaseEnabled && supabase) {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Supabase all() xatosi, localStorage zaxira:", error.message);
        return lsRead().sort((a, b) => b.createdAt - a.createdAt);
      }
      const remote = (data as Row[]).map(rowToLead);
      const sorted = [...remote].sort((a, b) => b.createdAt - a.createdAt);
      lsWrite(sorted, { silent: true });
      return sorted;
    }
    return lsRead().sort((a, b) => b.createdAt - a.createdAt);
  },

  async add(data: {
    ism: string;
    telefon: string;
    telegram?: string;
    country?: string;
    format: string;
    daraja: string;
    xabar: string;
  }): Promise<void> {
    const base = {
      ism: data.ism,
      telefon: data.telefon,
      telegram: data.telegram || "",
      country: data.country || "UZ",
      format: data.format,
      daraja: data.daraja,
      xabar: data.xabar,
      status: "yangi" as LeadStatus,
      checked: false,
      scheduledDate: null as string | null,
      checkedAt: null as number | null,
    };

    if (shouldPreferLeadsProxy()) {
      try {
        const saved = (await proxyCreateLead({
          ism: base.ism,
          telefon: base.telefon,
          telegram: base.telegram,
          country: base.country,
          format: base.format,
          daraja: base.daraja,
          xabar: base.xabar,
        })) as Lead;
        upsertLocal(saved);
        return;
      } catch (e) {
        console.error("Proxy add() xatosi:", e);
        const raw = e instanceof Error ? e.message : String(e);
        throw new Error(
          raw ||
            "Ariza serverga yozilmadi. Internetni tekshiring yoki keyinroq qayta urinib ko‘ring.",
        );
      }
    }

    if (isAppwriteEnabled && databases) {
      try {
        const doc = await databases.createDocument(APPWRITE_DB!, APPWRITE_LEADS!, ID.unique(), {
          ism: base.ism,
          telefon: base.telefon,
          telegram: base.telegram,
          country: base.country,
          format: base.format,
          daraja: base.daraja,
          xabar: base.xabar,
          status: base.status,
        });
        const saved = docToLead(doc as unknown as AwDoc);
        upsertLocal(saved);
        return;
      } catch (e) {
        console.error("Appwrite add() xatosi:", e);
        // Qurilmada yo'qolmasin — local zaxira, lekin muvaffaqiyat deb o'tkazilmasin
        const lead: Lead = {
          id: crypto.randomUUID(),
          ...base,
          createdAt: Date.now(),
        };
        pushLocal(lead);
        const raw = e instanceof Error ? e.message : String(e);
        if (/paused|inactivity/i.test(raw)) {
          throw new Error(
            "Server pauzada (Appwrite). Ariza shu telefonda saqlandi, lekin admin boshqa qurilmada ko‘rmaydi. Appwrite’da Restore qiling.",
          );
        }
        if (/invalid origin|origin/i.test(raw)) {
          throw new Error(
            "Domen Appwrite’da ro‘yxatdan o‘tmagan (fransuz-yo.uz). Platforms ga qo‘shing yoki deploy yangilang.",
          );
        }
        throw new Error(
          "Ariza serverga yozilmadi. Internet/Appwrite sozlamalarini tekshiring. Hozircha faqat shu qurilmada saqlandi.",
        );
      }
    }

    if (isSupabaseEnabled && supabase) {
      try {
        const { data: row, error } = await supabase
          .from("leads")
          .insert({
            ism: base.ism,
            telefon: base.telefon,
            telegram: base.telegram,
            country: base.country,
            format: base.format,
            daraja: base.daraja,
            xabar: base.xabar,
            status: base.status,
            checked: false,
          })
          .select("*")
          .single();
        if (error) throw error;
        const saved = rowToLead(row as Row);
        upsertLocal(saved);
        return;
      } catch (e) {
        console.error("Supabase add() xatosi:", e);
        const lead: Lead = {
          id: crypto.randomUUID(),
          ...base,
          createdAt: Date.now(),
        };
        pushLocal(lead);
        throw new Error(
          "Ariza serverga yozilmadi. Hozircha faqat shu qurilmada saqlandi.",
        );
      }
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      ...base,
      createdAt: Date.now(),
    };
    pushLocal(lead);
  },

  async setStatus(id: string, status: LeadStatus): Promise<void> {
    if (shouldPreferLeadsProxy()) {
      try {
        await proxyPatchLead(id, { status });
      } catch (e) {
        console.error("Proxy setStatus() xatosi:", e);
      }
      lsWrite(lsRead().map((l) => (l.id === id ? { ...l, status } : l)));
      return;
    }
    if (isAppwriteEnabled && databases) {
      try {
        await databases.updateDocument(APPWRITE_DB!, APPWRITE_LEADS!, id, { status });
      } catch (e) {
        console.error("Appwrite setStatus() xatosi:", e);
      }
      lsWrite(lsRead().map((l) => (l.id === id ? { ...l, status } : l)));
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.from("leads").update({ status }).eq("id", id);
      if (error) console.error("Supabase setStatus() xatosi:", error.message);
      lsWrite(lsRead().map((l) => (l.id === id ? { ...l, status } : l)));
      return;
    }
    lsWrite(lsRead().map((l) => (l.id === id ? { ...l, status } : l)));
  },

  async toggleChecked(id: string, current: boolean): Promise<void> {
    const next = !current;
    const checkedAt = next ? new Date().toISOString() : null;
    if (shouldPreferLeadsProxy()) {
      try {
        await proxyPatchLead(id, { checkedAt: checkedAt ?? "" });
      } catch (e) {
        console.error("Proxy toggleChecked() xatosi:", e);
      }
      lsWrite(
        lsRead().map((l) =>
          l.id === id ? { ...l, checked: next, checkedAt: next ? Date.now() : null } : l,
        ),
      );
      return;
    }
    if (isAppwriteEnabled && databases) {
      try {
        await databases.updateDocument(APPWRITE_DB!, APPWRITE_LEADS!, id, {
          checkedAt: checkedAt ?? "",
        });
      } catch (e) {
        console.error("Appwrite toggleChecked() xatosi:", e);
      }
      lsWrite(
        lsRead().map((l) =>
          l.id === id ? { ...l, checked: next, checkedAt: next ? Date.now() : null } : l,
        ),
      );
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase
        .from("leads")
        .update({ checked: next, checked_at: checkedAt })
        .eq("id", id);
      if (error) console.error("Supabase toggleChecked() xatosi:", error.message);
      lsWrite(
        lsRead().map((l) =>
          l.id === id ? { ...l, checked: next, checkedAt: next ? Date.now() : null } : l,
        ),
      );
      return;
    }
    lsWrite(
      lsRead().map((l) =>
        l.id === id ? { ...l, checked: next, checkedAt: next ? Date.now() : l.checkedAt } : l,
      ),
    );
  },

  async setScheduled(id: string, date: string | null): Promise<void> {
    const status: LeadStatus = date ? "belgilangan" : "aloqa";
    if (shouldPreferLeadsProxy()) {
      try {
        await proxyPatchLead(id, { scheduledDate: date, status });
      } catch (e) {
        console.error("Proxy setScheduled() xatosi:", e);
      }
      lsWrite(lsRead().map((l) => (l.id === id ? { ...l, scheduledDate: date, status } : l)));
      return;
    }
    if (isAppwriteEnabled && databases) {
      try {
        await databases.updateDocument(APPWRITE_DB!, APPWRITE_LEADS!, id, {
          scheduledDate: date,
          status,
        });
      } catch (e) {
        console.error("Appwrite setScheduled() xatosi:", e);
      }
      lsWrite(lsRead().map((l) => (l.id === id ? { ...l, scheduledDate: date, status } : l)));
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase
        .from("leads")
        .update({ scheduled_date: date, status })
        .eq("id", id);
      if (error) console.error("Supabase setScheduled() xatosi:", error.message);
      lsWrite(lsRead().map((l) => (l.id === id ? { ...l, scheduledDate: date, status } : l)));
      return;
    }
    lsWrite(lsRead().map((l) => (l.id === id ? { ...l, scheduledDate: date, status } : l)));
  },

  async remove(id: string): Promise<void> {
    if (shouldPreferLeadsProxy()) {
      try {
        await proxyDeleteLead(id);
      } catch (e) {
        console.error("Proxy remove() xatosi:", e);
        throw e instanceof Error ? e : new Error("O‘chirish serverda muvaffaqiyatsiz.");
      }
      lsWrite(lsRead().filter((l) => l.id !== id));
      return;
    }
    if (isAppwriteEnabled && databases) {
      try {
        await databases.deleteDocument(APPWRITE_DB!, APPWRITE_LEADS!, id);
      } catch (e) {
        console.error("Appwrite remove() xatosi:", e);
      }
      lsWrite(lsRead().filter((l) => l.id !== id));
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.from("leads").delete().eq("id", id);
      if (error) console.error("Supabase remove() xatosi:", error.message);
      lsWrite(lsRead().filter((l) => l.id !== id));
      return;
    }
    lsWrite(lsRead().filter((l) => l.id !== id));
  },

  async clearAll(): Promise<void> {
    if (shouldPreferLeadsProxy()) {
      try {
        await proxyClearLeads();
      } catch (e) {
        console.error("Proxy clearAll() xatosi:", e);
      }
      lsWrite([]);
      return;
    }
    if (isAppwriteEnabled && databases) {
      try {
        const res = await databases.listDocuments(APPWRITE_DB!, APPWRITE_LEADS!, [
          Query.limit(1000),
        ]);
        await Promise.all(
          (res.documents as unknown as AwDoc[]).map((d) =>
            databases!.deleteDocument(APPWRITE_DB!, APPWRITE_LEADS!, d.$id),
          ),
        );
      } catch (e) {
        console.error("Appwrite clearAll() xatosi:", e);
      }
      lsWrite([]);
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.from("leads").delete().neq("id", "");
      if (error) console.error("Supabase clearAll() xatosi:", error.message);
      lsWrite([]);
      return;
    }
    lsWrite([]);
  },
};

/* ───── Admin auth (oddiy, sessiya) ───── */
const AUTH_KEY = "france_tcf_admin";
// DIQQAT: front-end himoya. Jiddiy xavfsizlik uchun Supabase Auth ishlatish mumkin.
const ADMIN_PASSWORD = "aliadmin2026";

export const auth = {
  login(password: string): boolean {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, "1");
      return true;
    }
    return false;
  },
  isLoggedIn(): boolean {
    return sessionStorage.getItem(AUTH_KEY) === "1";
  },
  logout() {
    sessionStorage.removeItem(AUTH_KEY);
  },
};

/* ───── Admin tema (light / dark) ───── */
const THEME_KEY = "france_tcf_admin_theme";

export const themeStore = {
  get(): "light" | "dark" {
    return (localStorage.getItem(THEME_KEY) as "light" | "dark") || "light";
  },
  set(theme: "light" | "dark") {
    localStorage.setItem(THEME_KEY, theme);
  },
};
