-- ============================================================
-- Panne Résolue — données de départ : marques uniquement
-- ============================================================
-- Contrairement au reste de la base, ce fichier ne contient PAS
-- de donnée technique à vérifier (pas de DTC, pas de cause, pas
-- de compatibilité ECU). Il ne fait qu'enregistrer les noms de
-- marques et leur groupe industriel — un fait public, pas une
-- donnée diagnostique à sourcer.
--
-- Aucun modèle, aucune génération, aucun moteur, aucun ECU et
-- aucun code défaut n'est inséré ici : ces données arrivent
-- uniquement via un import tracé (import_batches) avec une
-- source et une licence, conformément à la section 15/25 du
-- cahier des charges — jamais en dur, jamais inventées.
-- ============================================================

INSERT INTO manufacturers (name, country) VALUES
  ('Stellantis', 'Pays-Bas'),
  ('Groupe Renault', 'France'),
  ('Groupe Volkswagen', 'Allemagne'),
  ('BMW Group', 'Allemagne'),
  ('Mercedes-Benz Group', 'Allemagne'),
  ('Ford Motor Company', 'États-Unis'),
  ('Toyota Motor Corporation', 'Japon'),
  ('Honda Motor Co.', 'Japon'),
  ('Nissan Motor Co.', 'Japon'),
  ('Mazda Motor Corporation', 'Japon'),
  ('Mitsubishi Motors', 'Japon'),
  ('Subaru Corporation', 'Japon'),
  ('Suzuki Motor Corporation', 'Japon'),
  ('Hyundai Motor Group', 'Corée du Sud'),
  ('Volvo Cars', 'Suède'),
  ('Tesla, Inc.', 'États-Unis'),
  ('BYD Company', 'Chine'),
  ('SAIC Motor (MG)', 'Chine'),
  ('Tata Motors (Jaguar Land Rover)', 'Royaume-Uni')
ON CONFLICT (name) DO NOTHING;

-- Stellantis
INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('Peugeot', 'peugeot'), ('Citroën', 'citroen'), ('DS', 'ds'),
  ('Opel', 'opel'), ('Fiat', 'fiat'), ('Alfa Romeo', 'alfa-romeo'),
  ('Lancia', 'lancia'), ('Jeep', 'jeep')
) AS b(name, slug)
WHERE manufacturers.name = 'Stellantis'
ON CONFLICT (name) DO NOTHING;

-- Groupe Renault
INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('Renault', 'renault'), ('Dacia', 'dacia'), ('Alpine', 'alpine')
) AS b(name, slug)
WHERE manufacturers.name = 'Groupe Renault'
ON CONFLICT (name) DO NOTHING;

-- Groupe Volkswagen
INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('Volkswagen', 'volkswagen'), ('Audi', 'audi'), ('Seat', 'seat'),
  ('Cupra', 'cupra'), ('Skoda', 'skoda'), ('Porsche', 'porsche')
) AS b(name, slug)
WHERE manufacturers.name = 'Groupe Volkswagen'
ON CONFLICT (name) DO NOTHING;

-- BMW Group
INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('BMW', 'bmw'), ('Mini', 'mini')
) AS b(name, slug)
WHERE manufacturers.name = 'BMW Group'
ON CONFLICT (name) DO NOTHING;

-- Mercedes-Benz Group
INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('Mercedes-Benz', 'mercedes-benz'), ('Smart', 'smart')
) AS b(name, slug)
WHERE manufacturers.name = 'Mercedes-Benz Group'
ON CONFLICT (name) DO NOTHING;

-- Constructeurs à marque unique
INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'Ford', 'ford' FROM manufacturers WHERE name = 'Ford Motor Company'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('Toyota', 'toyota'), ('Lexus', 'lexus')
) AS b(name, slug)
WHERE manufacturers.name = 'Toyota Motor Corporation'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'Honda', 'honda' FROM manufacturers WHERE name = 'Honda Motor Co.'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('Nissan', 'nissan'), ('Infiniti', 'infiniti')
) AS b(name, slug)
WHERE manufacturers.name = 'Nissan Motor Co.'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'Mazda', 'mazda' FROM manufacturers WHERE name = 'Mazda Motor Corporation'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'Mitsubishi', 'mitsubishi' FROM manufacturers WHERE name = 'Mitsubishi Motors'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'Subaru', 'subaru' FROM manufacturers WHERE name = 'Subaru Corporation'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'Suzuki', 'suzuki' FROM manufacturers WHERE name = 'Suzuki Motor Corporation'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('Hyundai', 'hyundai'), ('Kia', 'kia'), ('Genesis', 'genesis')
) AS b(name, slug)
WHERE manufacturers.name = 'Hyundai Motor Group'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'Volvo', 'volvo' FROM manufacturers WHERE name = 'Volvo Cars'
ON CONFLICT (name) DO NOTHING;

-- Saab (marque disparue, groupe non pertinent aujourd'hui)
INSERT INTO brands (name, slug) VALUES ('Saab', 'saab') ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'Tesla', 'tesla' FROM manufacturers WHERE name = 'Tesla, Inc.'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'BYD', 'byd' FROM manufacturers WHERE name = 'BYD Company'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, 'MG', 'mg' FROM manufacturers WHERE name = 'SAIC Motor (MG)'
ON CONFLICT (name) DO NOTHING;

INSERT INTO brands (manufacturer_id, name, slug)
SELECT id, b.name, b.slug FROM manufacturers, (VALUES
  ('Land Rover', 'land-rover'), ('Jaguar', 'jaguar')
) AS b(name, slug)
WHERE manufacturers.name = 'Tata Motors (Jaguar Land Rover)'
ON CONFLICT (name) DO NOTHING;
