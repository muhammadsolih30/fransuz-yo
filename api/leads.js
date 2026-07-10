import { getSql, rowToLead, setCors, explainDbError } from "./_lib/db.js";

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  try {
    const sql = getSql();

    if (req.method === "GET") {
      const rows = await sql`
        SELECT *
        FROM leads
        ORDER BY created_at DESC
        LIMIT 1000
      `;
      return res.status(200).json(rows.map(rowToLead));
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const ism = String(body.ism || "").trim();
      const telefon = String(body.telefon || "").trim();
      const telegram = String(body.telegram || "");
      const country = String(body.country || "UZ");
      const format = String(body.format || "—");
      const daraja = String(body.daraja || "—");
      const xabar = String(body.xabar || "—");

      if (!ism || !telefon) {
        return res.status(400).json({ error: "ism va telefon majburiy" });
      }

      const rows = await sql`
        INSERT INTO leads (ism, telefon, telegram, country, format, daraja, xabar, status)
        VALUES (${ism}, ${telefon}, ${telegram}, ${country}, ${format}, ${daraja}, ${xabar}, 'yangi')
        RETURNING *
      `;
      return res.status(201).json(rowToLead(rows[0]));
    }

    if (req.method === "DELETE" && String(req.query?.all || "") === "1") {
      const rows = await sql`DELETE FROM leads RETURNING id`;
      return res.status(200).json({ ok: true, deleted: rows.length });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    console.error("api/leads error", e);
    return res.status(500).json({ error: explainDbError(e) });
  }
}
