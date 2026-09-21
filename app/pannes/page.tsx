import Link from "next/link";
import Header from "@/components/Header";
import { pannes } from "@/data/pannes";

export const metadata = {
  title: "Pannes électroniques connues | Panne Résolue",
  description:
    "Guides par symptômes pour les pannes de calculateurs de servitude (BSI, UCH) dont les codes défaut ne sont pas standardisés.",
};

export default function PannesIndexPage() {
  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="font-mono text-xs text-muted mb-5">
          <Link href="/" className="hover:text-text">Accueil</Link> /{" "}
          <span className="text-amber">Pannes connues</span>
        </div>

        <h1 className="font-display font-semibold text-2xl sm:text-[1.7rem]">
          Pannes électroniques connues
        </h1>
        <p className="text-muted text-sm mt-2.5 max-w-xl leading-relaxed">
          Certains boîtiers constructeur (BSI chez Peugeot/Citroën, UCH chez Renault) utilisent
          des codes défaut propriétaires, pas les codes standard P/B/C/U. Voici des guides par
          symptômes pour ces pannes fréquentes.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5 mt-7">
          {pannes.map((p) => (
            <Link
              key={p.slug}
              href={`/pannes/${p.slug}`}
              className="bg-surface border border-line rounded-xl p-5 hover:border-amber hover:-translate-y-0.5 transition-all block"
            >
              <div className="font-mono text-amber text-xs tracking-wide">{p.boitier}</div>
              <div className="font-display font-semibold text-base mt-1.5">{p.titre}</div>
              <div className="text-muted text-sm mt-1.5">{p.marque}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
