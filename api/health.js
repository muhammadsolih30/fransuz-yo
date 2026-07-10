import {
  getDatabaseUrl,
  getDatabaseHost,
  query,
  setCors,
  explainDbError,
} from "./_lib/db.js";

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const hasUrl = !!getDatabaseUrl();
  const looksPostgres = hasUrl && getDatabaseUrl().startsWith("postgres");
  const host = getDatabaseHost();

  if (!hasUrl) {
    return res.status(503).json({
      ok: false,
      databaseUrl: false,
      host: null,
      error: "DATABASE_URL yo‘q. Vercel Environment Variables ga qo‘ying va Redeploy qiling.",
    });
  }

  if (!looksPostgres) {
    return res.status(503).json({
      ok: false,
      databaseUrl: true,
      host,
      error: "DATABASE_URL postgresql:// bilan boshlanishi kerak.",
    });
  }

  try {
    const rows = await query(`SELECT COUNT(*)::int AS count FROM leads`);
    return res.status(200).json({
      ok: true,
      databaseUrl: true,
      host,
      leadsTable: true,
      leadsCount: rows[0]?.count ?? 0,
      message: "Neon ulangan.",
      domain: "https://www.francetcf.uz",
    });
  } catch (e) {
    const msg = explainDbError(e);
    const missingTable = /leads jadvali yo‘q|does not exist/i.test(msg);
    return res.status(500).json({
      ok: false,
      databaseUrl: true,
      host,
      leadsTable: missingTable ? false : null,
      error: msg,
    });
  }
}
