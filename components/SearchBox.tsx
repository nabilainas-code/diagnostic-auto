"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { normalizeCode } from "@/data/codes";

function formatPlate(raw: string) {
  const clean = raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
  const letters1 = clean.slice(0, 2).replace(/[0-9]/g, "");
  const digits = clean.slice(2, 5).replace(/[^0-9]/g, "");
  const letters2 = clean.slice(5, 7).replace(/[0-9]/g, "");
  let out = letters1;
  if (digits) out += (out ? "-" : "") + digits;
  if (letters2) out += (out ? "-" : "") + letters2;
  return out;
}

export default function SearchBox() {
  const [tab, setTab] = useState<"code" | "plate">("code");
  const [value, setValue] = useState("");
  const router = useRouter();

  function handleChange(raw: string) {
    setValue(tab === "plate" ? formatPlate(raw) : raw.toUpperCase());
  }

  function handleSubmit() {
    if (!value) return;
    if (tab === "code") {
      router.push(`/codes/${normalizeCode(value).toLowerCase()}`);
    } else {
      router.push(`/vehicule/${value.toLowerCase()}`);
    }
  }

  return (
    <div className="mt-9 bg-surface border border-line rounded-2xl p-1.5 max-w-xl relative overflow-hidden">
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent animate-scan" />

      <div className="flex gap-1 px-2 pt-1.5 pb-0.5">
        <button
          onClick={() => setTab("code")}
          className={`font-mono text-xs px-3 py-1.5 rounded-md transition-colors ${
            tab === "code" ? "bg-surface-2 text-amber" : "text-muted"
          }`}
        >
          CODE DÉFAUT
        </button>
        <button
          onClick={() => setTab("plate")}
          className={`font-mono text-xs px-3 py-1.5 rounded-md transition-colors ${
            tab === "plate" ? "bg-surface-2 text-amber" : "text-muted"
          }`}
        >
          PLAQUE D&apos;IMMAT.
        </button>
      </div>

      <div className="flex gap-2 p-2 flex-wrap">
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder={tab === "code" ? "Ex. P0420, P0301, U0100…" : "Ex. AB-123-CD"}
          className="flex-1 min-w-0 bg-surface-2 border border-line rounded-lg px-4 py-3.5 text-text font-mono text-base tracking-wide placeholder:text-[#5A6170] focus:outline-none focus:ring-2 focus:ring-cyan"
        />
        <button
          onClick={handleSubmit}
          className="bg-amber text-bg border-none rounded-lg px-5 font-semibold text-sm cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap flex-shrink-0 hover:brightness-110 transition-[filter] max-[480px]:basis-full max-[480px]:py-3.5"
        >
          Diagnostiquer →
        </button>
      </div>
      <div className="text-xs text-muted px-3.5 pb-3">
        Astuce : le code est visible sur l&apos;écran de votre valise OBD, ex. <span className="font-mono text-cyan">P0420</span>
      </div>
    </div>
  );
}
