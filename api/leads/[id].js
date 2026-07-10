const ENDPOINT = process.env.VITE_APPWRITE_ENDPOINT || "https://nyc.cloud.appwrite.io/v1";
const PROJECT = process.env.VITE_APPWRITE_PROJECT || "6a31cd310009155066e1";
const DB = process.env.VITE_APPWRITE_DB || "6a327bb100302400b95a";
const COL = process.env.VITE_APPWRITE_COLLECTION || "6a327bb100302400b95a";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "PATCH,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function awHeaders() {
  return {
    "X-Appwrite-Project": PROJECT,
    "Content-Type": "application/json",
  };
}

export default async function handler(req, res) {
  Object.entries(cors).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const id = req.query?.id;
  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "id kerak" });
  }

  const url = `${ENDPOINT}/databases/${DB}/collections/${COL}/documents/${id}`;

  try {
    if (req.method === "PATCH") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const data = {};
      if (body.status !== undefined) data.status = body.status;
      if (body.scheduledDate !== undefined) data.scheduledDate = body.scheduledDate;
      if (body.checkedAt !== undefined) data.checkedAt = body.checkedAt;

      const r = await fetch(url, {
        method: "PATCH",
        headers: awHeaders(),
        body: JSON.stringify({ data }),
      });
      const json = await r.json();
      if (!r.ok) {
        return res.status(r.status).json({ error: json.message || "update failed", detail: json });
      }
      return res.status(200).json({ ok: true });
    }

    if (req.method === "DELETE") {
      const r = await fetch(url, {
        method: "DELETE",
        headers: awHeaders(),
      });
      if (!r.ok) {
        const json = await r.json().catch(() => ({}));
        return res.status(r.status).json({ error: json.message || "delete failed", detail: json });
      }
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    console.error("api/leads/[id] error", e);
    return res.status(500).json({ error: e instanceof Error ? e.message : "server error" });
  }
}
