import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-8 mt-10">
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
