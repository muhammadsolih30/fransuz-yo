import { neon } from "@neondatabase/serverless";

export function getSql() {
  const url = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL topilmadi. Neon connection string ni Vercel Environment Variables ga qo'shing.",
    );
  }
  return neon(url);
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
