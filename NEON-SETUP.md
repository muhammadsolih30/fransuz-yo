# Neon + France TCF leads

## 1) Neon project
1. [Neon Console](https://console.neon.tech/app/org-round-glitter-76995781/projects) da **New Project** bosing
2. Region tanlang → Create

## 2) Jadval yaratish
1. Neon → **SQL Editor**
2. `sql/leads.sql` faylidagi SQL ni paste qilib **Run**

## 3) Connection string
1. Neon → Project → **Connection details**
2. **Connection string** (URI) ni nusxalang  
   Misól: `postgresql://user:pass@ep-xxx.region.aws.neon.tech/neondb?sslmode=require`

## 4) Vercel Environment Variable
1. Vercel → fransuz-yo → **Settings** → **Environment Variables**
2. Qo‘shing:
   - Name: `DATABASE_URL`
   - Value: Neon connection string
   - Environments: Production, Preview
3. **Redeploy** qiling (Deployments → … → Redeploy)

## 5) Tekshirish
1. `https://fransuz-yo.uz/boglanish` dan ariza yuboring
2. `https://fransuz-yo.uz/admin` da ko‘rinishi kerak
3. Admin’da yashil banner: “Server (Neon) ulangan”
