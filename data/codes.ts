export type Severite = "faible" | "moderee" | "elevee";

export interface CodeDefaut {
  code: string;
  titre: string;
  categorie: string;
  categorieLabel: string;
  severite: Severite;
  severiteLabel: string;
  description: string;
  causes: { pourcentage: number; libelle: string }[];
  avisPro: string;
  pieces: { nom: string; boutique: string; prix: string }[];
}

// Jeu de données de démarrage — à remplacer par l'import de la base
// SQLite (Wal33D/dtc-database) une fois l'agrégation des sources faite.
export const codes: CodeDefaut[] = [
  {
    code: "P0420",
    titre: "Rendement du catalyseur sous le seuil — Banc 1",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter sous 2-3 semaines",
    description:
      "Le calculateur moteur a détecté que le catalyseur ne réduit plus assez efficacement les émissions polluantes. Il compare le signal de la sonde lambda avant et après le catalyseur : l'écart est trop faible, signe que la conversion chimique ne se fait plus correctement.",
    causes: [
      { pourcentage: 42, libelle: "Sonde lambda (après catalyseur) défaillante" },
      { pourcentage: 27, libelle: "Catalyseur usé ou encrassé" },
      { pourcentage: 15, libelle: "Fuite d'échappement en amont" },
      { pourcentage: 10, libelle: "Bougies ou injecteurs encrassés" },
      { pourcentage: 6, libelle: "Défaut de câblage / connecteur sonde" },
    ],
    avisPro:
      "Lecture des valeurs temps réel des deux sondes lambda à l'OBD, contrôle visuel de fuite à l'échappement, puis test du catalyseur seul si les sondes sont saines. Éviter de remplacer le catalyseur en premier réflexe — c'est la pièce la plus chère et rarement la cause première.",
    pieces: [
      { nom: "Sonde lambda aval", boutique: "Oscaro · livraison 48h", prix: "54€" },
      { nom: "Catalyseur ligne complète", boutique: "Mister-Auto · sur commande", prix: "189€" },
      { nom: "Kit joints échappement", boutique: "AutoDoc · livraison 24h", prix: "12€" },
    ],
  },
  {
    code: "P0301",
    titre: "Raté d'allumage détecté — Cylindre 1",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — évitez de rouler longtemps, risque pour le catalyseur",
    description:
      "Le calculateur détecte des à-coups de rotation moteur caractéristiques d'une combustion incomplète ou absente sur le cylindre 1. Rouler longtemps avec ce défaut peut endommager le catalyseur (carburant non brûlé qui s'y consume).",
    causes: [
      { pourcentage: 35, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 28, libelle: "Bobine d'allumage défaillante" },
      { pourcentage: 18, libelle: "Injecteur bouché ou défectueux" },
      { pourcentage: 12, libelle: "Basse compression cylindre 1" },
      { pourcentage: 7, libelle: "Fuite d'admission (joint, durite)" },
    ],
    avisPro:
      "Commencer par contrôler bougie et bobine du cylindre concerné (les plus fréquentes et les moins chères à vérifier), avant d'aller vers un diagnostic compression ou injection.",
    pieces: [
      { nom: "Jeu de bougies d'allumage", boutique: "AutoDoc · livraison 24h", prix: "24€" },
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "38€" },
      { nom: "Injecteur essence", boutique: "Mister-Auto · sur commande", prix: "76€" },
    ],
  },
  {
    code: "P0171",
    titre: "Mélange trop pauvre — Banc 1",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — consommation et performances affectées",
    description:
      "Le calculateur détecte trop d'oxygène et pas assez de carburant dans le mélange air/essence. Souvent lié à une entrée d'air non mesurée (fuite) ou un manque de pression carburant.",
    causes: [
      { pourcentage: 38, libelle: "Fuite d'admission d'air (durite, joint)" },
      { pourcentage: 24, libelle: "Débitmètre d'air (MAF) encrassé ou défaillant" },
      { pourcentage: 20, libelle: "Pompe à carburant faible" },
      { pourcentage: 12, libelle: "Injecteurs partiellement bouchés" },
      { pourcentage: 6, libelle: "Sonde lambda amont défaillante" },
    ],
    avisPro:
      "Vérifier en premier les durites d'admission et le joint de débitmètre — c'est la cause la plus fréquente et la plus simple à contrôler visuellement.",
    pieces: [
      { nom: "Durite admission d'air", boutique: "AutoDoc · livraison 24h", prix: "18€" },
      { nom: "Débitmètre d'air (MAF)", boutique: "Oscaro · livraison 48h", prix: "64€" },
      { nom: "Pompe à carburant", boutique: "Mister-Auto · sur commande", prix: "112€" },
    ],
  },
  {
    code: "P0128",
    titre: "Thermostat — température sous seuil régulé",
    categorie: "p01xx",
    categorieLabel: "Refroidissement",
    severite: "faible",
    severiteLabel: "Gravité faible — roulable sans risque immédiat",
    description:
      "Le moteur met trop de temps à atteindre sa température de fonctionnement normale. Cause généralement liée au thermostat qui reste bloqué en position ouverte.",
    causes: [
      { pourcentage: 55, libelle: "Thermostat bloqué ouvert" },
      { pourcentage: 20, libelle: "Capteur de température moteur défaillant" },
      { pourcentage: 15, libelle: "Niveau de liquide de refroidissement bas" },
      { pourcentage: 10, libelle: "Câblage capteur endommagé" },
    ],
    avisPro:
      "Le remplacement du thermostat est peu coûteux et résout la grande majorité des cas — c'est le premier réflexe avant d'aller chercher plus loin.",
    pieces: [
      { nom: "Thermostat moteur", boutique: "AutoDoc · livraison 24h", prix: "16€" },
      { nom: "Capteur de température moteur", boutique: "Oscaro · livraison 48h", prix: "22€" },
    ],
  },

  // Allumage & ratés (P03XX)
  {
    code: "P0300",
    titre: "Ratés d'allumage multiples / aléatoires détectés",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — évitez de rouler longtemps, risque pour le catalyseur",
    description:
      "Le calculateur détecte des ratés de combustion sur plusieurs cylindres à la fois, ou sans schéma identifiable. Contrairement à un raté sur un seul cylindre, ce code pointe souvent vers une cause commune à tout le moteur (carburant, dépression, distribution) plutôt qu'une pièce isolée.",
    causes: [
      { pourcentage: 30, libelle: "Plusieurs bougies d'allumage usées" },
      { pourcentage: 22, libelle: "Fuite de dépression généralisée (durite, joint de collecteur)" },
      { pourcentage: 18, libelle: "Filtre à carburant colmaté ou pression carburant basse" },
      { pourcentage: 15, libelle: "Plusieurs bobines d'allumage défaillantes" },
      { pourcentage: 15, libelle: "Calage de la distribution incorrect" },
    ],
    avisPro:
      "Contrôler globalement avant de cibler un cylindre en particulier : état des bougies, pression carburant, recherche de fuites de dépression au fumigène. Si le défaut persiste, lire les ratés cylindre par cylindre à la valise.",
    pieces: [
      { nom: "Jeu de bougies d'allumage", boutique: "AutoDoc · livraison 24h", prix: "24€" },
      { nom: "Kit durites admission", boutique: "Oscaro · livraison 48h", prix: "29€" },
      { nom: "Filtre à carburant", boutique: "Mister-Auto · sur commande", prix: "19€" },
    ],
  },
  {
    code: "P0302",
    titre: "Raté d'allumage détecté — Cylindre 2",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — évitez de rouler longtemps, risque pour le catalyseur",
    description:
      "Le calculateur détecte des à-coups de rotation moteur caractéristiques d'une combustion incomplète ou absente sur le cylindre 2. Comme pour le cylindre 1, rouler longtemps avec ce défaut peut endommager le catalyseur.",
    causes: [
      { pourcentage: 35, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 28, libelle: "Bobine d'allumage défaillante" },
      { pourcentage: 18, libelle: "Injecteur bouché ou défectueux" },
      { pourcentage: 12, libelle: "Basse compression cylindre 2" },
      { pourcentage: 7, libelle: "Fuite d'admission (joint, durite)" },
    ],
    avisPro:
      "Commencer par contrôler bougie et bobine du cylindre 2 avant d'aller vers un diagnostic compression ou injection.",
    pieces: [
      { nom: "Jeu de bougies d'allumage", boutique: "AutoDoc · livraison 24h", prix: "24€" },
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "38€" },
      { nom: "Injecteur essence", boutique: "Mister-Auto · sur commande", prix: "76€" },
    ],
  },
  {
    code: "P0303",
    titre: "Raté d'allumage détecté — Cylindre 3",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — évitez de rouler longtemps, risque pour le catalyseur",
    description:
      "Le calculateur détecte des à-coups de rotation moteur caractéristiques d'une combustion incomplète ou absente sur le cylindre 3. Rouler longtemps avec ce défaut peut endommager le catalyseur.",
    causes: [
      { pourcentage: 35, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 28, libelle: "Bobine d'allumage défaillante" },
      { pourcentage: 18, libelle: "Injecteur bouché ou défectueux" },
      { pourcentage: 12, libelle: "Basse compression cylindre 3" },
      { pourcentage: 7, libelle: "Fuite d'admission (joint, durite)" },
    ],
    avisPro:
      "Commencer par contrôler bougie et bobine du cylindre 3 avant d'aller vers un diagnostic compression ou injection.",
    pieces: [
      { nom: "Jeu de bougies d'allumage", boutique: "AutoDoc · livraison 24h", prix: "24€" },
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "38€" },
      { nom: "Injecteur essence", boutique: "Mister-Auto · sur commande", prix: "76€" },
    ],
  },
  {
    code: "P0304",
    titre: "Raté d'allumage détecté — Cylindre 4",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — évitez de rouler longtemps, risque pour le catalyseur",
    description:
      "Le calculateur détecte des à-coups de rotation moteur caractéristiques d'une combustion incomplète ou absente sur le cylindre 4. Rouler longtemps avec ce défaut peut endommager le catalyseur.",
    causes: [
      { pourcentage: 35, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 28, libelle: "Bobine d'allumage défaillante" },
      { pourcentage: 18, libelle: "Injecteur bouché ou défectueux" },
      { pourcentage: 12, libelle: "Basse compression cylindre 4" },
      { pourcentage: 7, libelle: "Fuite d'admission (joint, durite)" },
    ],
    avisPro:
      "Commencer par contrôler bougie et bobine du cylindre 4 avant d'aller vers un diagnostic compression ou injection.",
    pieces: [
      { nom: "Jeu de bougies d'allumage", boutique: "AutoDoc · livraison 24h", prix: "24€" },
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "38€" },
      { nom: "Injecteur essence", boutique: "Mister-Auto · sur commande", prix: "76€" },
    ],
  },
  {
    code: "P0325",
    titre: "Circuit du capteur de cliquetis — défaut détecté",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter sous 2-3 semaines",
    description:
      "Le capteur de cliquetis mesure les vibrations anormales de combustion (cliquetis, pré-allumage) pour permettre au calculateur de retarder l'allumage et protéger le moteur. Un défaut de circuit empêche cette protection, exposant le moteur à un cliquetis non détecté.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de cliquetis défaillant" },
      { pourcentage: 30, libelle: "Connecteur ou câblage endommagé/oxydé" },
      { pourcentage: 15, libelle: "Couple de serrage incorrect du capteur (faux contact)" },
      { pourcentage: 15, libelle: "Calculateur défaillant (rare)" },
    ],
    avisPro:
      "Vérifier la résistance du capteur et l'état du connecteur avant remplacement — un capteur mal serré donne souvent un défaut intermittent.",
    pieces: [
      { nom: "Capteur de cliquetis", boutique: "Oscaro · livraison 48h", prix: "31€" },
      { nom: "Connecteur/faisceau capteur", boutique: "AutoDoc · livraison 24h", prix: "14€" },
    ],
  },
  {
    code: "P0335",
    titre: "Circuit du capteur de position vilebrequin — défaut",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de calage moteur ou de refus de démarrer",
    description:
      "Le capteur de position vilebrequin (PMH) informe le calculateur de la position et du régime moteur pour synchroniser injection et allumage. Un signal défaillant peut provoquer des calages moteur, voire empêcher le démarrage.",
    causes: [
      { pourcentage: 38, libelle: "Capteur PMH défaillant" },
      { pourcentage: 22, libelle: "Entrefer incorrect ou capteur encrassé" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Cible denture (roue phonique) endommagée" },
      { pourcentage: 8, libelle: "Calculateur défaillant (rare)" },
    ],
    avisPro:
      "Contrôler le signal à l'oscilloscope si possible. Sur beaucoup de modèles, un remplacement direct du capteur résout la majorité des cas sans autre diagnostic.",
    pieces: [
      { nom: "Capteur position vilebrequin (PMH)", boutique: "Oscaro · livraison 48h", prix: "42€" },
    ],
  },
  {
    code: "P0340",
    titre: "Circuit du capteur de position arbre à cames — défaut",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter sous 2-3 semaines",
    description:
      "Ce capteur informe le calculateur de la position de l'arbre à cames pour la synchronisation de l'injection séquentielle. Un défaut peut dégrader les performances sans forcément empêcher de rouler.",
    causes: [
      { pourcentage: 42, libelle: "Capteur position arbre à cames défaillant" },
      { pourcentage: 25, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 18, libelle: "Courroie ou chaîne de distribution déphasée" },
      { pourcentage: 15, libelle: "Calculateur défaillant (rare)" },
    ],
    avisPro:
      "Vérifier d'abord le capteur et son câblage. Si le défaut persiste après remplacement, contrôler le calage de la distribution.",
    pieces: [
      { nom: "Capteur position arbre à cames", boutique: "AutoDoc · livraison 24h", prix: "36€" },
    ],
  },

  // Carburant & air (P01XX)
  {
    code: "P0174",
    titre: "Mélange trop pauvre — Banc 2",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — consommation et performances affectées",
    description:
      "Comme pour le banc 1 (P0171), le calculateur détecte trop d'oxygène et pas assez de carburant dans le mélange air/essence, mais sur le banc 2 du moteur. Souvent lié à une entrée d'air non mesurée ou un manque de pression carburant.",
    causes: [
      { pourcentage: 38, libelle: "Fuite d'admission d'air (durite, joint)" },
      { pourcentage: 24, libelle: "Débitmètre d'air (MAF) encrassé ou défaillant" },
      { pourcentage: 20, libelle: "Pompe à carburant faible" },
      { pourcentage: 12, libelle: "Injecteurs partiellement bouchés" },
      { pourcentage: 6, libelle: "Sonde lambda amont défaillante" },
    ],
    avisPro:
      "Vérifier en premier les durites d'admission et le joint de débitmètre — c'est la cause la plus fréquente et la plus simple à contrôler visuellement.",
    pieces: [
      { nom: "Durite admission d'air", boutique: "AutoDoc · livraison 24h", prix: "18€" },
      { nom: "Débitmètre d'air (MAF)", boutique: "Oscaro · livraison 48h", prix: "64€" },
      { nom: "Pompe à carburant", boutique: "Mister-Auto · sur commande", prix: "112€" },
    ],
  },
  {
    code: "P0172",
    titre: "Mélange trop riche — Banc 1",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — surconsommation et encrassement moteur",
    description:
      "À l'inverse de P0171, le calculateur détecte trop de carburant par rapport à l'oxygène disponible dans le mélange. Peut provoquer une surconsommation, une odeur d'essence à l'échappement et un encrassement progressif.",
    causes: [
      { pourcentage: 30, libelle: "Injecteur qui goutte ou collé ouvert" },
      { pourcentage: 22, libelle: "Capteur de pression carburant défaillant" },
      { pourcentage: 20, libelle: "Sonde lambda amont défaillante" },
      { pourcentage: 15, libelle: "Filtre à air très encrassé" },
      { pourcentage: 13, libelle: "Régulateur de pression carburant défaillant" },
    ],
    avisPro:
      "Contrôler d'abord l'état du filtre à air et la pression carburant avant de suspecter les injecteurs, plus coûteux à remplacer.",
    pieces: [
      { nom: "Filtre à air", boutique: "AutoDoc · livraison 24h", prix: "14€" },
      { nom: "Régulateur de pression carburant", boutique: "Oscaro · livraison 48h", prix: "47€" },
      { nom: "Sonde lambda amont", boutique: "Mister-Auto · sur commande", prix: "58€" },
    ],
  },
  {
    code: "P0101",
    titre: "Débitmètre d'air (MAF) — plage/performance",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — performances et consommation affectées",
    description:
      "Le débitmètre mesure la quantité d'air admise pour calculer la quantité de carburant à injecter. Une valeur hors plage fausse tout le calcul du mélange air/carburant.",
    causes: [
      { pourcentage: 40, libelle: "Débitmètre encrassé" },
      { pourcentage: 25, libelle: "Fuite d'admission après le débitmètre" },
      { pourcentage: 18, libelle: "Filtre à air colmaté" },
      { pourcentage: 17, libelle: "Câblage ou connecteur défaillant" },
    ],
    avisPro:
      "Nettoyer le débitmètre au spray spécifique avant tout remplacement — c'est la cause la plus fréquente et la moins chère à corriger.",
    pieces: [
      { nom: "Débitmètre d'air (MAF)", boutique: "Oscaro · livraison 48h", prix: "64€" },
      { nom: "Filtre à air", boutique: "AutoDoc · livraison 24h", prix: "14€" },
      { nom: "Nettoyant débitmètre", boutique: "AutoDoc · livraison 24h", prix: "9€" },
    ],
  },
  {
    code: "P0102",
    titre: "Débitmètre d'air (MAF) — signal faible",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — performances et consommation affectées",
    description:
      "Le débitmètre renvoie un signal électrique trop faible pour être exploitable par le calculateur, l'obligeant à basculer sur des valeurs de secours moins précises.",
    causes: [
      { pourcentage: 38, libelle: "Débitmètre encrassé ou en panne" },
      { pourcentage: 27, libelle: "Fuite d'admission importante" },
      { pourcentage: 20, libelle: "Câblage coupé ou court-circuit" },
      { pourcentage: 15, libelle: "Connecteur mal enfiché" },
    ],
    avisPro:
      "Même approche que pour P0101 : nettoyage du débitmètre en premier réflexe avant remplacement.",
    pieces: [
      { nom: "Débitmètre d'air (MAF)", boutique: "Oscaro · livraison 48h", prix: "64€" },
    ],
  },
  {
    code: "P0113",
    titre: "Capteur de température d'air d'admission — signal élevé",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "faible",
    severiteLabel: "Gravité faible — roulable sans risque immédiat",
    description:
      "Ce capteur mesure la température de l'air admis pour ajuster finement le mélange. Un signal incohérent dégrade légèrement la richesse du mélange sans danger immédiat pour le moteur.",
    causes: [
      { pourcentage: 45, libelle: "Capteur défaillant" },
      { pourcentage: 35, libelle: "Câblage coupé (circuit ouvert)" },
      { pourcentage: 20, libelle: "Connecteur oxydé" },
    ],
    avisPro:
      "Souvent un simple remplacement du capteur suffit — il est parfois intégré directement au débitmètre selon les modèles.",
    pieces: [
      { nom: "Capteur température air admission", boutique: "AutoDoc · livraison 24h", prix: "17€" },
    ],
  },
  {
    code: "P0122",
    titre: "Capteur de position papillon (TPS) — signal faible",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — ralenti instable, mode dégradé possible",
    description:
      "Ce capteur informe le calculateur de l'ouverture du papillon des gaz. Un signal incohérent peut provoquer un ralenti instable ou déclencher un mode dégradé limitant les performances.",
    causes: [
      { pourcentage: 40, libelle: "Capteur TPS défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur défaillant" },
      { pourcentage: 20, libelle: "Corps de papillon encrassé (faux contact mécanique)" },
      { pourcentage: 12, libelle: "Calculateur défaillant (rare)" },
    ],
    avisPro:
      "Nettoyer le corps de papillon en même temps que le remplacement du capteur — les deux problèmes sont souvent liés.",
    pieces: [
      { nom: "Capteur position papillon (TPS)", boutique: "Oscaro · livraison 48h", prix: "33€" },
      { nom: "Nettoyant corps papillon", boutique: "AutoDoc · livraison 24h", prix: "11€" },
    ],
  },

  // Émissions (P04XX)
  {
    code: "P0430",
    titre: "Rendement du catalyseur sous le seuil — Banc 2",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter sous 2-3 semaines",
    description:
      "Comme pour P0420 mais sur le banc 2, le calculateur détecte que le catalyseur ne réduit plus assez efficacement les émissions polluantes en comparant les signaux des sondes lambda avant et après.",
    causes: [
      { pourcentage: 42, libelle: "Sonde lambda (après catalyseur) défaillante" },
      { pourcentage: 27, libelle: "Catalyseur usé ou encrassé" },
      { pourcentage: 15, libelle: "Fuite d'échappement en amont" },
      { pourcentage: 10, libelle: "Bougies ou injecteurs encrassés" },
      { pourcentage: 6, libelle: "Défaut de câblage / connecteur sonde" },
    ],
    avisPro:
      "Lecture des valeurs temps réel des deux sondes lambda du banc 2 à l'OBD, contrôle visuel de fuite à l'échappement, puis test du catalyseur seul si les sondes sont saines.",
    pieces: [
      { nom: "Sonde lambda aval", boutique: "Oscaro · livraison 48h", prix: "54€" },
      { nom: "Catalyseur ligne complète", boutique: "Mister-Auto · sur commande", prix: "189€" },
    ],
  },
  {
    code: "P0442",
    titre: "Fuite détectée dans le circuit EVAP (fuite moyenne)",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — roulable sans risque immédiat",
    description:
      "Le système EVAP capte les vapeurs d'essence du réservoir pour les renvoyer au moteur plutôt que de les rejeter à l'atmosphère. Une fuite moyenne (trou, durite fissurée) est détectée par le test d'étanchéité du calculateur.",
    causes: [
      { pourcentage: 45, libelle: "Bouchon de réservoir mal serré ou joint usé" },
      { pourcentage: 25, libelle: "Durite EVAP fissurée" },
      { pourcentage: 18, libelle: "Électrovanne de purge EVAP défaillante" },
      { pourcentage: 12, libelle: "Canister (filtre à charbon) fissuré" },
    ],
    avisPro:
      "Vérifier en premier le bouchon de réservoir — c'est la cause la plus fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Bouchon de réservoir carburant", boutique: "AutoDoc · livraison 24h", prix: "13€" },
      { nom: "Durite EVAP", boutique: "Oscaro · livraison 48h", prix: "16€" },
      { nom: "Électrovanne de purge EVAP", boutique: "Mister-Auto · sur commande", prix: "39€" },
    ],
  },
  {
    code: "P0455",
    titre: "Fuite détectée dans le circuit EVAP (grosse fuite)",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — roulable sans risque immédiat",
    description:
      "Même principe que P0442 mais pour une fuite plus importante, en général plus facile à localiser : une pièce carrément déconnectée ou cassée plutôt qu'une simple fissure.",
    causes: [
      { pourcentage: 50, libelle: "Bouchon de réservoir absent ou mal fermé" },
      { pourcentage: 25, libelle: "Durite EVAP débranchée" },
      { pourcentage: 15, libelle: "Canister endommagé" },
      { pourcentage: 10, libelle: "Électrovanne de purge bloquée ouverte" },
    ],
    avisPro:
      "Contrôle visuel rapide du bouchon et des durites accessibles avant tout diagnostic plus poussé.",
    pieces: [
      { nom: "Bouchon de réservoir carburant", boutique: "AutoDoc · livraison 24h", prix: "13€" },
      { nom: "Durite EVAP", boutique: "Oscaro · livraison 48h", prix: "16€" },
    ],
  },
  {
    code: "P0401",
    titre: "Débit EGR insuffisant",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter sous 2-3 semaines",
    description:
      "La vanne EGR recycle une partie des gaz d'échappement pour réduire les émissions d'oxydes d'azote. Un débit insuffisant signale le plus souvent un encrassement ou un blocage.",
    causes: [
      { pourcentage: 45, libelle: "Vanne EGR encrassée ou bloquée fermée" },
      { pourcentage: 25, libelle: "Durite EGR bouchée par les dépôts de calamine" },
      { pourcentage: 18, libelle: "Capteur de position de la vanne EGR défaillant" },
      { pourcentage: 12, libelle: "Électrovanne de commande EGR défaillante" },
    ],
    avisPro:
      "Le nettoyage de la vanne EGR (dépose + décalaminage) résout la majorité des cas avant d'envisager un remplacement complet.",
    pieces: [
      { nom: "Vanne EGR", boutique: "Mister-Auto · sur commande", prix: "98€" },
      { nom: "Kit nettoyage décalaminant", boutique: "AutoDoc · livraison 24h", prix: "22€" },
      { nom: "Joint vanne EGR", boutique: "Oscaro · livraison 48h", prix: "8€" },
    ],
  },
  {
    code: "P0404",
    titre: "Circuit de la vanne EGR — plage/performance",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter sous 2-3 semaines",
    description:
      "La position réelle de la vanne EGR ne correspond pas à la position commandée par le calculateur, en général à cause d'un encrassement mécanique ou d'un capteur de position défaillant.",
    causes: [
      { pourcentage: 40, libelle: "Vanne EGR encrassée mécaniquement" },
      { pourcentage: 30, libelle: "Capteur de position intégré défaillant" },
      { pourcentage: 20, libelle: "Câblage ou connecteur défaillant" },
      { pourcentage: 10, libelle: "Calculateur défaillant (rare)" },
    ],
    avisPro:
      "Même approche que pour P0401 : commencer par le nettoyage avant d'envisager un remplacement.",
    pieces: [
      { nom: "Vanne EGR", boutique: "Mister-Auto · sur commande", prix: "98€" },
      { nom: "Kit nettoyage décalaminant", boutique: "AutoDoc · livraison 24h", prix: "22€" },
    ],
  },
  {
    code: "P0135",
    titre: "Circuit de chauffage sonde lambda — Banc 1, Capteur 1",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — roulable sans risque immédiat",
    description:
      "La sonde lambda amont est chauffée électriquement pour atteindre sa température de fonctionnement plus vite après un démarrage à froid. Un défaut du circuit de chauffage n'empêche pas de rouler mais dégrade la précision du mélange à froid.",
    causes: [
      { pourcentage: 45, libelle: "Élément chauffant de la sonde défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur de la sonde défaillant" },
      { pourcentage: 15, libelle: "Fusible grillé" },
      { pourcentage: 10, libelle: "Calculateur défaillant (rare)" },
    ],
    avisPro:
      "Mesurer la résistance de l'élément chauffant au multimètre avant de remplacer la sonde entière.",
    pieces: [
      { nom: "Sonde lambda amont", boutique: "Mister-Auto · sur commande", prix: "58€" },
    ],
  },
  {
    code: "P0141",
    titre: "Circuit de chauffage sonde lambda — Banc 1, Capteur 2",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — roulable sans risque immédiat",
    description:
      "Même principe que P0135 mais pour la sonde lambda aval (après catalyseur). N'affecte pas la conduite mais peut légèrement fausser le suivi de l'état du catalyseur.",
    causes: [
      { pourcentage: 45, libelle: "Élément chauffant de la sonde aval défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur de la sonde défaillant" },
      { pourcentage: 15, libelle: "Fusible grillé" },
      { pourcentage: 10, libelle: "Calculateur défaillant (rare)" },
    ],
    avisPro:
      "Identique à P0135 : mesurer la résistance de l'élément chauffant avant de remplacer la sonde.",
    pieces: [
      { nom: "Sonde lambda aval", boutique: "Oscaro · livraison 48h", prix: "54€" },
    ],
  },

  // Réseau & calculateurs (U0XXX)
  {
    code: "U0100",
    titre: "Perte de communication avec le calculateur moteur",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de mode dégradé ou de refus de démarrer",
    description:
      "Le réseau de bord (bus CAN) ne reçoit plus de messages du calculateur moteur (ECM/PCM). La cause peut venir du calculateur lui-même, de son alimentation, ou d'un câblage de bus endommagé.",
    causes: [
      { pourcentage: 30, libelle: "Fusible ou alimentation du calculateur moteur défaillante" },
      { pourcentage: 28, libelle: "Câblage du bus CAN endommagé (coupure, court-circuit)" },
      { pourcentage: 22, libelle: "Connecteur du calculateur mal enfiché ou corrodé" },
      { pourcentage: 20, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Vérifier en premier les fusibles et l'alimentation du calculateur avant de suspecter le bus CAN ou le calculateur lui-même.",
    pieces: [
      { nom: "Fusible calculateur moteur", boutique: "AutoDoc · livraison 24h", prix: "4€" },
      { nom: "Connecteur calculateur", boutique: "Oscaro · livraison 48h", prix: "21€" },
    ],
  },
  {
    code: "U0101",
    titre: "Perte de communication avec le calculateur de boîte de vitesses",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de mode dégradé de la boîte",
    description:
      "Le réseau de bord ne reçoit plus de messages du calculateur de boîte de vitesses automatique. Peut provoquer un blocage en mode dégradé (une seule vitesse) par sécurité.",
    causes: [
      { pourcentage: 28, libelle: "Fusible ou alimentation du calculateur de boîte défaillante" },
      { pourcentage: 28, libelle: "Câblage du bus CAN endommagé" },
      { pourcentage: 24, libelle: "Connecteur du calculateur de boîte corrodé" },
      { pourcentage: 20, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Même démarche que U0100 : commencer par les éléments les moins coûteux (fusible, connecteur) avant de suspecter le calculateur.",
    pieces: [
      { nom: "Fusible calculateur boîte", boutique: "AutoDoc · livraison 24h", prix: "4€" },
      { nom: "Connecteur calculateur boîte", boutique: "Oscaro · livraison 48h", prix: "24€" },
    ],
  },
  {
    code: "U0121",
    titre: "Perte de communication avec le calculateur ABS",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS et ESP désactivés, à traiter en priorité",
    description:
      "Le calculateur ABS ne communique plus sur le bus CAN, ce qui désactive l'ABS et souvent l'ESP. Un point de sécurité à traiter rapidement, même si le véhicule reste roulable.",
    causes: [
      { pourcentage: 30, libelle: "Fusible ABS grillé" },
      { pourcentage: 28, libelle: "Câblage du bus CAN vers le calculateur ABS endommagé" },
      { pourcentage: 22, libelle: "Connecteur du calculateur ABS corrodé" },
      { pourcentage: 20, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "À traiter en priorité vu l'impact sur la sécurité (ABS/ESP désactivés) — vérifier fusible et connecteur avant tout remplacement de calculateur.",
    pieces: [
      { nom: "Fusible ABS", boutique: "AutoDoc · livraison 24h", prix: "4€" },
      { nom: "Connecteur calculateur ABS", boutique: "Oscaro · livraison 48h", prix: "26€" },
    ],
  },
  {
    code: "U0140",
    titre: "Perte de communication avec le module de carrosserie (BSI/UCH)",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "moderee",
    severiteLabel: "Gravité modérée — plusieurs fonctions électriques peuvent être affectées",
    description:
      "Le boîtier de servitude intelligent (BSI chez Peugeot/Citroën) ou l'unité centrale habitacle (UCH chez Renault) ne répond plus sur le réseau — peut affecter vitres électriques, centralisation ou éclairage selon les modèles.",
    causes: [
      { pourcentage: 30, libelle: "Alimentation ou fusible du BSI/UCH défaillant" },
      { pourcentage: 27, libelle: "Câblage du bus CAN endommagé" },
      { pourcentage: 25, libelle: "Connecteur du BSI/UCH mal enfiché" },
      { pourcentage: 18, libelle: "BSI/UCH défaillant" },
    ],
    avisPro:
      "Ce boîtier centralise énormément de fonctions sur Peugeot/Citroën et Renault — un diagnostic précis à la valise constructeur est recommandé avant remplacement, car c'est une pièce coûteuse.",
    pieces: [
      { nom: "Fusible BSI/UCH", boutique: "AutoDoc · livraison 24h", prix: "4€" },
      { nom: "Connecteur BSI/UCH", boutique: "Oscaro · livraison 48h", prix: "28€" },
    ],
  },
  {
    code: "U0155",
    titre: "Perte de communication avec le combiné d'instruments",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "faible",
    severiteLabel: "Gravité faible — n'affecte pas la conduite elle-même",
    description:
      "Le tableau de bord ne reçoit plus les informations du réseau — peut afficher des compteurs figés ou des voyants erronés, sans affecter la conduite elle-même.",
    causes: [
      { pourcentage: 35, libelle: "Connecteur du combiné mal enfiché" },
      { pourcentage: 30, libelle: "Câblage du bus CAN vers le combiné endommagé" },
      { pourcentage: 20, libelle: "Fusible dédié grillé" },
      { pourcentage: 15, libelle: "Combiné d'instruments défaillant" },
    ],
    avisPro:
      "Souvent un simple débranchement/rebranchement du connecteur du combiné résout le défaut s'il est intermittent.",
    pieces: [
      { nom: "Connecteur combiné d'instruments", boutique: "Oscaro · livraison 48h", prix: "19€" },
    ],
  },
  {
    code: "U0401",
    titre: "Données invalides reçues du calculateur moteur",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent le symptôme d'un autre défaut",
    description:
      "Un autre calculateur du réseau reçoit des données incohérentes envoyées par le calculateur moteur. Souvent un symptôme secondaire d'un autre défaut plutôt qu'une panne isolée.",
    causes: [
      { pourcentage: 35, libelle: "Calculateur moteur avec un défaut logiciel ou version non à jour" },
      { pourcentage: 30, libelle: "Câblage du bus CAN partiellement endommagé" },
      { pourcentage: 20, libelle: "Connecteur du calculateur moteur corrodé" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce code apparaît souvent en même temps que d'autres codes moteur — traiter d'abord les autres défauts avant de revenir sur celui-ci.",
    pieces: [
      { nom: "Connecteur calculateur moteur", boutique: "Oscaro · livraison 48h", prix: "21€" },
    ],
  },
];

// Normalise une saisie utilisateur imparfaite (espaces, tirets, lettre de
// préfixe OBD oubliée) vers un format de code canonique, ex. "0171" -> "P0171".
export function normalizeCode(raw: string): string {
  const clean = raw.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (/^[PBCU]/.test(clean)) return clean;
  if (/^\d+$/.test(clean)) return `P${clean}`;
  return clean;
}

export function getCodeByCode(code: string): CodeDefaut | undefined {
  const normalized = normalizeCode(code);
  return codes.find((c) => c.code.toUpperCase() === normalized);
}

export interface CodeDiagnostic {
  reason: "missing-prefix" | "wrong-length" | "invalid-format" | "unknown-code";
  message: string;
}

// Explique à l'utilisateur pourquoi son code n'a pas été trouvé : lettre
// oubliée, mauvais nombre de chiffres, format invalide, ou code inconnu de
// notre base. Utilisé uniquement pour l'affichage — pas pour la recherche.
export function diagnoseCode(raw: string): CodeDiagnostic {
  const clean = raw.toUpperCase().replace(/[^A-Z0-9]/g, "");

  if (/^\d+$/.test(clean)) {
    if (clean.length === 4) {
      return {
        reason: "missing-prefix",
        message: `Il manque la lettre au début du code. "${clean}" ressemble à un code moteur — essayez "P${clean}". Les autres préfixes possibles sont B (carrosserie), C (châssis) et U (réseau/calculateurs).`,
      };
    }
    return {
      reason: "wrong-length",
      message: `Un code défaut, c'est une lettre (P, B, C ou U) suivie de 4 chiffres, par exemple P0420. "${clean}" ne contient que des chiffres et n'a pas le bon format.`,
    };
  }

  const match = clean.match(/^([PBCU])(\d*)$/);
  if (match) {
    const [, letter, digits] = match;
    if (digits.length !== 4) {
      return {
        reason: "wrong-length",
        message: `Après la lettre "${letter}", il faut exactement 4 chiffres (ex. ${letter}0420). Vous avez saisi ${digits.length || "aucun"} chiffre${digits.length > 1 ? "s" : ""}.`,
      };
    }
    return {
      reason: "unknown-code",
      message: `"${letter}${digits}" a le bon format, mais ne fait pas encore partie des ${codes.length} codes référencés sur Panne Résolue. On enrichit la base régulièrement.`,
    };
  }

  return {
    reason: "invalid-format",
    message: `"${raw}" n'a pas le format d'un code défaut. Un code défaut, c'est une lettre (P, B, C ou U) suivie de 4 chiffres, par exemple P0420.`,
  };
}

export function getCodesByCategorie(categorie: string): CodeDefaut[] {
  return codes.filter((c) => c.categorie.toLowerCase() === categorie.toLowerCase());
}

export interface Categorie {
  code: string;
  titre: string;
  desc: string;
  slug: string;
}

export const categories: Categorie[] = [
  { code: "P03XX", titre: "Allumage & ratés", desc: "Bougies, bobines, cylindres — à-coups moteur.", slug: "p03xx" },
  { code: "P01XX", titre: "Carburant & air", desc: "Injection, débit d'air, richesse du mélange.", slug: "p01xx" },
  { code: "P04XX", titre: "Émissions", desc: "Sonde lambda, EGR, catalyseur.", slug: "p04xx" },
  { code: "U0XXX", titre: "Réseau & calculateurs", desc: "Communication entre modules électroniques.", slug: "u0xxx" },
];

export function getCategorieBySlug(slug: string): Categorie | undefined {
  return categories.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}
