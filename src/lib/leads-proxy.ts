/**
 * Vercel /api/leads proxy — Neon orqali arizalar.
 * Localhostda ham ishlashi uchun vite.config.ts /api ni productionga proxy qiladi.
 */

export type ProxyLead = {
  id: string;
  ism: string;
  telefon: string;
  telegram: string;
  country: string;
  format: string;
  daraja: string;
  xabar: string;
  status: string;
  checked: boolean;
  scheduledDate: string | null;
  createdAt: number;
  checkedAt: number | null;
};

/** Har doim /api/leads orqali (production yoki vite proxy). */
export function shouldPreferLeadsProxy(): boolean {
  return typeof window !== "undefined";
}

async function readError(res: Response): Promise<string> {
  try {
    const data = (await res.json()) as { error?: string; message?: string };
    return data.error || data.message || res.statusText;
  } catch {
    return res.statusText || `HTTP ${res.status}`;
  }
}

export async function proxyListLeads(): Promise<ProxyLead[]> {
  const res = await fetch("/api/leads", { headers: { Accept: "application/json" } });
  if (!res.ok) throw new Error(await readError(res));
  return (await res.json()) as ProxyLead[];
}

export async function proxyCreateLead(data: {
  ism: string;
  telefon: string;
  telegram?: string;
  country?: string;
  format: string;
  daraja: string;
  xabar: string;
}): Promise<ProxyLead> {
  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await readError(res));
  return (await res.json()) as ProxyLead;
}

export async function proxyPatchLead(
  id: string,
  patch: { status?: string; scheduledDate?: string | null; checkedAt?: string },
): Promise<void> {
  const res = await fetch(`/api/leads/${encodeURIComponent(id)}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(patch),
  });
  if (!res.ok) throw new Error(await readError(res));
}

export async function proxyDeleteLead(id: string): Promise<void> {
  const res = await fetch(`/api/leads/${encodeURIComponent(id)}`, {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(await readError(res));
}

export async function proxyClearLeads(): Promise<void> {
  const res = await fetch("/api/leads?all=1", {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(await readError(res));
}

export async function proxyHealth(): Promise<boolean> {
  try {
    const res = await fetch("/api/health", { headers: { Accept: "application/json" } });
    if (!res.ok) return false;
    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) return false;
    const data = (await res.json()) as { ok?: boolean };
    return data.ok === true;
  } catch {
    return false;
  }
}
