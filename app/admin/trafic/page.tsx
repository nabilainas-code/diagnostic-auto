import { notFound, redirect } from "next/navigation";
import { connection } from "next/server";
import type { Metadata } from "next";
import { sql } from "@vercel/postgres";
import { estConnecte, motDePasseAdmin } from "@/lib/admin";
import AdminNav from "../AdminNav";
import Chiffre from "../Chiffre";
import { deconnexion } from "../retours/actions";

export const metadata: Metadata = {
  title: "Trafic | Panne Résolue",
  robots: { index: false, follow: false },
};

const NB_JOURS_SERIE = 14;

type Totaux = { jour: number; semaine: number; mois: number; pages_vues: number };
type JourVisites = { jour: string; visites: number };
type Ligne = { libelle: string; visites: number };
type Appareils = { device: string; visites: number };

const fmtJourCourt = new Intl.DateTimeFormat("fr-FR", { weekday: "short", timeZone: "Europe/Paris" });
const fmtJourISO = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Paris",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function derniersJours(n: number): string[] {
  const jours: string[] = [];
  for (let i = n - 1; i >= 0; i--) {
    jours.push(fmtJourISO.format(new Date(Date.now() - i * 86_400_000)));
  }
  return jours;
}

function drapeau(code: string): string {
  if (!/^[A-Z]{2}$/.test(code)) return "🌍";
  const points = [...code].map((c) => 127397 + c.charCodeAt(0));
  return String.fromCodePoint(...points);
}

