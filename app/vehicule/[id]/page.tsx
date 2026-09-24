import Link from "next/link";
import Header from "@/components/Header";
import { getVehiculeByPlaque, vehicules } from "@/data/vehicules";

export function generateStaticParams() {
  return vehicules.map((v) => ({ id: v.plaque.toLowerCase() }));
}

export default async function VehiculePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vehicule = getVehiculeByPlaque(id);

  if (!vehicule) {
    return (
      <>
        <Header />
        <div className="max-w-2xl mx-auto px-6 pt-16 pb-16 text-center">
          <div className="font-mono text-xs text-muted mb-4">
            <Link href="/" className="hover:text-text">Accueil</Link> / Véhicule introuvable
          </div>
          <h1 className="font-display font-semibold text-2xl mb-3">
            Plaque non reconnue
          </h1>
          <p className="text-muted text-sm leading-relaxed mb-8">
            On n&apos;a pas retrouvé de véhicule pour <span className="font-mono text-amber">{id.toUpperCase()}</span> —
            plaque étrangère, saisie incorrecte, ou véhicule pas encore en base. Identifiez votre
            véhicule manuellement à la place :
          </p>

          <form className="bg-surface border border-line rounded-xl p-6 text-left space-y-4">
            <div>
              <label className="text-xs text-muted font-mono block mb-1.5">MARQUE</label>
              <select className="w-full bg-surface-2 border border-line rounded-lg px-3.5 py-2.5 text-text text-sm focus:outline-none focus:ring-2 focus:ring-cyan">
                <option>Peugeot</option>
                <option>Renault</option>
                <option>Citroën</option>
                <option>Volkswagen</option>
                <option>Autre…</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted font-mono block mb-1.5">MODÈLE</label>
              <select className="w-full bg-surface-2 border border-line rounded-lg px-3.5 py-2.5 text-text text-sm focus:outline-none focus:ring-2 focus:ring-cyan">
                <option>308</option>
                <option>208</option>
                <option>3008</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted font-mono block mb-1.5">ANNÉE</label>
              <select className="w-full bg-surface-2 border border-line rounded-lg px-3.5 py-2.5 text-text text-sm focus:outline-none focus:ring-2 focus:ring-cyan">
                <option>2016</option>
                <option>2018</option>
                <option>2020</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-amber text-bg font-semibold text-sm rounded-lg py-3 hover:brightness-110 transition-[filter]"
            >
              Voir les pièces compatibles
            </button>
          </form>
        </div>
      </>
    );
  }

  const categories = Array.from(new Set(vehicule.pieces.map((p) => p.categorie)));

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="font-mono text-xs text-muted mb-5">
          <Link href="/" className="hover:text-text">Accueil</Link> / Véhicule / <span className="text-amber">{vehicule.plaque}</span>
        </div>

        <div className="bg-surface border border-line rounded-xl p-6 flex flex-wrap gap-x-8 gap-y-3 items-center">
          <div>
            <div className="font-display font-semibold text-xl">
              {vehicule.marque} {vehicule.modele}
            </div>
            <div className="text-muted text-sm mt-0.5">
              {vehicule.generation} · {vehicule.motorisation}
            </div>
          </div>
          <div className="flex gap-6 ml-auto text-sm">
            <div>
              <div className="text-muted text-xs font-mono">MISE EN CIRCULATION</div>
              <div className="mt-0.5">{vehicule.anneeMiseEnCirculation}</div>
            </div>
            <div>
              <div className="text-muted text-xs font-mono">VIN</div>
              <div className="mt-0.5 font-mono text-xs">{vehicule.vin}</div>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="font-display font-semibold text-lg mb-3.5">{cat}</h2>
              <div className="bg-surface border border-line rounded-xl overflow-hidden">
                {vehicule.pieces
                  .filter((p) => p.categorie === cat)
                  .map((p) => (
                    <div
                      key={p.nom}
                      className="flex items-center gap-4 px-5 py-4 border-b border-line last:border-b-0"
                    >
                      <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-cyan to-[#2E8B84] flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium">{p.nom}</div>
                        <div className="text-muted text-xs mt-0.5">Prix indicatif constaté</div>
                      </div>
                      <div className="font-mono text-amber font-semibold text-sm flex-shrink-0">{p.prix}</div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
