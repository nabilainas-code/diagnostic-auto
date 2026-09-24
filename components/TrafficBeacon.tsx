"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function TrafficBeacon() {
  const pathname = usePathname();
  const dejaCompte = useRef(false);

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    // Seule la première page vue de l'onglet est une « visite » : c'est
    // là que document.referrer dit d'où vient le visiteur. Les
    // navigations suivantes sont internes au site.
    let entree = false;
    let referrer: string | null = null;
    if (!dejaCompte.current) {
      dejaCompte.current = true;
      let interne = false;
      try {
        interne = document.referrer !== "" && new URL(document.referrer).origin === location.origin;
      } catch {}
      entree = !interne;
      referrer = interne ? null : document.referrer || null;
    }

    const corps = JSON.stringify({ path: pathname, entree, referrer });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", new Blob([corps], { type: "application/json" }));
    } else {
      fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: corps, keepalive: true }).catch(() => {});
    }
  }, [pathname]);

  return null;
}
