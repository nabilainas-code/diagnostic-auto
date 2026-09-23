"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_ADMIN, egalSecurise, jetonSession, motDePasseAdmin } from "@/lib/admin";

export type EtatConnexion = { erreur: string | null };

export async function connexion(_etat: EtatConnexion, formData: FormData): Promise<EtatConnexion> {
  const motDePasse = motDePasseAdmin();
  if (!motDePasse) return { erreur: "Page non configurée." };

  const saisie = formData.get("motDePasse");
  if (typeof saisie !== "string" || !egalSecurise(saisie, motDePasse)) {
    // Ralentit les essais en série.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { erreur: "Mot de passe incorrect." };
  }

  (await cookies()).set(COOKIE_ADMIN, jetonSession(motDePasse), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: 60 * 60 * 24 * 30,
  });
  redirect("/admin/retours");
}

export async function deconnexion() {
  (await cookies()).delete({ name: COOKIE_ADMIN, path: "/admin" });
  redirect("/admin/retours");
}
