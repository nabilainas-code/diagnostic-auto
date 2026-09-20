import Link from "next/link";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import { codes, categories } from "@/data/codes";

const sevColor = { faible: "bg-cyan", moderee: "bg-amber", elevee: "bg-[#E5484D]" };

export default function Home() {
  return (
    <>
      <Header />

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="font-mono text-xs text-cyan tracking-wider flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse-dot" />
          {codes.length}+ CODES RÉFÉRENCÉS · MISE À JOUR CONTINUE
        </div>
        <h1 className="font-display font-bold tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-[3.4rem] max-w-3xl">
          Un voyant allumé ? <span className="text-amber">Trouvez la cause</span>, puis la pièce.
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-xl mt-4 leading-relaxed">
          Entrez un code défaut ou votre plaque d&apos;immatriculation. On identifie le problème,
          la pièce concernée, et où l&apos;acheter au meilleur prix.
        </p>

        <SearchBox />

        <div className="flex gap-7 flex-wrap mt-8 pt-6 border-t border-line">
          <div className="text-sm text-muted">
            <strong className="font-display text-text">33+</strong> constructeurs couverts
          </div>
          <div className="text-sm text-muted">
            <strong className="font-display text-text">&lt; 1s</strong> temps de réponse
          </div>
          <div className="text-sm text-muted">
            <strong className="font-display text-text">Gratuit</strong> à l&apos;usage
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-baseline mb-5 gap-4 flex-wrap">
          <h2 className="font-display font-semibold text-2xl">Catégories de pannes</h2>
          <span className="font-mono text-xs text-muted">CLASSÉES PAR SYSTÈME</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/codes/categorie/${c.slug}`}
              className="bg-surface border border-line rounded-xl p-5 hover:border-amber hover:-translate-y-0.5 transition-all block"
            >
              <div className="font-mono text-amber text-xs tracking-wide">{c.code}</div>
              <div className="font-display font-semibold text-base mt-1.5">{c.titre}</div>
              <div className="text-muted text-sm mt-1.5 leading-relaxed">{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-baseline mb-5 gap-4 flex-wrap">
          <h2 className="font-display font-semibold text-2xl">Codes les plus recherchés</h2>
          <span className="font-mono text-xs text-muted">SÉLECTION</span>
        </div>
        <div className="bg-surface border border-line rounded-xl overflow-hidden">
          {codes.map((c) => (
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
      </section>

      <footer className="border-t border-line px-6 py-8 text-center text-muted text-sm mt-10">
        © 2026 Panne Résolue — Diagnostic à titre indicatif. Consultez un professionnel pour toute réparation.
      </footer>
    </>
  );
}
