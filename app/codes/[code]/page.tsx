import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { getCodeByCode, codes } from "@/data/codes";

const sevStyle = {
  faible: "text-cyan bg-cyan/10",
  moderee: "text-amber bg-amber/10",
  elevee: "text-[#E5484D] bg-[#E5484D]/10",
};

export function generateStaticParams() {
  return codes.map((c) => ({ code: c.code.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const dtc = getCodeByCode(code);
  if (!dtc) return { title: "Code défaut introuvable" };
  return {
    title: `${dtc.code} — ${dtc.titre} | Panne Résolue`,
    description: dtc.description.slice(0, 155),
  };
}

export default async function CodePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const dtc = getCodeByCode(code);
  if (!dtc) notFound();

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="font-mono text-xs text-muted mb-5">
          <Link href="/" className="hover:text-text">Accueil</Link> /{" "}
          <Link href={`/codes/categorie/${dtc.categorie}`} className="hover:text-text">
            {dtc.categorie.toUpperCase()}
          </Link>{" "}
          / <span className="text-amber">{dtc.code}</span>
        </div>

        <div className="flex gap-5 items-start flex-wrap pb-7 border-b border-line">
          <div className="font-mono text-3xl sm:text-[2.2rem] font-semibold text-amber bg-surface border border-line px-5 py-3.5 rounded-xl flex-shrink-0">
            {dtc.code}
          </div>
          <div>
            <h1 className="font-display font-semibold text-2xl sm:text-[1.7rem] leading-tight">{dtc.titre}</h1>
            <div className={`inline-flex items-center gap-1.5 mt-2.5 text-sm px-3 py-1.5 rounded-full font-medium ${sevStyle[dtc.severite]}`}>
              ● {dtc.severiteLabel}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mt-7">
          <div>
            <div className="bg-surface border border-line rounded-xl p-6 mb-5">
              <h3 className="font-display font-semibold text-base mb-3.5">Ce que signifie ce code</h3>
              <p className="text-[#C7CBD3] text-sm leading-relaxed">{dtc.description}</p>
            </div>

            <div className="bg-surface border border-line rounded-xl p-6 mb-5">
              <h3 className="font-display font-semibold text-base mb-3.5">Causes probables, par fréquence</h3>
              <ul>
                {dtc.causes.map((c) => (
                  <li key={c.libelle} className="flex gap-3 py-2.5 border-b border-line last:border-b-0 text-sm text-[#C7CBD3]">
                    <span className="font-mono text-cyan text-xs flex-shrink-0 w-10">{c.pourcentage}%</span>
                    {c.libelle}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-2 border border-dashed border-line rounded-xl p-6 text-center text-muted text-xs font-mono tracking-wide mb-5">
              EMPLACEMENT PUBLICITAIRE — RESPONSIVE
            </div>

            <div className="bg-surface border border-line rounded-xl p-6">
              <h3 className="font-display font-semibold text-base mb-3.5">Ce que ferait un pro</h3>
              <p className="text-[#C7CBD3] text-sm leading-relaxed">{dtc.avisPro}</p>
            </div>
          </div>

          <div>
            <div className="bg-gradient-to-br from-surface-2 to-surface border border-line rounded-xl p-5.5 text-center">
              <p className="text-muted text-sm mb-3.5">
                Obtenez les pièces exactes pour <strong className="text-text">votre</strong> véhicule
              </p>
              <form action="/vehicule" className="flex gap-2">
                <input
                  name="plaque"
                  placeholder="AB-123-CD"
                  className="flex-1 bg-surface border border-line rounded-lg px-3 py-2.5 text-text font-mono text-center tracking-wide text-sm uppercase focus:outline-none focus:ring-2 focus:ring-cyan"
                />
                <button className="bg-amber border-none rounded-lg px-4 text-bg font-semibold text-sm cursor-pointer hover:brightness-110">
                  Valider
                </button>
              </form>
            </div>

            <div className="bg-surface border border-line rounded-xl p-6 mt-5">
              <h3 className="font-display font-semibold text-base mb-3.5">Pièces généralement concernées</h3>
              {dtc.pieces.map((p) => (
                <div key={p.nom} className="flex gap-3 items-center bg-surface-2 rounded-lg p-3.5 mb-2.5 last:mb-0">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-cyan to-[#2E8B84] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{p.nom}</div>
                    <div className="text-muted text-xs mt-0.5">{p.boutique}</div>
                  </div>
                  <div className="font-mono text-amber font-semibold text-sm flex-shrink-0">{p.prix}</div>
                </div>
              ))}
            </div>

            <div className="bg-surface-2 border border-dashed border-line rounded-xl p-6 text-center text-muted text-xs font-mono tracking-wide mt-5">
              PUBLICITÉ — CARRÉ
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
