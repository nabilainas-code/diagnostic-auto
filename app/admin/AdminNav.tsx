import Link from "next/link";

const ONGLETS = [
  { slug: "retours", label: "Retours", href: "/admin/retours" },
  { slug: "trafic", label: "Trafic", href: "/admin/trafic" },
] as const;

export default function AdminNav({ actif }: { actif: "retours" | "trafic" }) {
  return (
    <nav className="flex gap-1.5 mb-6">
      {ONGLETS.map((o) => (
        <Link
          key={o.slug}
          href={o.href}
          className={
            "text-sm px-3.5 py-1.5 rounded-full font-medium transition-colors " +
            (o.slug === actif
              ? "bg-amber text-bg"
              : "bg-surface-2 border border-line text-muted hover:text-text")
          }
        >
          {o.label}
        </Link>
      ))}
    </nav>
  );
}
