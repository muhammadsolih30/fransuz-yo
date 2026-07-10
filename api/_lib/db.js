import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";

neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

function sanitizeRawUrl(raw) {
  return String(raw || "")
    .trim()
    .replace(/^["']|["']$/g, "")
    .replace(/\s+/g, "");
}

export function getDatabaseUrl() {
  return sanitizeRawUrl(process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || "");
}

export function getDatabaseHost() {
  const raw = getDatabaseUrl();
  if (!raw) return null;
  try {
    return new URL(raw).hostname;
  } catch {
    return null;
  }
}

function normalizeDatabaseUrl(url) {
  const u = new URL(url);
  u.searchParams.delete("channel_binding");
  if (!u.searchParams.has("sslmode")) {
    u.searchParams.set("sslmode", "require");
  }
  return u.toString();
}

let _pool = null;

export function getPool() {
  const raw = getDatabaseUrl();
  if (!raw) {
    throw new Error(
      "DATABASE_URL topilmadi. Vercel → Settings → Environment Variables ga Neon connection string qo‘ying, keyin Redeploy qiling.",
    );
  }
  if (!raw.startsWith("postgres")) {
    throw new Error(
      "DATABASE_URL noto‘g‘ri. Value postgresql:// bilan boshlanishi kerak (neon connection-string buyrug‘i emas).",
    );
  }

  let normalized;
  try {
    normalized = normalizeDatabaseUrl(raw);
  } catch {
    throw new Error(
      "DATABASE_URL parse bo‘lmadi. Parolda maxsus belgilar (@ # %) bo‘lsa URL-encode qiling yoki Neon’dan yangi string oling.",
    );
  }

  if (!_pool) {
    _pool = new Pool({ connectionString: normalized, max: 1 });
  }
  return _pool;
}

export async function query(text, params = []) {
  const pool = getPool();
  const result = await pool.query(text, params);
  return result.rows;
}

export function rowToLead(row) {
  return {
    id: row.id,
    ism: row.ism,
    telefon: row.telefon,
    telegram: row.telegram ?? "",
    country: row.country ?? "UZ",
    format: row.format ?? "—",
    daraja: row.daraja ?? "—",
    xabar: row.xabar ?? "—",
    status: row.status,
    checked: !!row.checked_at,
    scheduledDate: row.scheduled_date
      ? String(row.scheduled_date).slice(0, 10)
      : null,
    createdAt: new Date(row.created_at).getTime(),
    checkedAt: row.checked_at ? new Date(row.checked_at).getTime() : null,
  };
}

export function setCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export function explainDbError(e) {
  const msg = e instanceof Error ? e.message : String(e);
  const host = getDatabaseHost();
  if (/DATABASE_URL|parse bo‘lmadi|noto‘g‘ri/i.test(msg)) return msg;
  if (/fetch failed|ECONNREFUSED|ENOTFOUND|getaddrinfo|certificate|TLS|socket|WebSocket/i.test(msg)) {
    return (
      "Neon’ga ulanib bo‘lmadi" +
      (host ? ` (host: ${host})` : "") +
      ". Qiling: 1) Neon Console’da project Active 2) Connect → Connection string ni qayta nusxalang (Pooled) " +
      "3) Vercel DATABASE_URL ni yangilang 4) Redeploy. Tafsilot: " +
      msg
    );
  }
  if (/relation ["']?leads["']? does not exist/i.test(msg)) {
    return "leads jadvali yo‘q. Neon SQL Editor’da sql/leads.sql ni Run qiling.";
  }
  return msg;
}
