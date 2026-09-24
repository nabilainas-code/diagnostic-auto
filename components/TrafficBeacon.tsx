"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TrafficBeacon() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    const corps = JSON.stringify({ path: pathname });
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/track", new Blob([corps], { type: "application/json" }));
    } else {
      fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: corps, keepalive: true }).catch(() => {});
    }
  }, [pathname]);

  return null;
}
