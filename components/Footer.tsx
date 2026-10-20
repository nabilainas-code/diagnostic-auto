import Link from "next/link";
import { categories } from "@/data/codes";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 mt-10">
      <nav aria-label="Catégories de codes défaut" className="max-w-6xl mx-auto mb-6 pb-6 border-b border-line">
        <div className="font-mono text-xs text-muted tracking-wide mb-3">
          <Link href="/codes" className="hover:text-text transition-colors">CODES DÉFAUT</Link>
          {" · "}
          <Link href="/pannes" className="hover:text-text transition-colors">PANNES CONNUES</Link>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {categories.map((c) => (
            <Link key={c.slug} href={`/codes/categorie/${c.slug}`} className="hover:text-text transition-colors">
              {c.titre}
            </Link>
          ))}
        </div>
      </nav>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="text-muted text-sm">
          © 2026 Panne Résolue — Diagnostic à titre indicatif. Consultez un professionnel pour toute réparation.
        </div>
        <nav className="flex gap-5 text-muted text-sm">
          <Link href="/mentions-legales" className="hover:text-text transition-colors">
            Mentions légales
          </Link>
          <Link href="/politique-de-confidentialite" className="hover:text-text transition-colors">
            Confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}
