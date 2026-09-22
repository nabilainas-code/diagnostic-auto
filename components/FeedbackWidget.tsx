"use client";

import { useCallback, useState, useSyncExternalStore } from "react";

type Etat = "question" | "precision" | "termine" | "indisponible";

const COMMENT_MAX = 2000;

function cleStockage(code: string) {
  return `pr-feedback-${code}`;
}

// Le widget ne réagit à aucune mise à jour externe : la valeur n'est lue
// qu'au montage, les changements suivants passent par l'état local.
const souscrire = () => () => {};

export default function FeedbackWidget({ code }: { code: string }) {
  const [etat, setEtat] = useState<Etat>("question");
  const [feedbackId, setFeedbackId] = useState<string | null>(null);
  const [commentaire, setCommentaire] = useState("");
  const [piege, setPiege] = useState("");
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

  const lireStockage = useCallback(() => {
    try {
      return window.localStorage.getItem(cleStockage(code)) !== null;
    } catch {
      // Stockage indisponible (navigation privée) — on repose la question.
      return false;
    }
  }, [code]);

  // Sur le serveur la réponse est toujours "pas encore répondu" : React
  // réaligne l'affichage après hydratation, sans incohérence.
  const dejaRepondu = useSyncExternalStore(souscrire, lireStockage, () => false);
  const etatAffiche: Etat = dejaRepondu && etat === "question" ? "termine" : etat;

  function memoriser() {
    try {
      window.localStorage.setItem(cleStockage(code), "1");
    } catch {
      // Sans stockage, la question sera reposée à la prochaine visite.
    }
  }

  async function voter(helpful: boolean) {
    setEnvoiEnCours(true);
    try {
      const reponse = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, helpful, website: piege }),
      });

      if (!reponse.ok) {
        setEtat("indisponible");
        return;
      }

      const donnees = await reponse.json();
      memoriser();
      setFeedbackId(typeof donnees.id === "string" ? donnees.id : null);
      setEtat("precision");
    } catch {
      setEtat("indisponible");
    } finally {
      setEnvoiEnCours(false);
    }
  }

  async function envoyerCommentaire() {
    const texte = commentaire.trim();
    if (texte.length === 0 || !feedbackId) {
      setEtat("termine");
      return;
    }

    setEnvoiEnCours(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: feedbackId, comment: texte, website: piege }),
      });
    } catch {
      // Le vote est déjà enregistré : on n'alarme pas l'utilisateur
      // pour la précision facultative.
    } finally {
      setEnvoiEnCours(false);
      setEtat("termine");
    }
  }

  return (
    <div className="bg-surface border border-line rounded-xl p-6 mt-6">
      {etatAffiche === "question" && (
        <div className="flex items-center gap-4 flex-wrap justify-between">
          <h3 className="font-display font-semibold text-base">
            Ce diagnostic vous a-t-il aidé ?
          </h3>
          <div className="flex gap-2.5">
            <button
              onClick={() => voter(true)}
              disabled={envoiEnCours}
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full font-medium bg-surface-2 border border-line text-[#C7CBD3] hover:border-cyan hover:text-cyan transition-colors cursor-pointer disabled:opacity-50"
            >
              <span aria-hidden="true">👍</span> Oui
            </button>
            <button
              onClick={() => voter(false)}
              disabled={envoiEnCours}
              className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full font-medium bg-surface-2 border border-line text-[#C7CBD3] hover:border-amber hover:text-amber transition-colors cursor-pointer disabled:opacity-50"
            >
              <span aria-hidden="true">👎</span> Non
            </button>
          </div>
        </div>
      )}

      {etatAffiche === "precision" && (
        <div>
          <h3 className="font-display font-semibold text-base mb-1.5">
            Merci — un détail à ajouter ?
          </h3>
          <p className="text-muted text-xs mb-3.5">
            Facultatif. Votre message n&apos;est pas publié : il sert uniquement à
            corriger et améliorer cette fiche.
          </p>
          <textarea
            value={commentaire}
            onChange={(e) => setCommentaire(e.target.value.slice(0, COMMENT_MAX))}
            rows={3}
            placeholder="Ce qui manquait, la cause réellement trouvée, la pièce remplacée…"
            className="w-full bg-surface-2 border border-line rounded-lg px-3 py-2.5 text-text text-sm resize-y focus:outline-none focus:ring-2 focus:ring-cyan"
          />
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <button
              onClick={envoyerCommentaire}
              disabled={envoiEnCours}
              className="bg-amber text-bg border-none rounded-lg px-4 py-2 font-semibold text-sm cursor-pointer hover:brightness-110 disabled:opacity-50"
            >
              Envoyer
            </button>
            <button
              onClick={() => setEtat("termine")}
              className="text-muted text-sm hover:text-text transition-colors cursor-pointer"
            >
              Non merci
            </button>
          </div>
        </div>
      )}

      {etatAffiche === "termine" && (
        <p className="text-[#C7CBD3] text-sm">
          Merci, c&apos;est noté — votre retour aide à améliorer cette fiche.
        </p>
      )}

      {etatAffiche === "indisponible" && (
        <p className="text-muted text-sm">
          Votre retour n&apos;a pas pu être enregistré. Réessayez plus tard.
        </p>
      )}

      {/* Champ piège : invisible pour un humain, rempli par les robots. */}
      <input
        type="text"
        name="website"
        value={piege}
        onChange={(e) => setPiege(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />
    </div>
  );
}
