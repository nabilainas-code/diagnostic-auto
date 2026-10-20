import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { categories, codes } from "@/data/codes";
import { compteParCategorie, fichesDetaillees, sousCategoriesPsa } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Codes défaut OBD par catégorie | Panne Résolue",
  description: `${codes.length} codes défaut classés par système : allumage, carburant, émissions, boîte automatique, ABS, airbag, réseau et codes propriétaires PSA.`,
};

export default function CodesPage() {
  const compte = compteParCategorie();

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="font-mono text-xs text-muted mb-5">
          <Link href="/" className="hover:text-text">Accueil</Link> /{" "}
          <span className="text-amber">Codes défaut</span>
        </div>

        <h1 className="font-display font-semibold text-2xl sm:text-[1.7rem]">Codes défaut par catégorie</h1>
        <p className="text-muted text-sm mt-2.5 max-w-xl leading-relaxed">
          {codes.length} codes défaut classés par système. Choisissez la catégorie qui correspond à
          votre voyant, ou entrez directement le code depuis l&apos;accueil.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3.5 mt-7">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/codes/categorie/${c.slug}`}
              className="bg-surface border border-line rounded-xl p-5 hover:border-amber hover:-translate-y-0.5 transition-all block"
            >
              <div className="font-mono text-amber text-xs tracking-wide">
                {c.code} · {compte.get(c.slug) ?? 0} CODES
              </div>
              <div className="font-display font-semibold text-base mt-1.5">{c.titre}</div>
              <div className="text-muted text-sm mt-1.5 leading-relaxed">{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 className="font-display font-semibold text-xl mt-10 mb-4">Codes propriétaires PSA par système</h2>
        <div className="flex flex-wrap gap-2.5">
          {sousCategoriesPsa.map((s) => (
            <Link
              key={s.slug}
              href={`/codes/categorie/${s.slug}`}
              className="text-sm px-4 py-2 rounded-full bg-surface-2 border border-line text-[#C7CBD3] hover:border-amber hover:text-amber transition-colors"
            >
              {s.titre} <span className="text-muted text-xs">({s.total})</span>
            </Link>
          ))}
        </div>

        <h2 className="font-display font-semibold text-xl mt-10 mb-4">Fiches détaillées</h2>
        <div className="bg-surface border border-line rounded-xl overflow-hidden">
          {fichesDetaillees.map((c) => (
            <Link
              key={c.code}
              href={`/codes/${c.code.toLowerCase()}`}
              className="flex items-center gap-4 px-5 py-4 border-b border-line last:border-b-0 hover:bg-surface-2 transition-colors"
            >
              <span className="font-mono font-semibold text-sm text-amber bg-amber/10 px-2.5 py-1.5 rounded-md min-w-[78px] text-center flex-shrink-0">
                {c.code}
              </span>
              <span className="text-sm flex-1">{c.titre}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
