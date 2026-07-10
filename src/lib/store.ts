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
function lsWrite(leads: Lead[]) {
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
  window.dispatchEvent(new Event("leads-updated"));
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
  /** Backend ulanganmi (Appwrite yoki Supabase) */
  get hasRemoteBackend(): boolean {
    return isAppwriteEnabled || isSupabaseEnabled;
  },

  async all(): Promise<Lead[]> {
    if (isAppwriteEnabled && databases) {
      try {
        const res = await databases.listDocuments(APPWRITE_DB!, APPWRITE_LEADS!, [
          Query.orderDesc("$createdAt"),
          Query.limit(1000),
        ]);
        const remote = (res.documents as unknown as AwDoc[]).map(docToLead);
        // Remote + local birlashtirish (zaxira arizalar yo'qolmasin)
        const local = lsRead();
        const byId = new Map<string, Lead>();
        for (const l of local) byId.set(l.id, l);
        for (const l of remote) byId.set(l.id, l);
        return [...byId.values()].sort((a, b) => b.createdAt - a.createdAt);
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
      const local = lsRead();
      const byId = new Map<string, Lead>();
      for (const l of local) byId.set(l.id, l);
      for (const l of remote) byId.set(l.id, l);
      return [...byId.values()].sort((a, b) => b.createdAt - a.createdAt);
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
        console.error("Appwrite add() xatosi, localStorage zaxira:", e);
        // pastga tushib localStorage'ga yozamiz
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
        console.error("Supabase add() xatosi, localStorage zaxira:", e);
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
