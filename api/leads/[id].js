import { query, setCors, explainDbError } from "../_lib/db.js";

export default async function handler(req, res) {
  setCors(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const id = req.query?.id;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "id kerak" });
  }

  try {
    if (req.method === "PATCH") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

      if (body.status !== undefined) {
        await query(`UPDATE leads SET status = $1 WHERE id = $2::uuid`, [
          String(body.status),
          id,
        ]);
      }
      if (body.scheduledDate !== undefined) {
        const date = body.scheduledDate ? String(body.scheduledDate).slice(0, 10) : null;
        const status = date ? "belgilangan" : body.status || "aloqa";
        await query(
          `UPDATE leads SET scheduled_date = $1, status = $2 WHERE id = $3::uuid`,
          [date, status, id],
        );
      }
      if (body.checkedAt !== undefined) {
        const checkedAt = body.checkedAt ? String(body.checkedAt) : null;
        await query(`UPDATE leads SET checked_at = $1 WHERE id = $2::uuid`, [
          checkedAt,
          id,
        ]);
      }

      return res.status(200).json({ ok: true });
    }

    if (req.method === "DELETE") {
      await query(`DELETE FROM leads WHERE id = $1::uuid`, [id]);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    console.error("api/leads/[id] error", e);
    return res.status(500).json({ error: explainDbError(e) });
  }
}
