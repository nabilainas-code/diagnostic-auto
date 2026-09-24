-- ============================================================
-- Compteur de visites, pour l'outil de trafic de l'espace admin
-- (/admin/trafic).
--
-- Volontairement minimal et sans donnée identifiante : ni adresse
-- IP, ni identifiant de visiteur, ni cookie. On garde seulement de
-- quoi répondre à "quelles pages, quand, d'où, sur quel appareil" —
-- jamais "qui". `country` vient de l'en-tête de géolocalisation de
-- Vercel (x-vercel-ip-country), pas d'une IP stockée.
-- ============================================================

CREATE SCHEMA IF NOT EXISTS app_private;

CREATE TABLE IF NOT EXISTS app_private.page_views (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  path           TEXT NOT NULL,             -- ex: "/codes/p0420"
  referrer_host  TEXT,                      -- ex: "google.com", NULL si direct
  country        TEXT,                      -- ex: "FR", NULL si inconnu
  device         TEXT NOT NULL DEFAULT 'inconnu' CHECK (device IN (
                   'mobile', 'ordinateur', 'inconnu'
                 )),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON app_private.page_views(created_at);
CREATE INDEX IF NOT EXISTS idx_page_views_path       ON app_private.page_views(path);
