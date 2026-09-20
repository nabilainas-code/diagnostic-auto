export interface Piece {
  nom: string;
  categorie: string;
  boutique: string;
  prix: string;
  livraison: string;
}

export interface Vehicule {
  plaque: string; // format AA-000-AA, normalisé
  marque: string;
  modele: string;
  generation: string;
  motorisation: string;
  anneeMiseEnCirculation: string;
  vin: string;
  pieces: Piece[];
}

// Jeu de données de démarrage simulant la réponse d'une API plaque.
// À remplacer par un appel réel (route API Next.js côté serveur)
// une fois le fournisseur choisi.
export const vehicules: Vehicule[] = [
  {
    plaque: "AB-123-CD",
    marque: "Peugeot",
    modele: "308",
    generation: "II (2013-2021)",
    motorisation: "1.6 BlueHDi 120",
    anneeMiseEnCirculation: "2016",
    vin: "VF3LCYHZPYS123456",
    pieces: [
      { nom: "Plaquettes de frein avant", categorie: "Freinage", boutique: "Oscaro", prix: "34€", livraison: "48h" },
      { nom: "Disques de frein avant (x2)", categorie: "Freinage", boutique: "Mister-Auto", prix: "68€", livraison: "48h" },
      { nom: "Filtre à huile", categorie: "Filtration", boutique: "AutoDoc", prix: "8€", livraison: "24h" },
      { nom: "Filtre à air", categorie: "Filtration", boutique: "AutoDoc", prix: "14€", livraison: "24h" },
      { nom: "Filtre habitacle", categorie: "Filtration", boutique: "Oscaro", prix: "11€", livraison: "48h" },
      { nom: "Batterie 12V 70Ah", categorie: "Électrique", boutique: "Mister-Auto", prix: "89€", livraison: "48h" },
    ],
  },
  {
    plaque: "EF-456-GH",
    marque: "Renault",
    modele: "Clio",
    generation: "IV (2012-2019)",
    motorisation: "1.5 dCi 90",
    anneeMiseEnCirculation: "2015",
    vin: "VF15RB40A54123456",
    pieces: [
      { nom: "Plaquettes de frein avant", categorie: "Freinage", boutique: "AutoDoc", prix: "28€", livraison: "24h" },
      { nom: "Disques de frein avant (x2)", categorie: "Freinage", boutique: "Oscaro", prix: "54€", livraison: "48h" },
      { nom: "Filtre à huile", categorie: "Filtration", boutique: "Mister-Auto", prix: "7€", livraison: "48h" },
      { nom: "Filtre à air", categorie: "Filtration", boutique: "AutoDoc", prix: "12€", livraison: "24h" },
      { nom: "Filtre habitacle", categorie: "Filtration", boutique: "Oscaro", prix: "9€", livraison: "48h" },
      { nom: "Batterie 12V 60Ah", categorie: "Électrique", boutique: "Mister-Auto", prix: "76€", livraison: "48h" },
    ],
  },
];

export function getVehiculeByPlaque(plaque: string): Vehicule | undefined {
  const normalized = plaque.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return vehicules.find(
    (v) => v.plaque.replace(/[^A-Z0-9]/g, "") === normalized
  );
}
