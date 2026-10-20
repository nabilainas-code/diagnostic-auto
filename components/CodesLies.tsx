import Link from "next/link";
import type { CodeDefaut } from "@/data/codes";
import { codesVoirAussi, codesVoisins, sousCategorieDuCode } from "@/data/navigation";

function Liste({ titre, codes }: { titre: string; codes: CodeDefaut[] }) {
  return (
    <div>
      <h3 className="font-display font-semibold text-base mb-3">{titre}</h3>
      <div className="bg-surface border border-line rounded-xl overflow-hidden">
        {codes.map((c) => (
          <Link
            key={c.code}
            href={`/codes/${c.code.toLowerCase()}`}
            className="flex items-center gap-3 px-4 py-3 border-b border-line last:border-b-0 hover:bg-surface-2 transition-colors"
          >
            <span className="font-mono font-semibold text-xs text-amber bg-amber/10 px-2 py-1 rounded-md flex-shrink-0 min-w-[62px] text-center">
              {c.code}
            </span>
            <span className="text-sm">{c.titre}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function CodesLies({ dtc }: { dtc: CodeDefaut }) {
  const voirAussi = codesVoirAussi(dtc);
  const dejaListes = new Set(voirAussi.map((c) => c.code));
  const voisins = codesVoisins(dtc).filter((c) => !dejaListes.has(c.code));
  const systeme = sousCategorieDuCode(dtc);

  if (voirAussi.length === 0 && voisins.length === 0) return null;

  return (
    <nav aria-label="Autres codes défaut" className="mt-8 grid gap-6 lg:grid-cols-2">
      {voirAussi.length > 0 && <Liste titre="À voir aussi" codes={voirAussi} />}
      {voisins.length > 0 && (
        <Liste
          titre={systeme ? `Autres codes ${systeme.label}` : `Autres codes — ${dtc.categorieLabel}`}
          codes={voisins}
        />
      )}
    </nav>
  );
}
