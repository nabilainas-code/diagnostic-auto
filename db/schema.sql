-- ============================================================
-- Panne Résolue — schéma de base de données technique
-- ============================================================
-- PostgreSQL. Conçu pour évoluer vers plusieurs millions
-- d'enregistrements sans changer de structure.
--
-- Règles suivies dans tout ce schéma :
--  - Aucune marque, aucun code, aucune donnée technique n'est
--    codé en dur dans l'application : tout vit dans ces tables.
--  - Toute donnée technique (interprétation de code, cause,
--    contrôle, compatibilité ECU...) porte une source et un
--    niveau de confiance. Rien n'est présenté comme certain
--    quand plusieurs causes sont possibles.
--  - Les données privées des utilisateurs (véhicules, historique,
--    retours) vivent dans un schéma séparé (app_private), jamais
--    mélangées à la base technique commune.
--  - Ce fichier crée la structure. Il n'insère aucune donnée
--    technique inventée — voir db/seed_brands.sql pour les seules
--    données de départ (noms de marques, qui ne sont pas des
--    données "sourcées" à vérifier, juste des faits publics).
-- ============================================================

CREATE EXTENSION IF NOT EXISTS pgcrypto; -- pour gen_random_uuid()

CREATE TYPE confidence_level AS ENUM ('HIGH', 'MEDIUM', 'LOW', 'UNVERIFIED');

-- ============================================================
-- 13. SOURCES & LICENCES — référencées par toute donnée technique
-- ============================================================

