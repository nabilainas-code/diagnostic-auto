import Link from "next/link";
import Header from "@/components/Header";
import { codes } from "@/data/codes";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="font-mono text-5xl font-semibold text-amber">404</div>
        <h1 className="font-display font-semibold text-2xl mt-4">
          Cette page n&apos;existe pas
        </h1>
        <p className="text-muted text-sm mt-3 leading-relaxed">
          Le code défaut ou la page que vous cherchez est introuvable. Vérifiez
          l&apos;orthographe (ex. <span className="font-mono text-cyan">P0420</span>,
          avec le préfixe P, B, C ou U), ou repartez de l&apos;accueil.
        </p>

        <Link
          href="/"
          className="inline-block mt-7 bg-amber text-bg border-none rounded-lg px-5 py-3 font-semibold text-sm hover:brightness-110 transition-[filter]"
        >
          Retour à l&apos;accueil
        </Link>

        <div className="mt-10 pt-7 border-t border-line text-left">
          <div className="font-mono text-xs text-muted tracking-wide mb-3">
            CODES LES PLUS RECHERCHÉS
          </div>
          <div className="bg-surface border border-line rounded-xl overflow-hidden">
            {codes.slice(0, 5).map((c) => (
              <Link
                key={c.code}
                href={`/codes/${c.code.toLowerCase()}`}
                className="flex items-center gap-3 px-4 py-3 border-b border-line last:border-b-0 hover:bg-surface-2 transition-colors"
              >
                <span className="font-mono font-semibold text-xs text-amber bg-amber/10 px-2 py-1 rounded-md flex-shrink-0">
                  {c.code}
                </span>
                <span className="text-sm">{c.titre}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
