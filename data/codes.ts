export type Severite = "faible" | "moderee" | "elevee";

export interface CodeDefaut {
  code: string;
  titre: string;
  categorie: string;
  categorieLabel: string;
  severite: Severite;
  severiteLabel: string;
  description: string;
  causes: { pourcentage: number; libelle: string }[];
  avisPro: string;
  pieces: { nom: string; boutique: string; prix: string }[];
}

// Jeu de données de démarrage — à remplacer par l'import de la base
// SQLite (Wal33D/dtc-database) une fois l'agrégation des sources faite.
export const codes: CodeDefaut[] = [
  {
    code: "P0420",
    titre: "Rendement du catalyseur sous le seuil — Banc 1",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter sous 2-3 semaines",
    description:
      "Le calculateur moteur a détecté que le catalyseur ne réduit plus assez efficacement les émissions polluantes. Il compare le signal de la sonde lambda avant et après le catalyseur : l'écart est trop faible, signe que la conversion chimique ne se fait plus correctement.",
    causes: [
      { pourcentage: 42, libelle: "Sonde lambda (après catalyseur) défaillante" },
      { pourcentage: 27, libelle: "Catalyseur usé ou encrassé" },
      { pourcentage: 15, libelle: "Fuite d'échappement en amont" },
      { pourcentage: 10, libelle: "Bougies ou injecteurs encrassés" },
      { pourcentage: 6, libelle: "Défaut de câblage / connecteur sonde" },
    ],
    avisPro:
      "Lecture des valeurs temps réel des deux sondes lambda à l'OBD, contrôle visuel de fuite à l'échappement, puis test du catalyseur seul si les sondes sont saines. Éviter de remplacer le catalyseur en premier réflexe — c'est la pièce la plus chère et rarement la cause première.",
    pieces: [
      { nom: "Sonde lambda aval", boutique: "Oscaro · livraison 48h", prix: "54€" },
      { nom: "Catalyseur ligne complète", boutique: "Mister-Auto · sur commande", prix: "189€" },
      { nom: "Kit joints échappement", boutique: "AutoDoc · livraison 24h", prix: "12€" },
    ],
  },
  {
    code: "P0301",
    titre: "Raté d'allumage détecté — Cylindre 1",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — évitez de rouler longtemps, risque pour le catalyseur",
    description:
      "Le calculateur détecte des à-coups de rotation moteur caractéristiques d'une combustion incomplète ou absente sur le cylindre 1. Rouler longtemps avec ce défaut peut endommager le catalyseur (carburant non brûlé qui s'y consume).",
    causes: [
      { pourcentage: 35, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 28, libelle: "Bobine d'allumage défaillante" },
      { pourcentage: 18, libelle: "Injecteur bouché ou défectueux" },
      { pourcentage: 12, libelle: "Basse compression cylindre 1" },
      { pourcentage: 7, libelle: "Fuite d'admission (joint, durite)" },
    ],
    avisPro:
      "Commencer par contrôler bougie et bobine du cylindre concerné (les plus fréquentes et les moins chères à vérifier), avant d'aller vers un diagnostic compression ou injection.",
    pieces: [
      { nom: "Jeu de bougies d'allumage", boutique: "AutoDoc · livraison 24h", prix: "24€" },
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "38€" },
      { nom: "Injecteur essence", boutique: "Mister-Auto · sur commande", prix: "76€" },
    ],
  },
  {
    code: "P0171",
    titre: "Mélange trop pauvre — Banc 1",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — consommation et performances affectées",
    description:
      "Le calculateur détecte trop d'oxygène et pas assez de carburant dans le mélange air/essence. Souvent lié à une entrée d'air non mesurée (fuite) ou un manque de pression carburant.",
    causes: [
      { pourcentage: 38, libelle: "Fuite d'admission d'air (durite, joint)" },
      { pourcentage: 24, libelle: "Débitmètre d'air (MAF) encrassé ou défaillant" },
      { pourcentage: 20, libelle: "Pompe à carburant faible" },
      { pourcentage: 12, libelle: "Injecteurs partiellement bouchés" },
      { pourcentage: 6, libelle: "Sonde lambda amont défaillante" },
    ],
    avisPro:
      "Vérifier en premier les durites d'admission et le joint de débitmètre — c'est la cause la plus fréquente et la plus simple à contrôler visuellement.",
    pieces: [
      { nom: "Durite admission d'air", boutique: "AutoDoc · livraison 24h", prix: "18€" },
      { nom: "Débitmètre d'air (MAF)", boutique: "Oscaro · livraison 48h", prix: "64€" },
      { nom: "Pompe à carburant", boutique: "Mister-Auto · sur commande", prix: "112€" },
    ],
  },
  {
    code: "P0128",
    titre: "Thermostat — température sous seuil régulé",
    categorie: "p01xx",
    categorieLabel: "Refroidissement",
    severite: "faible",
    severiteLabel: "Gravité faible — roulable sans risque immédiat",
    description:
      "Le moteur met trop de temps à atteindre sa température de fonctionnement normale. Cause généralement liée au thermostat qui reste bloqué en position ouverte.",
    causes: [
      { pourcentage: 55, libelle: "Thermostat bloqué ouvert" },
      { pourcentage: 20, libelle: "Capteur de température moteur défaillant" },
      { pourcentage: 15, libelle: "Niveau de liquide de refroidissement bas" },
      { pourcentage: 10, libelle: "Câblage capteur endommagé" },
    ],
    avisPro:
      "Le remplacement du thermostat est peu coûteux et résout la grande majorité des cas — c'est le premier réflexe avant d'aller chercher plus loin.",
    pieces: [
      { nom: "Thermostat moteur", boutique: "AutoDoc · livraison 24h", prix: "16€" },
      { nom: "Capteur de température moteur", boutique: "Oscaro · livraison 48h", prix: "22€" },
    ],
  },
];

// Normalise une saisie utilisateur imparfaite (espaces, tirets, lettre de
// préfixe OBD oubliée) vers un format de code canonique, ex. "0171" -> "P0171".
export function normalizeCode(raw: string): string {
  const clean = raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (/^[PBCU]/.test(clean)) return clean;
  if (/^\d+$/.test(clean)) return `P${clean}`;
  return clean;
}

export function getCodeByCode(code: string): CodeDefaut | undefined {
  const normalized = normalizeCode(code);
  return codes.find((c) => c.code.toUpperCase() === normalized);
}

export function getCodesByCategorie(categorie: string): CodeDefaut[] {
  return codes.filter((c) => c.categorie.toLowerCase() === categorie.toLowerCase());
}

export interface Categorie {
  code: string;
  titre: string;
  desc: string;
  slug: string;
}

export const categories: Categorie[] = [
  { code: "P03XX", titre: "Allumage & ratés", desc: "Bougies, bobines, cylindres — à-coups moteur.", slug: "p03xx" },
  { code: "P01XX", titre: "Carburant & air", desc: "Injection, débit d'air, richesse du mélange.", slug: "p01xx" },
  { code: "P04XX", titre: "Émissions", desc: "Sonde lambda, EGR, catalyseur.", slug: "p04xx" },
  { code: "U0XXX", titre: "Réseau & calculateurs", desc: "Communication entre modules électroniques.", slug: "u0xxx" },
];

export function getCategorieBySlug(slug: string): Categorie | undefined {
  return categories.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}
