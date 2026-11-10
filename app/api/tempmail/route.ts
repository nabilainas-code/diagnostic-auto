import { NextResponse } from "next/server";

// Relais vers l'API publique de Guerrilla Mail pour la page /mail-provisoire.
const BASE = "https://api.guerrillamail.com/ajax.php";
const FONCTIONS = new Set(["get_email_address", "check_email", "fetch_email"]);
const SIMPLE = /^[A-Za-z0-9_-]{1,64}$/;

export async function GET(request: Request) {
  const src = new URL(request.url).searchParams;
  const f = src.get("f") ?? "";
  if (!FONCTIONS.has(f)) {
    return NextResponse.json({ error: "fonction refusée" }, { status: 400 });
  }

  const url = new URL(BASE);
  url.searchParams.set("f", f);
  url.searchParams.set(
    "ip",
    (request.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0].trim(),
  );
  url.searchParams.set("agent", "mail-provisoire");
  for (const cle of ["sid_token", "seq", "email_id"]) {
    const v = src.get(cle);
    if (v === null) continue;
    if (!SIMPLE.test(v)) {
      return NextResponse.json({ error: "paramètre refusé" }, { status: 400 });
    }
    url.searchParams.set(cle, v);
  }

  try {
    const r = await fetch(url, {
      headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0" },
      cache: "no-store",
    });
    const corps = await r.text();
    return new NextResponse(corps, {
      status: r.status,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ error: "service indisponible" }, { status: 502 });
  }
}
