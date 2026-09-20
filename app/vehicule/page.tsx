import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";

export default function VehiculeIndexPage() {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto px-6 pt-16 pb-16 text-center">
        <h1 className="font-display font-semibold text-3xl mb-3">Trouver les pièces de votre véhicule</h1>
        <p className="text-muted text-sm leading-relaxed mb-8">
          Entrez votre plaque d&apos;immatriculation, on identifie votre véhicule et on filtre le
          catalogue pour n&apos;afficher que les pièces compatibles.
        </p>
        <div className="flex justify-center">
          <SearchBox />
        </div>
      </div>
    </>
  );
}
