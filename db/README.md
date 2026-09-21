# Base de données technique — Panne Résolue

Ce dossier contient l'**Étape 1 et 2** du projet "grande base de données
mondiale de diagnostic automobile" : le schéma de base et ses relations.
Rien n'est encore branché au site — c'est une fondation, testée mais pas
encore en ligne.

## Fichiers

- `schema.sql` — le schéma complet (PostgreSQL), testé avec succès sur
  un serveur Postgres 16 local avant d'être livré ici.
- `seed_brands.sql` — les ~40 marques listées dans le cahier des
  charges, avec leur groupe industriel. C'est la **seule** donnée
  pré-remplie : ce sont des faits publics (qui appartient à qui), pas
  des données diagnostiques à sourcer. Aucun modèle, moteur, ECU ou
  code défaut n'est inséré — ça viendra uniquement par import tracé.

## Comment lire le schéma

### La hiérarchie véhicule
```
manufacturers (groupe industriel, ex: Stellantis)
  └─ brands (marque, ex: Peugeot)
       └─ models (modèle, ex: 508)
            └─ generations (génération, ex: 508 II)
                 └─ model_years (millésime précis)
                 └─ engines (motorisation + code moteur)
                      └─ transmissions (boîte de vitesses)
```
Aucune marque n'est écrite en dur dans le code de l'application —
elles vivent toutes dans la table `brands`. Ajouter une marque, c'est
une ligne `INSERT`, jamais une modification du site.

### Les calculateurs (ECU)
`ecu_families` (catégories : moteur, ABS, airbag, BSI...) et `ecus`
(référence précise), reliés aux véhicules via
`ecu_vehicle_compatibility`.

### Les codes défaut
Le code lui-même (`dtc_codes`, ex: "P0420") est séparé de son
**interprétation** (`dtc_interpretations`). C'est volontaire : un même
code peut vouloir dire des choses différentes selon la marque ou la
famille de calculateur — c'est explicitement demandé dans le cahier
des charges ("ne pas supposer que tous les codes suivent exactement la
même interprétation chez tous les constructeurs"). Une interprétation
sans marque (`brand_id` vide) = interprétation générique multimarque,
comme les codes génériques déjà sur le site aujourd'hui.

### Diagnostic — jamais de certitude affirmée
`dtc_causes`, `diagnostic_checks`, `dtc_symptoms`, `dtc_components`
relient une interprétation à ses causes possibles, contrôles,
symptômes et pièces potentiellement concernées. Le champ `phrasing`
sur `dtc_causes` est contraint à seulement trois formulations :
*"cause possible"*, *"à contrôler"*, *"peut être lié à"* — il est
techniquement impossible d'écrire "= remplacer cette pièce" dans la
base, la contrainte SQL l'empêche.

### Traçabilité — chaque donnée technique a une source
Toutes les tables de contenu technique (`dtc_interpretations`,
`dtc_causes`, `diagnostic_checks`, `dtc_symptoms`, `dtc_components`,
`engines`, `transmissions`, `ecus`, `ecu_vehicle_compatibility`)
portent un `source_id` (obligatoire sur `dtc_interpretations`) pointant
vers la table `sources` (nom, URL, licence, type, auteur, date de
vérification) et un `confidence` (`HIGH` / `MEDIUM` / `LOW` /
`UNVERIFIED`, par défaut `UNVERIFIED` tant que personne ne l'a validé).

### Données privées — séparées de la base technique
Tout ce qui concerne un utilisateur (`app_private.users`,
`user_vehicles`, `vehicle_history_entries`, ses photos/factures, et
ses retours `user_feedback`) vit dans un schéma Postgres séparé
(`app_private`), jamais mélangé aux tables techniques communes. Un
retour utilisateur (*"ça m'a aidé"*, *"pièce remplacée"*...) est
enregistré avec `status = 'pending'` et ne modifie **jamais**
automatiquement `dtc_interpretations` ou `dtc_causes` — il attend une
validation humaine (`reviewed_by`, `status = 'accepted'`).

### Import et audit
`import_batches` trace chaque lot importé (source, licence, nombre de
doublons/conflits détectés, statut). `change_log` garde un historique
de chaque modification pour l'administration.

## Ce qui n'est PAS encore fait

Ce schéma est la fondation (Étapes 1-2 du cahier des charges). Ne sont
**pas encore construits** : l'API (Étape 3), l'administration
(Étape 4), l'import d'un premier jeu de données multimarque
légalement réutilisable (Étape 5), et tout le reste jusqu'à la
recherche par plaque/VIN.

Rien n'est inventé dans ce schéma : aucune table ne contient de code
défaut, de compatibilité véhicule ou de cause technique qui ne soit
pas explicitement issue d'un import sourcé.

## Prochaine étape : héberger cette base

Ce schéma ne peut pas tourner tout seul — il lui faut un vrai serveur
de base de données quelque part (aujourd'hui, le site est 100%
statique : pas de base de données du tout). C'est une vraie décision à
prendre, avec un impact sur le coût et l'hébergement : voir la
discussion avec l'utilisateur dans la conversation.
