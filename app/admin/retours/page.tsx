import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";
import type { Metadata } from "next";
import { sql } from "@vercel/postgres";
import { estConnecte, motDePasseAdmin } from "@/lib/admin";
import FormulaireConnexion from "./FormulaireConnexion";
import { deconnexion } from "./actions";

export const metadata: Metadata = {
  title: "Retours utilisateurs | Panne Résolue",
  robots: { index: false, follow: false },
};

type ResumeCode = { code: string; pouces_haut: number; pouces_bas: number; commentaires: number };
type Retour = { id: string; code: string; helpful: boolean; comment: string | null; created_at: Date };

const formatDate = new Intl.DateTimeFormat("fr-FR", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Paris",
});

export default async function RetoursPage() {
  // Sans ça, un build sans ADMIN_PASSWORD fige la page en 404 statique.
  await connection();
  if (!motDePasseAdmin() || !process.env.POSTGRES_URL) notFound();

  if (!(await estConnecte())) {
    return (
      <div className="max-w-sm mx-auto px-6 pt-20 pb-16">
        <h1 className="font-display font-semibold text-2xl mb-6">Retours utilisateurs</h1>
        <FormulaireConnexion />
      </div>
    );
  }

  let resultats;
  try {
    resultats = await Promise.all([
      sql<ResumeCode>`
        SELECT code,
               COUNT(*) FILTER (WHERE helpful)::int     AS pouces_haut,
               COUNT(*) FILTER (WHERE NOT helpful)::int AS pouces_bas,
               COUNT(comment)::int                      AS commentaires
          FROM app_private.page_feedback
         GROUP BY code
         ORDER BY pouces_bas DESC, pouces_haut DESC, code
      `,
      sql<Retour>`
        SELECT id, code, helpful, comment, created_at
          FROM app_private.page_feedback
         ORDER BY created_at DESC
         LIMIT 100
      `,
    ]);
  } catch (erreur) {
    console.error("[admin/retours] lecture impossible", erreur);
    const tableAbsente = (erreur as { code?: string }).code === "42P01";
    return (
      <div className="max-w-xl mx-auto px-6 pt-20 pb-16">
        <h1 className="font-display font-semibold text-2xl mb-4">Retours utilisateurs</h1>
        <p className="text-[#C7CBD3] text-sm leading-relaxed">
          {tableAbsente
            ? "La table des retours n'existe pas encore : exécute db/migrations/001_page_feedback.sql dans l'éditeur SQL de Neon."
            : "Impossible de lire la base pour le moment. Le détail est dans les logs Vercel."}
        </p>
      </div>
    );
  }
  const [resume, derniers] = resultats;

  const totalHaut = resume.rows.reduce((s, r) => s + r.pouces_haut, 0);
  const totalBas = resume.rows.reduce((s, r) => s + r.pouces_bas, 0);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-16">
      <div className="flex items-center justify-between gap-3 mb-6">
        <h1 className="font-display font-semibold text-2xl">Retours utilisateurs</h1>
        <form action={deconnexion}>
          <button className="text-muted text-sm hover:text-text transition-colors cursor-pointer">
            Déconnexion
          </button>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Chiffre valeur={totalHaut + totalBas} libelle="retours" />
        <Chiffre valeur={totalHaut} libelle="👍 utiles" />
        <Chiffre valeur={totalBas} libelle="👎 pas utiles" />
      </div>

      <h2 className="font-display font-semibold text-base mt-8 mb-3">Par fiche</h2>
      {resume.rows.length === 0 ? (
        <p className="text-muted text-sm">Aucun retour pour l&apos;instant.</p>
      ) : (
        <div className="bg-surface border border-line rounded-xl overflow-hidden">
          {resume.rows.map((r) => (
            <Link
              key={r.code}
              href={`/codes/${r.code.toLowerCase()}`}
              className="flex items-center gap-3 px-4 py-3 border-b border-line last:border-b-0 hover:bg-surface-2 transition-colors"
            >
              <span className="font-mono font-semibold text-xs text-amber bg-amber/10 px-2 py-1 rounded-md">
                {r.code}
              </span>
              <span className="flex-1" />
              <span className="text-sm tabular-nums">👍 {r.pouces_haut}</span>
              <span className="text-sm tabular-nums">👎 {r.pouces_bas}</span>
              <span className="text-muted text-xs tabular-nums w-14 text-right">💬 {r.commentaires}</span>
            </Link>
          ))}
        </div>
      )}

      <h2 className="font-display font-semibold text-base mt-8 mb-3">Derniers retours</h2>
      {derniers.rows.length > 0 && (
        <div className="space-y-2.5">
          {derniers.rows.map((r) => (
            <div key={r.id} className="bg-surface border border-line rounded-xl px-4 py-3">
              <div className="flex items-center gap-2.5 text-xs">
                <span aria-label={r.helpful ? "utile" : "pas utile"}>{r.helpful ? "👍" : "👎"}</span>
                <Link href={`/codes/${r.code.toLowerCase()}`} className="font-mono font-semibold text-amber">
                  {r.code}
                </Link>
                <span className="text-muted ml-auto">{formatDate.format(r.created_at)}</span>
              </div>
              {r.comment && (
                <p className="text-[#C7CBD3] text-sm leading-relaxed mt-2 whitespace-pre-wrap break-words">
                  {r.comment}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Chiffre({ valeur, libelle }: { valeur: number; libelle: string }) {
  return (
    <div className="bg-surface border border-line rounded-xl px-3 py-4 text-center">
      <div className="font-mono font-semibold text-xl">{valeur}</div>
      <div className="text-muted text-xs mt-1">{libelle}</div>
    </div>
  );
}
