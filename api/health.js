import { getDatabaseUrl, getSql, setCors, explainDbError } from "./_lib/db.js";

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const hasUrl = !!getDatabaseUrl();
  const looksPostgres = hasUrl && getDatabaseUrl().trim().startsWith("postgres");

  if (!hasUrl) {
    return res.status(503).json({
      ok: false,
      databaseUrl: false,
      error: "DATABASE_URL yo‘q. Vercel Environment Variables ga qo‘ying va Redeploy qiling.",
    });
  }

  if (!looksPostgres) {
    return res.status(503).json({
      ok: false,
      databaseUrl: true,
      error: "DATABASE_URL postgresql:// bilan boshlanishi kerak.",
    });
  }

  try {
    const sql = getSql();
    const rows = await sql`SELECT COUNT(*)::int AS count FROM leads`;
    return res.status(200).json({
      ok: true,
      databaseUrl: true,
      leadsTable: true,
      leadsCount: rows[0]?.count ?? 0,
      message: "Neon ulangan.",
    });
  } catch (e) {
    const msg = explainDbError(e);
    const missingTable = /leads jadvali yo‘q|does not exist/i.test(msg);
    return res.status(500).json({
      ok: false,
      databaseUrl: true,
      leadsTable: missingTable ? false : null,
      error: msg,
    });
  }
}
