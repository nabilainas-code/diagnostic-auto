import { sql } from "@vercel/postgres";

// Connexion à la base technique (voir db/schema.sql). Utilise
// automatiquement les variables d'environnement POSTGRES_* injectées
// par Vercel une fois la base Postgres créée et reliée au projet —
// rien à configurer ici tant qu'elle n'existe pas.
//
// N'est pas encore utilisé par le site : c'est la brique de connexion
// pour la future API (Étape 3), pas encore branchée aux pages.
export { sql };
