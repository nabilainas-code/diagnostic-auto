"use client";

import { useActionState } from "react";
import { connexion, type EtatConnexion } from "./actions";

const etatInitial: EtatConnexion = { erreur: null };

export default function FormulaireConnexion() {
  const [etat, action, enCours] = useActionState(connexion, etatInitial);

  return (
    <form action={action} className="bg-surface border border-line rounded-xl p-6">
      <label htmlFor="motDePasse" className="block text-sm font-medium mb-2">
        Mot de passe
      </label>
      <input
        id="motDePasse"
        name="motDePasse"
        type="password"
        required
        autoComplete="current-password"
        className="w-full bg-surface-2 border border-line rounded-lg px-3 py-2.5 text-text text-sm focus:outline-none focus:ring-2 focus:ring-cyan"
      />
      {etat.erreur && (
        <p aria-live="polite" className="text-[#E5484D] text-sm mt-2.5">
          {etat.erreur}
        </p>
      )}
      <button
        disabled={enCours}
        className="mt-4 w-full bg-amber text-bg border-none rounded-lg px-4 py-2.5 font-semibold text-sm cursor-pointer hover:brightness-110 disabled:opacity-50"
      >
        {enCours ? "Vérification…" : "Se connecter"}
      </button>
    </form>
  );
}
