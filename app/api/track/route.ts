import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { appareilExclu } from "@/lib/admin";

const PATH_MAX = 200;

// Robots, outils d'aperçu de liens, de surveillance et navigateurs
// automatisés qui exécutent le JavaScript de la page : on ne les compte
// pas comme des visites. Aucun navigateur grand public n'annonce ces mots.
const RE_BOT =
  /bot|crawl|spider|slurp|facebookexternalhit|preview|headless|lighthouse|pingdom|uptime|monitor|inspectiontool|googleother|mediapartners|feedfetcher|python|curl|wget|httpclient|axios|node-fetch|go-http|java\/|scrapy|phantomjs|selenium|puppeteer|playwright/i;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function hoteReferrer(referrer: string | null): string | null {
  if (!referrer) return null;
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, "");
    return host === "panne-resolue.fr" ? null : host.slice(0, 200);
  } catch {
    return null;
  }
}

function appareil(userAgent: string | null): "mobile" | "ordinateur" | "inconnu" {
  if (!userAgent) return "inconnu";
  return /Mobi|Android|iPhone|iPad/i.test(userAgent) ? "mobile" : "ordinateur";
}

export async function POST(request: Request) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json({ ok: true });
  }

  const userAgent = request.headers.get("user-agent");
  if (!userAgent || RE_BOT.test(userAgent) || (await appareilExclu())) {
    return NextResponse.json({ ok: true });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!isRecord(payload) || typeof payload.path !== "string" || !payload.path.startsWith("/")) {
    return NextResponse.json({ error: "Chemin manquant." }, { status: 400 });
  }

  const path = payload.path.slice(0, PATH_MAX);
  const entree = payload.entree === true;
  // L'en-tête Referer de cette requête pointe vers la page du site
  // elle-même : la vraie provenance est document.referrer, envoyé par
  // le client pour la première page vue seulement.
  const referrerHost =
    entree && typeof payload.referrer === "string" ? hoteReferrer(payload.referrer) : null;
  const country = request.headers.get("x-vercel-ip-country")?.slice(0, 2) || null;
  const device = appareil(userAgent);

  try {
    await sql`
      INSERT INTO app_private.page_views (path, entree, referrer_host, country, device)
      VALUES (${path}, ${entree}, ${referrerHost}, ${country}, ${device})
    `;
    return NextResponse.json({ ok: true });
  } catch (erreur) {
    console.error("[track] échec de l'enregistrement", erreur);
    // Ne jamais faire échouer la page pour une visite non comptée.
    return NextResponse.json({ ok: true });
  }
}
