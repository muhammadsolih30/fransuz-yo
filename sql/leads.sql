-- Neon SQL Editor'da bir marta ishga tushiring:
-- https://console.neon.tech → Project → SQL Editor

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

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);
