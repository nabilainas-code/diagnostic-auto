"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_EXCLUSION, OPTIONS_EXCLUSION, estConnecte } from "@/lib/admin";

export async function exclureAppareil() {
  if (await estConnecte()) {
    (await cookies()).set(COOKIE_EXCLUSION, "1", OPTIONS_EXCLUSION);
  }
  redirect("/admin/trafic");
}

export async function compterAppareil() {
  if (await estConnecte()) {
    (await cookies()).delete({ name: COOKIE_EXCLUSION, path: "/" });
  }
  redirect("/admin/trafic");
}
