import { NextResponse } from "next/server";

// Relais vers l'API publique mail.tm pour la page /mail-provisoire.
// Seuls les chemins utiles sont autorisés.
const BASE = "https://api.mail.tm";
const CHEMIN_OK = /^\/(domains|accounts|token|messages)(\/[A-Za-z0-9]{1,64})?$/;

async function relais(request: Request) {
  const chemin = new URL(request.url).searchParams.get("p") ?? "";
  if (!CHEMIN_OK.test(chemin)) {
    return NextResponse.json({ error: "chemin refusé" }, { status: 400 });
  }

  const headers: Record<string, string> = {
    Accept: "application/json",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36",
  };
  const auth = request.headers.get("authorization");
  if (auth) headers.Authorization = auth;

  const init: RequestInit = { method: request.method, headers };
  if (request.method === "POST") {
    headers["Content-Type"] = "application/json";
    init.body = await request.text();
  }

  try {
    const r = await fetch(BASE + chemin, init);
    const corps = r.status === 204 ? null : await r.text();
    return new NextResponse(corps, {
      status: r.status,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "service indisponible" }, { status: 502 });
  }
}

export const GET = relais;
export const POST = relais;
export const DELETE = relais;
