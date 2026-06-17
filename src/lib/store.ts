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

function emit() {
  window.dispatchEvent(new Event("leads-updated"));
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
export const leadsStore = {
  async all(): Promise<Lead[]> {
    if (isAppwriteEnabled && databases) {
      try {
        const res = await databases.listDocuments(APPWRITE_DB!, APPWRITE_LEADS!, [
          Query.orderDesc("$createdAt"),
          Query.limit(1000),
        ]);
        return (res.documents as unknown as AwDoc[]).map(docToLead);
      } catch (e) {
        console.error("Appwrite all() xatosi:", e);
        return [];
      }
    }
    if (isSupabaseEnabled && supabase) {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Supabase all() xatosi:", error.message);
        return [];
      }
      return (data as Row[]).map(rowToLead);
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
    if (isAppwriteEnabled && databases) {
      try {
        await databases.createDocument(APPWRITE_DB!, APPWRITE_LEADS!, ID.unique(), {
          ism: data.ism,
          telefon: data.telefon,
          telegram: data.telegram || "",
          country: data.country || "UZ",
          format: data.format,
          daraja: data.daraja,
          xabar: data.xabar,
          status: "yangi",
        });
      } catch (e) {
        console.error("Appwrite add() xatosi:", e);
      }
      emit();
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.from("leads").insert({
        ism: data.ism,
        telefon: data.telefon,
        telegram: data.telegram || "",
        country: data.country || "UZ",
        format: data.format,
        daraja: data.daraja,
        xabar: data.xabar,
        status: "yangi",
        checked: false,
      });
      if (error) console.error("Supabase add() xatosi:", error.message);
      emit();
      return;
    }

    const lead: Lead = {
      id: crypto.randomUUID(),
      ism: data.ism,
      telefon: data.telefon,
      telegram: data.telegram || "",
      country: data.country || "UZ",
      format: data.format,
      daraja: data.daraja,
      xabar: data.xabar,
      status: "yangi",
      checked: false,
      scheduledDate: null,
      createdAt: Date.now(),
      checkedAt: null,
    };
    const leads = lsRead();
    leads.push(lead);
    lsWrite(leads);
  },

  async setStatus(id: string, status: LeadStatus): Promise<void> {
    if (isAppwriteEnabled && databases) {
      try {
        await databases.updateDocument(APPWRITE_DB!, APPWRITE_LEADS!, id, { status });
      } catch (e) {
        console.error("Appwrite setStatus() xatosi:", e);
      }
      emit();
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.from("leads").update({ status }).eq("id", id);
      if (error) console.error("Supabase setStatus() xatosi:", error.message);
      emit();
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
      emit();
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase
        .from("leads")
        .update({ checked: next, checked_at: checkedAt })
        .eq("id", id);
      if (error) console.error("Supabase toggleChecked() xatosi:", error.message);
      emit();
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
      emit();
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase
        .from("leads")
        .update({ scheduled_date: date, status })
        .eq("id", id);
      if (error) console.error("Supabase setScheduled() xatosi:", error.message);
      emit();
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
      emit();
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.from("leads").delete().eq("id", id);
      if (error) console.error("Supabase remove() xatosi:", error.message);
      emit();
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
      emit();
      return;
    }
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.from("leads").delete().neq("id", "");
      if (error) console.error("Supabase clearAll() xatosi:", error.message);
      emit();
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
