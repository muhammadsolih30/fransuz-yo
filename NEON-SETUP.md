# Neon + domen sozlash

## A) Neon (arizalar uchun)

1. [Neon Console](https://console.neon.tech) → Project ochiq/active ekanini tekshiring
2. **SQL Editor** da `sql/leads.sql` ni Run qiling
3. **Connect** → Connection string (URI) ni nusxalang (`postgresql://...`)
4. Vercel → Settings → Environment Variables:
   - Key: `DATABASE_URL`
   - Value: to‘liq `postgresql://...` string
   - Production + Preview
5. **Deployments → Redeploy**
6. Tekshiruv: `https://fransuz-yo.vercel.app/api/health`
   - `{"ok":true,...}` bo‘lishi kerak

## B) Domen (fransuz-yo.uz)

Domen sotib olingan, lekin DNS hali Vercel’ga ulanmagan bo‘lishi mumkin.

1. Vercel → Project → **Settings → Domains**
2. `fransuz-yo.uz` va `www.fransuz-yo.uz` qo‘shing
3. Vercel ko‘rsatgan DNS yozuvlarini domen sotib olgan joyga (registrar) qo‘ying, odatda:
   - `A` → `76.76.21.21` (yoki Vercel bergan IP)
   - yoki `CNAME` → `cname.vercel-dns.com`
4. DNS tarqalishi 5 daqiqadan 24 soatgacha cho‘zilishi mumkin

Hozircha sayt shu yerda ishlaydi: https://fransuz-yo.vercel.app
