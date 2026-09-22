-- ============================================================
-- Retours utilisateur sur les fiches de codes défaut
-- ("Ce diagnostic vous a-t-il aidé ? 👍 / 👎")
--
-- Table volontairement autonome : elle s'appuie sur le code défaut
-- en texte ("P0420") et non sur dtc_interpretations(id), car le site
-- sert encore ses fiches depuis data/codes.ts — la base technique
-- (schema.sql) n'est pas encore peuplée. Quand elle le sera, une
-- migration ultérieure pourra rattacher ces lignes aux
-- interprétations via dtc_interpretation_id.
--
-- Aucun contenu n'est affiché publiquement : ces retours sont privés
-- et servent à corriger/améliorer les fiches. Aucune donnée
-- identifiante n'est enregistrée (ni compte, ni adresse IP).
-- ============================================================

CREATE SCHEMA IF NOT EXISTS app_private;

CREATE TABLE IF NOT EXISTS app_private.page_feedback (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code        TEXT NOT NULL,            -- code défaut concerné, ex: "P0420"
  helpful     BOOLEAN NOT NULL,         -- 👍 true / 👎 false
  comment     TEXT,                     -- précision facultative, jamais publiée
  status      TEXT NOT NULL DEFAULT 'pending' CHECK (status IN (
                'pending', 'reviewed', 'accepted', 'rejected'
              )),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_page_feedback_code   ON app_private.page_feedback(code);
CREATE INDEX IF NOT EXISTS idx_page_feedback_status ON app_private.page_feedback(status);
