import { neon } from "@neondatabase/serverless";

function normalizeDatabaseUrl(url) {
  try {
    const u = new URL(url.trim().replace(/^["']|["']$/g, ""));
    // ba'zi clientlarda muammo beradi
    u.searchParams.delete("channel_binding");
    if (!u.searchParams.has("sslmode")) {
      u.searchParams.set("sslmode", "require");
    }
    return u.toString();
  } catch {
    return url.trim();
  }
}

export function getDatabaseUrl() {
  return process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || "";
}

export function getSql() {
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
  return neon(normalizeDatabaseUrl(raw));
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
  if (/DATABASE_URL/i.test(msg)) return msg;
  if (/fetch failed|ECONNREFUSED|ENOTFOUND|getaddrinfo/i.test(msg)) {
    return (
      "Neon’ga ulanib bo‘lmadi. Tekshiring: 1) Neon project active/Restore 2) Connection string to‘g‘ri (Connect → pooled) " +
      "3) Vercel’da DATABASE_URL saqlangan va Redeploy qilingan. Tafsilot: " +
      msg
    );
  }
  if (/relation ["']?leads["']? does not exist/i.test(msg)) {
    return "leads jadvali yo‘q. Neon SQL Editor’da sql/leads.sql ni Run qiling.";
  }
  return msg;
}
