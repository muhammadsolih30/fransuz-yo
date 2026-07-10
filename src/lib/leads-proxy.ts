/**
 * Vercel /api/leads proxy — brauzer CORS (Invalid Origin) muammosini chetlab o'tadi.
 * fransuz-yo.uz kabi custom domenlarda Appwrite to'g'ridan-to'g'ri bloklanadi.
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

export function shouldPreferLeadsProxy(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host !== "localhost" && host !== "127.0.0.1";
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
    const res = await fetch("/api/leads", { headers: { Accept: "application/json" } });
    return res.ok;
  } catch {
    return false;
  }
}
