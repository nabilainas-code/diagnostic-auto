import { categories, codes, type Categorie, type CodeDefaut } from "./codes";

export interface SousCategorie {
  slug: string;
  parent: string;
  titre: string;
  label: string;
  total: number;
}

const PREFIXE_PSA = "PSA — ";

function slugifier(texte: string): string {
  return texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Les ~2 260 codes PSA tiennent sur une seule catégorie : on les répartit
// par système (BSI, ABS/ESP, Airbag…) d'après leur étiquette, pour que
// chaque page de liste reste lisible et que le chemin vers une fiche soit
// court : accueil, PSA, système, fiche.
export const sousCategoriesPsa: SousCategorie[] = (() => {
  const compte = new Map<string, number>();
  for (const c of codes) {
    if (c.categorie === "psa") compte.set(c.categorieLabel, (compte.get(c.categorieLabel) ?? 0) + 1);
  }
  return [...compte.entries()]
    .map(([label, total]) => {
      const titre = label.startsWith(PREFIXE_PSA) ? label.slice(PREFIXE_PSA.length) : label;
      return { slug: `psa-${slugifier(titre)}`, parent: "psa", titre, label, total };
    })
    .sort((a, b) => b.total - a.total);
})();

export function getSousCategorie(slug: string): SousCategorie | undefined {
  return sousCategoriesPsa.find((s) => s.slug === slug.toLowerCase());
}

export function codesDeSousCategorie(s: SousCategorie): CodeDefaut[] {
  return codes
    .filter((c) => c.categorie === s.parent && c.categorieLabel === s.label)
    .sort((a, b) => a.code.localeCompare(b.code));
}

export function sousCategorieDuCode(c: CodeDefaut): SousCategorie | undefined {
  return sousCategoriesPsa.find((s) => s.parent === c.categorie && s.label === c.categorieLabel);
}

export function compteParCategorie(): Map<string, number> {
  const compte = new Map<string, number>();
  for (const c of codes) compte.set(c.categorie, (compte.get(c.categorie) ?? 0) + 1);
  return compte;
}

export function categorieDuCode(c: CodeDefaut): Categorie | undefined {
  return categories.find((cat) => cat.slug === c.categorie);
}

// Fiches complètes (celles qui ont une FAQ), dans l'ordre du fichier.
export const fichesDetaillees: CodeDefaut[] = codes.filter((c) => c.faq && c.faq.length > 0);

// Liens éditoriaux : codes qui se diagnostiquent ensemble ou se confondent.
const VOIR_AUSSI: Record<string, string[]> = {
  P0420: ["P0430", "P0141", "P0135", "P0300", "P0171"],
  P0300: ["P0301", "P0302", "P0303", "P0304", "P0171", "P0172"],
  P0301: ["P0300", "P0302", "P0303", "P0304", "P0351"],
  P0171: ["P0174", "P0172", "P0101", "P0100", "P0300"],
  P0172: ["P0171", "P0174", "P0101", "P0443", "P0300"],
  P0128: ["P0116", "P0117", "P0118", "P0480"],
  P0101: ["P0100", "P0102", "P0171", "P0113", "P0401"],
  P0401: ["P0404", "P0101"],
  P0299: ["P0234", "P0236", "P0243", "P0101"],
  P2002: ["P2463", "P244A", "P244B", "P2453", "P2459"],
  P0087: ["P0089", "P0193", "P0230", "P0231", "P0200"],
};

const parCode = new Map(codes.map((c) => [c.code.toUpperCase(), c]));

export function codesVoirAussi(c: CodeDefaut): CodeDefaut[] {
  return (VOIR_AUSSI[c.code.toUpperCase()] ?? [])
    .map((code) => parCode.get(code))
    .filter((x): x is CodeDefaut => x !== undefined && x.code !== c.code);
}

const groupes = new Map<string, CodeDefaut[]>();
for (const c of codes) {
  const cle = `${c.categorie}|${c.categorieLabel}`;
  const liste = groupes.get(cle);
  if (liste) liste.push(c);
  else groupes.set(cle, [c]);
}
const position = new Map<string, { liste: CodeDefaut[]; i: number }>();
for (const liste of groupes.values()) {
  liste.sort((a, b) => a.code.localeCompare(b.code));
  liste.forEach((c, i) => position.set(c.code, { liste, i }));
}

// Voisins par numéro dans la même catégorie (et le même système pour PSA),
// de part et d'autre : les numéros proches appartiennent souvent à la même
// famille de défauts (P0300 à P0304, par exemple).
export function codesVoisins(c: CodeDefaut, max = 6): CodeDefaut[] {
  const entree = position.get(c.code);
  if (!entree) return [];
  const { liste, i } = entree;
  const debut = Math.min(Math.max(0, i - Math.floor(max / 2)), Math.max(0, liste.length - (max + 1)));
  return liste
    .slice(debut, debut + max + 1)
    .filter((x) => x.code !== c.code)
    .slice(0, max);
}
