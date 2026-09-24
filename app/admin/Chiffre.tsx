export default function Chiffre({ valeur, libelle }: { valeur: React.ReactNode; libelle: string }) {
  return (
    <div className="bg-surface border border-line rounded-xl px-3 py-4 text-center">
      <div className="font-mono font-semibold text-xl">{valeur}</div>
      <div className="text-muted text-xs mt-1">{libelle}</div>
    </div>
  );
}
