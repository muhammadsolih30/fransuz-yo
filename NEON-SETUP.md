# Neon + francetcf.uz

Domen: https://www.francetcf.uz (Vercel’ga ulangan — OK)

## Muammo
`/api/health` hozir `DATABASE_URL` borligini ko‘rsatadi, lekin Neon’ga ulanmayapti (`fetch failed`).
Demak asosiy muammo — **Neon connection string / project holati**.

## Qadamlar

### 1) Neon project
1. https://console.neon.tech oching
2. Project **Active** ekanini tekshiring (Paused bo‘lsa Restore)

### 2) Jadval
SQL Editor’da Run:

```sql
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ism TEXT NOT NULL,
  telefon TEXT NOT NULL,
  telegram TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT 'UZ',
  format TEXT NOT NULL DEFAULT '—',
  daraja TEXT NOT NULL DEFAULT '—',
  xabar TEXT NOT NULL DEFAULT '—',
  status TEXT NOT NULL DEFAULT 'yangi',
  scheduled_date DATE NULL,
  checked_at TIMESTAMPTZ NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

### 3) Yangi connection string
1. Neon → **Connect**
2. **Pooled connection** ni tanlang
3. To‘liq URI ni nusxalang (`postgresql://...`)
4. Vercel → Settings → Environment Variables → `DATABASE_URL` ni **Edit** qilib yangilang
5. Deployments → **Redeploy**

### 4) Tekshiruv
Ochib ko‘ring: https://www.francetcf.uz/api/health

- `ok: true` → tayyor
- `ok: false` → `error` matnini yuboring
