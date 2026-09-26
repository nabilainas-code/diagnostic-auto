import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const COOKIE_ADMIN = "pr-admin";

// Posé sur les appareils de l'administrateur pour que ses propres visites
// ne faussent pas les statistiques. Non signé : quelqu'un qui le poserait
// ne ferait que s'exclure lui-même.
export const COOKIE_EXCLUSION = "pr-exclu-stats";
export const OPTIONS_EXCLUSION = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
};

export async function appareilExclu(): Promise<boolean> {
  return (await cookies()).get(COOKIE_EXCLUSION)?.value === "1";
}

export function motDePasseAdmin(): string | null {
  const valeur = process.env.ADMIN_PASSWORD;
  return valeur && valeur.length > 0 ? valeur : null;
}

// Signé avec le mot de passe : impossible à fabriquer sans lui, et changer
// le mot de passe sur Vercel déconnecte toutes les sessions ouvertes.
export function jetonSession(motDePasse: string): string {
  return createHmac("sha256", motDePasse).update("panne-resolue:admin-retours").digest("hex");
}

// Comparaison à durée constante, sur des empreintes de même longueur.
export function egalSecurise(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export async function estConnecte(): Promise<boolean> {
  const motDePasse = motDePasseAdmin();
  if (!motDePasse) return false;
  const jeton = (await cookies()).get(COOKIE_ADMIN)?.value;
  return jeton !== undefined && egalSecurise(jeton, jetonSession(motDePasse));
}
