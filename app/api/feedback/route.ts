import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { getCodeByCode } from "@/data/codes";

const COMMENT_MAX = 2000;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export async function POST(request: Request) {
  if (!process.env.POSTGRES_URL) {
    return NextResponse.json(
      { error: "Les retours ne sont pas encore activés." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  if (!isRecord(payload)) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // Champ piège : invisible pour un humain, rempli par les robots.
  // On répond comme si tout allait bien, sans rien enregistrer.
  if (typeof payload.website === "string" && payload.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const rawComment = typeof payload.comment === "string" ? payload.comment.trim() : "";
  if (rawComment.length > COMMENT_MAX) {
    return NextResponse.json(
      { error: `Le message ne peut pas dépasser ${COMMENT_MAX} caractères.` },
      { status: 400 },
    );
  }

  try {
    // Second temps : on rattache la précision facultative au vote déjà
    // enregistré. Une seule fois, et seulement sur un retour récent.
    if (typeof payload.id === "string") {
      if (rawComment.length === 0) {
        return NextResponse.json({ error: "Message vide." }, { status: 400 });
      }

      const { rowCount } = await sql`
        UPDATE app_private.page_feedback
           SET comment = ${rawComment}
         WHERE id = ${payload.id}::uuid
           AND comment IS NULL
           AND created_at > now() - interval '1 hour'
      `;

      if (rowCount === 0) {
        return NextResponse.json({ error: "Retour introuvable." }, { status: 404 });
      }

      return NextResponse.json({ ok: true });
    }

    // Premier temps : le vote lui-même.
    if (typeof payload.helpful !== "boolean") {
      return NextResponse.json({ error: "Vote manquant." }, { status: 400 });
    }

    const dtc = typeof payload.code === "string" ? getCodeByCode(payload.code) : undefined;
    if (!dtc) {
      return NextResponse.json({ error: "Code défaut inconnu." }, { status: 400 });
    }

    const { rows } = await sql<{ id: string }>`
      INSERT INTO app_private.page_feedback (code, helpful, comment)
      VALUES (${dtc.code}, ${payload.helpful}, ${rawComment.length > 0 ? rawComment : null})
      RETURNING id
    `;

    return NextResponse.json({ ok: true, id: rows[0].id });
  } catch (erreur) {
    // Visible dans les logs Vercel : sans ça, une base mal configurée
    // ressemble à une panne silencieuse.
    console.error("[feedback] échec de l'enregistrement", erreur);
    return NextResponse.json(
      { error: "Enregistrement impossible pour le moment." },
      { status: 500 },
    );
  }
}