export default async function TraficPage() {
  // Sans ça, un build sans ADMIN_PASSWORD fige la page en 404 statique.
  await connection();
  if (!motDePasseAdmin() || !process.env.POSTGRES_URL) notFound();

  if (!(await estConnecte())) {
    // Le formulaire de connexion vit sur /admin/retours ; on y renvoie
    // plutôt que de dupliquer le formulaire ici.
    redirect("/admin/retours");
  }

  let resultats;
  try {
    resultats = await Promise.all([
      sql<Totaux>`
        SELECT
          COUNT(*) FILTER (WHERE entree AND created_at > now() - interval '1 day')::int   AS jour,
          COUNT(*) FILTER (WHERE entree AND created_at > now() - interval '7 days')::int  AS semaine,
          COUNT(*) FILTER (WHERE entree AND created_at > now() - interval '30 days')::int AS mois,
          COUNT(*) FILTER (WHERE created_at > now() - interval '30 days')::int            AS pages_vues
        FROM app_private.page_views
      `,
      sql<JourVisites>`
        SELECT to_char(created_at AT TIME ZONE 'Europe/Paris', 'YYYY-MM-DD') AS jour,
               COUNT(*)::int AS visites
          FROM app_private.page_views
         WHERE entree AND created_at > now() - (${NB_JOURS_SERIE}::int * interval '1 day')
         GROUP BY 1
      `,
      sql<Ligne>`
        SELECT path AS libelle, COUNT(*)::int AS visites
          FROM app_private.page_views
         WHERE created_at > now() - interval '30 days'
         GROUP BY path
         ORDER BY visites DESC
         LIMIT 10
      `,
      sql<Ligne>`
        SELECT COALESCE(referrer_host, 'Direct') AS libelle, COUNT(*)::int AS visites
          FROM app_private.page_views
         WHERE entree AND created_at > now() - interval '30 days'
         GROUP BY 1
         ORDER BY visites DESC
         LIMIT 6
      `,
      sql<Ligne>`
        SELECT COALESCE(country, '—') AS libelle, COUNT(*)::int AS visites
          FROM app_private.page_views
         WHERE entree AND created_at > now() - interval '30 days'
         GROUP BY 1
         ORDER BY visites DESC
         LIMIT 6
      `,
      sql<Appareils>`
        SELECT device, COUNT(*)::int AS visites
          FROM app_private.page_views
         WHERE entree AND created_at > now() - interval '30 days'
         GROUP BY device
      `,
    ]);
  } catch (erreur) {
    console.error("[admin/trafic] lecture impossible", erreur);
    const tableAbsente = (erreur as { code?: string }).code === "42P01";
    return (
      <div className="max-w-xl mx-auto px-6 pt-8 pb-16">
        <h1 className="font-display font-semibold text-2xl mb-4">Trafic</h1>
        <AdminNav actif="trafic" />
        <p className="text-[#C7CBD3] text-sm leading-relaxed">
          {tableAbsente
            ? "La table des visites n'existe pas encore : exécute db/migrations/002_page_views.sql dans l'éditeur SQL de Neon."
            : "Impossible de lire la base pour le moment. Le détail est dans les logs Vercel."}
        </p>
      </div>
    );
  }
  const [totaux, serieBrute, pages, referrers, pays, appareils] = resultats;

  const parJour = new Map(serieBrute.rows.map((r) => [r.jour, r.visites]));
  const serie = derniersJours(NB_JOURS_SERIE).map((jour) => ({
    jour,
    visites: parJour.get(jour) ?? 0,
  }));
  const maxSerie = Math.max(1, ...serie.map((s) => s.visites));
  const totalSerie = serie.reduce((s, j) => s + j.visites, 0);

  const totalAppareils = appareils.rows.reduce((s, a) => s + a.visites, 0);
  const parDevice = (device: string) =>
    totalAppareils === 0 ? 0 : Math.round(((appareils.rows.find((a) => a.device === device)?.visites ?? 0) / totalAppareils) * 100);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-16">
      <div className="flex items-center justify-between gap-3 mb-4">
        <h1 className="font-display font-semibold text-2xl">Trafic</h1>
        <form action={deconnexion}>
          <button className="text-muted text-sm hover:text-text transition-colors cursor-pointer">
            Déconnexion
          </button>
        </form>
      </div>

      <AdminNav actif="trafic" />

      <div className="grid grid-cols-3 gap-3">
        <Chiffre valeur={totaux.rows[0].jour} libelle="aujourd'hui" />
        <Chiffre valeur={totaux.rows[0].semaine} libelle="7 derniers jours" />
        <Chiffre valeur={totaux.rows[0].mois} libelle="30 derniers jours" />
      </div>
      <p className="text-muted text-xs mt-2.5">
        Visites (arrivées sur le site) — {totaux.rows[0].pages_vues} pages vues en tout sur 30 jours.
      </p>

      <h2 className="font-display font-semibold text-base mt-8 mb-3">
        Visites par jour <span className="text-muted font-normal text-xs">(14 derniers jours)</span>
      </h2>
      {totalSerie === 0 ? (
        <p className="text-muted text-sm">Aucune visite sur les 14 derniers jours.</p>
      ) : (
        <div className="bg-surface border border-line rounded-xl p-4">
          <div className="flex items-end gap-1" style={{ height: 96 }}>
            {serie.map((j) => (
              <div
                key={j.jour}
                title={`${j.jour} : ${j.visites} visite${j.visites > 1 ? "s" : ""}`}
                className="flex-1 bg-cyan/70 rounded-t min-w-0"
                style={{ height: j.visites > 0 ? `${Math.max(4, (j.visites / maxSerie) * 100)}%` : 0 }}
              />
            ))}
          </div>
          <div className="flex gap-1 mt-1.5">
            {serie.map((j) => (
              <div key={j.jour} className="flex-1 text-center text-[10px] text-muted">
                {fmtJourCourt.format(new Date(j.jour + "T12:00:00"))}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-3 mt-8">
        <Chiffre valeur={`${parDevice("mobile")}%`} libelle="📱 mobile" />
        <Chiffre valeur={`${parDevice("ordinateur")}%`} libelle="💻 ordinateur" />
        <Chiffre valeur={`${parDevice("inconnu")}%`} libelle="❓ inconnu" />
      </div>

      <ListeBarres
        titre="Pages les plus vues"
        sousTitre="pages vues, 30 derniers jours"
        vide="Aucune visite pour l'instant."
        lignes={pages.rows}
      />

      <ListeBarres
        titre="Provenance"
        sousTitre="visites, 30 derniers jours"
        vide="Aucune visite pour l'instant."
        lignes={referrers.rows}
      />

      <ListeBarres
        titre="Pays"
        sousTitre="visites, 30 derniers jours"
        vide="Aucune visite pour l'instant."
        lignes={pays.rows.map((p) => ({ ...p, libelle: `${drapeau(p.libelle)} ${p.libelle}` }))}
      />
    </div>
  );
}

function ListeBarres({
  titre,
  sousTitre,
  lignes,
  vide,
}: {
  titre: string;
  sousTitre: string;
  lignes: Ligne[];
  vide: string;
}) {
  const max = Math.max(1, ...lignes.map((l) => l.visites));
  return (
    <div>
      <h2 className="font-display font-semibold text-base mt-8 mb-3">
        {titre} <span className="text-muted font-normal text-xs">({sousTitre})</span>
      </h2>
      {lignes.length === 0 ? (
        <p className="text-muted text-sm">{vide}</p>
      ) : (
        <div className="bg-surface border border-line rounded-xl divide-y divide-line">
          {lignes.map((l) => (
            <div key={l.libelle} className="px-4 py-3">
              <div className="flex items-center justify-between gap-3 text-sm mb-1.5">
                <span className="truncate">{l.libelle}</span>
                <span className="font-mono text-xs text-muted tabular-nums flex-shrink-0">{l.visites}</span>
              </div>
              <div className="h-1.5 bg-surface-2 rounded-full overflow-hidden">
                <div className="h-full bg-cyan rounded-full" style={{ width: `${(l.visites / max) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