CREATE TABLE sources (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_name     TEXT NOT NULL,
  source_url      TEXT,
  license         TEXT NOT NULL,        -- ex: "GPL-3.0", "ODbL-1.0", "Norme SAE J2012", "Documentation constructeur"
  license_url     TEXT,
  source_type     TEXT NOT NULL CHECK (source_type IN (
                    'open_source', 'manufacturer_doc', 'standard',
                    'community_db', 'public_data', 'internal'
                  )),
  author          TEXT,
  date_checked    DATE,
  version         TEXT,
  notes           TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 1-2. HIÉRARCHIE VÉHICULE
-- CONSTRUCTEUR > MARQUE > MODÈLE > GÉNÉRATION > ANNÉE > MOTORISATION > CODE MOTEUR > BOÎTE
-- ============================================================

CREATE TABLE manufacturers (              -- groupe industriel (ex: Stellantis, groupe VAG)
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL UNIQUE,
  country         TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE brands (                     -- MARQUE (Peugeot, BMW, Toyota...)
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  manufacturer_id UUID REFERENCES manufacturers(id),
  name            TEXT NOT NULL UNIQUE,
  slug            TEXT NOT NULL UNIQUE,
  logo_url        TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE models (                     -- MODÈLE (508, Série 3, Corolla...)
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id        UUID NOT NULL REFERENCES brands(id),
  name            TEXT NOT NULL,
  slug            TEXT NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (brand_id, slug)
);

CREATE TABLE generations (                -- GÉNÉRATION (508 I, 508 II, E90, MK7...)
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  model_id        UUID NOT NULL REFERENCES models(id),
  name            TEXT NOT NULL,
  year_start      INT,
  year_end        INT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE model_years (                -- ANNÉE précise dans une génération (millésime)
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  generation_id   UUID NOT NULL REFERENCES generations(id),
  year            INT NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (generation_id, year)
);

CREATE TABLE engines (                    -- MOTORISATION + CODE MOTEUR
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  generation_id   UUID NOT NULL REFERENCES generations(id),
  name            TEXT NOT NULL,          -- "2.0 BlueHDi 180"
  fuel_type       TEXT NOT NULL CHECK (fuel_type IN (
                    'petrol', 'diesel', 'hybrid', 'phev', 'electric', 'lpg', 'cng', 'other'
                  )),
  displacement_cc INT,
  power_hp        INT,
  power_kw        INT,
  engine_code     TEXT,                   -- CODE MOTEUR, ex: "DW10FC"
  source_id       UUID REFERENCES sources(id),
  confidence      confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE transmissions (              -- BOÎTE DE VITESSES
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  engine_id       UUID NOT NULL REFERENCES engines(id),
  name            TEXT NOT NULL,          -- "EAT8", "AL4", "manuelle 6 rapports"
  type            TEXT CHECK (type IN ('manual', 'automatic', 'amt', 'cvt', 'dct')),
  gear_count      INT,
  source_id       UUID REFERENCES sources(id),
  confidence      confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 5. CALCULATEURS (ECU)
-- ============================================================

CREATE TABLE ecu_families (               -- famille (ex: "Bosch EDC17", "PSA BSI2010")
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  category        TEXT NOT NULL CHECK (category IN (
                    'engine', 'tcu', 'abs', 'esp', 'airbag', 'bcm', 'bsi', 'gateway',
                    'adas', 'steering', 'hvac', 'instrument_cluster', 'infotainment',
                    'hv_battery', 'bms', 'obc', 'other'
                  )),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE ecus (                       -- calculateur précis (référence commerciale)
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ecu_family_id   UUID REFERENCES ecu_families(id),
  reference       TEXT,                   -- référence ECU
  supplier        TEXT,                   -- Bosch, Continental, Valeo...
  version         TEXT,
  source_id       UUID REFERENCES sources(id),
  confidence      confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE ecu_vehicle_compatibility (  -- véhicule compatible + année pour un ECU
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ecu_id          UUID NOT NULL REFERENCES ecus(id),
  engine_id       UUID REFERENCES engines(id),
  transmission_id UUID REFERENCES transmissions(id),
  year_start      INT,
  year_end        INT,
  source_id       UUID REFERENCES sources(id),
  confidence      confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 3-4. CODES DÉFAUT (DTC)
-- Le code brut est séparé de son interprétation : un même code
-- (ex: P1351) peut vouloir dire des choses différentes selon la
-- marque ou la famille d'ECU. On ne suppose jamais l'inverse.
-- ============================================================

CREATE TABLE dtc_codes (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code            TEXT NOT NULL,          -- "P0420"
  code_type       CHAR(1) NOT NULL CHECK (code_type IN ('P', 'B', 'C', 'U')),
  code_subtype    TEXT CHECK (code_subtype IN (
                    'generic_sae', 'iso_uds', 'manufacturer', 'ecu_specific'
                  )),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (code, code_subtype)
);

CREATE TABLE dtc_interpretations (        -- signification d'un code, éventuellement par marque/ECU
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dtc_code_id           UUID NOT NULL REFERENCES dtc_codes(id),
  brand_id              UUID REFERENCES brands(id),        -- NULL = interprétation générique multimarque
  ecu_family_id         UUID REFERENCES ecu_families(id),
  system_name           TEXT,                              -- "Émissions", "ABS/ESP"...
  title                 TEXT NOT NULL,
  description           TEXT NOT NULL,
  technical_description TEXT,
  severity              TEXT CHECK (severity IN ('faible', 'moderee', 'elevee')),
  urgency               TEXT CHECK (urgency IN ('faible', 'moderee', 'elevee')),
  source_id             UUID NOT NULL REFERENCES sources(id),
  confidence            confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  verified_at           TIMESTAMPTZ,
  verified_by           TEXT,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (dtc_code_id, brand_id, ecu_family_id)
);

CREATE TABLE dtc_ecu_association (
  dtc_code_id     UUID NOT NULL REFERENCES dtc_codes(id),
  ecu_id          UUID NOT NULL REFERENCES ecus(id),
  source_id       UUID REFERENCES sources(id),
  confidence      confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  PRIMARY KEY (dtc_code_id, ecu_id)
);

-- ============================================================
-- 6-8. DIAGNOSTIC : causes, contrôles, symptômes, pièces
-- Tout est présenté au conditionnel — jamais "code X = pièce Y".
-- ============================================================

CREATE TABLE causes (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label           TEXT NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE dtc_causes (                 -- cause possible pour une interprétation donnée
  id                       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dtc_interpretation_id    UUID NOT NULL REFERENCES dtc_interpretations(id),
  cause_id                 UUID NOT NULL REFERENCES causes(id),
  likelihood_pct           SMALLINT CHECK (likelihood_pct BETWEEN 0 AND 100),  -- indicatif, jamais une certitude
  phrasing                 TEXT NOT NULL DEFAULT 'cause possible'
                            CHECK (phrasing IN ('cause possible', 'à contrôler', 'peut être lié à')),
  source_id                UUID REFERENCES sources(id),
  confidence                confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  created_at               TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE diagnostic_checks (          -- contrôles / mesures / valeurs de référence / procédure
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dtc_interpretation_id  UUID NOT NULL REFERENCES dtc_interpretations(id),
  label                  TEXT NOT NULL,
  procedure_text         TEXT,
  reference_value        TEXT,
  source_id              UUID REFERENCES sources(id),
  confidence             confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  created_at             TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE symptoms (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label           TEXT NOT NULL UNIQUE,   -- "voyant moteur", "fumée noire", "ABS allumé"...
  icon            TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE dtc_symptoms (
  dtc_interpretation_id   UUID NOT NULL REFERENCES dtc_interpretations(id),
  symptom_id              UUID NOT NULL REFERENCES symptoms(id),
  source_id               UUID REFERENCES sources(id),
  confidence               confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  PRIMARY KEY (dtc_interpretation_id, symptom_id)
);

CREATE TABLE components (                 -- pièces / composants
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  category        TEXT,                   -- "capteur", "vanne", "injecteur"...
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE dtc_components (             -- lien indicatif DTC -> pièce potentiellement concernée
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  dtc_interpretation_id  UUID NOT NULL REFERENCES dtc_interpretations(id),
  component_id           UUID NOT NULL REFERENCES components(id),
  relation_note          TEXT NOT NULL DEFAULT 'pièce potentiellement concernée',
  source_id              UUID REFERENCES sources(id),
  confidence             confidence_level NOT NULL DEFAULT 'UNVERIFIED',
  created_at             TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 15. IMPORT — traçabilité de chaque lot importé
-- ============================================================

CREATE TABLE import_batches (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id       UUID NOT NULL REFERENCES sources(id),
  format          TEXT NOT NULL CHECK (format IN ('csv', 'json', 'yaml', 'sqlite')),
  file_name       TEXT,
  imported_by     TEXT,
  row_count       INT,
  duplicate_count INT NOT NULL DEFAULT 0,
  conflict_count  INT NOT NULL DEFAULT 0,
  status          TEXT NOT NULL DEFAULT 'pending' CHECK (status IN (
                    'pending', 'validated', 'rejected', 'partial'
                  )),
  notes           TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 21. ADMINISTRATION — historique des modifications
-- ============================================================

CREATE TABLE change_log (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name      TEXT NOT NULL,
  record_id       UUID NOT NULL,
  action          TEXT NOT NULL CHECK (action IN ('insert', 'update', 'delete')),
  changed_by      TEXT,
  diff            JSONB,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 16-17. DONNÉES UTILISATEUR — schéma séparé, jamais mélangé
-- à la base technique. Un retour utilisateur ne modifie JAMAIS
-- automatiquement dtc_interpretations / dtc_causes / etc. : il
-- passe par user_feedback avec un statut "pending" jusqu'à
-- validation manuelle (voir db/README.md).
-- ============================================================

CREATE SCHEMA IF NOT EXISTS app_private;

CREATE TABLE app_private.users (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email           TEXT NOT NULL UNIQUE,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE app_private.user_vehicles (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID NOT NULL REFERENCES app_private.users(id),
  brand_id        UUID REFERENCES brands(id),
  model_id        UUID REFERENCES models(id),
  engine_id       UUID REFERENCES engines(id),
  year            INT,
  nickname        TEXT,                  -- "Mon 508 RXH"
  vin             TEXT,
  license_plate   TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE app_private.vehicle_history_entries (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_vehicle_id UUID NOT NULL REFERENCES app_private.user_vehicles(id),
  dtc_code_id     UUID REFERENCES dtc_codes(id),
  entry_date      DATE NOT NULL DEFAULT CURRENT_DATE,
  mileage_km      INT,
  symptoms        TEXT,
  diagnosis       TEXT,
  repair          TEXT,
  part_replaced   TEXT,
  notes           TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE app_private.vehicle_history_attachments (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  history_entry_id  UUID NOT NULL REFERENCES app_private.vehicle_history_entries(id),
  type              TEXT NOT NULL CHECK (type IN ('photo', 'invoice', 'note')),
  file_url          TEXT NOT NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE app_private.user_feedback (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                UUID REFERENCES app_private.users(id),
  dtc_interpretation_id  UUID REFERENCES dtc_interpretations(id),
  feedback_type          TEXT NOT NULL CHECK (feedback_type IN (
                           'helped', 'did_not_match', 'fixed_it', 'part_replaced', 'solution_used'
                         )),
  comment                TEXT,
  status                 TEXT NOT NULL DEFAULT 'pending' CHECK (status IN (
                           'pending', 'reviewed', 'accepted', 'rejected'
                         )),
  reviewed_by            TEXT,
  reviewed_at            TIMESTAMPTZ,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- 22. INDEX — recherches rapides à grande échelle
-- ============================================================

CREATE INDEX idx_brands_slug                  ON brands(slug);
CREATE INDEX idx_models_brand                  ON models(brand_id);
CREATE INDEX idx_generations_model             ON generations(model_id);
CREATE INDEX idx_engines_generation            ON engines(generation_id);
CREATE INDEX idx_engines_code                  ON engines(engine_code);
CREATE INDEX idx_transmissions_engine          ON transmissions(engine_id);
CREATE INDEX idx_ecus_family                   ON ecus(ecu_family_id);
CREATE INDEX idx_ecu_vehicle_compat_engine     ON ecu_vehicle_compatibility(engine_id);
CREATE INDEX idx_dtc_codes_code                ON dtc_codes(code);
CREATE INDEX idx_dtc_codes_type                ON dtc_codes(code_type);
CREATE INDEX idx_dtc_interpretations_code      ON dtc_interpretations(dtc_code_id);
CREATE INDEX idx_dtc_interpretations_brand     ON dtc_interpretations(brand_id);
CREATE INDEX idx_dtc_causes_interpretation     ON dtc_causes(dtc_interpretation_id);
CREATE INDEX idx_dtc_symptoms_symptom          ON dtc_symptoms(symptom_id);
CREATE INDEX idx_dtc_components_interpretation ON dtc_components(dtc_interpretation_id);
CREATE INDEX idx_user_vehicles_user            ON app_private.user_vehicles(user_id);
CREATE INDEX idx_history_entries_vehicle       ON app_private.vehicle_history_entries(user_vehicle_id);
CREATE INDEX idx_user_feedback_status          ON app_private.user_feedback(status);
CREATE INDEX idx_change_log_table_record       ON change_log(table_name, record_id);
