import Link from "next/link";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import ShareButton from "@/components/ShareButton";
import { getCodeByCode, normalizeCode, diagnoseCode, codes } from "@/data/codes";

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
  if (!dtc) {
    const canonical = normalizeCode(code).toLowerCase();
    if (canonical !== code.toLowerCase() && getCodeByCode(canonical)) {
      redirect(`/codes/${canonical}`);
    }

    const diagnostic = diagnoseCode(code);
    return (
      <>
        <Header />
        <div className="max-w-xl mx-auto px-6 pt-16 pb-16 text-center">
          <div className="font-mono text-xs text-muted mb-4">
            <Link href="/" className="hover:text-text">Accueil</Link> /{" "}
            <span className="text-amber">{code.toUpperCase()}</span>
          </div>

          <h1 className="font-display font-semibold text-2xl">
            Ce code n&apos;a pas pu être trouvé
          </h1>

          <div className="bg-surface border border-line rounded-xl p-5 mt-5 text-left">
            <div className="font-mono text-xs text-muted tracking-wide mb-2">CE QUI NE VA PAS</div>
            <p className="text-[#C7CBD3] text-sm leading-relaxed">{diagnostic.message}</p>
          </div>

          <div className="flex gap-3 justify-center flex-wrap mt-6">
            <Link
              href="/"
              className="bg-amber text-bg border-none rounded-lg px-5 py-3 font-semibold text-sm hover:brightness-110 transition-[filter]"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/codes/categorie/p03xx"
              className="bg-surface border border-line rounded-lg px-5 py-3 font-semibold text-sm hover:border-amber transition-colors"
            >
              Voir les codes disponibles
            </Link>
          </div>

          <div className="mt-10 pt-7 border-t border-line text-left">
            <div className="font-mono text-xs text-muted tracking-wide mb-3">
              QUELQUES CODES DISPONIBLES
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
            <div className="flex items-center gap-2.5 mt-2.5 flex-wrap">
              <div className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium ${sevStyle[dtc.severite]}`}>
                ● {dtc.severiteLabel}
              </div>
              <ShareButton code={dtc.code} titre={dtc.titre} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mt-7">
          <div>
            <div className="bg-surface border border-line rounded-xl p-6 mb-5">
              <h3 className="font-display font-semibold text-base mb-3.5">Signification</h3>
              <p className="text-[#C7CBD3] text-sm leading-relaxed">{dtc.description}</p>
            </div>

            {dtc.symptomes && dtc.symptomes.length > 0 && (
              <div className="bg-surface border border-line rounded-xl p-6 mb-5">
                <h3 className="font-display font-semibold text-base mb-3.5">Symptômes</h3>
                <ul>
                  {dtc.symptomes.map((s) => (
                    <li key={s} className="flex gap-2.5 py-2 border-b border-line last:border-b-0 text-sm text-[#C7CBD3]">
                      <span className="text-cyan flex-shrink-0">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-surface border border-line rounded-xl p-6 mb-5">
              <h3 className="font-display font-semibold text-base mb-3.5">Causes possibles, par fréquence</h3>
              <ul>
                {dtc.causes.map((c) => (
                  <li key={c.libelle} className="flex gap-3 py-2.5 border-b border-line last:border-b-0 text-sm text-[#C7CBD3]">
                    <span className="font-mono text-cyan text-xs flex-shrink-0 w-10">{c.pourcentage}%</span>
                    {c.libelle}
                  </li>
                ))}
              </ul>
            </div>

            {dtc.diagnostic && (
              <div className="bg-surface border border-line rounded-xl p-6 mb-5">
                <h3 className="font-display font-semibold text-base mb-3.5">Diagnostic</h3>
                <p className="text-[#C7CBD3] text-sm leading-relaxed">{dtc.diagnostic}</p>
              </div>
            )}

            {dtc.controles && dtc.controles.length > 0 && (
              <div className="bg-surface border border-line rounded-xl p-6 mb-5">
                <h3 className="font-display font-semibold text-base mb-3.5">Contrôles à effectuer</h3>
                <ul>
                  {dtc.controles.map((c, i) => (
                    <li key={c} className="flex gap-3 py-2.5 border-b border-line last:border-b-0 text-sm text-[#C7CBD3]">
                      <span className="font-mono text-cyan text-xs flex-shrink-0 w-5">{i + 1}.</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

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

            {dtc.vehiculesConcernes && (
              <div className="bg-surface border border-line rounded-xl p-6 mt-5">
                <h3 className="font-display font-semibold text-base mb-3.5">Véhicules concernés</h3>
                <p className="text-[#C7CBD3] text-sm leading-relaxed">{dtc.vehiculesConcernes}</p>
              </div>
            )}

            {dtc.moteursConcernes && (
              <div className="bg-surface border border-line rounded-xl p-6 mt-5">
                <h3 className="font-display font-semibold text-base mb-3.5">Moteurs concernés</h3>
                <p className="text-[#C7CBD3] text-sm leading-relaxed">{dtc.moteursConcernes}</p>
              </div>
            )}

            {dtc.piecesConcernees && dtc.piecesConcernees.length > 0 && (
              <div className="bg-surface border border-line rounded-xl p-6 mt-5">
                <h3 className="font-display font-semibold text-base mb-3.5">Pièces susceptibles d&apos;être concernées</h3>
                <ul>
                  {dtc.piecesConcernees.map((p) => (
                    <li key={p} className="flex gap-2.5 py-2 border-b border-line last:border-b-0 text-sm text-[#C7CBD3]">
                      <span className="text-cyan flex-shrink-0">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-surface border border-line rounded-xl p-6 mt-5">
              <h3 className="font-display font-semibold text-base mb-3.5">Pièces / offres</h3>
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
