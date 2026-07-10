const ENDPOINT = process.env.VITE_APPWRITE_ENDPOINT || "https://nyc.cloud.appwrite.io/v1";
const PROJECT = process.env.VITE_APPWRITE_PROJECT || "6a31cd310009155066e1";
const DB = process.env.VITE_APPWRITE_DB || "6a327bb100302400b95a";
const COL = process.env.VITE_APPWRITE_COLLECTION || "6a327bb100302400b95a";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function awHeaders() {
  return {
    "X-Appwrite-Project": PROJECT,
    "Content-Type": "application/json",
  };
}

function docToLead(d) {
  return {
    id: d.$id,
    ism: d.ism,
    telefon: d.telefon,
    telegram: d.telegram ?? "",
    country: d.country ?? "UZ",
    format: d.format ?? "—",
    daraja: d.daraja ?? "—",
    xabar: d.xabar ?? "—",
    status: d.status,
    checked: !!d.checkedAt,
    scheduledDate: d.scheduledDate ?? null,
    createdAt: new Date(d.$createdAt).getTime(),
    checkedAt: d.checkedAt ? new Date(d.checkedAt).getTime() : null,
  };
}

export default async function handler(req, res) {
  Object.entries(cors).forEach(([k, v]) => res.setHeader(k, v));

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const base = `${ENDPOINT}/databases/${DB}/collections/${COL}/documents`;

  try {
    if (req.method === "GET") {
      const listUrl =
        `${base}?` +
        new URLSearchParams([
          ["queries[]", 'orderDesc("$createdAt")'],
          ["queries[]", "limit(1000)"],
        ]).toString();

      const r = await fetch(listUrl, { headers: awHeaders() });
      const data = await r.json();
      if (!r.ok) {
        return res.status(r.status).json({ error: data.message || "list failed", detail: data });
      }
      const leads = (data.documents || []).map(docToLead);
      return res.status(200).json(leads);
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
      const payload = {
        documentId: "unique()",
        data: {
          ism: String(body.ism || "").trim(),
          telefon: String(body.telefon || "").trim(),
          telegram: String(body.telegram || ""),
          country: String(body.country || "UZ"),
          format: String(body.format || "—"),
          daraja: String(body.daraja || "—"),
          xabar: String(body.xabar || "—"),
          status: "yangi",
        },
      };

      if (!payload.data.ism || !payload.data.telefon) {
        return res.status(400).json({ error: "ism va telefon majburiy" });
      }

      const r = await fetch(base, {
        method: "POST",
        headers: awHeaders(),
        body: JSON.stringify(payload),
      });
      const data = await r.json();
      if (!r.ok) {
        return res.status(r.status).json({ error: data.message || "create failed", detail: data });
      }
      return res.status(201).json(docToLead(data));
    }

    if (req.method === "DELETE" && String(req.query?.all || "") === "1") {
      const listUrl =
        `${base}?` + new URLSearchParams([["queries[]", "limit(1000)"]]).toString();
      const listRes = await fetch(listUrl, { headers: awHeaders() });
      const listData = await listRes.json();
      if (!listRes.ok) {
        return res.status(listRes.status).json({ error: listData.message || "list failed" });
      }
      const docs = listData.documents || [];
      await Promise.all(
        docs.map((d) =>
          fetch(`${base}/${d.$id}`, {
            method: "DELETE",
            headers: awHeaders(),
          }),
        ),
      );
      return res.status(200).json({ ok: true, deleted: docs.length });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    console.error("api/leads error", e);
    return res.status(500).json({ error: e instanceof Error ? e.message : "server error" });
  }
}
