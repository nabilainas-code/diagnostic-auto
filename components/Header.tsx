import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight">
          <span className="w-[30px] h-[30px] rounded-md bg-gradient-to-br from-amber to-[#e8890c] flex items-center justify-center text-bg font-mono font-semibold text-sm flex-shrink-0">
            OK
          </span>
          <span>
            Panne<span className="text-amber">.</span>Résolue
          </span>
        </Link>
        <nav className="hidden md:flex gap-7 items-center">
          <Link href="/codes/categorie/p03xx" className="text-muted text-sm font-medium hover:text-text transition-colors">
            Codes défaut
          </Link>
          <Link href="/pannes" className="text-muted text-sm font-medium hover:text-text transition-colors">
            Pannes connues
          </Link>
          <Link href="/vehicule" className="text-muted text-sm font-medium hover:text-text transition-colors">
            Trouver une pièce
          </Link>
          <Link href="/vehicule" className="text-muted text-sm font-medium hover:text-text transition-colors">
            Par plaque
          </Link>
        </nav>
      </div>
    </header>
  );
}
