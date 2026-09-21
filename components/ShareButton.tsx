"use client";

import { useState } from "react";

export default function ShareButton({
  code,
  titre,
}: {
  code: string;
  titre: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const shareData = {
      title: `${code} — ${titre}`,
      text: `Code défaut ${code} sur Panne Résolue`,
      url,
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // Annulé par l'utilisateur — rien à faire.
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Copie impossible (navigateur trop ancien) — pas d'action de repli.
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full font-medium bg-surface-2 border border-line text-[#C7CBD3] hover:border-cyan hover:text-cyan transition-colors cursor-pointer"
    >
      {copied ? (
        "Lien copié ✓"
      ) : (
        <>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.6" y1="10.6" x2="15.4" y2="6.4" />
            <line x1="8.6" y1="13.4" x2="15.4" y2="17.6" />
          </svg>
          Partager
        </>
      )}
    </button>
  );
}
