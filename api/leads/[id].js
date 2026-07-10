import { getSql, setCors } from "../_lib/db.js";

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
    const sql = getSql();

    if (req.method === "PATCH") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

      if (body.status !== undefined) {
        await sql`UPDATE leads SET status = ${String(body.status)} WHERE id = ${id}::uuid`;
      }
      if (body.scheduledDate !== undefined) {
        const date = body.scheduledDate ? String(body.scheduledDate).slice(0, 10) : null;
        const status = date ? "belgilangan" : body.status || "aloqa";
        await sql`
          UPDATE leads
          SET scheduled_date = ${date}, status = ${status}
          WHERE id = ${id}::uuid
        `;
      }
      if (body.checkedAt !== undefined) {
        const checkedAt = body.checkedAt ? String(body.checkedAt) : null;
        await sql`
          UPDATE leads
          SET checked_at = ${checkedAt}
          WHERE id = ${id}::uuid
        `;
      }

      return res.status(200).json({ ok: true });
    }

    if (req.method === "DELETE") {
      await sql`DELETE FROM leads WHERE id = ${id}::uuid`;
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    console.error("api/leads/[id] error", e);
    return res.status(500).json({
      error: e instanceof Error ? e.message : "server error",
    });
  }
}
