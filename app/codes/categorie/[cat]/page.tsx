import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { categories, getCategorieBySlug, getCodesByCategorie, type CodeDefaut } from "@/data/codes";
import { codesDeSousCategorie, getSousCategorie, sousCategoriesPsa } from "@/data/navigation";

const sevColor = { faible: "bg-cyan", moderee: "bg-amber", elevee: "bg-[#E5484D]" };

export function generateStaticParams() {
  return [...categories.map((c) => c.slug), ...sousCategoriesPsa.map((s) => s.slug)].map((cat) => ({ cat }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cat: string }>;
}): Promise<Metadata> {
  const { cat } = await params;
  const sous = getSousCategorie(cat);
  if (sous) {
    return {
      title: `Codes défaut ${sous.label} (${sous.total} codes) | Panne Résolue`,
      description: `${sous.total} codes défaut PSA du système ${sous.titre} : signification, causes probables et solutions.`,
    };
  }
  const categorie = getCategorieBySlug(cat);
  if (!categorie) return { title: "Catégorie introuvable" };
  return {
    title: `${categorie.code} — ${categorie.titre} | Panne Résolue`,
    description: categorie.desc,
  };
}

export default async function CategoriePage({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  const sous = getSousCategorie(cat);
  const categorie = sous ? getCategorieBySlug(sous.parent) : getCategorieBySlug(cat);
  if (!categorie) notFound();

  const estCentrePsa = !sous && categorie.slug === "psa";
  const codesDeLaCategorie: CodeDefaut[] = sous
    ? codesDeSousCategorie(sous)
    : estCentrePsa
      ? []
      : getCodesByCategorie(categorie.slug);

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="font-mono text-xs text-muted mb-5">
          <Link href="/" className="hover:text-text">Accueil</Link> /{" "}
          <Link href="/codes" className="hover:text-text">Codes défaut</Link> /{" "}
          {sous ? (
            <>
              <Link href={`/codes/categorie/${categorie.slug}`} className="hover:text-text">
                {categorie.titre}
              </Link>{" "}
              / <span className="text-amber">{sous.titre}</span>
            </>
          ) : (
            <span className="text-amber">{categorie.titre}</span>
          )}
        </div>

        <div className="pb-7 border-b border-line">
          <div className="font-mono text-xs text-amber tracking-wide">{sous ? sous.label : categorie.code}</div>
          <h1 className="font-display font-semibold text-2xl sm:text-[1.7rem] leading-tight mt-1.5">
            {sous ? `Codes défaut ${sous.label}` : categorie.titre}
          </h1>
          <p className="text-muted text-sm mt-2 leading-relaxed max-w-xl">
            {sous
              ? `${sous.total} codes propriétaires du système ${sous.titre} chez Peugeot, Citroën et DS, classés par numéro.`
              : categorie.desc}
          </p>
        </div>

        <div className="mt-7">
          {estCentrePsa ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5">
              {sousCategoriesPsa.map((s) => (
                <Link
                  key={s.slug}
                  href={`/codes/categorie/${s.slug}`}
                  className="bg-surface border border-line rounded-xl p-5 hover:border-amber hover:-translate-y-0.5 transition-all block"
                >
                  <div className="font-mono text-amber text-xs tracking-wide">{s.total} CODES</div>
                  <div className="font-display font-semibold text-base mt-1.5">{s.titre}</div>
                </Link>
              ))}
            </div>
          ) : codesDeLaCategorie.length > 0 ? (
            <div className="bg-surface border border-line rounded-xl overflow-hidden">
              {codesDeLaCategorie.map((c) => (
                <Link
                  key={c.code}
                  href={`/codes/${c.code.toLowerCase()}`}
                  className="flex items-center gap-4 px-5 py-4 border-b border-line last:border-b-0 hover:bg-surface-2 transition-colors"
                >
                  <span className="font-mono font-semibold text-sm text-amber bg-amber/10 px-2.5 py-1.5 rounded-md min-w-[78px] text-center flex-shrink-0">
                    {c.code}
                  </span>
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 ${sevColor[c.severite]}`} />
                  <span className="text-sm flex-1">{c.titre}</span>
                  <span className="text-muted text-xs flex-shrink-0 hidden sm:inline">{c.categorieLabel}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-surface-2 border border-dashed border-line rounded-xl p-8 text-center text-muted text-sm">
              Aucun code référencé dans cette catégorie pour l&apos;instant.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
