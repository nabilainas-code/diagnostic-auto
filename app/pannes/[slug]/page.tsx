import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { getPanneBySlug, pannes } from "@/data/pannes";

export function generateStaticParams() {
  return pannes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const panne = getPanneBySlug(slug);
  if (!panne) return { title: "Panne introuvable" };
  return {
    title: `${panne.titre} | Panne Résolue`,
    description: panne.intro.slice(0, 155),
  };
}

export default async function PanneDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const panne = getPanneBySlug(slug);
  if (!panne) notFound();

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="font-mono text-xs text-muted mb-5">
          <Link href="/" className="hover:text-text">Accueil</Link> /{" "}
          <Link href="/pannes" className="hover:text-text">Pannes connues</Link> /{" "}
          <span className="text-amber">{panne.boitier}</span>
        </div>

        <div className="pb-7 border-b border-line">
          <div className="font-mono text-xs text-amber tracking-wide">{panne.boitier} · {panne.marque}</div>
          <h1 className="font-display font-semibold text-2xl sm:text-[1.7rem] leading-tight mt-1.5">
            {panne.titre}
          </h1>
          <p className="text-muted text-sm mt-2.5 max-w-2xl leading-relaxed">{panne.intro}</p>
          <div className="flex gap-2 flex-wrap mt-3.5">
            {panne.modelesTouches.map((m) => (
              <span key={m} className="font-mono text-xs text-cyan bg-cyan/10 px-2.5 py-1 rounded-md">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 mt-7">
          <div>
            <div className="bg-surface border border-line rounded-xl p-6 mb-5">
              <h3 className="font-display font-semibold text-base mb-3.5">Symptômes typiques</h3>
              <ul>
                {panne.symptomes.map((s) => (
                  <li key={s} className="flex gap-3 py-2 border-b border-line last:border-b-0 text-sm text-[#C7CBD3]">
                    <span className="text-amber flex-shrink-0">●</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-line rounded-xl p-6 mb-5">
              <h3 className="font-display font-semibold text-base mb-3.5">Causes les plus fréquentes</h3>
              {panne.causes.map((c) => (
                <div key={c.titre} className="mb-4 last:mb-0">
                  <div className="text-sm font-medium text-text mb-1">{c.titre}</div>
                  <p className="text-[#C7CBD3] text-sm leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-surface-2 border border-dashed border-line rounded-xl p-6 text-center text-muted text-xs font-mono tracking-wide mb-5">
              EMPLACEMENT PUBLICITAIRE — RESPONSIVE
            </div>

            <div className="bg-surface border border-line rounded-xl p-6">
              <h3 className="font-display font-semibold text-base mb-3.5">Démarche conseillée</h3>
              <ol>
                {panne.demarche.map((etape, i) => (
                  <li key={etape} className="flex gap-3 py-2.5 border-b border-line last:border-b-0 text-sm text-[#C7CBD3]">
                    <span className="font-mono text-cyan text-xs flex-shrink-0 w-5">{i + 1}.</span>
                    {etape}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div>
            <div className="bg-surface border border-line rounded-xl p-6">
              <h3 className="font-display font-semibold text-base mb-3.5">Prix indicatifs</h3>
              {panne.prixIndicatif.map((p) => (
                <div key={p.intervention} className="flex gap-3 items-center justify-between bg-surface-2 rounded-lg p-3.5 mb-2.5 last:mb-0">
                  <div className="text-sm">{p.intervention}</div>
                  <div className="font-mono text-amber font-semibold text-sm flex-shrink-0">{p.prix}</div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-surface-2 to-surface border border-line rounded-xl p-5.5 mt-5">
              <p className="text-muted text-xs leading-relaxed">⚠ {panne.avertissement}</p>
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
