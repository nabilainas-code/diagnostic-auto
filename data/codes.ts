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

  // Boîte de vitesses automatique (P07XX)
  {
    code: "P0700",
    titre: "Dysfonctionnement transmission — demande d'allumage du voyant",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter rapidement",
    description:
      "Le calculateur de boîte de vitesses demande au calculateur moteur d'allumer le voyant moteur car il a détecté un défaut interne à la transmission. Ce code s'accompagne presque toujours d'un autre code plus précis stocké dans le calculateur de boîte.",
    causes: [
      { pourcentage: 35, libelle: "Autre défaut de transmission sous-jacent (voir codes associés)" },
      { pourcentage: 25, libelle: "Niveau ou qualité d'huile de boîte incorrecte" },
      { pourcentage: 20, libelle: "Capteur de vitesse de boîte défaillant" },
      { pourcentage: 20, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Lire l'intégralité des codes stockés dans le calculateur de boîte (pas seulement le moteur) pour identifier le défaut précis à l'origine de cette alerte générale.",
    pieces: [
      { nom: "Vidange boîte auto + filtre", boutique: "AutoDoc · livraison 24h", prix: "45€" },
      { nom: "Capteur vitesse boîte", boutique: "Oscaro · livraison 48h", prix: "52€" },
    ],
  },
  {
    code: "P0705",
    titre: "Circuit capteur position sélecteur (PRNDL) — plage/performance",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — risque de refus de démarrer ou logique de passage faussée",
    description:
      "Ce capteur indique au calculateur la position du levier de vitesses (P, R, N, D, L). Un signal incohérent peut empêcher le démarrage ou fausser la logique de passage des rapports.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de position sélecteur défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur défaillant" },
      { pourcentage: 20, libelle: "Mauvais réglage mécanique du sélecteur" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le réglage mécanique du câble ou de la tringlerie de sélection avant de remplacer le capteur.",
    pieces: [
      { nom: "Capteur position sélecteur", boutique: "Mister-Auto · sur commande", prix: "68€" },
    ],
  },
  {
    code: "P0715",
    titre: "Circuit capteur vitesse d'entrée de turbine — dysfonctionnement",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter rapidement",
    description:
      "Ce capteur mesure la vitesse de rotation à l'entrée du convertisseur de couple, utilisée pour calculer les rapports de démultiplication et piloter les changements de vitesse.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse turbine défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 20, libelle: "Contamination du capteur par des particules métalliques dans l'huile" },
      { pourcentage: 10, libelle: "Calculateur de boîte défaillant (rare)" },
    ],
    avisPro:
      "Contrôler l'état de l'huile de boîte (limaille) en même temps que le capteur — une contamination indique souvent une usure interne plus large.",
    pieces: [
      { nom: "Capteur vitesse turbine", boutique: "Oscaro · livraison 48h", prix: "47€" },
    ],
  },
  {
    code: "P0720",
    titre: "Circuit capteur vitesse de sortie — dysfonctionnement",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter rapidement",
    description:
      "Mesure la vitesse de rotation en sortie de boîte pour la comparer à la vitesse d'entrée et calculer le rapport engagé en temps réel.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de sortie défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 18, libelle: "Cible denture endommagée" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant (rare)" },
    ],
    avisPro:
      "Même démarche que pour le capteur d'entrée : contrôle du câblage avant remplacement du capteur.",
    pieces: [
      { nom: "Capteur vitesse de sortie", boutique: "Oscaro · livraison 48h", prix: "47€" },
    ],
  },
  {
    code: "P0730",
    titre: "Rapport de démultiplication incorrect",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "elevee",
    severiteLabel: "Gravité élevée — évitez de rouler, risque d'endommager la boîte",
    description:
      "Le calculateur détecte que le rapport réellement engagé ne correspond pas à celui commandé, souvent lié à un patinage interne d'embrayage ou de frein de boîte. Rouler avec ce défaut peut aggraver l'usure interne.",
    causes: [
      { pourcentage: 35, libelle: "Usure des embrayages/freins internes de boîte" },
      { pourcentage: 25, libelle: "Pression hydraulique insuffisante (pompe, filtre colmaté)" },
      { pourcentage: 20, libelle: "Solénoïde de commande défaillant" },
      { pourcentage: 20, libelle: "Niveau d'huile de boîte incorrect" },
    ],
    avisPro:
      "Vérifier en priorité le niveau et l'état de l'huile de boîte — une vidange avec filtre neuf résout parfois le problème si pris à temps, avant que l'usure interne ne s'aggrave.",
    pieces: [
      { nom: "Vidange boîte auto + filtre", boutique: "AutoDoc · livraison 24h", prix: "45€" },
      { nom: "Solénoïde de commande boîte", boutique: "Mister-Auto · sur commande", prix: "89€" },
    ],
  },
  {
    code: "P0740",
    titre: "Circuit convertisseur de couple (embrayage de verrouillage) — dysfonctionnement",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter rapidement",
    description:
      "L'embrayage de verrouillage du convertisseur de couple (lock-up) permet une liaison directe moteur-boîte à haute vitesse pour économiser du carburant. Un défaut de circuit l'empêche de s'enclencher ou de se désengager correctement.",
    causes: [
      { pourcentage: 35, libelle: "Solénoïde de verrouillage défaillant" },
      { pourcentage: 25, libelle: "Câblage ou connecteur défaillant" },
      { pourcentage: 22, libelle: "Usure de l'embrayage de verrouillage" },
      { pourcentage: 18, libelle: "Pression hydraulique insuffisante" },
    ],
    avisPro:
      "Contrôler le solénoïde de verrouillage avant d'envisager une intervention plus lourde sur le convertisseur lui-même.",
    pieces: [
      { nom: "Solénoïde de verrouillage convertisseur", boutique: "Mister-Auto · sur commande", prix: "76€" },
    ],
  },
  {
    code: "P0750",
    titre: "Solénoïde de changement de vitesse A — dysfonctionnement",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — à-coups possibles lors des changements de rapport",
    description:
      "Ce solénoïde contrôle le flux hydraulique pour engager un rapport spécifique. Un dysfonctionnement peut provoquer des à-coups ou empêcher le passage à un rapport donné.",
    causes: [
      { pourcentage: 42, libelle: "Solénoïde défaillant" },
      { pourcentage: 25, libelle: "Câblage ou connecteur défaillant" },
      { pourcentage: 20, libelle: "Filtre d'huile de boîte colmaté" },
      { pourcentage: 13, libelle: "Calculateur de boîte défaillant (rare)" },
    ],
    avisPro:
      "Remplacer le solénoïde est en général la première intervention — vérifier aussi la propreté de l'huile, un filtre colmaté peut en être la cause indirecte.",
    pieces: [
      { nom: "Solénoïde changement de vitesse", boutique: "Oscaro · livraison 48h", prix: "58€" },
      { nom: "Filtre boîte automatique", boutique: "AutoDoc · livraison 24h", prix: "22€" },
    ],
  },
  {
    code: "P0797",
    titre: "Pression de la commande d'embrayage — trop élevée",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — à-coups possibles lors des changements de rapport",
    description:
      "La pression hydraulique appliquée sur un embrayage interne de boîte dépasse les valeurs attendues, ce qui peut provoquer des à-coups lors des changements de rapport.",
    causes: [
      { pourcentage: 38, libelle: "Solénoïde de régulation de pression défaillant" },
      { pourcentage: 27, libelle: "Capteur de pression hydraulique défaillant" },
      { pourcentage: 20, libelle: "Pompe à huile de boîte défaillante" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant (rare)" },
    ],
    avisPro:
      "Diagnostic à la valise constructeur recommandé pour lire les valeurs de pression en temps réel avant de remplacer une pièce.",
    pieces: [
      { nom: "Solénoïde régulation pression", boutique: "Mister-Auto · sur commande", prix: "82€" },
    ],
  },

  // Châssis & ABS/ESP (C0XXX)
  {
    code: "C0035",
    titre: "Circuit capteur de vitesse de roue avant gauche",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Le capteur de vitesse de roue avant gauche envoie un signal incohérent ou absent au calculateur ABS, qui désactive alors l'ABS (et souvent l'ESP) par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de roue défaillant" },
      { pourcentage: 28, libelle: "Cible denture (anneau codeur) encrassée ou endommagée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Entrefer incorrect (capteur mal positionné)" },
    ],
    avisPro:
      "Nettoyer la cible denture et vérifier l'entrefer avant de remplacer le capteur — un simple encrassement est une cause fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur ABS avant gauche", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C0040",
    titre: "Circuit capteur de vitesse de roue avant droite",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Le capteur de vitesse de roue avant droite envoie un signal incohérent ou absent au calculateur ABS, qui désactive alors l'ABS (et souvent l'ESP) par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de roue défaillant" },
      { pourcentage: 28, libelle: "Cible denture (anneau codeur) encrassée ou endommagée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Entrefer incorrect (capteur mal positionné)" },
    ],
    avisPro:
      "Nettoyer la cible denture et vérifier l'entrefer avant de remplacer le capteur — un simple encrassement est une cause fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur ABS avant droit", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C0045",
    titre: "Circuit capteur de vitesse de roue arrière gauche",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Le capteur de vitesse de roue arrière gauche envoie un signal incohérent ou absent au calculateur ABS, qui désactive alors l'ABS (et souvent l'ESP) par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de roue défaillant" },
      { pourcentage: 28, libelle: "Cible denture (anneau codeur) encrassée ou endommagée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Entrefer incorrect (capteur mal positionné)" },
    ],
    avisPro:
      "Nettoyer la cible denture et vérifier l'entrefer avant de remplacer le capteur — un simple encrassement est une cause fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur ABS arrière gauche", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C0050",
    titre: "Circuit capteur de vitesse de roue arrière droite",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Le capteur de vitesse de roue arrière droite envoie un signal incohérent ou absent au calculateur ABS, qui désactive alors l'ABS (et souvent l'ESP) par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de roue défaillant" },
      { pourcentage: 28, libelle: "Cible denture (anneau codeur) encrassée ou endommagée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Entrefer incorrect (capteur mal positionné)" },
    ],
    avisPro:
      "Nettoyer la cible denture et vérifier l'entrefer avant de remplacer le capteur — un simple encrassement est une cause fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur ABS arrière droit", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C0110",
    titre: "Dysfonctionnement du moteur de la pompe ABS",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS désactivé",
    description:
      "Le moteur électrique qui actionne la pompe hydraulique du bloc ABS ne fonctionne pas correctement, désactivant l'assistance au freinage d'urgence.",
    causes: [
      { pourcentage: 35, libelle: "Moteur de pompe ABS grillé" },
      { pourcentage: 25, libelle: "Fusible ou relais de pompe ABS défaillant" },
      { pourcentage: 25, libelle: "Câblage d'alimentation endommagé" },
      { pourcentage: 15, libelle: "Bloc hydraulique ABS complet défaillant" },
    ],
    avisPro:
      "Vérifier fusible et relais avant d'envisager un remplacement du bloc hydraulique complet, qui est une pièce coûteuse.",
    pieces: [
      { nom: "Fusible/relais pompe ABS", boutique: "Oscaro · livraison 48h", prix: "18€" },
      { nom: "Bloc hydraulique ABS", boutique: "Mister-Auto · sur commande", prix: "320€" },
    ],
  },
  {
    code: "C0161",
    titre: "Défaut du circuit de frein de stationnement électrique",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "moderee",
    severiteLabel: "Gravité modérée — à traiter rapidement, sécurité au stationnement",
    description:
      "Concerne les véhicules équipés d'un frein de stationnement électrique (bouton au lieu d'un levier manuel). Le calculateur détecte un défaut sur le circuit de commande ou d'actionnement.",
    causes: [
      { pourcentage: 35, libelle: "Moteur d'actionneur de frein de stationnement défaillant" },
      { pourcentage: 25, libelle: "Interrupteur de commande défaillant" },
      { pourcentage: 25, libelle: "Câblage ou connecteur défaillant" },
      { pourcentage: 15, libelle: "Calculateur de frein de stationnement défaillant" },
    ],
    avisPro:
      "Diagnostic à la valise recommandé pour identifier quelle roue ou quel actionneur est en cause avant de commander une pièce.",
    pieces: [
      { nom: "Actionneur frein de stationnement électrique", boutique: "Mister-Auto · sur commande", prix: "145€" },
    ],
  },
  {
    code: "C0200",
    titre: "Défaut du circuit du capteur de lacet (ESP)",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ESP désactivé",
    description:
      "Le capteur de lacet mesure les mouvements de rotation du véhicule autour de son axe vertical pour permettre à l'ESP de corriger un dérapage. Un défaut désactive cette protection.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de lacet/accélération défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur défaillant" },
      { pourcentage: 20, libelle: "Mauvais calibrage après une intervention (géométrie, remplacement pare-brise)" },
      { pourcentage: 10, libelle: "Calculateur ESP défaillant (rare)" },
    ],
    avisPro:
      "Après tout remplacement de pare-brise ou intervention sur la direction, un recalibrage du capteur est souvent nécessaire — à vérifier avant de le remplacer inutilement.",
    pieces: [
      { nom: "Capteur de lacet (ESP)", boutique: "Oscaro · livraison 48h", prix: "96€" },
    ],
  },
  {
    code: "C0300",
    titre: "Défaut du circuit relais de la pompe ABS",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS désactivé",
    description:
      "Le relais qui alimente la pompe du bloc ABS présente un défaut électrique (coincé ouvert ou fermé, câblage endommagé).",
    causes: [
      { pourcentage: 40, libelle: "Relais de pompe ABS défaillant" },
      { pourcentage: 30, libelle: "Câblage d'alimentation du relais endommagé" },
      { pourcentage: 20, libelle: "Fusible associé grillé" },
      { pourcentage: 10, libelle: "Calculateur ABS défaillant (rare)" },
    ],
    avisPro:
      "Le relais est une pièce peu coûteuse à tester et remplacer en premier avant tout autre diagnostic.",
    pieces: [
      { nom: "Relais pompe ABS", boutique: "AutoDoc · livraison 24h", prix: "15€" },
    ],
  },

  // Carrosserie & sécurité (B0XXX)
  {
    code: "B0001",
    titre: "Défaut du circuit de déploiement airbag conducteur",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — airbag potentiellement inopérant, à traiter immédiatement",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de déploiement de l'airbag conducteur (résistance hors plage, circuit ouvert ou court-circuit). L'airbag peut ne pas se déclencher en cas de choc.",
    causes: [
      { pourcentage: 35, libelle: "Module airbag conducteur défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur (souvent la spirale contact sous le volant) endommagé" },
      { pourcentage: 20, libelle: "Spirale contact (contacteur tournant) usée" },
      { pourcentage: 15, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Ne pas différer l'intervention vu l'enjeu sécurité. La spirale contact sous le volant est une cause très fréquente et abordable à vérifier en premier.",
    pieces: [
      { nom: "Spirale contact (contacteur tournant)", boutique: "Oscaro · livraison 48h", prix: "62€" },
    ],
  },
  {
    code: "B0011",
    titre: "Défaut du circuit de déploiement airbag passager",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — airbag potentiellement inopérant, à traiter immédiatement",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de déploiement de l'airbag passager. L'airbag peut ne pas se déclencher en cas de choc.",
    causes: [
      { pourcentage: 35, libelle: "Module airbag passager défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 20, libelle: "Capteur d'occupation du siège associé défaillant" },
      { pourcentage: 15, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Vérifier aussi le capteur d'occupation du siège passager, souvent lié à ce même défaut sur les véhicules récents.",
    pieces: [
      { nom: "Module airbag passager", boutique: "Mister-Auto · sur commande", prix: "210€" },
    ],
  },
  {
    code: "B0012",
    titre: "Défaut du prétensionneur de ceinture conducteur",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — protection en cas de choc compromise",
    description:
      "Le prétensionneur resserre instantanément la ceinture en cas de choc pour limiter les mouvements du corps. Un défaut de circuit peut l'empêcher de se déclencher.",
    causes: [
      { pourcentage: 40, libelle: "Prétensionneur défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 20, libelle: "Boucle de ceinture défaillante" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Le prétensionneur est un élément pyrotechnique à usage unique — toujours remplacé par une pièce neuve, jamais reconditionnée, pour des raisons de sécurité.",
    pieces: [
      { nom: "Prétensionneur ceinture conducteur", boutique: "Mister-Auto · sur commande", prix: "138€" },
    ],
  },
  {
    code: "B0013",
    titre: "Défaut du prétensionneur de ceinture passager",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — protection en cas de choc compromise",
    description:
      "Même principe que pour le conducteur, côté passager avant. Un défaut de circuit peut empêcher le prétensionneur de se déclencher en cas de choc.",
    causes: [
      { pourcentage: 40, libelle: "Prétensionneur défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 20, libelle: "Boucle de ceinture défaillante" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Le prétensionneur est un élément pyrotechnique à usage unique — toujours remplacé par une pièce neuve, jamais reconditionnée, pour des raisons de sécurité.",
    pieces: [
      { nom: "Prétensionneur ceinture passager", boutique: "Mister-Auto · sur commande", prix: "138€" },
    ],
  },
  {
    code: "B0051",
    titre: "Défaut du capteur d'impact avant gauche",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement des airbags compromis",
    description:
      "Ce capteur détecte les décélérations brutales à l'avant gauche du véhicule pour déclencher les airbags et prétensionneurs concernés. Un défaut de circuit compromet leur déclenchement.",
    causes: [
      { pourcentage: 45, libelle: "Capteur d'impact défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur endommagé (zone exposée aux chocs mineurs)" },
      { pourcentage: 25, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Vérifier l'état du pare-chocs et de la zone de montage du capteur — un choc mineur non réparé peut avoir endommagé le capteur ou son câblage.",
    pieces: [
      { nom: "Capteur d'impact avant gauche", boutique: "AutoDoc · livraison 24h", prix: "44€" },
    ],
  },
  {
    code: "B0052",
    titre: "Défaut du capteur d'impact avant droit",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement des airbags compromis",
    description:
      "Ce capteur détecte les décélérations brutales à l'avant droit du véhicule pour déclencher les airbags et prétensionneurs concernés. Un défaut de circuit compromet leur déclenchement.",
    causes: [
      { pourcentage: 45, libelle: "Capteur d'impact défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur endommagé (zone exposée aux chocs mineurs)" },
      { pourcentage: 25, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Vérifier l'état du pare-chocs et de la zone de montage du capteur — un choc mineur non réparé peut avoir endommagé le capteur ou son câblage.",
    pieces: [
      { nom: "Capteur d'impact avant droit", boutique: "AutoDoc · livraison 24h", prix: "44€" },
    ],
  },
  {
    code: "B0092",
    titre: "Défaut du témoin airbag passager",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "faible",
    severiteLabel: "Gravité faible — vérifier tout de même le système airbag",
    description:
      "Le témoin lumineux qui indique si l'airbag passager est activé ou désactivé (selon présence d'un siège enfant) présente un défaut de circuit — ne signifie pas forcément que l'airbag lui-même est défaillant.",
    causes: [
      { pourcentage: 45, libelle: "Ampoule ou LED du témoin défaillante" },
      { pourcentage: 30, libelle: "Câblage du témoin endommagé" },
      { pourcentage: 25, libelle: "Capteur d'occupation du siège passager défaillant (cause indirecte)" },
    ],
    avisPro:
      "Contrôler le témoin lui-même avant de suspecter le système airbag complet — c'est souvent juste l'indicateur qui est en cause.",
    pieces: [
      { nom: "Témoin airbag passager", boutique: "Oscaro · livraison 48h", prix: "28€" },
    ],
  },

  // Codes propriétaires PSA — Peugeot/Citroën/DS (BSI + boîte AL4)
  {
    code: "F9E2",
    titre: "Pas de communication avec le lève-vitre électrique avant gauche",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, vitre concernée hors service",
    description:
      "Le BSI (Boîtier de Servitude Intelligent) ne reçoit plus de réponse du module de lève-vitre électrique avant gauche. Ce code est spécifique aux Peugeot et Citroën équipées d'un BSI — il n'existe pas sur les autres marques.",
    causes: [
      { pourcentage: 35, libelle: "Moteur de lève-vitre défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur de porte avant gauche endommagé" },
      { pourcentage: 20, libelle: "Module lève-vitre intégré défaillant" },
      { pourcentage: 15, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le câblage dans la gaine de porte (zone de flexion fréquente, cause d'usure classique) avant de remplacer le moteur ou le module.",
    pieces: [
      { nom: "Moteur lève-vitre avant gauche", boutique: "Oscaro · livraison 48h", prix: "48€" },
      { nom: "Faisceau de porte avant gauche", boutique: "Mister-Auto · sur commande", prix: "62€" },
    ],
  },
  {
    code: "F02F",
    titre: "Absence de communication avec le(s) moteur(s) d'essuie-glace",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — à traiter rapidement selon météo",
    description:
      "Le BSI ne détecte plus de réponse du ou des moteurs d'essuie-glace, qui communiquent en réseau LIN sur les modèles récents. Spécifique aux Peugeot/Citroën.",
    causes: [
      { pourcentage: 38, libelle: "Moteur d'essuie-glace défaillant" },
      { pourcentage: 27, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 20, libelle: "Fusible dédié grillé" },
      { pourcentage: 15, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le fusible dédié en premier — c'est le contrôle le plus rapide avant de démonter quoi que ce soit.",
    pieces: [
      { nom: "Moteur essuie-glace", boutique: "AutoDoc · livraison 24h", prix: "54€" },
      { nom: "Fusible essuie-glace", boutique: "AutoDoc · livraison 24h", prix: "4€" },
    ],
  },
  {
    code: "F4AE",
    titre: "Défaut de verrouillage des portes et du hayon",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — sécurité du véhicule au stationnement affectée",
    description:
      "Le système de centralisation ne parvient pas à verrouiller correctement les portes et le hayon. Le défaut peut venir d'une seule serrure ou de l'ensemble du circuit.",
    causes: [
      { pourcentage: 35, libelle: "Serrure électrique défaillante sur une porte" },
      { pourcentage: 28, libelle: "Câblage de centralisation endommagé" },
      { pourcentage: 22, libelle: "Moteur de verrouillage du hayon défaillant" },
      { pourcentage: 15, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Identifier la porte concernée en testant le verrouillage une par une — ça oriente directement vers la bonne serrure sans tout démonter.",
    pieces: [
      { nom: "Serrure électrique de porte", boutique: "Oscaro · livraison 48h", prix: "56€" },
      { nom: "Moteur de verrouillage hayon", boutique: "Mister-Auto · sur commande", prix: "68€" },
    ],
  },
  {
    code: "F527",
    titre: "Défaut immobiliseur codé — transpondeur reconnu",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de refus de démarrer",
    description:
      "L'antidémarrage reconnaît bien le transpondeur de la clé mais détecte une anomalie dans la suite de la procédure de déverrouillage moteur — souvent un souci de communication interne plutôt que la clé elle-même.",
    causes: [
      { pourcentage: 35, libelle: "Défaut de communication entre le BSI et le calculateur moteur" },
      { pourcentage: 25, libelle: "Antenne de reconnaissance de clé défaillante" },
      { pourcentage: 25, libelle: "Code antidémarrage désynchronisé côté calculateur moteur" },
      { pourcentage: 15, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Faire reprogrammer la synchronisation antidémarrage par un professionnel équipé avant d'envisager un remplacement de pièce — c'est souvent un problème logiciel, pas matériel.",
    pieces: [
      { nom: "Antenne transpondeur antidémarrage", boutique: "Mister-Auto · sur commande", prix: "74€" },
    ],
  },
  {
    code: "F4BA",
    titre: "Défaut du système d'immobilisation électronique",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de refus de démarrer",
    description:
      "Défaut général du système antidémarrage électronique, distinct de F527 — ici c'est le module lui-même qui est mis en cause plutôt qu'un problème de reconnaissance de clé.",
    causes: [
      { pourcentage: 40, libelle: "Module antidémarrage défaillant" },
      { pourcentage: 30, libelle: "Câblage vers le module endommagé" },
      { pourcentage: 20, libelle: "BSI défaillant" },
      { pourcentage: 10, libelle: "Alimentation du module défaillante" },
    ],
    avisPro:
      "Diagnostic à la valise constructeur recommandé pour distinguer un vrai défaut matériel d'un simple besoin de reprogrammation.",
    pieces: [
      { nom: "Module antidémarrage électronique", boutique: "Mister-Auto · sur commande", prix: "115€" },
    ],
  },
  {
    code: "F4D6",
    titre: "Défaut d'éclairage du tableau de bord",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — visibilité de nuit affectée uniquement",
    description:
      "L'éclairage du tableau de bord (rétroéclairage des compteurs) ne fonctionne plus correctement — n'affecte pas le fonctionnement des instruments eux-mêmes, seulement leur visibilité de nuit.",
    causes: [
      { pourcentage: 45, libelle: "Ampoules ou LED de rétroéclairage défaillantes" },
      { pourcentage: 30, libelle: "Câblage du combiné d'instruments endommagé" },
      { pourcentage: 15, libelle: "Variateur d'intensité (rhéostat) défaillant" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le réglage de la molette de luminosité du tableau de bord avant tout diagnostic — un réglage à zéro est parfois pris pour une panne.",
    pieces: [
      { nom: "Kit LED rétroéclairage tableau de bord", boutique: "AutoDoc · livraison 24h", prix: "19€" },
    ],
  },
  {
    code: "F045",
    titre: "Calculateur non communicant sur le réseau CAN",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — plusieurs fonctions du véhicule peuvent être affectées",
    description:
      "Le BSI signale qu'un calculateur du véhicule ne répond plus sur le réseau CAN. Ce code générique PSA apparaît souvent en complément d'un autre défaut plus précis identifiant quel calculateur est concerné.",
    causes: [
      { pourcentage: 30, libelle: "Fusible ou alimentation du calculateur concerné défaillant" },
      { pourcentage: 28, libelle: "Câblage du bus CAN endommagé" },
      { pourcentage: 22, libelle: "Connecteur du calculateur corrodé" },
      { pourcentage: 20, libelle: "Calculateur défaillant" },
    ],
    avisPro:
      "Lire l'ensemble des défauts stockés pour identifier quel calculateur précis est en cause avant d'intervenir — F045 seul ne suffit pas à cibler la panne.",
    pieces: [
      { nom: "Fusible calculateur", boutique: "AutoDoc · livraison 24h", prix: "4€" },
      { nom: "Connecteur calculateur", boutique: "Oscaro · livraison 48h", prix: "21€" },
    ],
  },
  {
    code: "F01C",
    titre: "Pas de communication avec l'ABS / contrôle de stabilité (ESP)",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP potentiellement désactivés",
    description:
      "Le BSI ne reçoit plus d'informations du calculateur ABS/ESP. Comme pour le code générique U0121, ça désactive les aides à la conduite par sécurité, mais avec la nomenclature propriétaire PSA.",
    causes: [
      { pourcentage: 30, libelle: "Fusible ABS/ESP grillé" },
      { pourcentage: 28, libelle: "Câblage du bus CAN vers le calculateur ABS endommagé" },
      { pourcentage: 22, libelle: "Connecteur ABS corrodé" },
      { pourcentage: 20, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "Vérifier fusible et connecteur avant tout remplacement du calculateur ABS — traitement prioritaire vu l'enjeu sécurité.",
    pieces: [
      { nom: "Fusible ABS", boutique: "AutoDoc · livraison 24h", prix: "4€" },
      { nom: "Connecteur calculateur ABS", boutique: "Oscaro · livraison 48h", prix: "26€" },
    ],
  },
  {
    code: "F4B2",
    titre: "Défaut de commande de surcondamnation (mode piloté)",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — verrouillage simple toujours fonctionnel",
    description:
      "Le verrouillage renforcé des portes (surcondamnation) en mode piloté par le véhicule ne fonctionne plus — les portes se verrouillent normalement mais pas la fonction de sécurité renforcée.",
    causes: [
      { pourcentage: 40, libelle: "Moteur de surcondamnation défaillant" },
      { pourcentage: 30, libelle: "Câblage dédié endommagé" },
      { pourcentage: 20, libelle: "BSI défaillant" },
      { pourcentage: 10, libelle: "Fonction désactivée par erreur lors d'une précédente intervention" },
    ],
    avisPro:
      "Vérifier si la fonction a été désactivée par erreur lors d'une précédente reprogrammation du BSI avant de suspecter une panne matérielle.",
    pieces: [
      { nom: "Moteur de surcondamnation", boutique: "Mister-Auto · sur commande", prix: "58€" },
    ],
  },
  {
    code: "F528",
    titre: "Absence de commande du démarreur",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — véhicule immobilisé",
    description:
      "Le BSI ne parvient pas à envoyer la commande d'activation au démarreur, ce qui empêche le véhicule de démarrer même si l'antidémarrage a validé la clé.",
    causes: [
      { pourcentage: 35, libelle: "Relais de démarreur défaillant" },
      { pourcentage: 28, libelle: "Câblage de commande démarreur endommagé" },
      { pourcentage: 22, libelle: "Démarreur lui-même défaillant" },
      { pourcentage: 15, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Tester le relais de démarreur en premier — c'est une pièce peu coûteuse et fréquemment en cause avant de suspecter le démarreur complet.",
    pieces: [
      { nom: "Relais démarreur", boutique: "AutoDoc · livraison 24h", prix: "12€" },
      { nom: "Démarreur", boutique: "Mister-Auto · sur commande", prix: "168€" },
    ],
  },
  {
    code: "P1167",
    titre: "Défaut de régulation de pression — boîte AL4",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "moderee",
    severiteLabel: "Gravité modérée — à-coups possibles lors des changements de rapport",
    description:
      "Spécifique à la boîte automatique AL4 (Peugeot/Citroën), ce code indique un écart entre la pression hydraulique mesurée et la valeur attendue par le calculateur de boîte.",
    causes: [
      { pourcentage: 35, libelle: "Solénoïde de régulation de pression défaillant" },
      { pourcentage: 28, libelle: "Niveau ou qualité d'huile de boîte incorrecte" },
      { pourcentage: 22, libelle: "Pompe à huile de boîte faible" },
      { pourcentage: 15, libelle: "Capteur de pression défaillant" },
    ],
    avisPro:
      "Contrôler le niveau et l'état de l'huile AL4 en premier — c'est la vérification la plus rapide et la plus fréquemment en cause.",
    pieces: [
      { nom: "Vidange boîte AL4 + filtre", boutique: "AutoDoc · livraison 24h", prix: "48€" },
      { nom: "Solénoïde régulation pression", boutique: "Mister-Auto · sur commande", prix: "85€" },
    ],
  },
  {
    code: "P1727",
    titre: "Défaut de cohérence — information couple moteur (CAN) — boîte AL4",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "moderee",
    severiteLabel: "Gravité modérée — roulable, à traiter rapidement",
    description:
      "Le calculateur de boîte AL4 détecte une incohérence dans les informations de couple moteur transmises par le calculateur moteur via le réseau CAN — un problème de communication plutôt qu'un défaut mécanique de la boîte.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus CAN entre calculateurs endommagé" },
      { pourcentage: 28, libelle: "Calculateur moteur avec version logicielle incompatible" },
      { pourcentage: 22, libelle: "Connecteur du calculateur de boîte corrodé" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier la cohérence des versions logicielles entre calculateur moteur et calculateur de boîte — un défaut de compatibilité après une intervention est une cause fréquente.",
    pieces: [
      { nom: "Connecteur calculateur boîte AL4", boutique: "Oscaro · livraison 48h", prix: "24€" },
    ],
  },
  {
    code: "U1003",
    titre: "Défaut de communication CAN — absence de signal — boîte AL4",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "elevee",
    severiteLabel: "Gravité élevée — boîte potentiellement en mode dégradé",
    description:
      "Le calculateur de boîte AL4 ne reçoit plus aucun signal sur le réseau CAN, contrairement à un simple défaut d'interférence — la ligne semble totalement coupée.",
    causes: [
      { pourcentage: 40, libelle: "Câblage du bus CAN sectionné ou débranché" },
      { pourcentage: 28, libelle: "Fusible ou alimentation du calculateur de boîte défaillant" },
      { pourcentage: 20, libelle: "Connecteur du calculateur de boîte débranché" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Contrôler physiquement les connecteurs du calculateur de boîte AL4 (souvent situé près de la boîte elle-même) avant tout diagnostic électronique plus poussé.",
    pieces: [
      { nom: "Connecteur calculateur boîte AL4", boutique: "Oscaro · livraison 48h", prix: "24€" },
      { nom: "Fusible calculateur boîte", boutique: "AutoDoc · livraison 24h", prix: "4€" },
    ],
  },
  {
    code: "C1395",
    titre: "Défaut signal contacteur kick-down — boîte AL4",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "faible",
    severiteLabel: "Gravité faible — perte de la fonction kick-down uniquement",
    description:
      "Le contacteur kick-down (qui déclenche une rétrogradation rapide quand on enfonce l'accélérateur à fond) envoie un signal incohérent. La boîte continue de fonctionner normalement, seule cette fonction spécifique est affectée.",
    causes: [
      { pourcentage: 42, libelle: "Contacteur kick-down déréglé ou défaillant" },
      { pourcentage: 30, libelle: "Câblage de la pédale d'accélérateur endommagé" },
      { pourcentage: 18, libelle: "Faux contact au niveau de la pédale" },
      { pourcentage: 10, libelle: "Calculateur de boîte défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le réglage mécanique du contacteur sous la pédale d'accélérateur avant de le remplacer — un simple ajustement suffit parfois.",
    pieces: [
      { nom: "Contacteur kick-down", boutique: "Mister-Auto · sur commande", prix: "44€" },
    ],
  },
  {
    code: "F701",
    titre: "Défaut capteur de température d'air habitacle",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — climatisation moins précise, pas de risque",
    description:
      "Le capteur qui mesure la température de l'air dans l'habitacle envoie un signal incohérent, ce qui perturbe la régulation automatique de la climatisation sans l'empêcher totalement de fonctionner.",
    causes: [
      { pourcentage: 45, libelle: "Capteur de température habitacle défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur du capteur endommagé" },
      { pourcentage: 15, libelle: "Prise d'air du capteur obstruée (poussière)" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier que la prise d'air du capteur (souvent près de l'autoradio ou du pavillon) n'est pas obstruée avant de le remplacer.",
    pieces: [
      { nom: "Capteur température habitacle", boutique: "Oscaro · livraison 48h", prix: "22€" },
    ],
  },
  {
    code: "F70A",
    titre: "Défaut capteur de soufflage d'air côté conducteur",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — climatisation automatique moins précise",
    description:
      "Sur les véhicules à climatisation bi-zone, ce capteur mesure la température de l'air soufflé côté conducteur pour ajuster automatiquement le mélange chaud/froid.",
    causes: [
      { pourcentage: 45, libelle: "Capteur de soufflage défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 25, libelle: "Volet de mélange d'air bloqué mécaniquement" },
    ],
    avisPro:
      "Vérifier que les volets de mélange d'air bougent librement (souvent accessibles en démontant la boîte à gants) avant de remplacer le capteur.",
    pieces: [
      { nom: "Capteur de soufflage d'air", boutique: "AutoDoc · livraison 24h", prix: "26€" },
    ],
  },
  {
    code: "F4A5",
    titre: "Défaut d'éclairage du clignotant droit",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — sécurité routière, contrôle technique",
    description:
      "Le BSI détecte une anomalie électrique sur le circuit du clignotant avant ou arrière droit — le plus souvent une ampoule grillée, ce qui fait clignoter le témoin plus vite que la normale au tableau de bord.",
    causes: [
      { pourcentage: 55, libelle: "Ampoule de clignotant grillée" },
      { pourcentage: 25, libelle: "Douille ou connecteur oxydé" },
      { pourcentage: 15, libelle: "Câblage endommagé" },
      { pourcentage: 5, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier toutes les ampoules du côté concerné (avant et arrière, parfois répétiteur latéral) avant de suspecter le câblage — c'est presque toujours une ampoule.",
    pieces: [
      { nom: "Ampoule clignotant", boutique: "AutoDoc · livraison 24h", prix: "6€" },
    ],
  },
  {
    code: "F4EA",
    titre: "Défaut d'éclairage du feu de jour gauche",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — feux de croisement non affectés",
    description:
      "Le feu de jour (DRL) avant gauche ne s'allume plus correctement. Sur la plupart des véhicules, ceci n'affecte pas l'éclairage nocturne (feux de croisement), qui reste sur un circuit séparé.",
    causes: [
      { pourcentage: 40, libelle: "Module LED de feu de jour défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur du bloc optique endommagé" },
      { pourcentage: 20, libelle: "Fusible dédié grillé" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le fusible dédié en premier — sur beaucoup de modèles les feux de jour ont leur propre fusible séparé des feux de croisement.",
    pieces: [
      { nom: "Module LED feu de jour", boutique: "Mister-Auto · sur commande", prix: "68€" },
    ],
  },
  {
    code: "F9C7",
    titre: "Défaut de réglage électrique du rétroviseur conducteur",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — confort uniquement",
    description:
      "Le moteur de réglage horizontal ou vertical du rétroviseur électrique côté conducteur ne répond plus aux commandes.",
    causes: [
      { pourcentage: 45, libelle: "Moteur de réglage du rétroviseur défaillant" },
      { pourcentage: 30, libelle: "Câblage dans la porte endommagé (zone de flexion)" },
      { pourcentage: 15, libelle: "Commande de réglage au tableau de bord défaillante" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le câblage dans la gaine de porte avant de remplacer le rétroviseur complet — c'est une pièce coûteuse souvent changée à tort.",
    pieces: [
      { nom: "Moteur de réglage rétroviseur", boutique: "Oscaro · livraison 48h", prix: "34€" },
    ],
  },
  {
    code: "F030",
    titre: "Pas de communication avec le calculateur de toit ouvrant",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — toit ouvrant hors service, pas de risque",
    description:
      "Le BSI ne parvient plus à communiquer avec le calculateur dédié au toit ouvrant électrique, qui reste alors bloqué dans sa position actuelle.",
    causes: [
      { pourcentage: 35, libelle: "Fusible du toit ouvrant grillé" },
      { pourcentage: 30, libelle: "Câblage ou connecteur du calculateur toit ouvrant endommagé" },
      { pourcentage: 20, libelle: "Calculateur de toit ouvrant défaillant" },
      { pourcentage: 15, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le fusible dédié en premier — accessible et peu coûteux à contrôler avant tout autre diagnostic.",
    pieces: [
      { nom: "Fusible toit ouvrant", boutique: "AutoDoc · livraison 24h", prix: "4€" },
    ],
  },
  {
    code: "F888",
    titre: "Défaut de position du toit ouvrant",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — toit ouvrant potentiellement bloqué",
    description:
      "Le capteur de position du toit ouvrant envoie une information incohérente, empêchant le calculateur de savoir si le toit est ouvert, fermé ou entrouvert.",
    causes: [
      { pourcentage: 45, libelle: "Capteur de position défaillant" },
      { pourcentage: 30, libelle: "Mécanisme du toit ouvrant grippé ou déréglé" },
      { pourcentage: 25, libelle: "Câblage du capteur endommagé" },
    ],
    avisPro:
      "Un réapprentissage de la position du toit (souvent via une procédure simple à la commande) résout parfois le défaut sans remplacer de pièce.",
    pieces: [
      { nom: "Capteur de position toit ouvrant", boutique: "Mister-Auto · sur commande", prix: "52€" },
    ],
  },
  {
    code: "F363",
    titre: "Défaut du témoin airbag",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — à faire vérifier rapidement",
    description:
      "Le témoin lumineux airbag au tableau de bord présente un défaut de circuit. Important : ce témoin sert aussi à signaler de vrais défauts du système airbag — un témoin qui reste éteint alors qu'il devrait s'allumer masquerait un problème réel.",
    causes: [
      { pourcentage: 40, libelle: "Ampoule ou LED du témoin défaillante" },
      { pourcentage: 30, libelle: "Câblage du témoin endommagé" },
      { pourcentage: 20, libelle: "Calculateur airbag qui ne communique plus l'état au BSI" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Ne pas se contenter de vérifier l'ampoule : faire lire les défauts du calculateur airbag lui-même pour écarter un vrai problème de sécurité sous-jacent.",
    pieces: [
      { nom: "Diagnostic calculateur airbag (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "FCC0",
    titre: "Défaut contacteur ceinture conducteur non bouclée",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — alerte sonore/visuelle affectée uniquement",
    description:
      "Le contacteur qui détecte si la ceinture conducteur est bouclée envoie un signal incohérent. La ceinture elle-même reste pleinement fonctionnelle, seule l'alerte de rappel est concernée.",
    causes: [
      { pourcentage: 50, libelle: "Contacteur de boucle de ceinture défaillant" },
      { pourcentage: 30, libelle: "Câblage sous le siège endommagé" },
      { pourcentage: 20, libelle: "Connecteur de boucle de ceinture oxydé" },
    ],
    avisPro:
      "Le contacteur se situe dans la boucle de ceinture elle-même — un remplacement de la boucle complète est généralement nécessaire, pas juste le contacteur seul.",
    pieces: [
      { nom: "Boucle de ceinture conducteur", boutique: "Mister-Auto · sur commande", prix: "78€" },
    ],
  },
  {
    code: "F17D",
    titre: "Défaut d'information niveau de carburant",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — jauge peu fiable, pas de risque mécanique",
    description:
      "Le signal transmis par la jauge de carburant est incohérent, ce qui peut faire afficher un niveau erroné ou instable sur le tableau de bord.",
    causes: [
      { pourcentage: 50, libelle: "Jauge à flotteur défaillante dans le réservoir" },
      { pourcentage: 30, libelle: "Câblage entre le réservoir et le BSI endommagé" },
      { pourcentage: 20, libelle: "Connecteur au niveau du réservoir oxydé" },
    ],
    avisPro:
      "Ne pas se fier à l'autonomie affichée tant que le défaut n'est pas corrigé — faire le plein à intervalles réguliers en attendant le remplacement de la jauge.",
    pieces: [
      { nom: "Jauge à flotteur carburant", boutique: "Mister-Auto · sur commande", prix: "64€" },
    ],
  },
  {
    code: "F408",
    titre: "Trappe à carburant non détectée fermée",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — vérifier simplement la fermeture",
    description:
      "Le capteur de la trappe à carburant indique qu'elle n'est pas correctement fermée. Souvent un simple oubli après un plein, parfois un défaut du capteur lui-même.",
    causes: [
      { pourcentage: 55, libelle: "Trappe mal refermée ou bouchon mal vissé" },
      { pourcentage: 25, libelle: "Capteur de trappe défaillant" },
      { pourcentage: 20, libelle: "Câblage du capteur endommagé" },
    ],
    avisPro:
      "Vérifier d'abord que la trappe est bien fermée et le bouchon correctement vissé (jusqu'au clic) avant tout diagnostic électrique.",
    pieces: [
      { nom: "Capteur de trappe à carburant", boutique: "AutoDoc · livraison 24h", prix: "18€" },
    ],
  },
  {
    code: "FC93",
    titre: "Défaut de commande de l'avertisseur sonore (klaxon)",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — confort et signalisation affectés",
    description:
      "Le circuit de commande de l'avertisseur sonore présente une anomalie, empêchant son déclenchement normal depuis le volant.",
    causes: [
      { pourcentage: 35, libelle: "Contacteur de klaxon au volant défaillant" },
      { pourcentage: 25, libelle: "Relais de klaxon défaillant" },
      { pourcentage: 25, libelle: "Câblage de la colonne de direction endommagé" },
      { pourcentage: 15, libelle: "Klaxon lui-même défaillant" },
    ],
    avisPro:
      "Tester le relais de klaxon en premier — pièce peu coûteuse et fréquemment en cause avant de suspecter le contacteur au volant.",
    pieces: [
      { nom: "Relais klaxon", boutique: "AutoDoc · livraison 24h", prix: "8€" },
      { nom: "Avertisseur sonore (klaxon)", boutique: "Oscaro · livraison 48h", prix: "16€" },
    ],
  },
  {
    code: "F00B",
    titre: "Défaut réseau CAN confort",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — plusieurs fonctions de confort peuvent être affectées",
    description:
      "Le réseau CAN dédié aux fonctions de confort (vitres, climatisation, rétroviseurs...) présente une anomalie générale de communication, distincte du réseau moteur ou châssis.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus CAN confort endommagé" },
      { pourcentage: 25, libelle: "Un module connecté au réseau confort en court-circuit" },
      { pourcentage: 25, libelle: "Connecteur BSI corrodé" },
      { pourcentage: 15, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Débrancher un par un les modules récemment intervenus (vitres, rétroviseurs) peut aider à isoler lequel perturbe le réseau avant un diagnostic complet.",
    pieces: [
      { nom: "Connecteur BSI", boutique: "Mister-Auto · sur commande", prix: "38€" },
    ],
  },
  {
    code: "P1732",
    titre: "Défaut capteur position sélecteur — butée basse — boîte AM6",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — logique de passage des rapports affectée",
    description:
      "Spécifique à la boîte automatique AM6 (Peugeot/Citroën), ce capteur intégré au calculateur de boîte détecte la position du sélecteur de vitesses. Un défaut à la butée basse peut fausser la reconnaissance du rapport engagé.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de position sélecteur défaillant" },
      { pourcentage: 28, libelle: "Réglage mécanique du sélecteur incorrect" },
      { pourcentage: 20, libelle: "Câblage interne au calculateur de boîte endommagé" },
      { pourcentage: 12, libelle: "Calculateur de boîte AM6 défaillant" },
    ],
    avisPro:
      "Faire vérifier le réglage mécanique de la tringlerie de sélection avant d'envisager un remplacement du calculateur de boîte, qui est une pièce coûteuse.",
    pieces: [
      { nom: "Calculateur boîte AM6 (reconditionné)", boutique: "Mister-Auto · sur commande", prix: "290€" },
    ],
  },
  {
    code: "F797",
    titre: "Défaut de commande du soutien lombaire du siège",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — confort uniquement",
    description:
      "Le contacteur qui commande le réglage du soutien lombaire du siège reste bloqué en position active, ce qui peut provoquer un gonflage continu ou un blocage du réglage.",
    causes: [
      { pourcentage: 45, libelle: "Contacteur de réglage lombaire bloqué mécaniquement" },
      { pourcentage: 30, libelle: "Câblage sous le siège endommagé" },
      { pourcentage: 25, libelle: "Moteur ou pompe de réglage lombaire défaillant" },
    ],
    avisPro:
      "Vérifier que le contacteur revient bien à sa position neutre après utilisation — un simple grain de saleté peut le bloquer.",
    pieces: [
      { nom: "Contacteur réglage lombaire", boutique: "Oscaro · livraison 48h", prix: "28€" },
    ],
  },
  {
    code: "F018",
    titre: "Pas de communication avec le calculateur de direction assistée électrique",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — assistance de direction potentiellement perdue",
    description:
      "Le BSI ne reçoit plus de réponse du calculateur de direction assistée électrique. Sans assistance, la direction reste fonctionnelle mais devient beaucoup plus dure à manœuvrer, en particulier à basse vitesse.",
    causes: [
      { pourcentage: 32, libelle: "Fusible ou alimentation de la direction assistée défaillant" },
      { pourcentage: 28, libelle: "Câblage du bus CAN vers le calculateur endommagé" },
      { pourcentage: 22, libelle: "Connecteur du calculateur de direction corrodé" },
      { pourcentage: 18, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "À traiter rapidement vu l'effort de conduite supplémentaire — vérifier fusible et connecteurs avant d'envisager le remplacement du calculateur, pièce coûteuse.",
    pieces: [
      { nom: "Fusible direction assistée", boutique: "AutoDoc · livraison 24h", prix: "4€" },
      { nom: "Connecteur calculateur direction", boutique: "Oscaro · livraison 48h", prix: "26€" },
    ],
  },
  {
    code: "F085",
    titre: "Pas de communication avec le calculateur d'aide au stationnement",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — confort uniquement",
    description:
      "Le BSI ne communique plus avec le calculateur qui gère les radars de stationnement (avant et/ou arrière). Les capteurs eux-mêmes peuvent être en bon état, c'est la liaison qui est en cause.",
    causes: [
      { pourcentage: 35, libelle: "Fusible du calculateur d'aide au stationnement grillé" },
      { pourcentage: 28, libelle: "Câblage ou connecteur du calculateur endommagé" },
      { pourcentage: 22, libelle: "Calculateur d'aide au stationnement défaillant" },
      { pourcentage: 15, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier le fusible dédié avant tout autre diagnostic — contrôle rapide et gratuit.",
    pieces: [
      { nom: "Calculateur aide au stationnement", boutique: "Mister-Auto · sur commande", prix: "95€" },
    ],
  },
  {
    code: "F4C6",
    titre: "Défaut correcteur d'assiette des projecteurs Xenon",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — risque d'éblouissement, à corriger rapidement",
    description:
      "Le système de correction automatique d'assiette des feux Xenon (qui ajuste l'orientation des phares selon la charge du véhicule) présente un défaut. Un mauvais réglage peut éblouir les autres usagers ou réduire l'éclairage de la route.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de hauteur de caisse défaillant" },
      { pourcentage: 28, libelle: "Moteur de correction d'assiette du projecteur défaillant" },
      { pourcentage: 20, libelle: "Câblage du capteur ou du moteur endommagé" },
      { pourcentage: 14, libelle: "Calculateur de correction défaillant" },
    ],
    avisPro:
      "Ce réglage est soumis au contrôle technique sur véhicules Xenon — à faire corriger avant un contrôle si le défaut persiste.",
    pieces: [
      { nom: "Capteur de hauteur de caisse", boutique: "Oscaro · livraison 48h", prix: "32€" },
      { nom: "Moteur correcteur d'assiette", boutique: "Mister-Auto · sur commande", prix: "58€" },
    ],
  },
  {
    code: "F520",
    titre: "Défaut de cohérence du régulateur de vitesse",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — régulateur indisponible, conduite normale possible",
    description:
      "Le système détecte une incohérence dans les informations liées au régulateur/limiteur de vitesse, ce qui désactive la fonction par sécurité sans affecter la conduite normale du véhicule.",
    causes: [
      { pourcentage: 35, libelle: "Commande de régulateur au volant défaillante" },
      { pourcentage: 25, libelle: "Incohérence entre capteur de vitesse et information moteur" },
      { pourcentage: 25, libelle: "Câblage de la commande régulateur endommagé" },
      { pourcentage: 15, libelle: "Calculateur moteur ou BSI défaillant" },
    ],
    avisPro:
      "Vérifier la commande au volant (contacts qui peuvent s'encrasser avec le temps) avant tout diagnostic plus poussé.",
    pieces: [
      { nom: "Commande régulateur de vitesse (volant)", boutique: "Mister-Auto · sur commande", prix: "72€" },
    ],
  },
  {
    code: "F035",
    titre: "Pas de communication avec le boîtier fusibles de la remorque",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — n'affecte que le fonctionnement de l'attelage",
    description:
      "Sur les véhicules équipés d'un attelage électrifié, ce code signale une perte de communication avec le boîtier gérant l'alimentation électrique de la remorque (feux, clignotants). N'a aucun impact si vous ne tractez pas.",
    causes: [
      { pourcentage: 40, libelle: "Fusible du boîtier attelage grillé" },
      { pourcentage: 30, libelle: "Câblage ou connecteur de l'attelage endommagé (corrosion, humidité)" },
      { pourcentage: 20, libelle: "Boîtier électronique d'attelage défaillant" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Le connecteur d'attelage est très exposé à l'humidité et au sel — un nettoyage et un traitement anti-corrosion résolvent souvent le problème.",
    pieces: [
      { nom: "Boîtier électronique attelage", boutique: "Mister-Auto · sur commande", prix: "86€" },
    ],
  },
  {
    code: "F52B",
    titre: "Tension insuffisante fournie par l'alternateur piloté",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de panne de batterie",
    description:
      "L'alternateur à régulation pilotée (qui ajuste sa charge selon les besoins électriques du véhicule) ne fournit pas une tension suffisante, ce qui risque d'entraîner une décharge progressive de la batterie.",
    causes: [
      { pourcentage: 38, libelle: "Alternateur défaillant" },
      { pourcentage: 25, libelle: "Câblage de régulation pilotée endommagé" },
      { pourcentage: 20, libelle: "Batterie usée qui fausse la régulation" },
      { pourcentage: 17, libelle: "Connecteur d'alternateur corrodé" },
    ],
    avisPro:
      "Tester la batterie en même temps que l'alternateur — une batterie fatiguée peut fausser le diagnostic et faire suspecter l'alternateur à tort.",
    pieces: [
      { nom: "Alternateur", boutique: "Mister-Auto · sur commande", prix: "215€" },
      { nom: "Batterie 12V", boutique: "Oscaro · livraison 48h", prix: "89€" },
    ],
  },
  {
    code: "F015",
    titre: "Pas de communication avec le calculateur moteur",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — nombreuses fonctions du véhicule affectées",
    description:
      "Le BSI ne parvient plus à communiquer avec le calculateur moteur, ce qui peut affecter le démarrage, l'affichage du tableau de bord et de nombreuses fonctions dépendant des informations moteur.",
    causes: [
      { pourcentage: 32, libelle: "Fusible ou alimentation du calculateur moteur défaillant" },
      { pourcentage: 28, libelle: "Câblage du bus CAN endommagé" },
      { pourcentage: 22, libelle: "Connecteur du calculateur moteur corrodé" },
      { pourcentage: 18, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Vérifier fusibles et connecteurs du calculateur moteur en priorité — c'est un défaut qui affecte potentiellement le démarrage, à traiter rapidement.",
    pieces: [
      { nom: "Fusible calculateur moteur", boutique: "AutoDoc · livraison 24h", prix: "4€" },
      { nom: "Connecteur calculateur moteur", boutique: "Oscaro · livraison 48h", prix: "21€" },
    ],
  },
  {
    code: "P1800",
    titre: "Défaut de programmation position Neutre — boîte AT6",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — logique de démarrage/neutre affectée",
    description:
      "Spécifique à la boîte automatique AT6, ce code signale un défaut d'apprentissage ou de programmation de la position Neutre (N) par le calculateur de boîte, utilisée notamment pour autoriser le démarrage en sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Apprentissage de position non effectué après une intervention" },
      { pourcentage: 28, libelle: "Capteur de position sélecteur défaillant" },
      { pourcentage: 20, libelle: "Réglage mécanique du sélecteur incorrect" },
      { pourcentage: 12, libelle: "Calculateur de boîte AT6 défaillant" },
    ],
    avisPro:
      "Après toute intervention sur la tringlerie de sélection, un réapprentissage des positions à la valise constructeur est indispensable — c'est souvent la cause de ce défaut.",
    pieces: [
      { nom: "Diagnostic + réapprentissage boîte AT6 (atelier)", boutique: "Recommandé avant pièce", prix: "80-120€" },
    ],
  },
  {
    code: "P1703",
    titre: "Défaut information position pédale accélérateur — boîte AT6",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — réactivité de la boîte affectée",
    description:
      "Le calculateur de boîte AT6 reçoit une information incorrecte du calculateur moteur concernant la position de la pédale d'accélérateur, ce qui peut perturber la logique de passage des rapports.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus CAN entre calculateur moteur et boîte endommagé" },
      { pourcentage: 28, libelle: "Capteur de pédale d'accélérateur défaillant" },
      { pourcentage: 22, libelle: "Connecteur du calculateur de boîte corrodé" },
      { pourcentage: 15, libelle: "Calculateur moteur ou de boîte défaillant" },
    ],
    avisPro:
      "Vérifier d'abord le capteur de pédale d'accélérateur, commun aux deux calculateurs, avant de suspecter le câblage entre calculateurs.",
    pieces: [
      { nom: "Capteur pédale d'accélérateur", boutique: "AutoDoc · livraison 24h", prix: "68€" },
    ],
  },
  {
    code: "F032",
    titre: "Défaut capteur de pluie/luminosité",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — fonctions automatiques désactivées, commande manuelle OK",
    description:
      "Le capteur combiné pluie/luminosité (situé derrière le rétroviseur intérieur) présente un défaut. Ça désactive le déclenchement automatique des essuie-glaces et de l'allumage des feux, sans empêcher leur commande manuelle.",
    causes: [
      { pourcentage: 45, libelle: "Capteur pluie/luminosité défaillant" },
      { pourcentage: 25, libelle: "Pare-brise mal recollé après remplacement (décalage du capteur)" },
      { pourcentage: 20, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Après un remplacement de pare-brise, vérifier que le capteur a bien été recollé à la bonne position — c'est une cause très fréquente de ce défaut.",
    pieces: [
      { nom: "Capteur pluie/luminosité", boutique: "Oscaro · livraison 48h", prix: "42€" },
    ],
  },
  {
    code: "F4C9",
    titre: "Défaut d'éclairage du feu antibrouillard arrière droit",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — obligatoire par temps de brouillard",
    description:
      "Le feu antibrouillard arrière droit ne s'allume plus correctement. Cet équipement est obligatoire et son absence de fonctionnement peut être sanctionnée en cas de contrôle par mauvaise visibilité.",
    causes: [
      { pourcentage: 55, libelle: "Ampoule d'antibrouillard arrière grillée" },
      { pourcentage: 25, libelle: "Douille ou connecteur oxydé" },
      { pourcentage: 15, libelle: "Câblage endommagé" },
      { pourcentage: 5, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Vérifier l'ampoule en premier — c'est la cause la plus fréquente et la moins chère à corriger.",
    pieces: [
      { nom: "Ampoule antibrouillard arrière", boutique: "AutoDoc · livraison 24h", prix: "5€" },
    ],
  },
  {
    code: "F4AB",
    titre: "Défaut de commande du groupe motoventilateur de refroidissement",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de surchauffe moteur",
    description:
      "Le ventilateur de refroidissement (qui aide à évacuer la chaleur du radiateur, notamment à l'arrêt ou à basse vitesse) ne reçoit plus sa commande correctement. Un ventilateur qui ne se déclenche pas expose le moteur à la surchauffe.",
    causes: [
      { pourcentage: 35, libelle: "Module de commande du ventilateur défaillant" },
      { pourcentage: 25, libelle: "Moteur du groupe motoventilateur grillé" },
      { pourcentage: 22, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 18, libelle: "Fusible ou relais dédié défaillant" },
    ],
    avisPro:
      "Surveiller la température moteur de près en attendant la réparation — éviter les arrêts prolongés moteur tournant (embouteillages, péages) tant que le défaut n'est pas corrigé.",
    pieces: [
      { nom: "Groupe motoventilateur", boutique: "Mister-Auto · sur commande", prix: "145€" },
      { nom: "Module de commande ventilateur", boutique: "Oscaro · livraison 48h", prix: "68€" },
    ],
  },
  {
    code: "F730",
    titre: "Défaut de fonctionnement du pulseur d'air (mode dégradé)",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — ventilation en mode dégradé, pas de risque",
    description:
      "Le module de commande du pulseur d'air de l'habitacle fonctionne en mode dégradé (boucle ouverte) — le pulseur souffle toujours de l'air mais sans la régulation fine habituelle des vitesses.",
    causes: [
      { pourcentage: 40, libelle: "Module de commande du pulseur défaillant" },
      { pourcentage: 30, libelle: "Câblage du pulseur endommagé" },
      { pourcentage: 20, libelle: "Résistance ou variateur du pulseur défaillant" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Contrôler le variateur/module de puissance du pulseur avant de remplacer le moteur du pulseur lui-même, rarement en cause.",
    pieces: [
      { nom: "Module de commande pulseur d'air", boutique: "Oscaro · livraison 48h", prix: "54€" },
    ],
  },
  {
    code: "F731",
    titre: "Blocage du rotor du pulseur d'air",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — ventilation réduite ou absente",
    description:
      "Le rotor du pulseur d'air de l'habitacle est physiquement bloqué, empêchant la ventilation de fonctionner normalement.",
    causes: [
      { pourcentage: 50, libelle: "Corps étranger (feuille, débris) bloquant le rotor" },
      { pourcentage: 30, libelle: "Roulement du pulseur grippé" },
      { pourcentage: 20, libelle: "Moteur du pulseur défaillant" },
    ],
    avisPro:
      "Vérifier la prise d'air extérieure (souvent sous le pare-brise) pour des feuilles ou débris avant de démonter le pulseur — cause très fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Moteur pulseur d'air habitacle", boutique: "AutoDoc · livraison 24h", prix: "62€" },
    ],
  },
  {
    code: "F09B",
    titre: "Absence de communication avec la sirène d'alarme",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — système antivol affecté, pas de risque mécanique",
    description:
      "Le BSI ne communique plus avec la sirène autonome du système d'alarme antivol. Le véhicule reste utilisable normalement, seule la protection antivol est concernée.",
    causes: [
      { pourcentage: 40, libelle: "Batterie interne de la sirène autonome déchargée" },
      { pourcentage: 30, libelle: "Câblage vers la sirène endommagé" },
      { pourcentage: 20, libelle: "Sirène défaillante" },
      { pourcentage: 10, libelle: "BSI défaillant (rare)" },
    ],
    avisPro:
      "Sur les sirènes autonomes (avec batterie de secours), une batterie interne déchargée après plusieurs années est la cause la plus fréquente.",
    pieces: [
      { nom: "Sirène d'alarme autonome", boutique: "Mister-Auto · sur commande", prix: "78€" },
    ],
  },
  {
    code: "FEE4",
    titre: "Défaut de communication entre la sirène et le système d'alarme",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — système antivol affecté, pas de risque mécanique",
    description:
      "Défaut similaire à F09B mais côté protocole de communication entre le calculateur d'alarme et la sirène, plutôt qu'une absence totale de liaison.",
    causes: [
      { pourcentage: 35, libelle: "Sirène défaillante ou mal appairée" },
      { pourcentage: 30, libelle: "Câblage endommagé" },
      { pourcentage: 20, libelle: "Batterie interne de la sirène faible" },
      { pourcentage: 15, libelle: "Calculateur d'alarme défaillant" },
    ],
    avisPro:
      "Un réappairage de la sirène avec le calculateur d'alarme (procédure spécifique constructeur) résout parfois le défaut sans remplacement de pièce.",
    pieces: [
      { nom: "Sirène d'alarme autonome", boutique: "Mister-Auto · sur commande", prix: "78€" },
    ],
  },
  {
    code: "F362",
    titre: "Défaut témoin de désactivation airbag passager",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — à vérifier, enjeu sécurité enfant",
    description:
      "Le témoin qui indique si l'airbag passager est désactivé (utile avec un siège enfant dos à la route) présente un défaut. Il est important de vérifier l'état réel de l'airbag plutôt que de se fier uniquement au témoin.",
    causes: [
      { pourcentage: 40, libelle: "Ampoule ou LED du témoin défaillante" },
      { pourcentage: 30, libelle: "Câblage du témoin endommagé" },
      { pourcentage: 20, libelle: "Contacteur de désactivation défaillant" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Faire vérifier l'état réel d'activation/désactivation de l'airbag passager par un professionnel avant d'installer un siège enfant dos à la route — ne pas se fier uniquement au témoin en cas de doute.",
    pieces: [
      { nom: "Contacteur désactivation airbag passager", boutique: "Mister-Auto · sur commande", prix: "62€" },
    ],
  },
  {
    code: "F704",
    titre: "Défaut capteur d'ensoleillement côté conducteur",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — climatisation automatique moins précise",
    description:
      "Le capteur d'ensoleillement (qui détecte l'intensité et la direction du soleil pour ajuster la climatisation automatique bi-zone) côté conducteur envoie un signal incohérent.",
    causes: [
      { pourcentage: 50, libelle: "Capteur d'ensoleillement défaillant" },
      { pourcentage: 30, libelle: "Câblage du capteur (souvent sur la planche de bord) endommagé" },
      { pourcentage: 20, libelle: "Connecteur oxydé" },
    ],
    avisPro:
      "Défaut mineur qui n'affecte que la précision de la climatisation automatique — peut attendre sans risque.",
    pieces: [
      { nom: "Capteur d'ensoleillement", boutique: "Oscaro · livraison 48h", prix: "36€" },
    ],
  },
  {
    code: "F714",
    titre: "Défaut capteur de qualité d'air",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — recirculation automatique moins efficace",
    description:
      "Le capteur de qualité d'air (qui déclenche automatiquement la recirculation en cas de pollution extérieure détectée, tunnels, embouteillages) ne fonctionne plus correctement.",
    causes: [
      { pourcentage: 50, libelle: "Capteur de qualité d'air défaillant" },
      { pourcentage: 30, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur oxydé" },
    ],
    avisPro:
      "En attendant la réparation, la recirculation peut toujours être activée manuellement depuis les commandes de climatisation.",
    pieces: [
      { nom: "Capteur de qualité d'air", boutique: "Mister-Auto · sur commande", prix: "48€" },
    ],
  },
  {
    code: "U1108",
    titre: "Défaut communication boîte automatique — calculateur moteur — pas de signal — boîte AL4",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de mode dégradé de la boîte",
    description:
      "Le calculateur de boîte AL4 ne reçoit plus aucun signal du calculateur moteur, contrairement à un simple défaut d'interférence — la communication semble totalement coupée entre les deux calculateurs.",
    causes: [
      { pourcentage: 38, libelle: "Câblage du bus CAN entre calculateur moteur et boîte sectionné" },
      { pourcentage: 27, libelle: "Fusible ou alimentation de l'un des deux calculateurs défaillant" },
      { pourcentage: 20, libelle: "Connecteur débranché ou corrodé" },
      { pourcentage: 15, libelle: "Calculateur moteur ou de boîte défaillant" },
    ],
    avisPro:
      "Contrôler physiquement les connecteurs des deux calculateurs avant tout diagnostic électronique plus poussé — un connecteur mal enfiché après une intervention est une cause fréquente.",
    pieces: [
      { nom: "Connecteur calculateur boîte AL4", boutique: "Oscaro · livraison 48h", prix: "24€" },
    ],
  },
  {
    code: "C1325",
    titre: "Info vitesse roue arrière gauche non reçue par le CAN (ABS) — boîte AM6",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP et logique de boîte potentiellement affectés",
    description:
      "Le calculateur de boîte AM6 utilise les informations de vitesse de roue transmises par le calculateur ABS via le réseau CAN pour affiner ses changements de rapport. Ici, l'information de la roue arrière gauche n'est pas reçue.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de vitesse de roue arrière gauche défaillant (côté ABS)" },
      { pourcentage: 27, libelle: "Câblage du capteur ABS endommagé" },
      { pourcentage: 20, libelle: "Câblage du bus CAN entre ABS et boîte endommagé" },
      { pourcentage: 15, libelle: "Calculateur ABS ou de boîte défaillant" },
    ],
    avisPro:
      "Commencer le diagnostic côté ABS (capteur de roue arrière gauche) plutôt que côté boîte — c'est la source de l'information manquante.",
    pieces: [
      { nom: "Capteur ABS arrière gauche", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C100A",
    titre: "Défaut signal capteur de vitesse roue avant gauche — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Code propriétaire PSA équivalent au générique C0035 : le capteur de vitesse de roue avant gauche envoie un signal incohérent ou absent, désactivant l'ABS et l'ESP par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de roue défaillant" },
      { pourcentage: 28, libelle: "Cible denture (anneau codeur) encrassée ou endommagée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Entrefer incorrect (capteur mal positionné)" },
    ],
    avisPro:
      "Nettoyer la cible denture et vérifier l'entrefer avant de remplacer le capteur — un simple encrassement est une cause fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur ABS avant gauche", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C1015",
    titre: "Défaut signal capteur de vitesse roue avant droite — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Code propriétaire PSA équivalent au générique C0040 : le capteur de vitesse de roue avant droite envoie un signal incohérent ou absent, désactivant l'ABS et l'ESP par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de roue défaillant" },
      { pourcentage: 28, libelle: "Cible denture (anneau codeur) encrassée ou endommagée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Entrefer incorrect (capteur mal positionné)" },
    ],
    avisPro:
      "Nettoyer la cible denture et vérifier l'entrefer avant de remplacer le capteur — un simple encrassement est une cause fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur ABS avant droit", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C1020",
    titre: "Défaut signal capteur de vitesse roue arrière gauche — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Code propriétaire PSA équivalent au générique C0045 : le capteur de vitesse de roue arrière gauche envoie un signal incohérent ou absent, désactivant l'ABS et l'ESP par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de roue défaillant" },
      { pourcentage: 28, libelle: "Cible denture (anneau codeur) encrassée ou endommagée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Entrefer incorrect (capteur mal positionné)" },
    ],
    avisPro:
      "Nettoyer la cible denture et vérifier l'entrefer avant de remplacer le capteur — un simple encrassement est une cause fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur ABS arrière gauche", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C102B",
    titre: "Défaut signal capteur de vitesse roue arrière droite — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Code propriétaire PSA équivalent au générique C0050 : le capteur de vitesse de roue arrière droite envoie un signal incohérent ou absent, désactivant l'ABS et l'ESP par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de vitesse de roue défaillant" },
      { pourcentage: 28, libelle: "Cible denture (anneau codeur) encrassée ou endommagée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 12, libelle: "Entrefer incorrect (capteur mal positionné)" },
    ],
    avisPro:
      "Nettoyer la cible denture et vérifier l'entrefer avant de remplacer le capteur — un simple encrassement est une cause fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur ABS arrière droit", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C104B",
    titre: "Défaut de commande électrovanne d'admission avant gauche — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS désactivé",
    description:
      "L'électrovanne du bloc hydraulique ABS qui régule la pression de freinage sur la roue avant gauche ne répond plus correctement aux commandes du calculateur.",
    causes: [
      { pourcentage: 35, libelle: "Électrovanne du bloc hydraulique grippée ou défaillante" },
      { pourcentage: 28, libelle: "Câblage vers l'électrovanne endommagé" },
      { pourcentage: 22, libelle: "Bloc hydraulique ABS encrassé (liquide de frein ancien)" },
      { pourcentage: 15, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "Vérifier la date de la dernière purge du liquide de frein — un liquide ancien encrasse les électrovannes du bloc ABS, cause fréquente sur véhicules peu entretenus.",
    pieces: [
      { nom: "Bloc hydraulique ABS", boutique: "Mister-Auto · sur commande", prix: "320€" },
    ],
  },
  {
    code: "C1053",
    titre: "Défaut électrovanne d'admission arrière gauche — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS désactivé",
    description:
      "L'électrovanne du bloc hydraulique ABS qui régule la pression de freinage sur la roue arrière gauche ne répond plus correctement aux commandes du calculateur.",
    causes: [
      { pourcentage: 35, libelle: "Électrovanne du bloc hydraulique grippée ou défaillante" },
      { pourcentage: 28, libelle: "Câblage vers l'électrovanne endommagé" },
      { pourcentage: 22, libelle: "Bloc hydraulique ABS encrassé (liquide de frein ancien)" },
      { pourcentage: 15, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "Vérifier la date de la dernière purge du liquide de frein — un liquide ancien encrasse les électrovannes du bloc ABS, cause fréquente sur véhicules peu entretenus.",
    pieces: [
      { nom: "Bloc hydraulique ABS", boutique: "Mister-Auto · sur commande", prix: "320€" },
    ],
  },
  {
    code: "C1073",
    titre: "Défaut pompe de recirculation ABS/ASR",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ASR désactivés",
    description:
      "La pompe de recirculation du bloc hydraulique ABS (qui remet le liquide de frein en pression lors des interventions ABS/ASR) ne fonctionne plus correctement.",
    causes: [
      { pourcentage: 35, libelle: "Pompe de recirculation grillée" },
      { pourcentage: 25, libelle: "Fusible ou relais de pompe défaillant" },
      { pourcentage: 22, libelle: "Câblage d'alimentation endommagé" },
      { pourcentage: 18, libelle: "Bloc hydraulique ABS complet défaillant" },
    ],
    avisPro:
      "Vérifier fusible et relais avant d'envisager un remplacement du bloc hydraulique complet, qui est une pièce coûteuse.",
    pieces: [
      { nom: "Fusible/relais pompe ABS", boutique: "Oscaro · livraison 48h", prix: "18€" },
      { nom: "Bloc hydraulique ABS", boutique: "Mister-Auto · sur commande", prix: "320€" },
    ],
  },
  {
    code: "C121D",
    titre: "Défaut capteur de pression du circuit de freinage",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ESP et assistance au freinage affectés",
    description:
      "Le capteur qui mesure la pression dans le circuit de freinage (utilisé par l'ESP et l'aide au freinage d'urgence) envoie un signal incohérent.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de pression de freinage défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur du capteur endommagé" },
      { pourcentage: 20, libelle: "Air dans le circuit de freinage (purge nécessaire)" },
      { pourcentage: 12, libelle: "Calculateur ABS/ESP défaillant" },
    ],
    avisPro:
      "Vérifier l'absence d'air dans le circuit de freinage (pédale spongieuse) avant de remplacer le capteur — une purge résout parfois le défaut.",
    pieces: [
      { nom: "Capteur de pression circuit de freinage", boutique: "Mister-Auto · sur commande", prix: "86€" },
    ],
  },
  {
    code: "C1219",
    titre: "Défaut signal capteur d'angle du volant",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ESP désactivé",
    description:
      "Le capteur d'angle volant, qui indique à l'ESP la direction souhaitée par le conducteur pour la comparer à la trajectoire réelle du véhicule, envoie un signal incohérent.",
    causes: [
      { pourcentage: 40, libelle: "Capteur d'angle volant défaillant" },
      { pourcentage: 28, libelle: "Câblage sous le volant (spirale contact) endommagé" },
      { pourcentage: 20, libelle: "Calibrage du capteur non effectué après une intervention" },
      { pourcentage: 12, libelle: "Calculateur ESP défaillant (rare)" },
    ],
    avisPro:
      "Après tout remplacement de crémaillère, colonne de direction ou pneus/parallélisme, un recalibrage du capteur d'angle volant est indispensable.",
    pieces: [
      { nom: "Capteur d'angle volant", boutique: "Oscaro · livraison 48h", prix: "78€" },
    ],
  },
  {
    code: "C121A",
    titre: "Défaut de calibrage du capteur d'angle du volant",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "moderee",
    severiteLabel: "Gravité modérée — recalibrage nécessaire, pièce rarement en cause",
    description:
      "Contrairement à C1219, ce code n'indique pas une panne matérielle mais l'absence ou l'échec du calibrage du capteur d'angle volant — une procédure obligatoire après certaines interventions.",
    causes: [
      { pourcentage: 55, libelle: "Calibrage jamais effectué après une intervention (parallélisme, direction)" },
      { pourcentage: 25, libelle: "Calibrage interrompu ou mal réalisé" },
      { pourcentage: 20, libelle: "Capteur d'angle volant défaillant" },
    ],
    avisPro:
      "Refaire la procédure de calibrage à la valise constructeur après avoir vérifié que les roues sont bien en position ligne droite — résout la grande majorité des cas sans remplacement.",
    pieces: [
      { nom: "Recalibrage capteur angle volant (atelier)", boutique: "Recommandé avant pièce", prix: "40-70€" },
    ],
  },
  {
    code: "C123C",
    titre: "Défaut signal capteur gyromètre-accéléromètre (ESP)",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ESP désactivé",
    description:
      "Le capteur gyromètre-accéléromètre (qui mesure les mouvements de rotation et d'accélération du véhicule pour détecter un dérapage) envoie un signal incohérent, désactivant l'ESP.",
    causes: [
      { pourcentage: 45, libelle: "Capteur gyromètre-accéléromètre défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur défaillant" },
      { pourcentage: 15, libelle: "Véhicule non de niveau lors d'un calibrage (chargement inégal)" },
      { pourcentage: 10, libelle: "Calculateur ESP défaillant (rare)" },
    ],
    avisPro:
      "Ce capteur est souvent situé sous la console centrale — sensible aux chocs lors d'une intervention sur cette zone, à vérifier en priorité.",
    pieces: [
      { nom: "Capteur gyromètre-accéléromètre (ESP)", boutique: "Oscaro · livraison 48h", prix: "96€" },
    ],
  },
  {
    code: "C1210",
    titre: "Défaut alimentation capteur accélération transversale/longitudinale",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ESP désactivé",
    description:
      "L'alimentation électrique du capteur d'accélération transversale et longitudinale (associé au gyromètre pour l'ESP) est hors plage — un problème d'alimentation plutôt qu'un capteur défaillant en lui-même.",
    causes: [
      { pourcentage: 40, libelle: "Câblage d'alimentation du capteur endommagé" },
      { pourcentage: 28, libelle: "Connecteur du capteur corrodé" },
      { pourcentage: 20, libelle: "Fusible dédié grillé" },
      { pourcentage: 12, libelle: "Capteur défaillant" },
    ],
    avisPro:
      "Contrôler la tension d'alimentation du capteur au multimètre avant de le remplacer — le problème vient souvent du câblage plutôt que du capteur lui-même.",
    pieces: [
      { nom: "Capteur gyromètre-accéléromètre (ESP)", boutique: "Oscaro · livraison 48h", prix: "96€" },
    ],
  },
  {
    code: "C2100",
    titre: "Défaut de sous-tension d'alimentation du calculateur ABS/ESP",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent lié à la batterie, pas au calculateur",
    description:
      "Le calculateur ABS/ESP reçoit une tension d'alimentation trop basse pour fonctionner correctement — la cause est généralement électrique globale (batterie, alternateur) plutôt qu'un défaut propre au calculateur.",
    causes: [
      { pourcentage: 45, libelle: "Batterie faible ou en fin de vie" },
      { pourcentage: 25, libelle: "Alternateur qui charge insuffisamment" },
      { pourcentage: 20, libelle: "Câblage d'alimentation du calculateur endommagé" },
      { pourcentage: 10, libelle: "Calculateur ABS/ESP défaillant" },
    ],
    avisPro:
      "Tester la batterie et l'alternateur avant tout diagnostic sur le calculateur ABS lui-même — c'est presque toujours la vraie cause de ce code.",
    pieces: [
      { nom: "Batterie 12V", boutique: "Oscaro · livraison 48h", prix: "89€" },
    ],
  },
  {
    code: "C2203",
    titre: "Numéro de série (VIN) non enregistré dans le calculateur ABS/ESP",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "faible",
    severiteLabel: "Gravité faible — défaut de configuration, pas de panne matérielle",
    description:
      "Ce n'est pas une panne : le numéro de série (VIN) du véhicule n'a pas été enregistré dans le calculateur ABS/ESP, généralement après un remplacement de calculateur non finalisé par la procédure de programmation.",
    causes: [
      { pourcentage: 80, libelle: "Procédure de programmation VIN oubliée après remplacement du calculateur" },
      { pourcentage: 20, libelle: "Calculateur ABS/ESP défaillant empêchant l'enregistrement" },
    ],
    avisPro:
      "Simple oubli de procédure après une intervention — faire enregistrer le VIN à la valise constructeur, aucune pièce à changer normalement.",
    pieces: [
      { nom: "Programmation VIN calculateur (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "B1400",
    titre: "Défaut capteur de température évaporateur — climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "faible",
    severiteLabel: "Gravité faible — climatisation moins efficace, pas de risque",
    description:
      "Le capteur de température de l'évaporateur (qui protège contre le givrage et régule la climatisation) envoie un signal incohérent au calculateur dédié de climatisation.",
    causes: [
      { pourcentage: 45, libelle: "Capteur de température évaporateur défaillant" },
      { pourcentage: 30, libelle: "Câblage ou connecteur du capteur endommagé" },
      { pourcentage: 25, libelle: "Évaporateur givré (manque de fluide réfrigérant)" },
    ],
    avisPro:
      "Vérifier le niveau de fluide réfrigérant avant de remplacer le capteur — un évaporateur givré par manque de gaz peut fausser la lecture.",
    pieces: [
      { nom: "Capteur température évaporateur", boutique: "Oscaro · livraison 48h", prix: "28€" },
    ],
  },
  {
    code: "B1404",
    titre: "Défaut moteur de distribution d'air — climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "faible",
    severiteLabel: "Gravité faible — air mal redirigé, pas de risque",
    description:
      "Le moteur qui commande les volets de distribution d'air (aérateurs, pare-brise, pieds) ne répond plus correctement — l'air continue d'être soufflé mais pas forcément à l'endroit sélectionné.",
    causes: [
      { pourcentage: 45, libelle: "Moteur de distribution défaillant" },
      { pourcentage: 30, libelle: "Volet de distribution mécaniquement bloqué" },
      { pourcentage: 25, libelle: "Câblage du moteur endommagé" },
    ],
    avisPro:
      "Écouter un bruit de cliquetis répété derrière la planche de bord — c'est souvent le signe d'un volet bloqué que le moteur essaie inutilement d'actionner.",
    pieces: [
      { nom: "Moteur de distribution d'air", boutique: "Mister-Auto · sur commande", prix: "46€" },
    ],
  },
  {
    code: "B1405",
    titre: "Défaut moteur de mixage avant gauche — climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "faible",
    severiteLabel: "Gravité faible — température mal réglée côté conducteur",
    description:
      "Sur les climatisations bi-zone, ce moteur ajuste le volet de mélange air chaud/froid côté conducteur. Un défaut empêche le réglage précis de la température de ce côté.",
    causes: [
      { pourcentage: 45, libelle: "Moteur de mixage défaillant" },
      { pourcentage: 30, libelle: "Volet de mixage bloqué mécaniquement" },
      { pourcentage: 25, libelle: "Câblage du moteur endommagé" },
    ],
    avisPro:
      "Souvent accessible en démontant la boîte à gants ou la planche de bord basse côté conducteur — vérifier le volet avant de remplacer le moteur.",
    pieces: [
      { nom: "Moteur de mixage air", boutique: "Mister-Auto · sur commande", prix: "42€" },
    ],
  },
  {
    code: "B1406",
    titre: "Défaut moteur de mixage avant droit — climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "faible",
    severiteLabel: "Gravité faible — température mal réglée côté passager",
    description:
      "Identique à B1405 mais côté passager avant : le moteur qui ajuste le volet de mélange air chaud/froid ne répond plus correctement.",
    causes: [
      { pourcentage: 45, libelle: "Moteur de mixage défaillant" },
      { pourcentage: 30, libelle: "Volet de mixage bloqué mécaniquement" },
      { pourcentage: 25, libelle: "Câblage du moteur endommagé" },
    ],
    avisPro:
      "Accessible en démontant la boîte à gants côté passager — vérifier le volet avant de remplacer le moteur.",
    pieces: [
      { nom: "Moteur de mixage air", boutique: "Mister-Auto · sur commande", prix: "42€" },
    ],
  },
  {
    code: "B1407",
    titre: "Défaut pressostat — circuit de climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque d'endommager le compresseur",
    description:
      "Le pressostat surveille la pression du circuit de fluide réfrigérant et coupe le compresseur en cas de pression anormale (trop haute ou trop basse) pour le protéger. Un défaut peut empêcher la climatisation de s'enclencher, ou pire, laisser le compresseur fonctionner en conditions dangereuses.",
    causes: [
      { pourcentage: 40, libelle: "Manque de fluide réfrigérant (fuite du circuit)" },
      { pourcentage: 28, libelle: "Pressostat défaillant" },
      { pourcentage: 20, libelle: "Condenseur encrassé ou ventilateur de refroidissement défaillant" },
      { pourcentage: 12, libelle: "Câblage du pressostat endommagé" },
    ],
    avisPro:
      "Ne pas forcer le fonctionnement de la climatisation si ce code est présent — faire contrôler l'étanchéité du circuit avant toute recharge de gaz, sous peine d'endommager le compresseur.",
    pieces: [
      { nom: "Pressostat climatisation", boutique: "Oscaro · livraison 48h", prix: "24€" },
      { nom: "Recharge fluide réfrigérant (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B14A0",
    titre: "Défaut de surtension — calculateur climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent lié à l'alternateur",
    description:
      "Le calculateur de climatisation détecte une tension d'alimentation trop élevée — généralement un problème électrique global du véhicule plutôt qu'un défaut propre au calculateur.",
    causes: [
      { pourcentage: 45, libelle: "Alternateur qui surcharge (régulateur défaillant)" },
      { pourcentage: 30, libelle: "Câblage d'alimentation du calculateur endommagé" },
      { pourcentage: 25, libelle: "Calculateur de climatisation défaillant" },
    ],
    avisPro:
      "Faire contrôler la tension de charge de l'alternateur — une surtension généralisée peut affecter plusieurs calculateurs, pas seulement la climatisation.",
    pieces: [
      { nom: "Alternateur", boutique: "Mister-Auto · sur commande", prix: "215€" },
    ],
  },
  {
    code: "B14A1",
    titre: "Défaut de sous-tension — calculateur climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent lié à la batterie",
    description:
      "Le calculateur de climatisation détecte une tension d'alimentation trop basse — généralement lié à une batterie faible plutôt qu'à un défaut propre au calculateur.",
    causes: [
      { pourcentage: 45, libelle: "Batterie faible ou en fin de vie" },
      { pourcentage: 30, libelle: "Câblage d'alimentation du calculateur endommagé" },
      { pourcentage: 25, libelle: "Alternateur qui charge insuffisamment" },
    ],
    avisPro:
      "Tester la batterie et la charge de l'alternateur avant tout diagnostic sur le calculateur de climatisation lui-même.",
    pieces: [
      { nom: "Batterie 12V", boutique: "Oscaro · livraison 48h", prix: "89€" },
    ],
  },
  {
    code: "U1201",
    titre: "Pas de communication avec le BSI — depuis le calculateur climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — climatisation ne reçoit plus de commandes",
    description:
      "Le calculateur dédié à la climatisation ne reçoit plus d'informations du BSI, ce qui peut désactiver certaines fonctions automatiques de la climatisation.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus CAN entre BSI et calculateur climatisation endommagé" },
      { pourcentage: 28, libelle: "Fusible ou alimentation du calculateur climatisation défaillant" },
      { pourcentage: 22, libelle: "Connecteur corrodé" },
      { pourcentage: 15, libelle: "BSI ou calculateur climatisation défaillant" },
    ],
    avisPro:
      "Vérifier le fusible dédié à la climatisation avant tout diagnostic réseau plus poussé.",
    pieces: [
      { nom: "Fusible calculateur climatisation", boutique: "AutoDoc · livraison 24h", prix: "4€" },
    ],
  },
  {
    code: "U1204",
    titre: "Pas de réponse du boîtier de jonction — depuis le calculateur climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — communication réseau perturbée",
    description:
      "Le boîtier de jonction (passerelle entre différents réseaux CAN du véhicule) ne répond pas aux sollicitations du calculateur de climatisation.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus CAN endommagé" },
      { pourcentage: 28, libelle: "Fusible ou alimentation du boîtier de jonction défaillant" },
      { pourcentage: 22, libelle: "Connecteur corrodé" },
      { pourcentage: 15, libelle: "Boîtier de jonction défaillant" },
    ],
    avisPro:
      "Ce défaut apparaît souvent en cascade avec d'autres codes réseau — traiter en priorité les autres défauts de communication détectés en même temps.",
    pieces: [
      { nom: "Connecteur boîtier de jonction", boutique: "Oscaro · livraison 48h", prix: "22€" },
    ],
  },
  {
    code: "C1121",
    titre: "Défaut relais d'alimentation des électrovannes — ASR80",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ASR désactivés",
    description:
      "Spécifique aux anciens systèmes ASR80, ce relais alimente l'ensemble des électrovannes du bloc hydraulique ABS/ASR. Un défaut coupe l'alimentation de toutes les électrovannes simultanément.",
    causes: [
      { pourcentage: 40, libelle: "Relais d'alimentation défaillant" },
      { pourcentage: 28, libelle: "Fusible associé grillé" },
      { pourcentage: 20, libelle: "Câblage d'alimentation endommagé" },
      { pourcentage: 12, libelle: "Calculateur ABS/ASR défaillant" },
    ],
    avisPro:
      "Le relais est une pièce peu coûteuse à tester et remplacer en premier avant tout autre diagnostic.",
    pieces: [
      { nom: "Relais électrovannes ABS/ASR", boutique: "AutoDoc · livraison 24h", prix: "16€" },
    ],
  },
  {
    code: "C1250",
    titre: "Défaut information vitesse véhicule — ASR80",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ASR ne peuvent plus fonctionner correctement",
    description:
      "Le calculateur ABS/ASR ne parvient plus à calculer une vitesse véhicule fiable à partir des capteurs de roue, ce qui l'empêche de réguler correctement la motricité et le freinage assisté.",
    causes: [
      { pourcentage: 35, libelle: "Un ou plusieurs capteurs de vitesse de roue défaillants" },
      { pourcentage: 25, libelle: "Incohérence entre les 4 capteurs (pneus de tailles différentes)" },
      { pourcentage: 25, libelle: "Câblage endommagé" },
      { pourcentage: 15, libelle: "Calculateur ABS/ASR défaillant" },
    ],
    avisPro:
      "Vérifier que les 4 pneus sont de dimensions identiques et correctement gonflés — un écart de diamètre entre pneus peut déclencher ce défaut.",
    pieces: [
      { nom: "Capteur de vitesse de roue", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C1041",
    titre: "Défaut signal périodique capteur de vitesse avant gauche — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés sur cette roue",
    description:
      "Le calculateur ABS détecte une anomalie dans la fréquence du signal envoyé par le capteur de vitesse de roue avant gauche, typiquement un signal instable ou qui décroche à certains régimes de rotation, ce qui désactive l'ABS et l'ESP par sécurité.",
    causes: [
      { pourcentage: 45, libelle: "Capteur de vitesse de roue défaillant (signal intermittent)" },
      { pourcentage: 25, libelle: "Cible denture endommagée ou partiellement décollée" },
      { pourcentage: 18, libelle: "Entrefer capteur/cible trop important" },
      { pourcentage: 12, libelle: "Câblage ou connecteur oxydé" },
    ],
    avisPro:
      "Vérifier en priorité l'état de la cible denture et l'entrefer avant de remplacer le capteur — un signal périodique instable trahit souvent un problème mécanique plutôt qu'électronique.",
    pieces: [
      { nom: "Capteur ABS avant gauche", boutique: "Oscaro · livraison 48h", prix: "32€" },
    ],
  },
  {
    code: "C1046",
    titre: "Défaut surveillance roue avant gauche en phase de pression — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — régulation ABS compromise sur cette roue",
    description:
      "Pendant une phase de freinage ABS active, le calculateur ne parvient pas à surveiller correctement le comportement de la roue avant gauche lorsque le circuit hydraulique applique la pression — signe d'une régulation défaillante sur cette roue.",
    causes: [
      { pourcentage: 35, libelle: "Électrovanne du circuit avant gauche encrassée ou bloquée" },
      { pourcentage: 30, libelle: "Capteur de vitesse défaillant ou signal dégradé sous charge" },
      { pourcentage: 20, libelle: "Groupe hydroélectronique (bloc ABS) défaillant" },
      { pourcentage: 15, libelle: "Câblage endommagé" },
    ],
    avisPro:
      "Ce défaut apparaît souvent après un défaut capteur non traité — commencer par vérifier le capteur de roue avant de suspecter le bloc hydraulique, plus coûteux à remplacer.",
    pieces: [
      { nom: "Capteur ABS avant gauche", boutique: "AutoDoc · livraison 24h", prix: "32€" },
      { nom: "Diagnostic bloc hydraulique ABS (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "C104F",
    titre: "Défaut électrovanne d'admission avant droite — bloc ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — régulation ABS compromise sur cette roue",
    description:
      "L'électrovanne d'admission du circuit avant droit, qui régule l'arrivée de pression hydraulique lors d'un freinage ABS, ne répond plus correctement aux commandes du calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Électrovanne bloquée ou encrassée" },
      { pourcentage: 30, libelle: "Bobine de commande de l'électrovanne défaillante (circuit coupé)" },
      { pourcentage: 18, libelle: "Câblage ou connecteur du bloc hydraulique endommagé" },
      { pourcentage: 12, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "Un bloc hydraulique complet est une pièce coûteuse — faire confirmer par un diagnostic électrique de la bobine avant tout remplacement.",
    pieces: [
      { nom: "Diagnostic électrovanne bloc ABS (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
      { nom: "Bloc hydraulique ABS (échange standard)", boutique: "Mister-Auto · sur commande", prix: "280-420€" },
    ],
  },
  {
    code: "C105B",
    titre: "Défaut électrovanne d'échappement arrière droite — bloc ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — régulation ABS compromise sur cette roue",
    description:
      "L'électrovanne d'échappement du circuit arrière droit, qui relâche la pression hydraulique pendant une régulation ABS, ne fonctionne plus correctement — la roue peut rester sous pression excessive lors d'un freinage d'urgence.",
    causes: [
      { pourcentage: 38, libelle: "Électrovanne bloquée par encrassement du liquide de frein" },
      { pourcentage: 28, libelle: "Bobine de commande défaillante" },
      { pourcentage: 20, libelle: "Câblage du bloc hydraulique endommagé" },
      { pourcentage: 14, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "Un liquide de frein jamais purgé favorise l'encrassement des électrovannes — vérifier la date de la dernière purge avant de conclure à une panne du bloc.",
    pieces: [
      { nom: "Diagnostic électrovanne bloc ABS (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C1200",
    titre: "Défaut électrovannes d'échappement diagonale avant gauche / arrière droite — ABS PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — régulation ABS compromise sur deux roues",
    description:
      "Le circuit de freinage diagonal reliant la roue avant gauche et la roue arrière droite (montage en X, courant chez PSA) présente un défaut commun aux deux électrovannes d'échappement de ce circuit.",
    causes: [
      { pourcentage: 35, libelle: "Bloc hydraulique ABS défaillant (électrovannes communes)" },
      { pourcentage: 30, libelle: "Câblage du connecteur commun aux deux électrovannes endommagé" },
      { pourcentage: 20, libelle: "Calculateur ABS défaillant" },
      { pourcentage: 15, libelle: "Masse électrique défectueuse sur ce circuit" },
    ],
    avisPro:
      "Un défaut touchant deux électrovannes en même temps oriente davantage vers une masse ou un connecteur commun défaillant que vers deux pannes mécaniques simultanées.",
    pieces: [
      { nom: "Diagnostic circuit hydraulique ABS (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "C121E",
    titre: "Défaut signal de sortie du capteur de pression de freinage — ESP PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — assistance ESP au freinage dégradée",
    description:
      "Le capteur de pression du circuit de freinage, qui informe le calculateur ESP de la force appliquée sur la pédale, envoie un signal de sortie incohérent ou hors plage, limitant la précision de l'assistance au freinage d'urgence.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de pression défaillant" },
      { pourcentage: 25, libelle: "Câblage ou connecteur du capteur endommagé" },
      { pourcentage: 20, libelle: "Bulles d'air dans le circuit hydraulique perturbant la mesure" },
      { pourcentage: 15, libelle: "Calculateur ESP défaillant" },
    ],
    avisPro:
      "Purger le circuit de freinage avant de remplacer le capteur — de l'air résiduel peut fausser la mesure de pression et déclencher ce défaut sans panne matérielle.",
    pieces: [
      { nom: "Capteur de pression de freinage", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "C1290",
    titre: "Défaut de communication réseau CAN — calculateur ABS/ESP PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP privés d'informations réseau",
    description:
      "Le calculateur ABS/ESP détecte une anomalie sur le réseau CAN (bus de données reliant les calculateurs du véhicule), ce qui peut le priver d'informations essentielles venant d'autres calculateurs (moteur, direction, BSI).",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus CAN endommagé ou court-circuité" },
      { pourcentage: 25, libelle: "Connecteur du calculateur ABS mal enfiché ou corrodé" },
      { pourcentage: 20, libelle: "Résistance de terminaison du bus CAN défaillante" },
      { pourcentage: 20, libelle: "Autre calculateur du réseau perturbant le bus (défaut en cascade)" },
    ],
    avisPro:
      "Vérifier si d'autres calculateurs affichent aussi des défauts réseau au même moment — un défaut CAN isolé sur l'ABS seul oriente vers son câblage propre, un défaut généralisé vers le bus lui-même.",
    pieces: [
      { nom: "Diagnostic réseau CAN (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C121C",
    titre: "Défaut requête de couple moteur rejetée — ESP PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "moderee",
    severiteLabel: "Gravité modérée — efficacité de l'ESP réduite",
    description:
      "Le calculateur ESP demande une réduction ponctuelle du couple moteur pour stabiliser le véhicule (lors d'un freinage ou d'une perte d'adhérence), mais cette requête est rejetée par le calculateur moteur — l'ESP perd alors une partie de son efficacité sans désactiver le freinage de base.",
    causes: [
      { pourcentage: 35, libelle: "Incohérence de communication entre calculateur ESP et calculateur moteur" },
      { pourcentage: 30, libelle: "Version logicielle du calculateur moteur incompatible après une reprogrammation" },
      { pourcentage: 20, libelle: "Défaut réseau CAN ponctuel" },
      { pourcentage: 15, libelle: "Calculateur moteur en mode dégradé pour une autre raison" },
    ],
    avisPro:
      "Vérifier d'abord si le calculateur moteur a un défaut propre qui le place en mode dégradé — la requête ESP est alors rejetée en conséquence, pas à cause de l'ESP lui-même.",
    pieces: [
      { nom: "Diagnostic inter-calculateurs ESP/moteur (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C123A",
    titre: "Défaut programmation des capteurs du contrôle de stabilité — ESP PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent résolu par calibration, sans pièce",
    description:
      "Le calculateur ESP détecte que les capteurs du contrôle de stabilité (accéléromètre, gyromètre, angle volant) n'ont pas été correctement programmés ou reconnus après une intervention — typiquement après un remplacement de calculateur ou de capteur.",
    causes: [
      { pourcentage: 50, libelle: "Calculateur ESP ou capteur remplacé sans reprogrammation/calibration à la valise" },
      { pourcentage: 25, libelle: "Procédure de calibration du capteur d'angle volant non effectuée après une intervention direction" },
      { pourcentage: 15, libelle: "Configuration véhicule incorrecte dans le calculateur" },
      { pourcentage: 10, libelle: "Défaut réseau perturbant la procédure d'apprentissage" },
    ],
    avisPro:
      "Ce défaut disparaît généralement après une calibration complète à la valise constructeur — aucune pièce à changer si les capteurs sont physiquement sains.",
    pieces: [
      { nom: "Calibration capteurs ESP à la valise (atelier)", boutique: "Recommandé avant pièce", prix: "40-70€" },
    ],
  },
  {
    code: "C2101",
    titre: "Défaut surtension d'alimentation — calculateur ABS/ESP PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "moderee",
    severiteLabel: "Gravité modérée — coupure de sécurité, souvent électrique",
    description:
      "Le calculateur ABS/ESP détecte une tension d'alimentation supérieure à sa plage de fonctionnement normale, ce qui l'amène à se couper temporairement par sécurité pour éviter d'endommager ses composants électroniques.",
    causes: [
      { pourcentage: 40, libelle: "Alternateur déréglé (surcharge de la batterie)" },
      { pourcentage: 25, libelle: "Régulateur de tension défaillant" },
      { pourcentage: 20, libelle: "Câblage de masse ou d'alimentation endommagé" },
      { pourcentage: 15, libelle: "Batterie récemment remplacée par un modèle inadapté" },
    ],
    avisPro:
      "Faire contrôler la tension de charge moteur tournant — une surtension généralisée affecte souvent plusieurs calculateurs en même temps, pas seulement l'ABS.",
    pieces: [
      { nom: "Diagnostic circuit de charge (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "C2116",
    titre: "Défaut alimentation pompe de recirculation — ABS/ASR PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "moderee",
    severiteLabel: "Gravité modérée — assistance ASR/ESP active désactivée",
    description:
      "La pompe de recirculation du bloc hydraulique, qui renvoie le liquide de frein vers le circuit principal pendant une régulation ASR/ESP active, ne reçoit plus une alimentation électrique correcte.",
    causes: [
      { pourcentage: 35, libelle: "Fusible ou relais de la pompe grillé" },
      { pourcentage: 30, libelle: "Câblage d'alimentation de la pompe endommagé" },
      { pourcentage: 20, libelle: "Pompe de recirculation en fin de vie" },
      { pourcentage: 15, libelle: "Calculateur ABS défaillant côté commande de pompe" },
    ],
    avisPro:
      "Contrôler le fusible et le relais dédiés avant d'envisager le remplacement du bloc hydraulique complet, bien plus coûteux.",
    pieces: [
      { nom: "Relais pompe de recirculation ABS", boutique: "AutoDoc · livraison 24h", prix: "18€" },
    ],
  },
  {
    code: "U0126",
    titre: "Absence de communication avec le capteur d'angle volant — ESP PSA",
    categorie: "psa",
    categorieLabel: "PSA — ABS/ESP",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ESP en veille de sécurité",
    description:
      "Le calculateur ESP ne reçoit plus aucune donnée du capteur d'angle volant, une information indispensable pour détecter un sous-virage ou un survirage — l'ESP se met en veille par sécurité tant que cette communication n'est pas rétablie.",
    causes: [
      { pourcentage: 35, libelle: "Capteur d'angle volant défaillant" },
      { pourcentage: 25, libelle: "Câblage sous le volant ou connecteur du contacteur tournant endommagé" },
      { pourcentage: 20, libelle: "Contacteur tournant (spirale sous volant) défectueux" },
      { pourcentage: 20, libelle: "Défaut réseau CAN généralisé" },
    ],
    avisPro:
      "Si la direction assistée affiche aussi un défaut au même moment, suspecter en priorité le contacteur tournant sous le volant plutôt que le capteur lui-même.",
    pieces: [
      { nom: "Contacteur tournant (spirale sous volant)", boutique: "Mister-Auto · sur commande", prix: "55-90€" },
    ],
  },
  {
    code: "U1213",
    titre: "Défaut communication fonction ESP — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "moderee",
    severiteLabel: "Gravité modérée — intégration ESP/boîte dégradée",
    description:
      "La boîte de vitesses automatique AL4 ne reçoit plus correctement les informations liées à la fonction ESP (intervention stabilité), ce qui peut perturber la gestion du couple transmis aux roues lors d'un freinage d'urgence ou d'une perte d'adhérence.",
    causes: [
      { pourcentage: 40, libelle: "Défaut réseau CAN entre calculateur boîte et calculateur ESP" },
      { pourcentage: 25, libelle: "Calculateur ESP en défaut propre" },
      { pourcentage: 20, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 15, libelle: "Calculateur de boîte AL4 défaillant" },
    ],
    avisPro:
      "Vérifier en priorité si le calculateur ESP a lui-même un défaut actif — ce code apparaît souvent en conséquence d'une panne ESP, pas de la boîte elle-même.",
    pieces: [
      { nom: "Diagnostic réseau boîte/ESP (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P1611",
    titre: "Défaut pression d'huile insuffisante — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque d'usure prématurée de la boîte",
    description:
      "Le calculateur de la boîte AL4 détecte une pression hydraulique insuffisante dans le circuit interne, ce qui peut empêcher les électrovannes de commande de fonctionner correctement et provoquer des à-coups ou un mode dégradé.",
    causes: [
      { pourcentage: 35, libelle: "Niveau d'huile de boîte insuffisant ou vidange jamais faite" },
      { pourcentage: 28, libelle: "Capteur de pression défaillant" },
      { pourcentage: 22, libelle: "Pompe à huile interne de la boîte usée" },
      { pourcentage: 15, libelle: "Filtre à huile de boîte colmaté" },
    ],
    avisPro:
      "Vérifier le niveau et l'état de l'huile de boîte avant tout — une AL4 jamais vidangée est la cause la plus fréquente de ce défaut, et la vidange seule résout souvent le problème.",
    pieces: [
      { nom: "Vidange boîte AL4 + filtre", boutique: "Recommandé avant pièce", prix: "120-180€" },
    ],
  },
  {
    code: "P1770",
    titre: "Défaut usure huile par patinage convertisseur — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "elevee",
    severiteLabel: "Gravité élevée — usure accélérée des composants internes",
    description:
      "Le calculateur a enregistré un patinage prolongé du convertisseur de couple, ce qui accélère l'usure thermique de l'huile de boîte et peut, à terme, endommager les composants internes si la cause n'est pas traitée.",
    causes: [
      { pourcentage: 40, libelle: "Électrovanne de pontage du convertisseur défaillante" },
      { pourcentage: 30, libelle: "Huile de boîte dégradée ou de mauvaise spécification" },
      { pourcentage: 20, libelle: "Convertisseur de couple usé" },
      { pourcentage: 10, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut est un signal d'alerte cumulatif — une vidange complète avec une huile conforme à la norme constructeur est la première étape avant d'envisager une panne mécanique plus grave.",
    pieces: [
      { nom: "Vidange boîte AL4 (huile norme constructeur)", boutique: "Recommandé avant pièce", prix: "120-180€" },
    ],
  },
  {
    code: "P1762",
    titre: "Défaut ligne d'affichage tableau de bord — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "faible",
    severiteLabel: "Gravité faible — généralement un simple défaut d'affichage",
    description:
      "Le calculateur de boîte ne parvient plus à transmettre correctement au tableau de bord les informations de position du levier (P, R, N, D) via la ligne d'affichage série dédiée.",
    causes: [
      { pourcentage: 40, libelle: "Câblage entre calculateur boîte et combiné d'instruments endommagé" },
      { pourcentage: 30, libelle: "Connecteur du calculateur de boîte oxydé ou mal enfiché" },
      { pourcentage: 20, libelle: "Combiné d'instruments défaillant" },
      { pourcentage: 10, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut est souvent purement une gêne d'affichage sans impact sur le fonctionnement réel de la boîte — vérifier le câblage avant d'envisager une pièce coûteuse.",
    pieces: [
      { nom: "Diagnostic ligne série boîte/combiné (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P1747",
    titre: "Défaut électrovanne de séquence 6 — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "elevee",
    severiteLabel: "Gravité élevée — passages de rapport perturbés",
    description:
      "L'une des électrovannes internes de la boîte AL4, qui commande l'engagement des différents rapports en pilotant la pression hydraulique, ne répond plus correctement aux ordres du calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Électrovanne de séquence défaillante (bobine coupée)" },
      { pourcentage: 30, libelle: "Corps de vanne interne encrassé par des dépôts d'huile" },
      { pourcentage: 20, libelle: "Câblage interne du faisceau de boîte endommagé" },
      { pourcentage: 10, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Le faisceau interne de l'AL4 est une cause fréquente sur les boîtes à kilométrage élevé — un diagnostic électrique permet de confirmer avant de démonter la boîte.",
    pieces: [
      { nom: "Diagnostic électrovannes boîte AL4 (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "P1748",
    titre: "Défaut électrovanne de régulation du débit échangeur — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "moderee",
    severiteLabel: "Gravité modérée — refroidissement de l'huile dégradé",
    description:
      "L'électrovanne qui régule le débit d'huile vers l'échangeur de refroidissement de la boîte (radiateur d'huile) ne fonctionne plus correctement, ce qui peut nuire au refroidissement de l'huile de boîte.",
    causes: [
      { pourcentage: 35, libelle: "Électrovanne bloquée ou encrassée" },
      { pourcentage: 30, libelle: "Câblage de l'électrovanne endommagé" },
      { pourcentage: 20, libelle: "Échangeur de boîte partiellement obstrué" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Un mauvais refroidissement de l'huile accélère l'usure de la boîte — ne pas ignorer ce défaut même s'il ne provoque pas de symptôme immédiat.",
    pieces: [
      { nom: "Diagnostic électrovanne échangeur (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P1799",
    titre: "Défaut signal contacteur multifonction — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "elevee",
    severiteLabel: "Gravité élevée — démarrage ou passage de rapport bloqué possible",
    description:
      "Le contacteur multifonction, qui informe le calculateur de la position exacte du levier de vitesses (P, R, N, D, +/-), envoie un signal incohérent — la boîte peut refuser de démarrer ou rester bloquée sur un rapport par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Contacteur multifonction déréglé ou défaillant" },
      { pourcentage: 28, libelle: "Câblage du contacteur endommagé" },
      { pourcentage: 20, libelle: "Tringlerie de sélection de vitesses mal réglée" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier le réglage de la tringlerie de sélection avant de remplacer le contacteur — un mauvais réglage mécanique est une cause fréquente et moins coûteuse à corriger.",
    pieces: [
      { nom: "Contacteur multifonction boîte AL4", boutique: "Oscaro · livraison 48h", prix: "65€" },
    ],
  },
  {
    code: "P1706",
    titre: "Défaut signal commande manuelle séquentielle — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "faible",
    severiteLabel: "Gravité faible — seul le mode séquentiel manuel est affecté",
    description:
      "Le signal de la commande manuelle séquentielle (mode +/- au levier ou au volant) envoyé au calculateur de boîte est incohérent ou absent, empêchant le passage manuel des rapports.",
    causes: [
      { pourcentage: 35, libelle: "Contacteur de la commande séquentielle défaillant" },
      { pourcentage: 30, libelle: "Câblage de la commande endommagé" },
      { pourcentage: 20, libelle: "Connecteur oxydé au niveau du levier ou du volant" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut n'empêche généralement pas le fonctionnement automatique normal de la boîte — seul le mode séquentiel manuel est affecté.",
    pieces: [
      { nom: "Diagnostic commande séquentielle (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "U1310",
    titre: "Défaut commande électrique de la boîte automatique — AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "moderee",
    severiteLabel: "Gravité modérée — gestion électronique des rapports perturbée",
    description:
      "Le module de commande électrique de la boîte AL4 signale un défaut de communication interne, ce qui peut affecter la gestion électronique des changements de rapport.",
    causes: [
      { pourcentage: 35, libelle: "Défaut réseau CAN interne au module de commande" },
      { pourcentage: 30, libelle: "Calculateur de boîte défaillant" },
      { pourcentage: 20, libelle: "Câblage du module de commande endommagé" },
      { pourcentage: 15, libelle: "Alimentation électrique instable du module" },
    ],
    avisPro:
      "Faire vérifier la tension batterie et les masses du véhicule avant de suspecter le calculateur — une alimentation instable est une cause fréquente de ce type de défaut.",
    pieces: [
      { nom: "Diagnostic module commande boîte (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P1750",
    titre: "Défaut signal commande de vitesses au volant — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "faible",
    severiteLabel: "Gravité faible — seules les palettes au volant sont affectées",
    description:
      "Les palettes ou boutons de changement de rapport situés au volant (mode séquentiel) envoient un signal incohérent au calculateur de boîte, empêchant leur utilisation.",
    causes: [
      { pourcentage: 35, libelle: "Palette ou contacteur au volant défaillant" },
      { pourcentage: 30, libelle: "Câblage du contacteur tournant (spirale sous volant) endommagé" },
      { pourcentage: 20, libelle: "Connecteur sous le volant oxydé" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier le contacteur tournant sous le volant en priorité — c'est un point de passage de câblage fragile, sujet à l'usure avec les rotations répétées du volant.",
    pieces: [
      { nom: "Diagnostic contacteur tournant / palettes (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P1592",
    titre: "Défaut alimentation électrovannes et régulateurs — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "elevee",
    severiteLabel: "Gravité élevée — commande des rapports largement affectée",
    description:
      "L'alimentation électrique commune aux électrovannes et régulateurs internes de la boîte AL4 est hors plage, ce qui empêche le calculateur de commander correctement les changements de rapport.",
    causes: [
      { pourcentage: 35, libelle: "Fusible dédié grillé" },
      { pourcentage: 30, libelle: "Câblage d'alimentation interne à la boîte endommagé" },
      { pourcentage: 20, libelle: "Connecteur de boîte oxydé ou mal enfiché" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Contrôler le fusible et le connecteur principal de la boîte avant tout démontage — une alimentation coupée touche souvent plusieurs électrovannes en même temps, ce qui oriente vers une cause commune plutôt que mécanique.",
    pieces: [
      { nom: "Diagnostic alimentation boîte AL4 (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "U1118",
    titre: "Défaut communication réseau — boîte AL4 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AL4",
    severite: "moderee",
    severiteLabel: "Gravité modérée — communication inter-calculateurs dégradée",
    description:
      "Le calculateur de la boîte AL4 signale une perte ou une dégradation de la communication avec un ou plusieurs autres calculateurs du véhicule via le réseau multiplexé.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 25, libelle: "Connecteur du calculateur de boîte oxydé" },
      { pourcentage: 20, libelle: "Autre calculateur du réseau en défaut, perturbant le bus" },
      { pourcentage: 20, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Un défaut réseau isolé sur la boîte oriente vers son câblage propre — un défaut simultané sur plusieurs calculateurs oriente vers le bus lui-même ou une masse commune.",
    pieces: [
      { nom: "Diagnostic réseau multiplexé (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "B1000",
    titre: "Défaut interne calculateur airbag — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — fiabilité du déclenchement airbag compromise",
    description:
      "Le calculateur airbag détecte un défaut interne (mémoire, composant électronique ou alimentation), qui l'empêche de garantir le déclenchement correct des airbags et prétensionneurs en cas de choc.",
    causes: [
      { pourcentage: 50, libelle: "Calculateur airbag défaillant" },
      { pourcentage: 25, libelle: "Alimentation électrique du calculateur instable" },
      { pourcentage: 15, libelle: "Masse électrique défectueuse" },
      { pourcentage: 10, libelle: "Mise à jour logicielle nécessaire (défaut connu du calculateur)" },
    ],
    avisPro:
      "Un défaut interne calculateur nécessite un diagnostic précis à la valise constructeur avant tout remplacement — certains cas se résolvent par une reprogrammation plutôt qu'un changement de pièce.",
    pieces: [
      { nom: "Diagnostic calculateur airbag (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B1615",
    titre: "Défaut capteur d'accélération avant gauche — airbag PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbags frontaux non garanti",
    description:
      "Le capteur de choc frontal gauche, qui détecte la décélération brutale lors d'un impact pour déclencher les airbags frontaux, envoie un signal incohérent ou absent au calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de choc défaillant" },
      { pourcentage: 30, libelle: "Câblage endommagé (zone souvent exposée en cas de choc mineur antérieur)" },
      { pourcentage: 20, libelle: "Connecteur du capteur mal enfiché ou corrodé" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Après tout choc frontal même léger, ce capteur doit être vérifié — un choc antérieur mal réparé est une cause fréquente de ce défaut.",
    pieces: [
      { nom: "Capteur de choc frontal", boutique: "Oscaro · livraison 48h", prix: "48€" },
    ],
  },
  {
    code: "B1620",
    titre: "Défaut capteur d'accélération latérale droite — airbag PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbags latéraux non garanti",
    description:
      "Le capteur d'impact latéral droit, qui détecte un choc sur le côté du véhicule pour déclencher les airbags latéraux et rideaux, envoie un signal incohérent ou absent au calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Capteur d'impact latéral défaillant" },
      { pourcentage: 28, libelle: "Câblage dans la portière ou le pied de caisse endommagé" },
      { pourcentage: 20, libelle: "Connecteur corrodé (zone humide, bas de caisse)" },
      { pourcentage: 12, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Le câblage de ce capteur passe souvent par la portière ou le seuil — vérifier l'état du faisceau à ces points de passage avant de remplacer le capteur.",
    pieces: [
      { nom: "Capteur d'impact latéral", boutique: "AutoDoc · livraison 24h", prix: "42€" },
    ],
  },
  {
    code: "B1651",
    titre: "Défaut contacteur de neutralisation airbag passager — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "moderee",
    severiteLabel: "Gravité modérée — information de statut airbag passager incertaine",
    description:
      "Le contacteur qui permet de désactiver manuellement l'airbag passager (pour l'installation d'un siège enfant dos à la route) envoie une information incohérente au calculateur sur sa position réelle.",
    causes: [
      { pourcentage: 40, libelle: "Contacteur de neutralisation défaillant" },
      { pourcentage: 30, libelle: "Câblage du contacteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur mal enfiché" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Vérifier que le contacteur est bien positionné sur ON ou OFF sans position intermédiaire — un mauvais positionnement mécanique est une cause fréquente et sans frais.",
    pieces: [
      { nom: "Diagnostic contacteur neutralisation (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "B1660",
    titre: "Défaut témoin airbag passager désactivé — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "faible",
    severiteLabel: "Gravité faible — défaut d'affichage, sans effet sur l'airbag lui-même",
    description:
      "Le témoin lumineux qui indique que l'airbag passager est désactivé (visible au plafonnier ou au tableau de bord) ne s'allume plus ou reste allumé en permanence, sans que cela affecte le fonctionnement réel de l'airbag.",
    causes: [
      { pourcentage: 40, libelle: "Ampoule ou LED du témoin grillée" },
      { pourcentage: 30, libelle: "Câblage du témoin endommagé" },
      { pourcentage: 20, libelle: "Connecteur du témoin oxydé" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant côté pilotage du témoin" },
    ],
    avisPro:
      "Ce défaut concerne uniquement l'affichage — il ne désactive pas l'airbag lui-même, mais doit être corrigé pour respecter l'obligation d'information sur l'état de l'airbag passager.",
    pieces: [
      { nom: "Ampoule/LED témoin airbag passager", boutique: "AutoDoc · livraison 24h", prix: "8€" },
    ],
  },
  {
    code: "B1800",
    titre: "Défaut module d'allumage airbag conducteur niveau 1 — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag conducteur non garanti",
    description:
      "Le circuit électrique qui déclenche le premier étage de gonflage de l'airbag conducteur (volant) présente une résistance ou une continuité hors plage, ce qui empêche le calculateur de garantir son déclenchement en cas de choc.",
    causes: [
      { pourcentage: 45, libelle: "Module gonfleur airbag conducteur défaillant" },
      { pourcentage: 25, libelle: "Câblage du contacteur tournant (spirale sous volant) endommagé" },
      { pourcentage: 20, libelle: "Connecteur sous le volant mal enfiché" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Ce défaut touche directement la sécurité — ne jamais rouler avec ce témoin allumé, l'airbag conducteur peut ne pas se déclencher en cas de choc. Diagnostic et intervention à faire en priorité.",
    pieces: [
      { nom: "Contacteur tournant + diagnostic module airbag (atelier)", boutique: "Recommandé avant pièce", prix: "80-120€" },
    ],
  },
  {
    code: "B1805",
    titre: "Défaut module d'allumage airbag passager niveau 1 — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag passager non garanti",
    description:
      "Le circuit électrique qui déclenche le premier étage de gonflage de l'airbag passager présente une résistance ou une continuité hors plage, ce qui empêche le calculateur de garantir son déclenchement en cas de choc.",
    causes: [
      { pourcentage: 45, libelle: "Module gonfleur airbag passager défaillant" },
      { pourcentage: 28, libelle: "Câblage sous le tableau de bord endommagé" },
      { pourcentage: 17, libelle: "Connecteur du module mal enfiché" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Ce défaut touche directement la sécurité du passager avant — ne jamais rouler avec ce témoin allumé sans avoir fait vérifier le circuit.",
    pieces: [
      { nom: "Diagnostic module airbag passager (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B1820",
    titre: "Défaut allumeur airbag latéral avant droit — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag latéral non garanti",
    description:
      "Le circuit électrique qui déclenche l'airbag latéral situé dans le siège ou la portière avant droite présente une résistance ou une continuité hors plage, empêchant son déclenchement garanti en cas de choc latéral.",
    causes: [
      { pourcentage: 40, libelle: "Allumeur (gonfleur) airbag latéral défaillant" },
      { pourcentage: 30, libelle: "Câblage dans l'assise du siège endommagé (usure liée aux réglages répétés)" },
      { pourcentage: 20, libelle: "Connecteur sous le siège mal enfiché" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Le câblage de l'airbag latéral passe par l'assise du siège et subit l'usure des réglages répétés — vérifier ce point avant de suspecter le module lui-même.",
    pieces: [
      { nom: "Diagnostic airbag latéral avant droit (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B1825",
    titre: "Défaut allumeur airbag latéral avant gauche — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag latéral non garanti",
    description:
      "Le circuit électrique qui déclenche l'airbag latéral situé dans le siège ou la portière avant gauche présente une résistance ou une continuité hors plage, empêchant son déclenchement garanti en cas de choc latéral.",
    causes: [
      { pourcentage: 40, libelle: "Allumeur (gonfleur) airbag latéral défaillant" },
      { pourcentage: 30, libelle: "Câblage dans l'assise du siège endommagé (usure liée aux réglages répétés)" },
      { pourcentage: 20, libelle: "Connecteur sous le siège mal enfiché" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Le câblage de l'airbag latéral passe par l'assise du siège et subit l'usure des réglages répétés — vérifier ce point avant de suspecter le module lui-même.",
    pieces: [
      { nom: "Diagnostic airbag latéral avant gauche (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B1830",
    titre: "Défaut allumeur airbag rideau droit — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag rideau non garanti",
    description:
      "Le circuit électrique qui déclenche l'airbag rideau situé le long du pavillon côté droit présente une résistance ou une continuité hors plage, empêchant son déclenchement garanti en cas de choc latéral ou de tonneau.",
    causes: [
      { pourcentage: 42, libelle: "Allumeur (gonfleur) airbag rideau défaillant" },
      { pourcentage: 28, libelle: "Câblage du pavillon endommagé (infiltration d'eau au niveau du toit)" },
      { pourcentage: 20, libelle: "Connecteur du pied de caisse ou du pavillon corrodé" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Vérifier l'absence d'infiltration d'eau au niveau du pavillon ou des montants — l'humidité est une cause fréquente de corrosion sur ce circuit spécifique.",
    pieces: [
      { nom: "Diagnostic airbag rideau droit (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B1900",
    titre: "Défaut prétensionneur de ceinture avant droit — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — prétensionneur pyrotechnique non garanti",
    description:
      "Le circuit électrique qui déclenche le prétensionneur pyrotechnique de la ceinture de sécurité avant droite présente une résistance ou une continuité hors plage, empêchant son déclenchement garanti en cas de choc.",
    causes: [
      { pourcentage: 40, libelle: "Prétensionneur défaillant" },
      { pourcentage: 30, libelle: "Câblage sous le siège ou dans le pied milieu endommagé" },
      { pourcentage: 20, libelle: "Connecteur du prétensionneur mal enfiché" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Ce défaut concerne un élément pyrotechnique de sécurité — à traiter en priorité, ne jamais tenter de le démonter soi-même sans formation.",
    pieces: [
      { nom: "Diagnostic prétensionneur avant droit (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B1905",
    titre: "Défaut prétensionneur de ceinture avant gauche — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Airbag",
    severite: "elevee",
    severiteLabel: "Gravité élevée — prétensionneur pyrotechnique non garanti",
    description:
      "Le circuit électrique qui déclenche le prétensionneur pyrotechnique de la ceinture de sécurité avant gauche présente une résistance ou une continuité hors plage, empêchant son déclenchement garanti en cas de choc.",
    causes: [
      { pourcentage: 40, libelle: "Prétensionneur défaillant" },
      { pourcentage: 30, libelle: "Câblage sous le siège ou dans le pied milieu endommagé" },
      { pourcentage: 20, libelle: "Connecteur du prétensionneur mal enfiché" },
      { pourcentage: 10, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Ce défaut concerne un élément pyrotechnique de sécurité — à traiter en priorité, ne jamais tenter de le démonter soi-même sans formation.",
    pieces: [
      { nom: "Diagnostic prétensionneur avant gauche (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "C1412",
    titre: "Défaut moteur de direction assistée électrique — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "elevee",
    severiteLabel: "Gravité élevée — assistance de direction perdue",
    description:
      "Le calculateur de direction assistée détecte une anomalie sur le moteur électrique qui génère l'assistance au volant — la direction peut devenir subitement plus lourde à manœuvrer, notamment à basse vitesse.",
    causes: [
      { pourcentage: 40, libelle: "Moteur électrique d'assistance défaillant" },
      { pourcentage: 28, libelle: "Câblage du moteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur du moteur mal enfiché ou corrodé" },
      { pourcentage: 12, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Une direction qui durcit brutalement doit être prise au sérieux — s'arrêter dès que possible pour éviter une manœuvre dangereuse, notamment en stationnement ou à basse vitesse.",
    pieces: [
      { nom: "Diagnostic moteur direction assistée (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "C1400",
    titre: "Défaut capteur de couple — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "elevee",
    severiteLabel: "Gravité élevée — assistance coupée par sécurité",
    description:
      "Le capteur de couple, qui mesure la force appliquée par le conducteur sur le volant pour doser l'assistance électrique, envoie un signal incohérent — le calculateur coupe alors l'assistance par sécurité.",
    causes: [
      { pourcentage: 42, libelle: "Capteur de couple défaillant" },
      { pourcentage: 28, libelle: "Câblage de la colonne de direction endommagé" },
      { pourcentage: 18, libelle: "Connecteur sous le volant oxydé" },
      { pourcentage: 12, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Ce capteur est intégré à la colonne de direction — son remplacement isolé n'est pas toujours possible, un diagnostic précis évite de commander la mauvaise pièce.",
    pieces: [
      { nom: "Diagnostic capteur de couple (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C1407",
    titre: "Défaut information vitesse véhicule — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "moderee",
    severiteLabel: "Gravité modérée — dosage de l'assistance par vitesse dégradé",
    description:
      "Le calculateur de direction assistée ne reçoit plus une information fiable de la vitesse du véhicule, une donnée essentielle pour doser l'assistance (plus forte à l'arrêt, plus légère sur route rapide).",
    causes: [
      { pourcentage: 35, libelle: "Défaut réseau CAN transmettant la vitesse véhicule" },
      { pourcentage: 30, libelle: "Capteur de vitesse de roue (ABS) défaillant en amont" },
      { pourcentage: 20, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 15, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Ce défaut se traduit souvent par une assistance qui ne varie plus avec la vitesse plutôt qu'une perte totale — vérifier d'abord si un défaut ABS est également présent.",
    pieces: [
      { nom: "Diagnostic réseau vitesse véhicule (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C1409",
    titre: "Défaut alimentation capteur de couple — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "elevee",
    severiteLabel: "Gravité élevée — assistance coupée par sécurité",
    description:
      "L'alimentation électrique dédiée au capteur de couple de la direction assistée est hors plage, ce qui empêche le calculateur de recevoir une mesure fiable et coupe l'assistance par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Câblage d'alimentation du capteur endommagé" },
      { pourcentage: 30, libelle: "Connecteur du capteur oxydé" },
      { pourcentage: 20, libelle: "Capteur de couple défaillant" },
      { pourcentage: 10, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Contrôler la tension d'alimentation au connecteur du capteur avant de le remplacer — un simple faux contact peut provoquer ce défaut.",
    pieces: [
      { nom: "Diagnostic alimentation capteur de couple (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C140B",
    titre: "Défaut alimentation calculateur — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de coupure totale de l'assistance",
    description:
      "Le calculateur de direction assistée électrique détecte une alimentation électrique hors plage de fonctionnement, ce qui peut provoquer une coupure temporaire ou totale de l'assistance.",
    causes: [
      { pourcentage: 35, libelle: "Fusible dédié grillé" },
      { pourcentage: 30, libelle: "Câblage d'alimentation du calculateur endommagé" },
      { pourcentage: 20, libelle: "Batterie ou alternateur en cause (tension instable)" },
      { pourcentage: 15, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Vérifier la tension batterie et l'état du fusible avant de suspecter le calculateur — une alimentation instable touche souvent plusieurs équipements électriques en même temps.",
    pieces: [
      { nom: "Diagnostic alimentation calculateur DAE (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "U1318",
    titre: "Absence de communication avec le BSI — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent lié à un défaut réseau plus large",
    description:
      "Le calculateur de direction assistée ne reçoit plus les informations transmises par le boîtier de servitude intelligent (BSI), ce qui peut le priver de données de configuration nécessaires à son fonctionnement normal.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 25, libelle: "Connecteur du calculateur de direction oxydé" },
      { pourcentage: 20, libelle: "BSI en défaut propre" },
      { pourcentage: 20, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Vérifier si le BSI affiche lui-même des défauts au même moment — ce code est souvent la conséquence d'un problème réseau plus large plutôt qu'une panne isolée de la direction.",
    pieces: [
      { nom: "Diagnostic réseau BSI/direction (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C1411",
    titre: "Défaut capteur de température moteur — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "moderee",
    severiteLabel: "Gravité modérée — assistance parfois réduite par précaution",
    description:
      "Le capteur qui surveille la température du moteur électrique d'assistance envoie une information incohérente, empêchant le calculateur de protéger correctement le moteur contre la surchauffe.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de température défaillant" },
      { pourcentage: 30, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur du capteur oxydé" },
      { pourcentage: 10, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Ce défaut peut pousser le calculateur à réduire l'assistance par prudence même sans surchauffe réelle — un diagnostic permet de confirmer avant de remplacer une pièce.",
    pieces: [
      { nom: "Diagnostic capteur température moteur DAE (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C1405",
    titre: "Défaut surintensité moteur — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "elevee",
    severiteLabel: "Gravité élevée — coupure de protection immédiate",
    description:
      "Le calculateur détecte un courant excessif dans le moteur électrique d'assistance et coupe son alimentation par sécurité pour éviter d'endommager le moteur ou l'électronique de puissance.",
    causes: [
      { pourcentage: 40, libelle: "Moteur électrique d'assistance défaillant (court-circuit interne)" },
      { pourcentage: 28, libelle: "Câblage du moteur endommagé (court-circuit)" },
      { pourcentage: 20, libelle: "Colonne de direction grippée mécaniquement, forçant le moteur" },
      { pourcentage: 12, libelle: "Calculateur de direction assistée défaillant (étage de puissance)" },
    ],
    avisPro:
      "Vérifier que la colonne de direction tourne librement mécaniquement avant de suspecter le moteur — un grippage mécanique force le moteur à consommer plus de courant que la normale.",
    pieces: [
      { nom: "Diagnostic surintensité moteur DAE (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "U1205",
    titre: "Défaut communication avec le capteur d'angle volant — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "moderee",
    severiteLabel: "Gravité modérée — coordination avec l'ESP affectée",
    description:
      "Le calculateur de direction assistée ne reçoit plus les informations du capteur d'angle volant, ce qui peut affecter la coordination avec l'ESP lors des manœuvres de stabilisation.",
    causes: [
      { pourcentage: 35, libelle: "Câblage sous le volant ou connecteur du contacteur tournant endommagé" },
      { pourcentage: 28, libelle: "Capteur d'angle volant défaillant" },
      { pourcentage: 22, libelle: "Défaut réseau CAN" },
      { pourcentage: 15, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Si un défaut similaire apparaît aussi côté ABS/ESP, la cause est probablement commune au capteur d'angle volant lui-même plutôt qu'à la direction assistée.",
    pieces: [
      { nom: "Diagnostic capteur angle volant (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C1419",
    titre: "Défaut couplage direction assistée / ESP — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent lié à une panne ESP",
    description:
      "La coordination entre le calculateur de direction assistée et le calculateur ESP, qui permet d'ajuster l'assistance lors d'une intervention de stabilité, ne fonctionne plus correctement.",
    causes: [
      { pourcentage: 35, libelle: "Défaut réseau CAN entre les deux calculateurs" },
      { pourcentage: 30, libelle: "Calculateur ESP en défaut propre" },
      { pourcentage: 20, libelle: "Calculateur de direction assistée défaillant" },
      { pourcentage: 15, libelle: "Câblage du réseau multiplexé endommagé" },
    ],
    avisPro:
      "Vérifier en priorité les défauts côté ESP — ce code accompagne souvent une panne ESP plutôt qu'une panne propre à la direction assistée.",
    pieces: [
      { nom: "Diagnostic couplage DAE/ESP (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C1415",
    titre: "Surchauffe moteur ou calculateur — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "elevee",
    severiteLabel: "Gravité élevée — coupure de protection le temps du refroidissement",
    description:
      "Le moteur électrique d'assistance ou son calculateur atteint une température excessive, ce qui déclenche une réduction ou une coupure temporaire de l'assistance pour protéger les composants.",
    causes: [
      { pourcentage: 35, libelle: "Sollicitation excessive répétée (manœuvres lentes et braquages prolongés)" },
      { pourcentage: 28, libelle: "Ventilation ou refroidissement du calculateur insuffisant" },
      { pourcentage: 22, libelle: "Moteur électrique défaillant, consommant un courant anormal" },
      { pourcentage: 15, libelle: "Calculateur de direction assistée défaillant" },
    ],
    avisPro:
      "Ce défaut disparaît souvent après refroidissement — s'il revient fréquemment sans sollicitation excessive, un diagnostic électrique du moteur est nécessaire.",
    pieces: [
      { nom: "Diagnostic surchauffe DAE (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C1404",
    titre: "Défaut commande liée au moteur — direction assistée PSA",
    categorie: "psa",
    categorieLabel: "PSA — Direction assistée",
    severite: "elevee",
    severiteLabel: "Gravité élevée — dosage du courant moteur compromis",
    description:
      "Le circuit de commande qui pilote le moteur électrique d'assistance présente une anomalie, empêchant le calculateur de doser correctement le courant envoyé au moteur.",
    causes: [
      { pourcentage: 38, libelle: "Étage de puissance du calculateur défaillant" },
      { pourcentage: 28, libelle: "Câblage entre calculateur et moteur endommagé" },
      { pourcentage: 20, libelle: "Moteur électrique défaillant" },
      { pourcentage: 14, libelle: "Connecteur mal enfiché" },
    ],
    avisPro:
      "Ce défaut touche l'électronique de commande plutôt que le moteur lui-même — un diagnostic précis évite de remplacer le moteur à tort.",
    pieces: [
      { nom: "Diagnostic commande moteur DAE (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "P1839",
    titre: "Défaut activation réduction de traînée en mode D — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "faible",
    severiteLabel: "Gravité faible — fonction confort/économie de carburant",
    description:
      "La fonction de réduction de traînée, qui désolidarise partiellement l'embrayage au ralenti en position D pour économiser du carburant (roue libre au point mort), ne s'active plus correctement.",
    causes: [
      { pourcentage: 40, libelle: "Défaut logiciel ou calibration de la fonction confort" },
      { pourcentage: 28, libelle: "Embrayage C1 partiellement usé" },
      { pourcentage: 20, libelle: "Calculateur de boîte défaillant" },
      { pourcentage: 12, libelle: "Défaut réseau perturbant les conditions d'activation" },
    ],
    avisPro:
      "Cette fonction est un confort/économie de carburant sans impact sur la sécurité — son désactivation n'empêche pas de rouler normalement.",
    pieces: [
      { nom: "Diagnostic fonction réduction de traînée (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P0928",
    titre: "Défaut actionneur de verrouillage du levier — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — levier de vitesses bloqué ou libéré anormalement",
    description:
      "L'actionneur qui verrouille le levier de vitesses en position P ou N tant que le frein n'est pas actionné (shift-lock) ne fonctionne plus correctement, ce qui peut bloquer ou libérer le levier de façon anormale.",
    causes: [
      { pourcentage: 40, libelle: "Actionneur de verrouillage défaillant" },
      { pourcentage: 28, libelle: "Câblage de l'actionneur endommagé" },
      { pourcentage: 20, libelle: "Contacteur de pédale de frein en cause" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier le contacteur de feux stop en priorité — c'est lui qui autorise le déverrouillage du levier, une panne à cet endroit est fréquente et peu coûteuse à corriger.",
    pieces: [
      { nom: "Diagnostic actionneur shift-lock (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P0736",
    titre: "Défaut mécanique ou hydraulique marche arrière — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — marche arrière indisponible ou dégradée",
    description:
      "Le calculateur détecte que le rapport de marche arrière ne s'engage pas correctement malgré la commande envoyée, signe d'un problème mécanique ou hydraulique interne à la boîte sur ce rapport.",
    causes: [
      { pourcentage: 35, libelle: "Embrayage ou frein interne dédié à la marche arrière usé" },
      { pourcentage: 28, libelle: "Électrovanne de commande de ce rapport défaillante" },
      { pourcentage: 22, libelle: "Niveau d'huile de boîte insuffisant" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier le niveau d'huile avant tout — un niveau bas prive spécifiquement certains embrayages internes de pression suffisante, la marche arrière étant souvent la première touchée.",
    pieces: [
      { nom: "Diagnostic mécanique marche arrière (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "P0969",
    titre: "Défaut verrouillage électrovanne SLC1 — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — passages de rapport perturbés",
    description:
      "L'électrovanne SLC1, qui pilote le passage de certains rapports, reste bloquée dans une position et ne répond plus aux commandes du calculateur, perturbant les changements de vitesse.",
    causes: [
      { pourcentage: 40, libelle: "Électrovanne SLC1 bloquée par encrassement" },
      { pourcentage: 28, libelle: "Bobine de commande défaillante" },
      { pourcentage: 20, libelle: "Câblage interne du faisceau de boîte endommagé" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Une vidange avec un filtre neuf peut suffire à débloquer une électrovanne encrassée — à envisager avant un remplacement de pièce.",
    pieces: [
      { nom: "Vidange boîte AM6 + filtre", boutique: "Recommandé avant pièce", prix: "150-220€" },
    ],
  },
  {
    code: "P0780",
    titre: "Défaut changement de rapport non désiré — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — comportement de boîte imprévisible",
    description:
      "Le calculateur détecte un changement de rapport qui ne correspond pas à la commande attendue (passage à un rapport non sollicité), ce qui peut se traduire par des à-coups ou un comportement imprévisible de la boîte.",
    causes: [
      { pourcentage: 35, libelle: "Électrovanne de commande de rapport défaillante" },
      { pourcentage: 28, libelle: "Capteur de position du sélecteur défaillant" },
      { pourcentage: 22, libelle: "Calculateur de boîte défaillant" },
      { pourcentage: 15, libelle: "Câblage interne endommagé" },
    ],
    avisPro:
      "Ce défaut mérite un arrêt rapide pour diagnostic — un changement de rapport imprévu peut surprendre en conduite, notamment en dépassement ou en côte.",
    pieces: [
      { nom: "Diagnostic électrovannes boîte AM6 (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "P0298",
    titre: "Rappel vidange huile de boîte — AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "faible",
    severiteLabel: "Gravité faible — rappel d'entretien, pas une panne",
    description:
      "Le calculateur signale, sur la base du kilométrage ou de la qualité mesurée de l'huile, qu'une vidange de la boîte de vitesses est recommandée.",
    causes: [
      { pourcentage: 70, libelle: "Vidange de boîte jamais effectuée ou en retard" },
      { pourcentage: 20, libelle: "Huile de boîte dégradée par une sollicitation intensive (remorquage, ville)" },
      { pourcentage: 10, libelle: "Capteur de qualité d'huile déclenchant l'alerte de façon anticipée" },
    ],
    avisPro:
      "Ce n'est pas un défaut mais un rappel d'entretien — une vidange régulière de la boîte AM6 prolonge significativement sa durée de vie, contrairement à une idée reçue de boîte 'à vie'.",
    pieces: [
      { nom: "Vidange boîte AM6 + filtre", boutique: "Recommandé avant pièce", prix: "150-220€" },
    ],
  },
  {
    code: "P1830",
    titre: "Défaut information vitesse roues avant non reçue — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — stratégie de passage de rapport dégradée",
    description:
      "Le calculateur de boîte ne reçoit plus l'information de vitesse des roues avant transmise par le réseau CAN, une donnée utilisée pour affiner la stratégie de passage des rapports.",
    causes: [
      { pourcentage: 35, libelle: "Défaut réseau CAN entre calculateur ABS et calculateur boîte" },
      { pourcentage: 28, libelle: "Capteur de vitesse de roue avant défaillant" },
      { pourcentage: 22, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier d'abord si un défaut est également présent côté ABS — ce code est généralement la conséquence d'un problème capteur ou réseau ABS plutôt qu'une panne de la boîte elle-même.",
    pieces: [
      { nom: "Diagnostic réseau vitesse roues (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P0772",
    titre: "Défaut engagement embrayage C1 (réduction de traînée) — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "faible",
    severiteLabel: "Gravité faible — fonction confort, boîte fonctionnelle",
    description:
      "L'embrayage C1, sollicité pour la fonction de réduction de traînée en mode D (roue libre au ralenti), ne s'engage pas correctement lors de la reprise d'accélération.",
    causes: [
      { pourcentage: 38, libelle: "Embrayage C1 usé" },
      { pourcentage: 28, libelle: "Électrovanne de commande de l'embrayage défaillante" },
      { pourcentage: 20, libelle: "Pression hydraulique insuffisante (niveau d'huile bas)" },
      { pourcentage: 14, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut touche une fonction de confort/économie de carburant — un léger à-coup à la reprise peut être ressenti mais la boîte reste fonctionnelle.",
    pieces: [
      { nom: "Diagnostic embrayage C1 (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "C1335",
    titre: "Défaut information vitesse roue arrière droite non reçue — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — stratégie de passage de rapport dégradée",
    description:
      "Le calculateur de boîte ne reçoit plus l'information de vitesse de la roue arrière droite transmise par le réseau CAN, ce qui peut affecter la précision de la stratégie de passage des rapports.",
    causes: [
      { pourcentage: 35, libelle: "Défaut réseau CAN entre calculateur ABS et calculateur boîte" },
      { pourcentage: 28, libelle: "Capteur de vitesse de roue arrière droite défaillant" },
      { pourcentage: 22, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier d'abord si un défaut est également présent côté ABS sur cette roue précise — la cause est généralement là plutôt que dans la boîte elle-même.",
    pieces: [
      { nom: "Diagnostic réseau vitesse roue arrière droite (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P0940",
    titre: "Défaut capteur de température d'huile — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — protection thermique de la boîte compromise",
    description:
      "Le capteur qui mesure la température de l'huile de la boîte de vitesses envoie un signal incohérent, empêchant le calculateur de protéger correctement la boîte contre la surchauffe.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de température d'huile défaillant" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur du capteur oxydé" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Sans information fiable de température, le calculateur adopte une stratégie prudente qui peut rendre les passages de rapport moins fluides — un diagnostic rapide évite de rouler longtemps dans ce mode.",
    pieces: [
      { nom: "Capteur température huile boîte AM6", boutique: "Oscaro · livraison 48h", prix: "38€" },
    ],
  },
  {
    code: "P1733",
    titre: "Défaut capteur de position du sélecteur — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de refus de commande par sécurité",
    description:
      "Le capteur intégré au calculateur de boîte, qui détermine la position exacte du levier de vitesses (P, R, N, D), envoie une information incohérente — la boîte peut refuser certaines commandes par sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de position défaillant (intégré au calculateur)" },
      { pourcentage: 28, libelle: "Tringlerie ou câble de sélection mal réglé" },
      { pourcentage: 20, libelle: "Câblage du calculateur endommagé" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier le réglage de la tringlerie de sélection avant de suspecter le calculateur — un mauvais réglage mécanique est une cause fréquente et moins coûteuse à corriger.",
    pieces: [
      { nom: "Diagnostic capteur position sélecteur (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P2762",
    titre: "Défaut verrouillage électrovanne SLU (pontage convertisseur) — boîte AM6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AM6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — rendement dégradé, boîte fonctionnelle",
    description:
      "L'électrovanne SLU, qui commande le pontage du convertisseur de couple pour améliorer le rendement à vitesse stabilisée, reste bloquée et ne répond plus aux commandes du calculateur.",
    causes: [
      { pourcentage: 38, libelle: "Électrovanne SLU bloquée par encrassement" },
      { pourcentage: 28, libelle: "Bobine de commande défaillante" },
      { pourcentage: 22, libelle: "Huile de boîte dégradée" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut se traduit souvent par une légère hausse de consommation plutôt qu'une panne visible — une vidange peut suffire à débloquer l'électrovanne encrassée.",
    pieces: [
      { nom: "Vidange boîte AM6 + filtre", boutique: "Recommandé avant pièce", prix: "150-220€" },
    ],
  },
  {
    code: "B2E24",
    titre: "Bouton d'assistance au stationnement bloqué — combiné PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "faible",
    severiteLabel: "Gravité faible — bouton de confort uniquement",
    description:
      "Le bouton qui active ou désactive l'assistance au stationnement (radars de recul/avant) reste bloqué ou envoie un signal incohérent au calculateur du combiné d'instruments.",
    causes: [
      { pourcentage: 45, libelle: "Bouton mécaniquement bloqué ou grippé" },
      { pourcentage: 30, libelle: "Câblage du bouton endommagé" },
      { pourcentage: 15, libelle: "Connecteur du combiné oxydé" },
      { pourcentage: 10, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Un simple nettoyage ou déblocage mécanique du bouton résout souvent ce défaut sans remplacement de pièce.",
    pieces: [
      { nom: "Diagnostic bouton assistance stationnement (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "B2E26",
    titre: "Bouton ESP bloqué — combiné PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "moderee",
    severiteLabel: "Gravité modérée — risque d'ESP désactivé à l'insu du conducteur",
    description:
      "Le bouton qui permet de désactiver l'ESP (contrôle de stabilité) reste bloqué ou envoie un signal incohérent, ce qui peut laisser l'ESP désactivé sans que le conducteur en soit conscient.",
    causes: [
      { pourcentage: 45, libelle: "Bouton mécaniquement bloqué ou grippé" },
      { pourcentage: 28, libelle: "Câblage du bouton endommagé" },
      { pourcentage: 17, libelle: "Connecteur du combiné oxydé" },
      { pourcentage: 10, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Vérifier systématiquement au tableau de bord que le témoin ESP indique bien l'état réel du système — un bouton bloqué en position désactivée est un vrai risque de sécurité qui passe facilement inaperçu.",
    pieces: [
      { nom: "Diagnostic bouton ESP (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "B2E30",
    titre: "Bouton alerte de franchissement de ligne bloqué — combiné PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "faible",
    severiteLabel: "Gravité faible — aide à la conduite optionnelle uniquement",
    description:
      "Le bouton qui active ou désactive l'alerte de franchissement involontaire de ligne reste bloqué ou envoie un signal incohérent au calculateur du combiné.",
    causes: [
      { pourcentage: 45, libelle: "Bouton mécaniquement bloqué ou grippé" },
      { pourcentage: 30, libelle: "Câblage du bouton endommagé" },
      { pourcentage: 15, libelle: "Connecteur du combiné oxydé" },
      { pourcentage: 10, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Ce défaut n'affecte qu'une aide à la conduite optionnelle — sans impact sur la sécurité de base du véhicule.",
    pieces: [
      { nom: "Diagnostic bouton aide à la conduite (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "B1004",
    titre: "Défaut interne combiné d'instruments — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "elevee",
    severiteLabel: "Gravité élevée — lisibilité du tableau de bord compromise",
    description:
      "Le calculateur du combiné d'instruments (tableau de bord) détecte un défaut interne, pouvant affecter l'affichage des compteurs, jauges ou témoins d'alerte.",
    causes: [
      { pourcentage: 45, libelle: "Calculateur du combiné défaillant" },
      { pourcentage: 25, libelle: "Alimentation électrique instable" },
      { pourcentage: 18, libelle: "Masse électrique défectueuse" },
      { pourcentage: 12, libelle: "Mise à jour logicielle nécessaire" },
    ],
    avisPro:
      "Un affichage erratique du tableau de bord (aiguilles qui s'affolent, témoins qui clignotent tous en même temps) est le symptôme typique de ce défaut — faire un diagnostic avant de rouler si l'affichage devient illisible.",
    pieces: [
      { nom: "Diagnostic combiné d'instruments (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "B100C",
    titre: "Défaut alimentation calculateur combiné — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque d'extinction du tableau de bord",
    description:
      "Le calculateur du combiné d'instruments détecte une alimentation électrique hors plage de fonctionnement, ce qui peut provoquer une extinction totale ou partielle du tableau de bord.",
    causes: [
      { pourcentage: 35, libelle: "Fusible dédié grillé" },
      { pourcentage: 30, libelle: "Câblage d'alimentation du combiné endommagé" },
      { pourcentage: 20, libelle: "Batterie ou alternateur en cause (tension instable)" },
      { pourcentage: 15, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Vérifier la tension batterie et l'état du fusible avant de suspecter le calculateur — une alimentation instable touche souvent plusieurs équipements électriques en même temps.",
    pieces: [
      { nom: "Diagnostic alimentation combiné (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "B151D",
    titre: "Défaut éclairage écran/console — combiné PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "moderee",
    severiteLabel: "Gravité modérée — lisibilité réduite de nuit",
    description:
      "Le circuit d'éclairage de l'écran ou de la console centrale ne fonctionne plus correctement, rendant l'affichage difficilement lisible de nuit.",
    causes: [
      { pourcentage: 40, libelle: "LED ou ampoule d'éclairage grillée" },
      { pourcentage: 30, libelle: "Câblage du circuit d'éclairage endommagé" },
      { pourcentage: 20, libelle: "Variateur (rhéostat) d'intensité défaillant" },
      { pourcentage: 10, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Vérifier d'abord le réglage du variateur d'intensité au tableau de bord — un réglage accidentel à zéro est parfois confondu avec une panne.",
    pieces: [
      { nom: "Diagnostic éclairage console (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "U1F03",
    titre: "Absence de communication avec le BSI — combiné PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent lié à un défaut réseau plus large",
    description:
      "Le calculateur du combiné d'instruments ne reçoit plus les informations transmises par le boîtier de servitude intelligent (BSI), ce qui peut priver le tableau de bord de plusieurs informations (niveau carburant, portes ouvertes, etc.).",
    causes: [
      { pourcentage: 35, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 25, libelle: "Connecteur du combiné oxydé" },
      { pourcentage: 20, libelle: "BSI en défaut propre" },
      { pourcentage: 20, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Vérifier si le BSI affiche lui-même des défauts au même moment — ce code accompagne souvent un problème réseau plus large plutôt qu'une panne isolée du combiné.",
    pieces: [
      { nom: "Diagnostic réseau BSI/combiné (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "U1F0A",
    titre: "Défaut réseau CAN — combiné d'instruments PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "elevee",
    severiteLabel: "Gravité élevée — plusieurs informations du tableau de bord affectées",
    description:
      "Le calculateur du combiné d'instruments détecte une anomalie sur le réseau CAN, ce qui peut le priver de plusieurs informations essentielles venant d'autres calculateurs du véhicule.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus CAN endommagé ou court-circuité" },
      { pourcentage: 25, libelle: "Connecteur du combiné mal enfiché ou corrodé" },
      { pourcentage: 20, libelle: "Résistance de terminaison du bus CAN défaillante" },
      { pourcentage: 20, libelle: "Autre calculateur du réseau perturbant le bus" },
    ],
    avisPro:
      "Un défaut réseau généralisé touchant le combiné affecte souvent l'affichage de plusieurs informations en même temps — vérifier les autres calculateurs pour une cause commune.",
    pieces: [
      { nom: "Diagnostic réseau CAN (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "B128D",
    titre: "Bouton Stop & Start bloqué — combiné PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "faible",
    severiteLabel: "Gravité faible — désactivation manuelle impossible uniquement",
    description:
      "Le bouton qui permet de désactiver manuellement le système Stop & Start reste bloqué ou envoie un signal incohérent au calculateur.",
    causes: [
      { pourcentage: 45, libelle: "Bouton mécaniquement bloqué ou grippé" },
      { pourcentage: 30, libelle: "Câblage du bouton endommagé" },
      { pourcentage: 15, libelle: "Connecteur du combiné oxydé" },
      { pourcentage: 10, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Ce défaut n'empêche pas le fonctionnement normal du Stop & Start — seule sa désactivation manuelle est impossible.",
    pieces: [
      { nom: "Diagnostic bouton Stop & Start (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "B128C",
    titre: "Défaut statut mode ECO — combiné PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "faible",
    severiteLabel: "Gravité faible — défaut purement informatif",
    description:
      "L'information d'état du mode de conduite ECO, affichée au tableau de bord, n'est plus transmise ou affichée correctement par le calculateur du combiné.",
    causes: [
      { pourcentage: 40, libelle: "Défaut réseau transmettant le statut ECO" },
      { pourcentage: 30, libelle: "Calculateur moteur ou boîte en cause (source de l'information)" },
      { pourcentage: 20, libelle: "Calculateur du combiné défaillant" },
      { pourcentage: 10, libelle: "Câblage du réseau multiplexé endommagé" },
    ],
    avisPro:
      "Ce défaut est purement informatif — il n'affecte ni la conduite ni la consommation réelle du véhicule.",
    pieces: [
      { nom: "Diagnostic affichage mode ECO (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "B154A",
    titre: "Bouton d'assistance au stationnement semi-automatique bloqué — combiné PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "faible",
    severiteLabel: "Gravité faible — stationnement manuel classique non affecté",
    description:
      "Le bouton qui active la fonction de stationnement semi-automatique (braquage assisté) reste bloqué ou envoie un signal incohérent au calculateur du combiné.",
    causes: [
      { pourcentage: 45, libelle: "Bouton mécaniquement bloqué ou grippé" },
      { pourcentage: 28, libelle: "Câblage du bouton endommagé" },
      { pourcentage: 17, libelle: "Connecteur du combiné oxydé" },
      { pourcentage: 10, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Ce défaut désactive uniquement l'assistance au stationnement automatisée — le stationnement manuel classique reste possible normalement.",
    pieces: [
      { nom: "Diagnostic bouton stationnement semi-auto (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "B1549",
    titre: "Défaut rétroéclairage du combiné d'instruments — PSA",
    categorie: "psa",
    categorieLabel: "PSA — Combiné / écran",
    severite: "moderee",
    severiteLabel: "Gravité modérée — lisibilité de nuit compromise",
    description:
      "Le rétroéclairage propre au combiné d'instruments (aiguilles, chiffres, témoins) ne fonctionne plus correctement, rendant le tableau de bord difficilement lisible de nuit ou en cas de faible luminosité.",
    causes: [
      { pourcentage: 40, libelle: "LED de rétroéclairage du combiné grillées" },
      { pourcentage: 30, libelle: "Câblage interne du combiné endommagé" },
      { pourcentage: 20, libelle: "Variateur (rhéostat) d'intensité défaillant" },
      { pourcentage: 10, libelle: "Calculateur du combiné défaillant" },
    ],
    avisPro:
      "Rouler de nuit avec un tableau de bord illisible est risqué — traiter ce défaut rapidement même s'il semble uniquement esthétique.",
    pieces: [
      { nom: "Diagnostic rétroéclairage combiné (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P0200",
    titre: "Circuit injecteur — défaut général",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "elevee",
    severiteLabel: "Gravité élevée — fonctionnement moteur dégradé",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de commande des injecteurs (court-circuit, coupure ou signal hors plage), sans pouvoir identifier précisément quel cylindre est concerné.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du faisceau injecteurs endommagé" },
      { pourcentage: 30, libelle: "Connecteur d'injecteur mal enfiché ou corrodé" },
      { pourcentage: 20, libelle: "Un ou plusieurs injecteurs défaillants" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un contrôle de la résistance de chaque injecteur au multimètre permet souvent d'isoler le cylindre en cause avant de remplacer une pièce.",
    pieces: [
      { nom: "Injecteur essence/diesel", boutique: "Mister-Auto · sur commande", prix: "70-140€" },
    ],
  },
  {
    code: "P0201",
    titre: "Circuit injecteur cylindre 1 — défaut",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "elevee",
    severiteLabel: "Gravité élevée — raté d'allumage probable sur ce cylindre",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de commande de l'injecteur du cylindre 1 (court-circuit, coupure ou résistance hors plage), ce qui peut provoquer un raté d'allumage sur ce cylindre.",
    causes: [
      { pourcentage: 40, libelle: "Injecteur du cylindre 1 défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de l'injecteur endommagé" },
      { pourcentage: 20, libelle: "Étage de commande de l'injecteur défaillant côté calculateur" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut s'accompagne souvent d'un raté d'allumage détecté sur le même cylindre — traiter les deux ensemble oriente directement vers l'injecteur.",
    pieces: [
      { nom: "Injecteur essence/diesel", boutique: "Mister-Auto · sur commande", prix: "70-140€" },
    ],
  },
  {
    code: "P0202",
    titre: "Circuit injecteur cylindre 2 — défaut",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "elevee",
    severiteLabel: "Gravité élevée — raté d'allumage probable sur ce cylindre",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de commande de l'injecteur du cylindre 2 (court-circuit, coupure ou résistance hors plage), ce qui peut provoquer un raté d'allumage sur ce cylindre.",
    causes: [
      { pourcentage: 40, libelle: "Injecteur du cylindre 2 défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de l'injecteur endommagé" },
      { pourcentage: 20, libelle: "Étage de commande de l'injecteur défaillant côté calculateur" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut s'accompagne souvent d'un raté d'allumage détecté sur le même cylindre — traiter les deux ensemble oriente directement vers l'injecteur.",
    pieces: [
      { nom: "Injecteur essence/diesel", boutique: "Mister-Auto · sur commande", prix: "70-140€" },
    ],
  },
  {
    code: "P0203",
    titre: "Circuit injecteur cylindre 3 — défaut",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "elevee",
    severiteLabel: "Gravité élevée — raté d'allumage probable sur ce cylindre",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de commande de l'injecteur du cylindre 3 (court-circuit, coupure ou résistance hors plage), ce qui peut provoquer un raté d'allumage sur ce cylindre.",
    causes: [
      { pourcentage: 40, libelle: "Injecteur du cylindre 3 défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de l'injecteur endommagé" },
      { pourcentage: 20, libelle: "Étage de commande de l'injecteur défaillant côté calculateur" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut s'accompagne souvent d'un raté d'allumage détecté sur le même cylindre — traiter les deux ensemble oriente directement vers l'injecteur.",
    pieces: [
      { nom: "Injecteur essence/diesel", boutique: "Mister-Auto · sur commande", prix: "70-140€" },
    ],
  },
  {
    code: "P0204",
    titre: "Circuit injecteur cylindre 4 — défaut",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "elevee",
    severiteLabel: "Gravité élevée — raté d'allumage probable sur ce cylindre",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de commande de l'injecteur du cylindre 4 (court-circuit, coupure ou résistance hors plage), ce qui peut provoquer un raté d'allumage sur ce cylindre.",
    causes: [
      { pourcentage: 40, libelle: "Injecteur du cylindre 4 défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de l'injecteur endommagé" },
      { pourcentage: 20, libelle: "Étage de commande de l'injecteur défaillant côté calculateur" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut s'accompagne souvent d'un raté d'allumage détecté sur le même cylindre — traiter les deux ensemble oriente directement vers l'injecteur.",
    pieces: [
      { nom: "Injecteur essence/diesel", boutique: "Mister-Auto · sur commande", prix: "70-140€" },
    ],
  },
  {
    code: "P0230",
    titre: "Circuit primaire pompe à carburant — défaut",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de non-démarrage ou coupure moteur",
    description:
      "Le circuit électrique qui commande la pompe à carburant (relais ou étage de puissance du calculateur) présente une anomalie, ce qui peut empêcher le moteur de démarrer ou provoquer des coupures en roulant.",
    causes: [
      { pourcentage: 35, libelle: "Relais de pompe à carburant défaillant" },
      { pourcentage: 28, libelle: "Câblage d'alimentation de la pompe endommagé" },
      { pourcentage: 22, libelle: "Pompe à carburant défaillante" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant (étage de commande)" },
    ],
    avisPro:
      "Vérifier le relais de pompe en premier — c'est une pièce peu coûteuse et facilement accessible, contrairement à la pompe elle-même souvent logée dans le réservoir.",
    pieces: [
      { nom: "Relais pompe à carburant", boutique: "AutoDoc · livraison 24h", prix: "15€" },
      { nom: "Pompe à carburant complète", boutique: "Mister-Auto · sur commande", prix: "120-220€" },
    ],
  },
  {
    code: "P0231",
    titre: "Circuit secondaire pompe à carburant — signal faible",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "moderee",
    severiteLabel: "Gravité modérée — pompe fatiguée à surveiller",
    description:
      "Le circuit de retour d'information de la pompe à carburant envoie un signal anormalement faible au calculateur, ce qui peut traduire une pompe fatiguée ou un problème de câblage sur ce circuit spécifique.",
    causes: [
      { pourcentage: 38, libelle: "Pompe à carburant fatiguée (débit insuffisant)" },
      { pourcentage: 28, libelle: "Câblage du circuit de retour endommagé" },
      { pourcentage: 20, libelle: "Connecteur de la pompe corrodé" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Une pompe fatiguée se manifeste souvent par des difficultés à haut régime ou en charge avant de déclencher ce code — ne pas attendre la panne complète pour la remplacer.",
    pieces: [
      { nom: "Pompe à carburant complète", boutique: "Mister-Auto · sur commande", prix: "120-220€" },
    ],
  },
  {
    code: "P0087",
    titre: "Pression rail carburant/circuit d'alimentation — trop basse",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "elevee",
    severiteLabel: "Gravité élevée — perte de puissance, risque de non-démarrage",
    description:
      "Le calculateur détecte une pression insuffisante dans la rampe commune (rail) d'injection, ce qui peut provoquer une perte de puissance, des à-coups ou l'impossibilité de démarrer, notamment sur les moteurs diesel à injection common-rail.",
    causes: [
      { pourcentage: 35, libelle: "Pompe haute pression défaillante ou usée" },
      { pourcentage: 25, libelle: "Filtre à carburant colmaté" },
      { pourcentage: 20, libelle: "Fuite dans le circuit basse ou haute pression" },
      { pourcentage: 20, libelle: "Capteur de pression rail défaillant (fausse mesure)" },
    ],
    avisPro:
      "Changer le filtre à carburant est le premier réflexe à avoir, peu coûteux, avant d'envisager une pompe haute pression, bien plus onéreuse à remplacer.",
    pieces: [
      { nom: "Filtre à carburant", boutique: "AutoDoc · livraison 24h", prix: "18€" },
      { nom: "Pompe haute pression diesel", boutique: "Mister-Auto · sur commande", prix: "250-450€" },
    ],
  },
  {
    code: "P0089",
    titre: "Pression carburant — plage/performance",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent le signe avant-coureur d'une panne plus grave",
    description:
      "La pression mesurée dans le circuit d'alimentation ne correspond pas à la valeur attendue par le calculateur compte tenu des conditions de fonctionnement du moteur, sans être en défaut franc de pression trop basse.",
    causes: [
      { pourcentage: 35, libelle: "Régulateur de pression de carburant déréglé ou défaillant" },
      { pourcentage: 28, libelle: "Capteur de pression rail imprécis" },
      { pourcentage: 22, libelle: "Filtre à carburant partiellement colmaté" },
      { pourcentage: 15, libelle: "Pompe haute pression en début d'usure" },
    ],
    avisPro:
      "Ce code apparaît souvent avant un défaut de pression franc (P0087) — un contrôle préventif du filtre et du régulateur évite une panne plus grave.",
    pieces: [
      { nom: "Régulateur de pression carburant", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "P0193",
    titre: "Capteur de pression rail carburant — signal élevé",
    categorie: "p02xx",
    categorieLabel: "Injection",
    severite: "moderee",
    severiteLabel: "Gravité modérée — régulation de l'injection perturbée",
    description:
      "Le capteur de pression de la rampe commune (rail) d'injection envoie un signal anormalement élevé, incohérent avec la pression réelle du circuit, perturbant la régulation de l'injection.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de pression rail défaillant" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé (court-circuit vers le +)" },
      { pourcentage: 20, libelle: "Connecteur du capteur corrodé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un signal capteur incohérent peut pousser le calculateur à réduire la puissance moteur par sécurité — un remplacement du capteur résout généralement ce défaut sans autre intervention.",
    pieces: [
      { nom: "Capteur de pression rail carburant", boutique: "Oscaro · livraison 48h", prix: "55€" },
    ],
  },
  {
    code: "P0500",
    titre: "Capteur de vitesse véhicule — dysfonctionnement",
    categorie: "p05xx",
    categorieLabel: "Ralenti & régulation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — ralenti et boîte automatique perturbés",
    description:
      "Le capteur de vitesse du véhicule (VSS), qui informe le calculateur moteur de la vitesse réelle pour ajuster le ralenti, la boîte de vitesses et diverses fonctions, envoie un signal absent ou incohérent.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de vitesse véhicule défaillant" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur corrodé" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut peut perturber le passage des rapports sur boîte automatique et le régime de ralenti — à traiter rapidement même s'il ne provoque pas d'arrêt immédiat du véhicule.",
    pieces: [
      { nom: "Capteur de vitesse véhicule", boutique: "AutoDoc · livraison 24h", prix: "28€" },
    ],
  },
  {
    code: "P0501",
    titre: "Capteur de vitesse véhicule — plage/performance",
    categorie: "p05xx",
    categorieLabel: "Ralenti & régulation",
    severite: "faible",
    severiteLabel: "Gravité faible — souvent un signe avant-coureur",
    description:
      "Le signal du capteur de vitesse véhicule est présent mais ne correspond pas exactement à la plage de valeurs attendue par le calculateur, sans être totalement absent.",
    causes: [
      { pourcentage: 35, libelle: "Capteur de vitesse partiellement défaillant" },
      { pourcentage: 28, libelle: "Cible denture ou pignon capteur encrassé" },
      { pourcentage: 22, libelle: "Câblage partiellement endommagé" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut est souvent un signe avant-coureur d'une panne complète du capteur — un remplacement préventif évite une panne plus gênante.",
    pieces: [
      { nom: "Capteur de vitesse véhicule", boutique: "AutoDoc · livraison 24h", prix: "28€" },
    ],
  },
  {
    code: "P0505",
    titre: "Système de régulation de ralenti — dysfonctionnement",
    categorie: "p05xx",
    categorieLabel: "Ralenti & régulation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — ralenti instable, risque de calage",
    description:
      "Le calculateur ne parvient plus à maintenir un régime de ralenti stable via son actionneur de régulation d'air (moteur pas à pas ou papillon motorisé), ce qui peut provoquer un ralenti instable ou des calages.",
    causes: [
      { pourcentage: 35, libelle: "Actionneur de régulation de ralenti encrassé ou défaillant" },
      { pourcentage: 28, libelle: "Corps de papillon encrassé (dépôts de calamine)" },
      { pourcentage: 20, libelle: "Fuite d'air parasite sur le collecteur d'admission" },
      { pourcentage: 17, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un nettoyage du corps de papillon et de l'actionneur de ralenti résout ce défaut dans la majorité des cas, pour un coût minime.",
    pieces: [
      { nom: "Nettoyant corps de papillon + actionneur ralenti", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "P0506",
    titre: "Régime de ralenti trop bas par rapport à la consigne",
    categorie: "p05xx",
    categorieLabel: "Ralenti & régulation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — risque de calage",
    description:
      "Le régime moteur au ralenti reste durablement inférieur à la valeur visée par le calculateur, ce qui peut provoquer des calages, notamment au ralenti ou lors d'une sollicitation électrique (climatisation, phares).",
    causes: [
      { pourcentage: 35, libelle: "Fuite d'air parasite sur le collecteur d'admission" },
      { pourcentage: 28, libelle: "Actionneur de régulation de ralenti encrassé" },
      { pourcentage: 22, libelle: "Corps de papillon encrassé" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Vérifier en priorité les durites et joints d'admission pour une fuite d'air — une fuite même minime suffit à déstabiliser le ralenti.",
    pieces: [
      { nom: "Kit durites/joints admission", boutique: "AutoDoc · livraison 24h", prix: "20-40€" },
    ],
  },
  {
    code: "P0507",
    titre: "Régime de ralenti trop élevé par rapport à la consigne",
    categorie: "p05xx",
    categorieLabel: "Ralenti & régulation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — surconsommation et ralenti anormal",
    description:
      "Le régime moteur au ralenti reste durablement supérieur à la valeur visée par le calculateur, ce qui peut se traduire par un ralenti anormalement haut et une surconsommation.",
    causes: [
      { pourcentage: 35, libelle: "Fuite d'air parasite importante sur le collecteur d'admission" },
      { pourcentage: 28, libelle: "Actionneur de régulation de ralenti bloqué en position ouverte" },
      { pourcentage: 22, libelle: "Corps de papillon mal calibré après nettoyage ou remplacement" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Après tout nettoyage du corps de papillon, une réinitialisation de l'apprentissage du ralenti à la valise est souvent nécessaire pour éviter ce défaut.",
    pieces: [
      { nom: "Diagnostic + réapprentissage ralenti (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P0560",
    titre: "Tension du système — dysfonctionnement",
    categorie: "p05xx",
    categorieLabel: "Ralenti & régulation",
    severite: "elevee",
    severiteLabel: "Gravité élevée — régulations électroniques imprécises",
    description:
      "Le calculateur moteur détecte une tension d'alimentation générale hors plage de fonctionnement normale, ce qui peut affecter la précision de tous les calculs et régulations qu'il effectue.",
    causes: [
      { pourcentage: 35, libelle: "Batterie faible ou en fin de vie" },
      { pourcentage: 28, libelle: "Alternateur déréglé ou défaillant" },
      { pourcentage: 22, libelle: "Câblage de masse ou d'alimentation endommagé" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Contrôler la tension batterie moteur à l'arrêt et moteur tournant avant tout autre diagnostic — une simple batterie fatiguée est la cause la plus fréquente et la moins coûteuse à corriger.",
    pieces: [
      { nom: "Batterie de démarrage", boutique: "Oscaro · livraison 48h", prix: "90-140€" },
    ],
  },
  {
    code: "P0562",
    titre: "Sous-tension du système",
    categorie: "p05xx",
    categorieLabel: "Ralenti & régulation",
    severite: "elevee",
    severiteLabel: "Gravité élevée — dysfonctionnements électroniques en cascade",
    description:
      "La tension d'alimentation mesurée par le calculateur est anormalement basse, ce qui peut provoquer des dysfonctionnements électroniques en cascade sur plusieurs systèmes du véhicule.",
    causes: [
      { pourcentage: 38, libelle: "Batterie faible ou défectueuse" },
      { pourcentage: 28, libelle: "Alternateur ne chargeant plus correctement" },
      { pourcentage: 20, libelle: "Câblage ou cosse de batterie oxydée" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut touche rarement le calculateur lui-même — commencer systématiquement par un contrôle de la batterie et de la charge de l'alternateur.",
    pieces: [
      { nom: "Batterie de démarrage", boutique: "Oscaro · livraison 48h", prix: "90-140€" },
    ],
  },
  {
    code: "P0563",
    titre: "Surtension du système",
    categorie: "p05xx",
    categorieLabel: "Ralenti & régulation",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque d'endommager les calculateurs",
    description:
      "La tension d'alimentation mesurée par le calculateur est anormalement élevée, ce qui peut endommager à terme les composants électroniques du véhicule si la cause n'est pas corrigée rapidement.",
    causes: [
      { pourcentage: 40, libelle: "Alternateur déréglé (régulateur défaillant)" },
      { pourcentage: 28, libelle: "Batterie récemment remplacée par un modèle inadapté" },
      { pourcentage: 20, libelle: "Câblage de masse défectueux" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Faire contrôler la tension de charge de l'alternateur moteur tournant sans attendre — une surtension prolongée peut endommager plusieurs calculateurs à la fois.",
    pieces: [
      { nom: "Diagnostic circuit de charge (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P0100",
    titre: "Débitmètre d'air (MAF) — dysfonctionnement du circuit",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "elevee",
    severiteLabel: "Gravité élevée — dosage du mélange air/carburant faussé",
    description:
      "Le capteur de débit d'air massique (MAF), qui mesure la quantité d'air aspirée par le moteur pour doser l'injection, envoie un signal totalement absent ou hors plage — le calculateur ne peut plus doser correctement le mélange air/carburant.",
    causes: [
      { pourcentage: 38, libelle: "Capteur MAF encrassé (poussière, huile de filtre à air mal choisi)" },
      { pourcentage: 28, libelle: "Capteur MAF défaillant" },
      { pourcentage: 22, libelle: "Câblage ou connecteur du capteur endommagé" },
      { pourcentage: 12, libelle: "Fuite d'air en amont ou en aval du capteur" },
    ],
    avisPro:
      "Un nettoyage au spray spécifique MAF résout souvent ce défaut sans remplacement — éviter tout contact avec le fil chaud du capteur, très fragile.",
    pieces: [
      { nom: "Nettoyant capteur débitmètre MAF", boutique: "AutoDoc · livraison 24h", prix: "10€" },
      { nom: "Débitmètre d'air (MAF)", boutique: "Oscaro · livraison 48h", prix: "65€" },
    ],
  },
  {
    code: "P0106",
    titre: "Capteur de pression collecteur (MAP) — plage/performance",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — estimation de charge moteur faussée",
    description:
      "Le capteur de pression absolue du collecteur d'admission (MAP), qui mesure la dépression pour estimer la charge moteur, envoie un signal incohérent avec les autres paramètres moteur.",
    causes: [
      { pourcentage: 35, libelle: "Capteur MAP défaillant" },
      { pourcentage: 28, libelle: "Durite de prise de dépression fissurée ou débranchée" },
      { pourcentage: 22, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 15, libelle: "Fuite d'air sur le collecteur d'admission" },
    ],
    avisPro:
      "Vérifier en premier la durite de dépression reliant le capteur au collecteur — une fissure invisible à l'œil nu est une cause très fréquente et gratuite à corriger.",
    pieces: [
      { nom: "Capteur de pression collecteur (MAP)", boutique: "Oscaro · livraison 48h", prix: "35€" },
    ],
  },
  {
    code: "P0116",
    titre: "Capteur de température liquide de refroidissement — plage/performance",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — stratégies moteur faussées",
    description:
      "Le capteur de température du liquide de refroidissement envoie un signal cohérent mais qui dérive ou ne correspond pas exactement à la température réelle, perturbant la stratégie du calculateur (richesse, ventilateur, chauffage).",
    causes: [
      { pourcentage: 35, libelle: "Capteur de température encrassé ou vieillissant" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 22, libelle: "Niveau de liquide de refroidissement bas" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Vérifier le niveau de liquide de refroidissement avant tout — un niveau bas expose parfois le capteur à l'air, faussant sa mesure par intermittence.",
    pieces: [
      { nom: "Capteur température liquide de refroidissement", boutique: "AutoDoc · livraison 24h", prix: "16€" },
    ],
  },
  {
    code: "P0117",
    titre: "Capteur de température liquide de refroidissement — signal faible",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — surconsommation et surveillance thermique faussée",
    description:
      "Le capteur de température du liquide de refroidissement envoie un signal anormalement bas, ce qui est interprété par le calculateur comme une température très froide en permanence, faussant l'enrichissement du mélange.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de température défaillant (court-circuit interne)" },
      { pourcentage: 28, libelle: "Câblage du capteur en court-circuit vers la masse" },
      { pourcentage: 20, libelle: "Connecteur du capteur endommagé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut provoque souvent une surconsommation et un ventilateur de refroidissement qui ne s'enclenche plus correctement — à corriger rapidement pour éviter une surchauffe non détectée.",
    pieces: [
      { nom: "Capteur température liquide de refroidissement", boutique: "AutoDoc · livraison 24h", prix: "16€" },
    ],
  },
  {
    code: "P0118",
    titre: "Capteur de température liquide de refroidissement — signal élevé",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — ventilateur pouvant tourner en continu",
    description:
      "Le capteur de température du liquide de refroidissement envoie un signal anormalement élevé, interprété par le calculateur comme une température très chaude en permanence, ce qui peut déclencher le ventilateur en continu.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de température défaillant (circuit ouvert)" },
      { pourcentage: 28, libelle: "Câblage du capteur coupé ou débranché" },
      { pourcentage: 20, libelle: "Connecteur du capteur corrodé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un ventilateur de refroidissement qui tourne en permanence, même moteur froid, est le symptôme typique de ce défaut.",
    pieces: [
      { nom: "Capteur température liquide de refroidissement", boutique: "AutoDoc · livraison 24h", prix: "16€" },
    ],
  },
  {
    code: "P0130",
    titre: "Circuit sonde lambda — dysfonctionnement (Banc 1, Capteur 1)",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — dosage du mélange non corrigé",
    description:
      "La sonde lambda amont du banc 1, qui mesure la teneur en oxygène des gaz d'échappement pour ajuster le dosage du mélange, envoie un signal totalement absent ou hors plage.",
    causes: [
      { pourcentage: 38, libelle: "Sonde lambda encrassée ou en fin de vie" },
      { pourcentage: 28, libelle: "Câblage de la sonde endommagé" },
      { pourcentage: 20, libelle: "Connecteur de la sonde corrodé" },
      { pourcentage: 14, libelle: "Fuite d'échappement en amont de la sonde" },
    ],
    avisPro:
      "Une fuite d'échappement avant la sonde fausse sa mesure en y introduisant de l'air extérieur — à vérifier avant de remplacer la sonde elle-même.",
    pieces: [
      { nom: "Sonde lambda amont", boutique: "Oscaro · livraison 48h", prix: "58€" },
    ],
  },
  {
    code: "P0136",
    titre: "Circuit sonde lambda — dysfonctionnement (Banc 1, Capteur 2)",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "faible",
    severiteLabel: "Gravité faible — surveillance du catalyseur affectée",
    description:
      "La sonde lambda aval du banc 1, qui surveille l'efficacité du catalyseur après le passage des gaz, envoie un signal totalement absent ou hors plage.",
    causes: [
      { pourcentage: 38, libelle: "Sonde lambda aval défaillante" },
      { pourcentage: 28, libelle: "Câblage de la sonde endommagé" },
      { pourcentage: 20, libelle: "Connecteur de la sonde corrodé" },
      { pourcentage: 14, libelle: "Catalyseur en fin de vie perturbant la mesure" },
    ],
    avisPro:
      "Ce défaut n'affecte pas directement la conduite mais peut fausser la surveillance du catalyseur — à corriger avant le contrôle technique.",
    pieces: [
      { nom: "Sonde lambda aval", boutique: "Oscaro · livraison 48h", prix: "48€" },
    ],
  },
  {
    code: "P0137",
    titre: "Circuit sonde lambda — tension faible (Banc 1, Capteur 2)",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "faible",
    severiteLabel: "Gravité faible — risque d'échec au contrôle technique",
    description:
      "La sonde lambda aval du banc 1 envoie une tension anormalement basse en continu, ce qui peut traduire une sonde fatiguée ou un problème de masse électrique.",
    causes: [
      { pourcentage: 35, libelle: "Sonde lambda aval en fin de vie" },
      { pourcentage: 28, libelle: "Câblage en court-circuit vers la masse" },
      { pourcentage: 22, libelle: "Connecteur de la sonde endommagé" },
      { pourcentage: 15, libelle: "Fuite d'échappement perturbant la mesure" },
    ],
    avisPro:
      "Ce défaut est généralement bénin pour la conduite mais peut provoquer un échec au contrôle technique — à corriger avant le passage.",
    pieces: [
      { nom: "Sonde lambda aval", boutique: "Oscaro · livraison 48h", prix: "48€" },
    ],
  },
  {
    code: "P0138",
    titre: "Circuit sonde lambda — tension élevée (Banc 1, Capteur 2)",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "faible",
    severiteLabel: "Gravité faible — risque d'échec au contrôle technique",
    description:
      "La sonde lambda aval du banc 1 envoie une tension anormalement élevée en continu, ce qui peut traduire une sonde défaillante ou un court-circuit vers l'alimentation.",
    causes: [
      { pourcentage: 35, libelle: "Sonde lambda aval défaillante" },
      { pourcentage: 28, libelle: "Câblage en court-circuit vers le +" },
      { pourcentage: 22, libelle: "Connecteur de la sonde endommagé" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut est généralement bénin pour la conduite mais peut provoquer un échec au contrôle technique — à corriger avant le passage.",
    pieces: [
      { nom: "Sonde lambda aval", boutique: "Oscaro · livraison 48h", prix: "48€" },
    ],
  },
  {
    code: "P0121",
    titre: "Capteur de position papillon (TPS) — plage/performance",
    categorie: "p01xx",
    categorieLabel: "Carburant",
    severite: "moderee",
    severiteLabel: "Gravité modérée — réponse à l'accélérateur perturbée",
    description:
      "Le capteur de position du papillon des gaz envoie un signal cohérent mais qui ne correspond pas exactement à la position réelle attendue par le calculateur, perturbant la réponse à l'accélérateur.",
    causes: [
      { pourcentage: 35, libelle: "Capteur TPS défaillant ou déréglé" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 22, libelle: "Corps de papillon encrassé perturbant la course mécanique" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut se traduit souvent par des à-coups à l'accélération avant d'être détecté — un diagnostic rapide évite une conduite désagréable prolongée.",
    pieces: [
      { nom: "Capteur position papillon (TPS)", boutique: "AutoDoc · livraison 24h", prix: "32€" },
    ],
  },
  {
    code: "P0351",
    titre: "Circuit bobine d'allumage cylindre 1 — défaut",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — raté d'allumage probable sur ce cylindre",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de la bobine d'allumage du cylindre 1 (court-circuit, coupure ou signal hors plage), ce qui provoque généralement un raté d'allumage sur ce cylindre.",
    causes: [
      { pourcentage: 42, libelle: "Bobine d'allumage du cylindre 1 défaillante" },
      { pourcentage: 26, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur de la bobine endommagé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut s'accompagne quasi systématiquement d'un raté d'allumage détecté sur le même cylindre — remplacer la bobine et la bougie ensemble limite le risque de revenir sur le même défaut.",
    pieces: [
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "42€" },
      { nom: "Bougie d'allumage (jeu)", boutique: "AutoDoc · livraison 24h", prix: "24€" },
    ],
  },
  {
    code: "P0352",
    titre: "Circuit bobine d'allumage cylindre 2 — défaut",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — raté d'allumage probable sur ce cylindre",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de la bobine d'allumage du cylindre 2 (court-circuit, coupure ou signal hors plage), ce qui provoque généralement un raté d'allumage sur ce cylindre.",
    causes: [
      { pourcentage: 42, libelle: "Bobine d'allumage du cylindre 2 défaillante" },
      { pourcentage: 26, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur de la bobine endommagé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut s'accompagne quasi systématiquement d'un raté d'allumage détecté sur le même cylindre — remplacer la bobine et la bougie ensemble limite le risque de revenir sur le même défaut.",
    pieces: [
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "42€" },
      { nom: "Bougie d'allumage (jeu)", boutique: "AutoDoc · livraison 24h", prix: "24€" },
    ],
  },
  {
    code: "P0353",
    titre: "Circuit bobine d'allumage cylindre 3 — défaut",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — raté d'allumage probable sur ce cylindre",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de la bobine d'allumage du cylindre 3 (court-circuit, coupure ou signal hors plage), ce qui provoque généralement un raté d'allumage sur ce cylindre.",
    causes: [
      { pourcentage: 42, libelle: "Bobine d'allumage du cylindre 3 défaillante" },
      { pourcentage: 26, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur de la bobine endommagé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut s'accompagne quasi systématiquement d'un raté d'allumage détecté sur le même cylindre — remplacer la bobine et la bougie ensemble limite le risque de revenir sur le même défaut.",
    pieces: [
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "42€" },
      { nom: "Bougie d'allumage (jeu)", boutique: "AutoDoc · livraison 24h", prix: "24€" },
    ],
  },
  {
    code: "P0354",
    titre: "Circuit bobine d'allumage cylindre 4 — défaut",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — raté d'allumage probable sur ce cylindre",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de la bobine d'allumage du cylindre 4 (court-circuit, coupure ou signal hors plage), ce qui provoque généralement un raté d'allumage sur ce cylindre.",
    causes: [
      { pourcentage: 42, libelle: "Bobine d'allumage du cylindre 4 défaillante" },
      { pourcentage: 26, libelle: "Bougie d'allumage usée ou encrassée" },
      { pourcentage: 20, libelle: "Câblage ou connecteur de la bobine endommagé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut s'accompagne quasi systématiquement d'un raté d'allumage détecté sur le même cylindre — remplacer la bobine et la bougie ensemble limite le risque de revenir sur le même défaut.",
    pieces: [
      { nom: "Bobine d'allumage", boutique: "Oscaro · livraison 48h", prix: "42€" },
      { nom: "Bougie d'allumage (jeu)", boutique: "AutoDoc · livraison 24h", prix: "24€" },
    ],
  },
  {
    code: "P0328",
    titre: "Circuit capteur de cliquetis — signal élevé",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — avance à l'allumage retardée par sécurité",
    description:
      "Le capteur de cliquetis, qui détecte les vibrations anormales de combustion (cliquetis moteur) pour adapter l'avance à l'allumage, envoie un signal anormalement élevé en continu.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de cliquetis défaillant" },
      { pourcentage: 28, libelle: "Câblage en court-circuit vers le +" },
      { pourcentage: 20, libelle: "Connecteur du capteur endommagé" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Sans mesure fiable du cliquetis, le calculateur retarde l'avance par sécurité, ce qui peut réduire légèrement les performances et augmenter la consommation.",
    pieces: [
      { nom: "Capteur de cliquetis", boutique: "AutoDoc · livraison 24h", prix: "30€" },
    ],
  },
  {
    code: "P0336",
    titre: "Circuit capteur de position vilebrequin — plage/performance",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de calage brutal",
    description:
      "Le capteur de position vilebrequin, essentiel pour synchroniser l'allumage et l'injection, envoie un signal présent mais incohérent avec le régime moteur réel, pouvant provoquer des à-coups ou un calage.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de position vilebrequin défaillant" },
      { pourcentage: 28, libelle: "Cible denture (couronne) endommagée ou encrassée" },
      { pourcentage: 20, libelle: "Entrefer capteur/cible incorrect" },
      { pourcentage: 12, libelle: "Câblage du capteur endommagé" },
    ],
    avisPro:
      "Ce défaut peut provoquer un calage brutal sans redémarrage possible — à traiter en priorité, ne pas différer l'intervention.",
    pieces: [
      { nom: "Capteur de position vilebrequin", boutique: "Oscaro · livraison 48h", prix: "38€" },
    ],
  },
  {
    code: "P0341",
    titre: "Circuit capteur de position arbre à cames — plage/performance",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — démarrage difficile et perte de puissance légère",
    description:
      "Le capteur de position arbre à cames envoie un signal présent mais incohérent avec le fonctionnement réel du moteur, perturbant la synchronisation de l'injection séquentielle.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de position arbre à cames défaillant" },
      { pourcentage: 28, libelle: "Cible denture de l'arbre à cames encrassée" },
      { pourcentage: 22, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut se traduit souvent par un démarrage plus difficile et une perte de puissance légère plutôt qu'un arrêt moteur complet.",
    pieces: [
      { nom: "Capteur de position arbre à cames", boutique: "Oscaro · livraison 48h", prix: "36€" },
    ],
  },
  {
    code: "P0345",
    titre: "Circuit capteur de position arbre à cames — défaut (Banc 2)",
    categorie: "p03xx",
    categorieLabel: "Allumage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — synchronisation injection banc 2 perturbée",
    description:
      "Le capteur de position de l'arbre à cames du banc 2 (moteurs en V ou à plat, deux rangées de cylindres) envoie un signal absent ou incohérent, perturbant la synchronisation de l'injection sur ce banc.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de position arbre à cames (banc 2) défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur du capteur endommagé" },
      { pourcentage: 20, libelle: "Cible denture de l'arbre à cames encrassée" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Sur un moteur à deux bancs, bien identifier lequel est concerné avant de commander la pièce — les capteurs banc 1 et banc 2 ne sont généralement pas interchangeables.",
    pieces: [
      { nom: "Capteur de position arbre à cames", boutique: "Oscaro · livraison 48h", prix: "36€" },
    ],
  },
  {
    code: "P0440",
    titre: "Circuit EVAP — dysfonctionnement général",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — sans impact sur la conduite",
    description:
      "Le calculateur détecte une anomalie générale dans le circuit de récupération des vapeurs d'essence (EVAP), qui empêche ces vapeurs d'être correctement recyclées vers le moteur au lieu d'être rejetées dans l'atmosphère.",
    causes: [
      { pourcentage: 40, libelle: "Bouchon de réservoir mal serré ou joint usé" },
      { pourcentage: 28, libelle: "Durite du circuit EVAP fissurée ou débranchée" },
      { pourcentage: 20, libelle: "Électrovanne de purge ou de mise à l'air défaillante" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Vérifier en premier le bouchon de réservoir — un joint fatigué ou un bouchon mal revissé est la cause la plus fréquente et la plus simple à corriger, sans aucune pièce.",
    pieces: [
      { nom: "Bouchon de réservoir carburant", boutique: "AutoDoc · livraison 24h", prix: "15€" },
    ],
  },
  {
    code: "P0443",
    titre: "Circuit électrovanne de purge EVAP — défaut",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — sans impact sur la conduite",
    description:
      "L'électrovanne qui contrôle le passage des vapeurs d'essence stockées vers l'admission moteur (purge du canister) présente une anomalie électrique, l'empêchant de s'ouvrir ou de se fermer correctement.",
    causes: [
      { pourcentage: 40, libelle: "Électrovanne de purge défaillante" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de l'électrovanne endommagé" },
      { pourcentage: 20, libelle: "Électrovanne bloquée par des dépôts" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut n'affecte pas la conduite mais peut provoquer un léger ralenti irrégulier si l'électrovanne reste bloquée ouverte — à corriger avant le contrôle technique.",
    pieces: [
      { nom: "Électrovanne de purge EVAP", boutique: "Oscaro · livraison 48h", prix: "28€" },
    ],
  },
  {
    code: "P0446",
    titre: "Circuit de mise à l'air du système EVAP — défaut",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — sans impact sur la conduite",
    description:
      "Le circuit qui permet la mise à l'air libre du système de récupération des vapeurs d'essence (nécessaire pour effectuer les tests d'étanchéité) présente une anomalie, souvent une obstruction.",
    causes: [
      { pourcentage: 40, libelle: "Électrovanne ou clapet de mise à l'air bloqué (encrassement, insectes)" },
      { pourcentage: 28, libelle: "Câblage de l'électrovanne endommagé" },
      { pourcentage: 20, libelle: "Durite de mise à l'air obstruée" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un nid d'insecte dans l'orifice de mise à l'air est une cause étonnamment fréquente sur les véhicules restés longtemps à l'arrêt — un simple nettoyage suffit parfois.",
    pieces: [
      { nom: "Électrovanne mise à l'air EVAP", boutique: "Oscaro · livraison 48h", prix: "26€" },
    ],
  },
  {
    code: "P0449",
    titre: "Circuit électrovanne évent EVAP — défaut électrique",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — sans impact sur la conduite",
    description:
      "Le circuit électrique de l'électrovanne d'évent du système EVAP présente une anomalie (court-circuit ou coupure), empêchant son pilotage correct par le calculateur.",
    causes: [
      { pourcentage: 38, libelle: "Câblage de l'électrovanne endommagé (coupure ou court-circuit)" },
      { pourcentage: 28, libelle: "Connecteur de l'électrovanne corrodé" },
      { pourcentage: 22, libelle: "Électrovanne défaillante" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un contrôle de continuité du câblage au multimètre permet souvent de localiser précisément la coupure avant de remplacer l'électrovanne.",
    pieces: [
      { nom: "Électrovanne évent EVAP", boutique: "Oscaro · livraison 48h", prix: "26€" },
    ],
  },
  {
    code: "P0456",
    titre: "Fuite détectée dans le circuit EVAP (très petite fuite)",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — sans impact sur la conduite",
    description:
      "Le calculateur détecte une très petite fuite dans le circuit de récupération des vapeurs d'essence lors de son test d'étanchéité automatique, en dessous du seuil d'une fuite moyenne ou grande.",
    causes: [
      { pourcentage: 40, libelle: "Bouchon de réservoir légèrement desserré ou joint fatigué" },
      { pourcentage: 28, libelle: "Micro-fissure sur une durite du circuit EVAP" },
      { pourcentage: 20, libelle: "Canister (filtre à charbon actif) fissuré" },
      { pourcentage: 12, libelle: "Électrovanne du circuit légèrement fuyarde" },
    ],
    avisPro:
      "Ce défaut est purement lié aux émissions, sans impact sur la conduite — vérifier le bouchon de réservoir avant tout, c'est la cause la plus fréquente et gratuite.",
    pieces: [
      { nom: "Bouchon de réservoir carburant", boutique: "AutoDoc · livraison 24h", prix: "15€" },
    ],
  },
  {
    code: "P0461",
    titre: "Capteur de niveau de carburant — plage/performance",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — affichage jauge faussé uniquement",
    description:
      "Le capteur de niveau de carburant (jauge) envoie un signal qui évolue de façon incohérente par rapport à la consommation réelle, faussant l'affichage de la jauge au tableau de bord.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de niveau (flotteur) défaillant ou grippé" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur du capteur corrodé (dans le réservoir)" },
      { pourcentage: 12, libelle: "Calculateur défaillant côté traitement du signal" },
    ],
    avisPro:
      "Une jauge qui affiche des valeurs erratiques ou qui saute brutalement d'un niveau à l'autre est le symptôme typique — le remplacement du flotteur seul est parfois possible sans changer toute la pompe.",
    pieces: [
      { nom: "Capteur de niveau carburant (jauge)", boutique: "Mister-Auto · sur commande", prix: "55-90€" },
    ],
  },
  {
    code: "P0480",
    titre: "Circuit de commande du ventilateur de refroidissement — défaut",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "moderee",
    severiteLabel: "Gravité modérée — risque de surchauffe moteur",
    description:
      "Le circuit qui commande le ventilateur de refroidissement (relais ou étage de puissance) présente une anomalie électrique, ce qui peut empêcher le ventilateur de s'enclencher et exposer le moteur à une surchauffe.",
    causes: [
      { pourcentage: 35, libelle: "Relais du ventilateur défaillant" },
      { pourcentage: 28, libelle: "Câblage d'alimentation du ventilateur endommagé" },
      { pourcentage: 22, libelle: "Moteur du ventilateur défaillant" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un ventilateur qui ne s'enclenche plus expose à une surchauffe rapide, surtout en circulation urbaine ou embouteillage — vérifier le relais et le fusible sans attendre.",
    pieces: [
      { nom: "Relais ventilateur de refroidissement", boutique: "AutoDoc · livraison 24h", prix: "18€" },
      { nom: "Moto-ventilateur complet", boutique: "Mister-Auto · sur commande", prix: "90-160€" },
    ],
  },
  {
    code: "P0411",
    titre: "Système d'air additionnel — débit incorrect",
    categorie: "p04xx",
    categorieLabel: "Émissions",
    severite: "faible",
    severiteLabel: "Gravité faible — sans impact sur la conduite",
    description:
      "Le système d'injection d'air secondaire, qui envoie temporairement de l'air frais dans l'échappement au démarrage à froid pour accélérer la montée en température du catalyseur, ne fonctionne pas avec le débit attendu.",
    causes: [
      { pourcentage: 38, libelle: "Pompe à air secondaire défaillante" },
      { pourcentage: 28, libelle: "Clapet anti-retour du circuit d'air bloqué ou grillé" },
      { pourcentage: 22, libelle: "Durite du circuit d'air percée ou débranchée" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce système ne fonctionne que quelques dizaines de secondes au démarrage à froid — un défaut ici n'affecte pas la conduite mais peut faire échouer le contrôle technique sur les émissions.",
    pieces: [
      { nom: "Pompe à air secondaire", boutique: "Mister-Auto · sur commande", prix: "80-140€" },
    ],
  },
  {
    code: "U0073",
    titre: "Bus de communication du module de commande — coupure",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "elevee",
    severiteLabel: "Gravité élevée — coupure de communication généralisée possible",
    description:
      "Un ou plusieurs calculateurs cessent d'émettre sur le réseau de communication (bus CAN) suite à un taux d'erreurs trop élevé, provoquant une coupure de communication généralisée qui peut désactiver plusieurs fonctions du véhicule.",
    causes: [
      { pourcentage: 35, libelle: "Court-circuit sur le réseau CAN" },
      { pourcentage: 28, libelle: "Câblage du bus endommagé ou coupé" },
      { pourcentage: 22, libelle: "Calculateur défaillant perturbant l'ensemble du réseau" },
      { pourcentage: 15, libelle: "Connecteur du réseau mal enfiché" },
    ],
    avisPro:
      "Ce défaut touche généralement plusieurs calculateurs en même temps — identifier lequel a déclenché la coupure en premier permet de cibler la réparation plus efficacement.",
    pieces: [
      { nom: "Diagnostic réseau CAN complet (atelier)", boutique: "Recommandé avant pièce", prix: "60-100€" },
    ],
  },
  {
    code: "U0001",
    titre: "Bus de communication CAN haute vitesse — défaut",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "elevee",
    severiteLabel: "Gravité élevée — fonctions essentielles potentiellement touchées",
    description:
      "Le réseau de communication CAN haute vitesse, qui relie les calculateurs les plus critiques du véhicule (moteur, boîte, ABS/ESP), présente une anomalie de transmission des données.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus CAN haute vitesse endommagé ou court-circuité" },
      { pourcentage: 28, libelle: "Résistance de terminaison du bus défaillante" },
      { pourcentage: 22, libelle: "Connecteur d'un calculateur mal enfiché ou corrodé" },
      { pourcentage: 15, libelle: "Calculateur défaillant perturbant le bus" },
    ],
    avisPro:
      "Un défaut sur le bus haute vitesse peut toucher simultanément plusieurs fonctions essentielles — traiter ce défaut en priorité avant tout autre diagnostic.",
    pieces: [
      { nom: "Diagnostic réseau CAN haute vitesse (atelier)", boutique: "Recommandé avant pièce", prix: "60-100€" },
    ],
  },
  {
    code: "U0002",
    titre: "Bus de communication CAN haute vitesse — plage/performance",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "moderee",
    severiteLabel: "Gravité modérée — dysfonctionnements intermittents",
    description:
      "Le réseau CAN haute vitesse fonctionne mais présente des erreurs de transmission occasionnelles, sans coupure complète, ce qui peut se traduire par des dysfonctionnements intermittents.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du bus partiellement endommagé" },
      { pourcentage: 28, libelle: "Connecteur oxydé sur un calculateur du réseau" },
      { pourcentage: 22, libelle: "Interférence électromagnétique (équipement ajouté mal installé)" },
      { pourcentage: 15, libelle: "Calculateur défaillant" },
    ],
    avisPro:
      "Vérifier si un équipement électrique a été ajouté récemment (autoradio, alarme) — une installation non conforme est une cause fréquente d'interférence sur le réseau.",
    pieces: [
      { nom: "Diagnostic réseau CAN (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "U0109",
    titre: "Perte de communication avec le module de préchauffage (bougies)",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "moderee",
    severiteLabel: "Gravité modérée — démarrage à froid compliqué",
    description:
      "Le calculateur moteur ne reçoit plus les informations du module de commande du préchauffage (bougies de préchauffage diesel), ce qui peut compliquer le démarrage à froid.",
    causes: [
      { pourcentage: 35, libelle: "Module de préchauffage défaillant" },
      { pourcentage: 28, libelle: "Câblage entre calculateur moteur et module de préchauffage endommagé" },
      { pourcentage: 22, libelle: "Connecteur du module corrodé" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un démarrage à froid plus difficile qu'habituellement accompagne souvent ce défaut — à corriger avant l'arrivée de l'hiver.",
    pieces: [
      { nom: "Module de préchauffage bougies", boutique: "Mister-Auto · sur commande", prix: "60-100€" },
    ],
  },
  {
    code: "U0128",
    titre: "Perte de communication avec le calculateur de frein de stationnement",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "moderee",
    severiteLabel: "Gravité modérée — frein de stationnement électrique affecté",
    description:
      "Le réseau ne transmet plus les informations du calculateur de frein de stationnement électrique, ce qui peut empêcher son activation/désactivation automatique ou déclencher un message d'alerte.",
    causes: [
      { pourcentage: 35, libelle: "Câblage vers le calculateur de frein de stationnement endommagé" },
      { pourcentage: 28, libelle: "Calculateur de frein de stationnement défaillant" },
      { pourcentage: 22, libelle: "Connecteur oxydé" },
      { pourcentage: 15, libelle: "Défaut réseau CAN généralisé" },
    ],
    avisPro:
      "Si le frein de stationnement électrique reste bloqué, ne pas forcer mécaniquement — un diagnostic permet d'identifier la procédure de déblocage de secours propre au véhicule.",
    pieces: [
      { nom: "Diagnostic frein de stationnement électrique (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "U0300",
    titre: "Incompatibilité logicielle interne entre calculateurs",
    categorie: "u0xxx",
    categorieLabel: "Réseau",
    severite: "moderee",
    severiteLabel: "Gravité modérée — nécessite une reprogrammation",
    description:
      "Le calculateur détecte que la version logicielle d'un autre module du véhicule n'est pas compatible avec la sienne, généralement après le remplacement ou la reprogrammation d'un calculateur.",
    causes: [
      { pourcentage: 45, libelle: "Calculateur remplacé avec une version logicielle incompatible" },
      { pourcentage: 30, libelle: "Mise à jour logicielle incomplète ou interrompue" },
      { pourcentage: 15, libelle: "Calculateur d'occasion non recodé pour ce véhicule" },
      { pourcentage: 10, libelle: "Calculateur défaillant" },
    ],
    avisPro:
      "Ce défaut nécessite une reprogrammation à la valise constructeur plutôt qu'un remplacement de pièce — s'assurer que tout calculateur de remplacement est bien recodé pour le véhicule.",
    pieces: [
      { nom: "Reprogrammation calculateur (atelier agréé)", boutique: "Recommandé avant pièce", prix: "60-120€" },
    ],
  },
  {
    code: "P0299",
    titre: "Sous-pression de suralimentation (turbo)",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "elevee",
    severiteLabel: "Gravité élevée — perte de puissance nette",
    description:
      "Le calculateur détecte que la pression de suralimentation générée par le turbocompresseur est inférieure à la valeur attendue, ce qui se traduit par une nette perte de puissance, en particulier à l'accélération.",
    causes: [
      { pourcentage: 32, libelle: "Fuite dans le circuit d'admission (durites, colliers)" },
      { pourcentage: 28, libelle: "Électrovanne de commande de wastegate défaillante" },
      { pourcentage: 22, libelle: "Turbocompresseur usé (jeu excessif, ailettes endommagées)" },
      { pourcentage: 18, libelle: "Capteur de pression de suralimentation défaillant (fausse mesure)" },
    ],
    avisPro:
      "Vérifier en premier l'étanchéité des durites d'admission sous le capot — une fuite, même petite, est la cause la plus fréquente et la moins coûteuse à corriger avant de suspecter le turbo lui-même.",
    pieces: [
      { nom: "Kit durites/colliers admission turbo", boutique: "AutoDoc · livraison 24h", prix: "25-45€" },
      { nom: "Turbocompresseur (échange standard)", boutique: "Mister-Auto · sur commande", prix: "350-650€" },
    ],
  },
  {
    code: "P0234",
    titre: "Surpression de suralimentation (turbo)",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "elevee",
    severiteLabel: "Gravité élevée — mode dégradé immédiat",
    description:
      "Le calculateur détecte que la pression de suralimentation dépasse la valeur maximale autorisée, ce qui déclenche généralement une réduction de puissance immédiate pour protéger le moteur.",
    causes: [
      { pourcentage: 35, libelle: "Électrovanne de wastegate bloquée ou déréglée" },
      { pourcentage: 28, libelle: "Actionneur de wastegate mécaniquement grippé" },
      { pourcentage: 22, libelle: "Capteur de pression de suralimentation défaillant (fausse mesure)" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut déclenche une mise en mode dégradé immédiate par sécurité — ne pas forcer sur l'accélérateur, faire vérifier la wastegate avant de reprendre une conduite normale.",
    pieces: [
      { nom: "Électrovanne de wastegate", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "P0236",
    titre: "Capteur de pression de suralimentation — plage/performance",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "moderee",
    severiteLabel: "Gravité modérée — régulation du turbo perturbée",
    description:
      "Le capteur qui mesure la pression de suralimentation générée par le turbocompresseur envoie un signal cohérent mais qui ne correspond pas exactement à la pression réelle, perturbant la régulation du turbo.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de pression de suralimentation encrassé ou défaillant" },
      { pourcentage: 28, libelle: "Durite de prise de pression fissurée" },
      { pourcentage: 20, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Vérifier la durite reliant le capteur au circuit d'admission avant de remplacer le capteur — une fissure minime suffit à fausser la mesure.",
    pieces: [
      { nom: "Capteur de pression de suralimentation", boutique: "Oscaro · livraison 48h", prix: "38€" },
    ],
  },
  {
    code: "P0243",
    titre: "Électrovanne de wastegate — circuit B défaut",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "elevee",
    severiteLabel: "Gravité élevée — sous- ou surpression selon le blocage",
    description:
      "Le calculateur détecte une anomalie électrique sur le circuit de l'électrovanne qui commande l'ouverture de la wastegate du turbocompresseur, perturbant la régulation de la pression de suralimentation.",
    causes: [
      { pourcentage: 38, libelle: "Électrovanne de wastegate défaillante" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de l'électrovanne endommagé" },
      { pourcentage: 20, libelle: "Durite pneumatique de commande fissurée ou débranchée" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut peut provoquer aussi bien une perte de puissance qu'une surpression selon la position de blocage de l'électrovanne — à traiter rapidement dans les deux cas.",
    pieces: [
      { nom: "Électrovanne de wastegate", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "P2002",
    titre: "Rendement du filtre à particules (FAP) sous le seuil — Banc 1",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "moderee",
    severiteLabel: "Gravité modérée — surveiller avant colmatage complet",
    description:
      "Le calculateur détecte que le filtre à particules ne retient plus suffisamment de suie par rapport au seuil attendu, ce qui peut annoncer un FAP encrassé, fissuré ou en fin de vie.",
    causes: [
      { pourcentage: 35, libelle: "FAP encrassé par une utilisation prolongée en trajets courts (régénérations incomplètes)" },
      { pourcentage: 28, libelle: "Capteur de pression différentielle FAP défaillant (fausse mesure)" },
      { pourcentage: 22, libelle: "FAP fissuré ou percé, laissant passer les particules" },
      { pourcentage: 15, libelle: "Additif FAP (si équipé) épuisé" },
    ],
    avisPro:
      "Un usage principalement urbain empêche les régénérations complètes du FAP — un trajet prolongé sur route ou autoroute permet parfois de relancer une régénération avant d'envisager un remplacement coûteux.",
    pieces: [
      { nom: "Filtre à particules (FAP)", boutique: "Mister-Auto · sur commande", prix: "450-900€" },
    ],
  },
  {
    code: "P2453",
    titre: "Circuit capteur de pression différentielle FAP — plage/performance",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "faible",
    severiteLabel: "Gravité faible — suivi du FAP faussé",
    description:
      "Le capteur qui mesure la différence de pression avant/après le filtre à particules (pour estimer son colmatage) envoie un signal incohérent, perturbant le suivi de l'état du FAP par le calculateur.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de pression différentielle encrassé ou défaillant" },
      { pourcentage: 28, libelle: "Durites de prise de pression bouchées par la suie" },
      { pourcentage: 20, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Les durites de prise de pression se bouchent progressivement de suie — un nettoyage ou remplacement de ces durites résout souvent ce défaut sans changer le capteur.",
    pieces: [
      { nom: "Capteur de pression différentielle FAP", boutique: "Oscaro · livraison 48h", prix: "42€" },
    ],
  },
  {
    code: "P2459",
    titre: "Fréquence de régénération FAP trop élevée",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "moderee",
    severiteLabel: "Gravité modérée — FAP qui s'encrasse anormalement vite",
    description:
      "Le calculateur déclenche les régénérations du filtre à particules plus fréquemment que la normale, signe que le FAP s'encrasse anormalement vite.",
    causes: [
      { pourcentage: 35, libelle: "Trajets trop courts empêchant les régénérations de se terminer complètement" },
      { pourcentage: 28, libelle: "Injecteurs encrassés provoquant une combustion incomplète" },
      { pourcentage: 22, libelle: "FAP déjà partiellement colmaté" },
      { pourcentage: 15, libelle: "Capteur de pression différentielle imprécis" },
    ],
    avisPro:
      "Multiplier les trajets courts en ville aggrave ce défaut — un trajet régulier de 20-30 minutes à vitesse stabilisée aide le système à réguler seul les régénérations.",
    pieces: [
      { nom: "Nettoyage injecteurs diesel", boutique: "Recommandé avant pièce", prix: "60-100€" },
    ],
  },
  {
    code: "P244A",
    titre: "Pression différentielle FAP trop basse",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "moderee",
    severiteLabel: "Gravité modérée — évoque une fuite plutôt qu'un colmatage",
    description:
      "La différence de pression mesurée avant/après le filtre à particules est anormalement basse, ce qui peut traduire un FAP fissuré, percé, ou un capteur/durite déconnecté plutôt qu'un colmatage.",
    causes: [
      { pourcentage: 35, libelle: "FAP fissuré ou percé (moins de résistance au passage des gaz)" },
      { pourcentage: 28, libelle: "Durite de prise de pression débranchée ou fissurée" },
      { pourcentage: 22, libelle: "Capteur de pression différentielle défaillant" },
      { pourcentage: 15, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Une pression anormalement basse (contrairement à un colmatage classique) oriente davantage vers une fuite ou une durite débranchée que vers un FAP encrassé — à vérifier avant de commander une pièce.",
    pieces: [
      { nom: "Capteur de pression différentielle FAP", boutique: "Oscaro · livraison 48h", prix: "42€" },
    ],
  },
  {
    code: "P244B",
    titre: "Pression différentielle FAP trop élevée",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "elevee",
    severiteLabel: "Gravité élevée — colmatage important",
    description:
      "La différence de pression mesurée avant/après le filtre à particules est anormalement élevée, signe d'un colmatage important qui restreint fortement l'échappement des gaz.",
    causes: [
      { pourcentage: 40, libelle: "FAP fortement colmaté, proche de l'obstruction complète" },
      { pourcentage: 28, libelle: "Durite de prise de pression bouchée par la suie" },
      { pourcentage: 20, libelle: "Régénérations forcées répétées sans succès" },
      { pourcentage: 12, libelle: "Capteur de pression différentielle défaillant" },
    ],
    avisPro:
      "Un colmatage important peut nécessiter une régénération forcée en atelier, voire un nettoyage ou remplacement du FAP si la situation est trop avancée — ne pas attendre une perte de puissance sévère.",
    pieces: [
      { nom: "Régénération forcée FAP (atelier)", boutique: "Recommandé avant pièce", prix: "80-120€" },
      { nom: "Filtre à particules (FAP)", boutique: "Mister-Auto · sur commande", prix: "450-900€" },
    ],
  },
  {
    code: "P2463",
    titre: "Accumulation de suie FAP excessive",
    categorie: "p24xx",
    categorieLabel: "FAP & turbo",
    severite: "elevee",
    severiteLabel: "Gravité élevée — au-delà de ce qu'une régénération normale résorbe",
    description:
      "Le calculateur estime, à partir de son modèle de calcul, une accumulation de suie dans le filtre à particules dépassant le seuil critique, au-delà de ce qu'une régénération normale peut résorber.",
    causes: [
      { pourcentage: 38, libelle: "FAP jamais régénéré complètement sur une longue période (usage urbain exclusif)" },
      { pourcentage: 28, libelle: "Panne empêchant les régénérations (capteur, injecteur, EGR)" },
      { pourcentage: 22, libelle: "FAP en fin de vie" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant (estimation erronée)" },
    ],
    avisPro:
      "Ce défaut est souvent l'aboutissement de plusieurs petits défauts non traités (EGR, injecteurs, trajets courts) — un diagnostic complet du système diesel est préférable à un simple remplacement du FAP.",
    pieces: [
      { nom: "Diagnostic système diesel complet (atelier)", boutique: "Recommandé avant pièce", prix: "60-100€" },
    ],
  },
  {
    code: "C0051",
    titre: "Circuit capteur d'angle volant — défaut",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ESP en veille de sécurité",
    description:
      "Le capteur d'angle volant, qui informe le calculateur ABS/ESP de l'orientation donnée par le conducteur, envoie un signal absent ou incohérent — l'ESP se met en veille par sécurité.",
    causes: [
      { pourcentage: 38, libelle: "Capteur d'angle volant défaillant" },
      { pourcentage: 28, libelle: "Câblage sous le volant ou connecteur du contacteur tournant endommagé" },
      { pourcentage: 20, libelle: "Calibration du capteur non effectuée après une intervention direction" },
      { pourcentage: 14, libelle: "Calculateur ABS/ESP défaillant" },
    ],
    avisPro:
      "Après toute intervention sur la direction (crémaillère, colonne), une calibration du capteur d'angle volant à la valise est indispensable pour effacer ce défaut.",
    pieces: [
      { nom: "Diagnostic + calibration capteur angle volant (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C0060",
    titre: "Circuit électrovanne avant gauche n°1 — défaut",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — régulation ABS compromise sur cette roue",
    description:
      "La première électrovanne du circuit hydraulique avant gauche, qui régule la pression appliquée sur cette roue lors d'un freinage ABS, présente une anomalie électrique.",
    causes: [
      { pourcentage: 40, libelle: "Électrovanne défaillante ou bloquée" },
      { pourcentage: 28, libelle: "Câblage du bloc hydraulique endommagé" },
      { pourcentage: 20, libelle: "Connecteur du bloc ABS mal enfiché" },
      { pourcentage: 12, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "Un contrôle de la résistance de l'électrovanne au multimètre permet de confirmer la panne avant d'envisager le remplacement du bloc hydraulique complet.",
    pieces: [
      { nom: "Diagnostic électrovanne bloc ABS (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C0121",
    titre: "Circuit relais des électrovannes — défaut",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP potentiellement désactivés",
    description:
      "Le relais qui alimente l'ensemble des électrovannes du bloc hydraulique ABS présente une anomalie électrique, ce qui peut désactiver totalement la régulation ABS/ESP.",
    causes: [
      { pourcentage: 38, libelle: "Relais des électrovannes défaillant" },
      { pourcentage: 28, libelle: "Fusible associé grillé" },
      { pourcentage: 22, libelle: "Câblage d'alimentation du relais endommagé" },
      { pourcentage: 12, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "Le relais est une pièce peu coûteuse et facilement accessible — à tester et remplacer en premier avant tout autre diagnostic plus poussé.",
    pieces: [
      { nom: "Relais électrovannes ABS", boutique: "AutoDoc · livraison 24h", prix: "16€" },
    ],
  },
  {
    code: "C0128",
    titre: "Niveau de liquide de frein bas — circuit",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — vérifier fuite et usure avant de rouler",
    description:
      "Le capteur de niveau du bocal de liquide de frein détecte un niveau insuffisant, ce qui peut traduire une fuite dans le circuit de freinage ou une usure importante des plaquettes.",
    causes: [
      { pourcentage: 40, libelle: "Plaquettes de frein usées (le niveau baisse naturellement en compensation)" },
      { pourcentage: 28, libelle: "Fuite sur le circuit de freinage (durite, étrier, maître-cylindre)" },
      { pourcentage: 20, libelle: "Capteur de niveau défaillant (fausse alerte)" },
      { pourcentage: 12, libelle: "Bocal fissuré" },
    ],
    avisPro:
      "Ne jamais ignorer ce témoin — vérifier immédiatement l'état des plaquettes et l'absence de fuite visible sous le véhicule avant de reprendre la route.",
    pieces: [
      { nom: "Liquide de frein DOT4", boutique: "AutoDoc · livraison 24h", prix: "9€" },
      { nom: "Plaquettes de frein (jeu)", boutique: "Oscaro · livraison 48h", prix: "35€" },
    ],
  },
  {
    code: "C0141",
    titre: "Circuit moteur de pompe ABS avant gauche — défaut",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — pression ABS non générée",
    description:
      "Le moteur qui entraîne la pompe hydraulique du circuit ABS présente une anomalie électrique, l'empêchant de générer la pression nécessaire à la régulation antiblocage.",
    causes: [
      { pourcentage: 38, libelle: "Moteur de pompe ABS défaillant" },
      { pourcentage: 28, libelle: "Câblage d'alimentation du moteur endommagé" },
      { pourcentage: 22, libelle: "Connecteur du bloc ABS corrodé" },
      { pourcentage: 12, libelle: "Calculateur ABS défaillant" },
    ],
    avisPro:
      "Un bruit de pompe anormal (grincement, absence totale de bruit à l'activation) accompagne souvent ce défaut avant qu'il ne soit détecté par le calculateur.",
    pieces: [
      { nom: "Diagnostic moteur pompe ABS (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "C0186",
    titre: "Circuit capteur de lacet (gyromètre) — défaut",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — fonction ESP compromise",
    description:
      "Le capteur de lacet, qui mesure la rotation du véhicule autour de son axe vertical pour détecter un survirage ou un sous-virage, envoie un signal absent ou incohérent — fonction essentielle de l'ESP.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de lacet défaillant" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 22, libelle: "Connecteur du capteur corrodé" },
      { pourcentage: 12, libelle: "Calculateur ESP défaillant" },
    ],
    avisPro:
      "Ce capteur est souvent logé sous la console centrale — un choc ou un liquide renversé à cet endroit est une cause fréquente et parfois négligée.",
    pieces: [
      { nom: "Capteur de lacet (gyromètre)", boutique: "Oscaro · livraison 48h", prix: "68€" },
    ],
  },
  {
    code: "C0221",
    titre: "Signal capteur de vitesse roue avant droite — hors plage",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS/ESP désactivés par sécurité",
    description:
      "Le signal du capteur de vitesse de la roue avant droite est présent mais sort de la plage de valeurs cohérente avec les trois autres roues, désactivant l'ABS/ESP par sécurité.",
    causes: [
      { pourcentage: 38, libelle: "Capteur de vitesse partiellement défaillant" },
      { pourcentage: 28, libelle: "Cible denture endommagée ou encrassée" },
      { pourcentage: 22, libelle: "Pneu de dimension différente des trois autres" },
      { pourcentage: 12, libelle: "Câblage partiellement endommagé" },
    ],
    avisPro:
      "Vérifier que les 4 pneus sont bien de la même dimension et correctement gonflés — un écart, même après un simple remplacement de pneu, peut déclencher ce défaut.",
    pieces: [
      { nom: "Capteur ABS avant droit", boutique: "AutoDoc · livraison 24h", prix: "34€" },
    ],
  },
  {
    code: "C0245",
    titre: "Circuit moteur de la pompe — défaut",
    categorie: "c0xxx",
    categorieLabel: "Châssis",
    severite: "elevee",
    severiteLabel: "Gravité élevée — ABS et ESP désactivés ensemble",
    description:
      "Le circuit électrique du moteur de pompe du bloc hydraulique ABS/ESP présente une anomalie, empêchant la génération de pression lors d'une intervention active du système.",
    causes: [
      { pourcentage: 38, libelle: "Moteur de pompe défaillant" },
      { pourcentage: 28, libelle: "Câblage du moteur endommagé" },
      { pourcentage: 20, libelle: "Fusible ou relais associé grillé" },
      { pourcentage: 14, libelle: "Calculateur ABS/ESP défaillant" },
    ],
    avisPro:
      "Ce défaut désactive généralement l'ABS et l'ESP ensemble — à traiter rapidement, la voiture reste freinable mais sans assistance antiblocage.",
    pieces: [
      { nom: "Diagnostic moteur pompe ABS/ESP (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "B0020",
    titre: "Circuit airbag conducteur — défaut de déploiement",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag non garanti",
    description:
      "Le circuit qui commande le déploiement de l'airbag conducteur présente une anomalie de résistance ou de continuité, ce qui empêche le calculateur de garantir son déclenchement en cas de choc.",
    causes: [
      { pourcentage: 42, libelle: "Module gonfleur airbag conducteur défaillant" },
      { pourcentage: 26, libelle: "Câblage du contacteur tournant (spirale sous volant) endommagé" },
      { pourcentage: 20, libelle: "Connecteur sous le volant mal enfiché" },
      { pourcentage: 12, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Ce défaut touche directement la sécurité — ne jamais rouler avec ce témoin allumé, faire diagnostiquer dès que possible.",
    pieces: [
      { nom: "Diagnostic circuit airbag conducteur (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B0022",
    titre: "Circuit airbag passager — défaut de déploiement",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag non garanti",
    description:
      "Le circuit qui commande le déploiement de l'airbag passager présente une anomalie de résistance ou de continuité, ce qui empêche le calculateur de garantir son déclenchement en cas de choc.",
    causes: [
      { pourcentage: 42, libelle: "Module gonfleur airbag passager défaillant" },
      { pourcentage: 28, libelle: "Câblage sous le tableau de bord endommagé" },
      { pourcentage: 18, libelle: "Connecteur du module mal enfiché" },
      { pourcentage: 12, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Ce défaut touche directement la sécurité du passager avant — à faire diagnostiquer sans attendre.",
    pieces: [
      { nom: "Diagnostic circuit airbag passager (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B0030",
    titre: "Circuit airbag latéral conducteur — défaut",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag non garanti",
    description:
      "Le circuit qui commande le déploiement de l'airbag latéral situé côté conducteur (siège ou portière) présente une anomalie, empêchant son déclenchement garanti lors d'un choc latéral.",
    causes: [
      { pourcentage: 40, libelle: "Allumeur (gonfleur) airbag latéral défaillant" },
      { pourcentage: 28, libelle: "Câblage dans l'assise du siège endommagé" },
      { pourcentage: 20, libelle: "Connecteur sous le siège mal enfiché" },
      { pourcentage: 12, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Le câblage de l'airbag latéral passe par l'assise du siège et subit l'usure des réglages répétés — un point à vérifier avant de suspecter le module lui-même.",
    pieces: [
      { nom: "Diagnostic airbag latéral conducteur (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B0040",
    titre: "Circuit airbag latéral passager — défaut",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbag non garanti",
    description:
      "Le circuit qui commande le déploiement de l'airbag latéral situé côté passager (siège ou portière) présente une anomalie, empêchant son déclenchement garanti lors d'un choc latéral.",
    causes: [
      { pourcentage: 40, libelle: "Allumeur (gonfleur) airbag latéral défaillant" },
      { pourcentage: 28, libelle: "Câblage dans l'assise du siège endommagé" },
      { pourcentage: 20, libelle: "Connecteur sous le siège mal enfiché" },
      { pourcentage: 12, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Le câblage de l'airbag latéral passe par l'assise du siège et subit l'usure des réglages répétés — un point à vérifier avant de suspecter le module lui-même.",
    pieces: [
      { nom: "Diagnostic airbag latéral passager (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "B0053",
    titre: "Circuit capteur d'impact avant droit — défaut",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbags frontaux non garanti",
    description:
      "Le capteur de choc frontal droit, qui détecte la décélération brutale lors d'un impact pour déclencher les airbags frontaux, envoie un signal incohérent ou absent au calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de choc défaillant" },
      { pourcentage: 28, libelle: "Câblage endommagé (zone souvent exposée en cas de choc antérieur)" },
      { pourcentage: 20, libelle: "Connecteur du capteur mal enfiché ou corrodé" },
      { pourcentage: 12, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Après tout choc frontal même léger, ce capteur doit être vérifié — un choc antérieur mal réparé est une cause fréquente de ce défaut.",
    pieces: [
      { nom: "Capteur de choc frontal", boutique: "Oscaro · livraison 48h", prix: "48€" },
    ],
  },
  {
    code: "B0060",
    titre: "Circuit capteur d'impact latéral gauche — défaut",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — déclenchement airbags latéraux non garanti",
    description:
      "Le capteur d'impact latéral gauche, qui détecte un choc sur le côté du véhicule pour déclencher les airbags latéraux et rideaux, envoie un signal incohérent ou absent au calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Capteur d'impact latéral défaillant" },
      { pourcentage: 28, libelle: "Câblage dans la portière ou le pied de caisse endommagé" },
      { pourcentage: 20, libelle: "Connecteur corrodé (zone humide, bas de caisse)" },
      { pourcentage: 12, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Le câblage de ce capteur passe souvent par la portière ou le seuil — vérifier l'état du faisceau à ces points de passage avant de remplacer le capteur.",
    pieces: [
      { nom: "Capteur d'impact latéral", boutique: "AutoDoc · livraison 24h", prix: "42€" },
    ],
  },
  {
    code: "B0081",
    titre: "Circuit contacteur de ceinture conducteur — défaut",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "moderee",
    severiteLabel: "Gravité modérée — alerte ceinture faussée",
    description:
      "Le contacteur qui détecte si la ceinture de sécurité conducteur est bouclée envoie un signal incohérent, perturbant l'alerte sonore/visuelle de rappel et potentiellement la stratégie de déploiement des airbags.",
    causes: [
      { pourcentage: 42, libelle: "Contacteur de ceinture défaillant" },
      { pourcentage: 28, libelle: "Câblage au niveau de la boucle de ceinture endommagé" },
      { pourcentage: 18, libelle: "Connecteur du contacteur corrodé" },
      { pourcentage: 12, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Ce défaut se traduit souvent par une alerte de ceinture qui reste allumée ou clignote alors que la ceinture est bien bouclée — un remplacement du contacteur résout généralement le problème.",
    pieces: [
      { nom: "Contacteur de ceinture de sécurité", boutique: "Oscaro · livraison 48h", prix: "32€" },
    ],
  },
  {
    code: "B0100",
    titre: "Défaut de communication du calculateur airbag",
    categorie: "b0xxx",
    categorieLabel: "Sécurité",
    severite: "elevee",
    severiteLabel: "Gravité élevée — voyant airbag potentiellement permanent",
    description:
      "Le calculateur airbag ne parvient plus à communiquer correctement sur le réseau du véhicule, ce qui peut le priver d'informations essentielles et déclencher un voyant airbag permanent.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du réseau vers le calculateur airbag endommagé" },
      { pourcentage: 28, libelle: "Connecteur du calculateur airbag oxydé" },
      { pourcentage: 22, libelle: "Défaut réseau généralisé (autre calculateur en cause)" },
      { pourcentage: 15, libelle: "Calculateur airbag défaillant" },
    ],
    avisPro:
      "Vérifier si d'autres calculateurs affichent aussi des défauts réseau au même moment — ce code est souvent la conséquence d'un problème réseau plus large.",
    pieces: [
      { nom: "Diagnostic réseau calculateur airbag (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P0741",
    titre: "Convertisseur de couple — pontage bloqué en position ouverte",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — surconsommation, boîte fonctionnelle",
    description:
      "Le système de pontage du convertisseur de couple, censé rigidifier la liaison moteur-boîte à vitesse stabilisée pour économiser du carburant, reste bloqué en position désengagée.",
    causes: [
      { pourcentage: 35, libelle: "Électrovanne de pontage du convertisseur défaillante" },
      { pourcentage: 28, libelle: "Pression hydraulique insuffisante (niveau d'huile bas)" },
      { pourcentage: 22, libelle: "Huile de boîte dégradée" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut se traduit surtout par une surconsommation et un régime moteur légèrement plus élevé sur autoroute — la boîte reste fonctionnelle.",
    pieces: [
      { nom: "Vidange boîte automatique + filtre", boutique: "Recommandé avant pièce", prix: "120-220€" },
    ],
  },
  {
    code: "P0743",
    titre: "Circuit électrique du pontage du convertisseur — défaut",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "elevee",
    severiteLabel: "Gravité élevée — commande du pontage compromise",
    description:
      "Le calculateur détecte une anomalie électrique (court-circuit ou coupure) sur le circuit de commande de l'électrovanne de pontage du convertisseur de couple.",
    causes: [
      { pourcentage: 38, libelle: "Électrovanne de pontage défaillante" },
      { pourcentage: 28, libelle: "Câblage interne du faisceau de boîte endommagé" },
      { pourcentage: 20, libelle: "Connecteur de boîte corrodé" },
      { pourcentage: 14, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Un contrôle de la résistance de l'électrovanne au multimètre permet de confirmer la panne avant d'envisager une intervention plus lourde sur la boîte.",
    pieces: [
      { nom: "Diagnostic électrovanne pontage convertisseur (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P0748",
    titre: "Électrovanne de régulation de pression A — défaut électrique",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "elevee",
    severiteLabel: "Gravité élevée — engagement des rapports perturbé",
    description:
      "Le calculateur détecte une anomalie électrique sur l'électrovanne qui régule la pression hydraulique principale de la boîte, essentielle à l'engagement correct des rapports.",
    causes: [
      { pourcentage: 38, libelle: "Électrovanne de régulation de pression défaillante" },
      { pourcentage: 28, libelle: "Câblage interne du faisceau de boîte endommagé" },
      { pourcentage: 20, libelle: "Connecteur de boîte corrodé" },
      { pourcentage: 14, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut peut provoquer des à-coups marqués lors des changements de rapport — à traiter rapidement pour éviter une usure prématurée des embrayages internes.",
    pieces: [
      { nom: "Diagnostic électrovanne régulation pression (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P0753",
    titre: "Électrovanne de changement de rapport A — défaut électrique",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de mode dégradé bloqué sur un rapport",
    description:
      "Le calculateur détecte une anomalie électrique sur l'électrovanne qui commande le passage d'un rapport spécifique, ce qui peut bloquer la boîte sur un seul rapport par sécurité (mode dégradé).",
    causes: [
      { pourcentage: 38, libelle: "Électrovanne de changement de rapport défaillante" },
      { pourcentage: 28, libelle: "Câblage interne du faisceau de boîte endommagé" },
      { pourcentage: 20, libelle: "Connecteur de boîte corrodé" },
      { pourcentage: 14, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Un mode dégradé bloquant la boîte sur un seul rapport est fréquent avec ce défaut — rouler prudemment jusqu'au diagnostic, la boîte reste utilisable mais limitée.",
    pieces: [
      { nom: "Diagnostic électrovanne changement rapport (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P0776",
    titre: "Électrovanne de régulation de pression B — plage/performance",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — souvent résolu par une vidange",
    description:
      "L'électrovanne de régulation de pression B envoie une réponse hydraulique qui ne correspond pas exactement à la commande du calculateur, sans être en défaut électrique franc.",
    causes: [
      { pourcentage: 35, libelle: "Électrovanne partiellement encrassée" },
      { pourcentage: 28, libelle: "Huile de boîte dégradée ou de mauvaise spécification" },
      { pourcentage: 22, libelle: "Filtre à huile de boîte colmaté" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Une vidange complète avec un filtre neuf résout ce défaut dans la majorité des cas, sans remplacement d'électrovanne.",
    pieces: [
      { nom: "Vidange boîte automatique + filtre", boutique: "Recommandé avant pièce", prix: "120-220€" },
    ],
  },
  {
    code: "P0842",
    titre: "Circuit contacteur de pression de boîte A — signal faible",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "moderee",
    severiteLabel: "Gravité modérée — stratégie de contrôle perturbée",
    description:
      "Le contacteur qui surveille la pression hydraulique dans un circuit spécifique de la boîte envoie un signal anormalement faible, perturbant la stratégie de contrôle du calculateur.",
    causes: [
      { pourcentage: 35, libelle: "Contacteur de pression défaillant" },
      { pourcentage: 28, libelle: "Câblage du contacteur endommagé" },
      { pourcentage: 22, libelle: "Pression hydraulique réellement insuffisante (niveau d'huile bas)" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier le niveau d'huile de boîte avant de remplacer le contacteur — une pression réellement basse donne le même symptôme qu'un contacteur défaillant.",
    pieces: [
      { nom: "Diagnostic contacteur pression boîte (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P0894",
    titre: "Patinage d'un composant de la boîte de vitesses",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "elevee",
    severiteLabel: "Gravité élevée — usure interne à traiter rapidement",
    description:
      "Le calculateur détecte qu'un embrayage ou un frein interne de la boîte patine au lieu de transmettre le couple correctement, ce qui provoque une hausse anormale du régime moteur sans accélération correspondante.",
    causes: [
      { pourcentage: 38, libelle: "Embrayage ou frein interne usé" },
      { pourcentage: 28, libelle: "Niveau d'huile de boîte insuffisant" },
      { pourcentage: 22, libelle: "Pression hydraulique insuffisante (pompe à huile usée)" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut est un signe d'usure interne à prendre au sérieux — poursuivre la conduite dans cet état accélère l'usure et peut mener à une panne complète de la boîte.",
    pieces: [
      { nom: "Diagnostic complet boîte automatique (atelier)", boutique: "Recommandé avant pièce", prix: "80-120€" },
    ],
  },
  {
    code: "P0218",
    titre: "Température d'huile de boîte trop élevée (surchauffe)",
    categorie: "p07xx",
    categorieLabel: "Transmission",
    severite: "elevee",
    severiteLabel: "Gravité élevée — arrêt et refroidissement recommandés",
    description:
      "Le calculateur détecte que la température de l'huile de la boîte de vitesses dépasse le seuil de sécurité, ce qui peut endommager les composants internes si la situation persiste.",
    causes: [
      { pourcentage: 35, libelle: "Remorquage ou conduite en charge prolongée (montagne, caravane)" },
      { pourcentage: 28, libelle: "Niveau d'huile de boîte insuffisant" },
      { pourcentage: 22, libelle: "Échangeur/radiateur de boîte partiellement obstrué" },
      { pourcentage: 15, libelle: "Ventilateur de refroidissement défaillant" },
    ],
    avisPro:
      "En cas de surchauffe, s'arrêter et laisser refroidir avant de continuer — poursuivre la conduite dans cet état peut endommager irrémédiablement les embrayages internes de la boîte.",
    pieces: [
      { nom: "Vidange boîte automatique + filtre", boutique: "Recommandé avant pièce", prix: "120-220€" },
    ],
  },
  {
    code: "P0380",
    titre: "Circuit de préchauffage/bougies — circuit A défaut",
    categorie: "prechauffage",
    categorieLabel: "Préchauffage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — démarrage à froid compliqué",
    description:
      "Le circuit qui alimente le premier groupe de bougies de préchauffage présente une anomalie électrique, ce qui complique fortement le démarrage à froid sur un moteur diesel.",
    causes: [
      { pourcentage: 38, libelle: "Relais de préchauffage défaillant" },
      { pourcentage: 28, libelle: "Fusible dédié grillé" },
      { pourcentage: 20, libelle: "Câblage d'alimentation des bougies endommagé" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Le relais de préchauffage est une pièce peu coûteuse et facile à tester — à vérifier en premier avant de suspecter les bougies elles-mêmes.",
    pieces: [
      { nom: "Relais de préchauffage", boutique: "AutoDoc · livraison 24h", prix: "22€" },
    ],
  },
  {
    code: "P0381",
    titre: "Témoin de préchauffage — circuit défaut",
    categorie: "prechauffage",
    categorieLabel: "Préchauffage",
    severite: "faible",
    severiteLabel: "Gravité faible — défaut d'affichage",
    description:
      "Le circuit du témoin au tableau de bord qui indique au conducteur que le préchauffage est en cours (ou terminé) présente une anomalie électrique, sans forcément affecter le préchauffage réel des bougies.",
    causes: [
      { pourcentage: 40, libelle: "Ampoule ou LED du témoin grillée" },
      { pourcentage: 28, libelle: "Câblage du témoin endommagé" },
      { pourcentage: 20, libelle: "Connecteur du combiné d'instruments corrodé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Ce défaut concerne l'affichage, pas forcément le préchauffage lui-même — mais un démarrage plus difficile qu'avant reste un signe à surveiller en parallèle.",
    pieces: [
      { nom: "Ampoule/LED témoin préchauffage", boutique: "AutoDoc · livraison 24h", prix: "8€" },
    ],
  },
  {
    code: "P0382",
    titre: "Circuit de préchauffage/bougies — circuit B défaut",
    categorie: "prechauffage",
    categorieLabel: "Préchauffage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — démarrage à froid compliqué",
    description:
      "Le circuit qui alimente le second groupe de bougies de préchauffage présente une anomalie électrique, ce qui complique fortement le démarrage à froid sur un moteur diesel.",
    causes: [
      { pourcentage: 38, libelle: "Relais de préchauffage (circuit B) défaillant" },
      { pourcentage: 28, libelle: "Fusible dédié grillé" },
      { pourcentage: 20, libelle: "Câblage d'alimentation des bougies endommagé" },
      { pourcentage: 14, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Sur les moteurs à deux circuits de préchauffage séparés, bien identifier lequel est en défaut avant de commander une pièce.",
    pieces: [
      { nom: "Relais de préchauffage", boutique: "AutoDoc · livraison 24h", prix: "22€" },
    ],
  },
  {
    code: "P0670",
    titre: "Module de commande du préchauffage — défaut",
    categorie: "prechauffage",
    categorieLabel: "Préchauffage",
    severite: "elevee",
    severiteLabel: "Gravité élevée — cycle de préchauffage non géré",
    description:
      "Le boîtier électronique qui pilote l'ensemble des bougies de préchauffage (module de préchauffage) présente une anomalie interne, l'empêchant de gérer correctement le cycle de préchauffage.",
    causes: [
      { pourcentage: 40, libelle: "Module de préchauffage défaillant" },
      { pourcentage: 28, libelle: "Câblage d'alimentation du module endommagé" },
      { pourcentage: 20, libelle: "Connecteur du module corrodé" },
      { pourcentage: 12, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Un démarrage à froid nettement plus difficile qu'avant, surtout par temps froid, est le symptôme typique — à corriger avant l'hiver.",
    pieces: [
      { nom: "Module de commande préchauffage", boutique: "Mister-Auto · sur commande", prix: "90-150€" },
    ],
  },
  {
    code: "P0671",
    titre: "Circuit bougie de préchauffage cylindre 1 — défaut",
    categorie: "prechauffage",
    categorieLabel: "Préchauffage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — démarrage à froid et raté possible sur ce cylindre",
    description:
      "La bougie de préchauffage du cylindre 1 présente une anomalie électrique (résistance hors plage ou circuit coupé), ce qui peut compliquer le démarrage à froid et provoquer un raté sur ce cylindre au démarrage.",
    causes: [
      { pourcentage: 42, libelle: "Bougie de préchauffage du cylindre 1 défaillante" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de la bougie endommagé" },
      { pourcentage: 20, libelle: "Module de préchauffage défaillant" },
      { pourcentage: 10, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Remplacer les bougies de préchauffage par jeu complet plutôt qu'à l'unité — si une a lâché, les autres sont généralement proches de la fin de leur durée de vie.",
    pieces: [
      { nom: "Bougies de préchauffage (jeu)", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "P0672",
    titre: "Circuit bougie de préchauffage cylindre 2 — défaut",
    categorie: "prechauffage",
    categorieLabel: "Préchauffage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — démarrage à froid et raté possible sur ce cylindre",
    description:
      "La bougie de préchauffage du cylindre 2 présente une anomalie électrique (résistance hors plage ou circuit coupé), ce qui peut compliquer le démarrage à froid et provoquer un raté sur ce cylindre au démarrage.",
    causes: [
      { pourcentage: 42, libelle: "Bougie de préchauffage du cylindre 2 défaillante" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de la bougie endommagé" },
      { pourcentage: 20, libelle: "Module de préchauffage défaillant" },
      { pourcentage: 10, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Remplacer les bougies de préchauffage par jeu complet plutôt qu'à l'unité — si une a lâché, les autres sont généralement proches de la fin de leur durée de vie.",
    pieces: [
      { nom: "Bougies de préchauffage (jeu)", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "P0673",
    titre: "Circuit bougie de préchauffage cylindre 3 — défaut",
    categorie: "prechauffage",
    categorieLabel: "Préchauffage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — démarrage à froid et raté possible sur ce cylindre",
    description:
      "La bougie de préchauffage du cylindre 3 présente une anomalie électrique (résistance hors plage ou circuit coupé), ce qui peut compliquer le démarrage à froid et provoquer un raté sur ce cylindre au démarrage.",
    causes: [
      { pourcentage: 42, libelle: "Bougie de préchauffage du cylindre 3 défaillante" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de la bougie endommagé" },
      { pourcentage: 20, libelle: "Module de préchauffage défaillant" },
      { pourcentage: 10, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Remplacer les bougies de préchauffage par jeu complet plutôt qu'à l'unité — si une a lâché, les autres sont généralement proches de la fin de leur durée de vie.",
    pieces: [
      { nom: "Bougies de préchauffage (jeu)", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "P0674",
    titre: "Circuit bougie de préchauffage cylindre 4 — défaut",
    categorie: "prechauffage",
    categorieLabel: "Préchauffage",
    severite: "moderee",
    severiteLabel: "Gravité modérée — démarrage à froid et raté possible sur ce cylindre",
    description:
      "La bougie de préchauffage du cylindre 4 présente une anomalie électrique (résistance hors plage ou circuit coupé), ce qui peut compliquer le démarrage à froid et provoquer un raté sur ce cylindre au démarrage.",
    causes: [
      { pourcentage: 42, libelle: "Bougie de préchauffage du cylindre 4 défaillante" },
      { pourcentage: 28, libelle: "Câblage ou connecteur de la bougie endommagé" },
      { pourcentage: 20, libelle: "Module de préchauffage défaillant" },
      { pourcentage: 10, libelle: "Calculateur moteur défaillant" },
    ],
    avisPro:
      "Remplacer les bougies de préchauffage par jeu complet plutôt qu'à l'unité — si une a lâché, les autres sont généralement proches de la fin de leur durée de vie.",
    pieces: [
      { nom: "Bougies de préchauffage (jeu)", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "B1304",
    titre: "Défaut capteur de température évaporateur — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — efficacité du froid réduite",
    description:
      "Le capteur qui mesure la température de l'évaporateur, utilisé pour éviter le givrage du circuit de climatisation, envoie un signal incohérent ou absent au calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de température évaporateur défaillant" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur du capteur corrodé" },
      { pourcentage: 12, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Sans cette information, le système peut couper le compresseur par sécurité pour éviter le gel de l'évaporateur, réduisant l'efficacité du froid.",
    pieces: [
      { nom: "Capteur température évaporateur", boutique: "Oscaro · livraison 48h", prix: "32€" },
    ],
  },
  {
    code: "B130C",
    titre: "Défaut capteur d'ensoleillement gauche — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "faible",
    severiteLabel: "Gravité faible — confort uniquement",
    description:
      "Le capteur d'ensoleillement côté gauche, qui permet à la climatisation automatique d'adapter la ventilation selon l'intensité du soleil reçu par ce côté de l'habitacle, envoie un signal incohérent.",
    causes: [
      { pourcentage: 40, libelle: "Capteur d'ensoleillement défaillant" },
      { pourcentage: 28, libelle: "Câblage du capteur (souvent logé sur la planche de bord) endommagé" },
      { pourcentage: 20, libelle: "Connecteur du capteur corrodé" },
      { pourcentage: 12, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Ce défaut n'affecte que le confort — la climatisation continue de fonctionner mais sans ajuster automatiquement la ventilation selon le soleil de ce côté.",
    pieces: [
      { nom: "Capteur d'ensoleillement", boutique: "Oscaro · livraison 48h", prix: "38€" },
    ],
  },
  {
    code: "B130D",
    titre: "Défaut moteur du volet de recyclage d'air — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — recyclage d'air non maîtrisé",
    description:
      "Le petit moteur électrique qui actionne le volet de recyclage (air extérieur / air recyclé) ne répond plus correctement aux commandes du calculateur de climatisation.",
    causes: [
      { pourcentage: 40, libelle: "Moteur du volet défaillant" },
      { pourcentage: 28, libelle: "Volet mécaniquement grippé (poussière, corps étranger)" },
      { pourcentage: 20, libelle: "Câblage du moteur endommagé" },
      { pourcentage: 12, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Un bruit de cliquetis répété au niveau du tableau de bord accompagne souvent ce défaut avant qu'il ne soit détecté — le moteur essaie en vain d'actionner un volet grippé.",
    pieces: [
      { nom: "Moteur volet recyclage d'air", boutique: "Mister-Auto · sur commande", prix: "55-90€" },
    ],
  },
  {
    code: "B130E",
    titre: "Défaut moteur du volet de mixage gauche — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — température côté gauche mal régulée",
    description:
      "Le moteur qui actionne le volet de mixage côté gauche, réglant la proportion d'air chaud/froid envoyée dans l'habitacle de ce côté, ne répond plus correctement.",
    causes: [
      { pourcentage: 40, libelle: "Moteur du volet de mixage défaillant" },
      { pourcentage: 28, libelle: "Volet mécaniquement grippé" },
      { pourcentage: 20, libelle: "Câblage du moteur endommagé" },
      { pourcentage: 12, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Une température qui ne correspond plus au réglage demandé côté gauche de l'habitacle est le symptôme typique de ce défaut.",
    pieces: [
      { nom: "Moteur volet de mixage", boutique: "Mister-Auto · sur commande", prix: "55-90€" },
    ],
  },
  {
    code: "B1315",
    titre: "Défaut moteur du volet de distribution gauche — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — air bloqué sur une seule sortie",
    description:
      "Le moteur qui actionne le volet de distribution côté gauche (aération visage, pieds, pare-brise) ne répond plus correctement aux commandes du calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Moteur du volet de distribution défaillant" },
      { pourcentage: 28, libelle: "Volet mécaniquement grippé" },
      { pourcentage: 20, libelle: "Câblage du moteur endommagé" },
      { pourcentage: 12, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "L'air qui sort toujours par la même sortie quel que soit le réglage choisi est le symptôme typique — le volet reste bloqué sur une position.",
    pieces: [
      { nom: "Moteur volet de distribution", boutique: "Mister-Auto · sur commande", prix: "55-90€" },
    ],
  },
  {
    code: "B133F",
    titre: "Défaut de la commande de climatisation",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — réglages du conducteur non transmis",
    description:
      "L'unité de commande de la climatisation (façade de réglage au tableau de bord) présente une anomalie, l'empêchant de transmettre correctement les réglages choisis par le conducteur au calculateur.",
    causes: [
      { pourcentage: 40, libelle: "Commande de climatisation (façade) défaillante" },
      { pourcentage: 28, libelle: "Câblage de la commande endommagé" },
      { pourcentage: 20, libelle: "Connecteur de la commande corrodé" },
      { pourcentage: 12, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Des boutons qui ne répondent plus ou un écran de climatisation figé accompagnent souvent ce défaut — à distinguer d'un simple bug logiciel qui se résout par un redémarrage du contact.",
    pieces: [
      { nom: "Diagnostic commande climatisation (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "B131B",
    titre: "Défaut signal de commande du pulseur d'air — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — ventilation bloquée ou coupée",
    description:
      "Le signal qui commande la vitesse du pulseur d'air (ventilateur intérieur) est incohérent ou absent, ce qui peut bloquer la ventilation à une vitesse fixe ou la couper totalement.",
    causes: [
      { pourcentage: 38, libelle: "Résistance ou module de puissance du pulseur défaillant" },
      { pourcentage: 28, libelle: "Câblage du pulseur endommagé" },
      { pourcentage: 20, libelle: "Moteur du pulseur défaillant" },
      { pourcentage: 14, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Si la ventilation ne fonctionne qu'à la vitesse maximale, le module de puissance (souvent appelé « résistance pulseur ») est la première pièce à contrôler.",
    pieces: [
      { nom: "Module de puissance pulseur d'air", boutique: "Oscaro · livraison 48h", prix: "45€" },
    ],
  },
  {
    code: "B1344",
    titre: "Défaut capteur de température habitacle — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "faible",
    severiteLabel: "Gravité faible — température moins précise",
    description:
      "Le capteur qui mesure la température de l'air dans l'habitacle, utilisé par la climatisation automatique pour atteindre la température de consigne, envoie un signal incohérent.",
    causes: [
      { pourcentage: 40, libelle: "Capteur de température habitacle défaillant" },
      { pourcentage: 28, libelle: "Câblage du capteur endommagé" },
      { pourcentage: 20, libelle: "Connecteur du capteur corrodé" },
      { pourcentage: 12, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Une climatisation qui ne parvient plus à stabiliser la température malgré un réglage automatique correct est le symptôme typique de ce défaut.",
    pieces: [
      { nom: "Capteur de température habitacle", boutique: "Oscaro · livraison 48h", prix: "28€" },
    ],
  },
  {
    code: "U11DB",
    titre: "Absence de communication avec le calculateur moteur — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "moderee",
    severiteLabel: "Gravité modérée — optimisation du confort perturbée",
    description:
      "Le calculateur de climatisation ne reçoit plus les informations transmises par le calculateur moteur (température moteur, régime), nécessaires pour optimiser le fonctionnement du compresseur et du chauffage.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 28, libelle: "Connecteur du calculateur climatisation oxydé" },
      { pourcentage: 22, libelle: "Calculateur moteur en défaut propre" },
      { pourcentage: 15, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Vérifier si le calculateur moteur affiche lui-même un défaut au même moment — ce code est souvent la conséquence d'un problème réseau plus large.",
    pieces: [
      { nom: "Diagnostic réseau climatisation/moteur (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "U11DA",
    titre: "Absence de communication avec le combiné d'instruments — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "faible",
    severiteLabel: "Gravité faible — affichage seulement",
    description:
      "Le calculateur de climatisation ne reçoit plus les informations transmises par le combiné d'instruments, ce qui peut affecter l'affichage de la température ou certains réglages liés au véhicule.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 28, libelle: "Connecteur du calculateur climatisation oxydé" },
      { pourcentage: 22, libelle: "Combiné d'instruments en défaut propre" },
      { pourcentage: 15, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Ce défaut affecte surtout l'affichage — la climatisation continue généralement de fonctionner normalement.",
    pieces: [
      { nom: "Diagnostic réseau climatisation/combiné (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "U11DC",
    titre: "Absence de communication avec le calculateur airbag — climatisation PSA",
    categorie: "psa",
    categorieLabel: "PSA — Climatisation",
    severite: "faible",
    severiteLabel: "Gravité faible — fonction de sécurité secondaire seulement",
    description:
      "Le calculateur de climatisation ne reçoit plus les informations transmises par le calculateur airbag, une donnée utilisée notamment pour couper certaines fonctions en cas de choc détecté.",
    causes: [
      { pourcentage: 35, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 28, libelle: "Connecteur du calculateur climatisation oxydé" },
      { pourcentage: 22, libelle: "Calculateur airbag en défaut propre" },
      { pourcentage: 15, libelle: "Calculateur climatisation défaillant" },
    ],
    avisPro:
      "Ce défaut n'affecte pas le fonctionnement quotidien de la climatisation — il concerne une fonction de sécurité secondaire en cas de choc.",
    pieces: [
      { nom: "Diagnostic réseau climatisation/airbag (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P17AA",
    titre: "Défaut moteur de réduction de traînée en mode D — boîte AT6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "faible",
    severiteLabel: "Gravité faible — fonction confort/économie de carburant",
    description:
      "La fonction de réduction de traînée, qui limite l'entraînement du moteur au ralenti en position D pour économiser du carburant, présente un défaut sur son actionneur — une fonction de confort sans impact sur la sécurité.",
    causes: [
      { pourcentage: 40, libelle: "Actionneur de réduction de traînée défaillant" },
      { pourcentage: 28, libelle: "Calibration logicielle de la fonction perturbée" },
      { pourcentage: 20, libelle: "Câblage de l'actionneur endommagé" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Cette fonction est purement liée à l'économie de carburant — son désactivation temporaire n'empêche pas de rouler normalement.",
    pieces: [
      { nom: "Diagnostic fonction réduction de traînée (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P17A3",
    titre: "Défaut réduction de traînée en marche arrière — boîte AT6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "faible",
    severiteLabel: "Gravité faible — marche arrière non affectée",
    description:
      "La fonction de réduction de traînée en position marche arrière, qui limite l'entraînement du moteur au ralenti pour économiser du carburant en manœuvre, présente un défaut.",
    causes: [
      { pourcentage: 40, libelle: "Actionneur ou embrayage dédié défaillant" },
      { pourcentage: 28, libelle: "Calibration logicielle perturbée" },
      { pourcentage: 20, libelle: "Câblage endommagé" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Cette fonction de confort n'affecte pas la capacité de la boîte à passer en marche arrière normalement.",
    pieces: [
      { nom: "Diagnostic fonction réduction de traînée (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P17A0",
    titre: "Défaut circuit de verrouillage clé (key lock) — boîte AT6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — clé pouvant rester bloquée ou libre anormalement",
    description:
      "Le circuit qui empêche de retirer la clé de contact tant que le levier n'est pas positionné sur P (verrouillage clé) présente une anomalie, ce qui peut bloquer ou libérer la clé de façon anormale.",
    causes: [
      { pourcentage: 40, libelle: "Actionneur de verrouillage clé défaillant" },
      { pourcentage: 28, libelle: "Câblage de l'actionneur endommagé" },
      { pourcentage: 20, libelle: "Contacteur de position du levier en cause" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Si la clé reste bloquée, ne pas forcer — vérifier que le levier est bien en position P avant tout, un mauvais contact de position peut simuler ce blocage.",
    pieces: [
      { nom: "Diagnostic verrouillage clé (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P17A9",
    titre: "Défaut fonction de réduction de traînée en mode D (variante) — boîte AT6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "faible",
    severiteLabel: "Gravité faible — fonction confort/économie de carburant",
    description:
      "Une seconde variante du défaut de réduction de traînée en position D est détectée, généralement liée à un problème de synchronisation entre l'embrayage et le calculateur lors de l'activation de la fonction.",
    causes: [
      { pourcentage: 38, libelle: "Embrayage C1 de réduction de traînée usé" },
      { pourcentage: 28, libelle: "Pression hydraulique insuffisante lors de l'activation" },
      { pourcentage: 22, libelle: "Calibration logicielle perturbée" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Comme pour les autres défauts de cette fonction, aucun impact sur la sécurité — seule l'économie de carburant en ralenti est concernée.",
    pieces: [
      { nom: "Diagnostic fonction réduction de traînée (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P160A",
    titre: "Défaut d'identification du calculateur — boîte AT6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — nécessite une configuration, pas une pièce",
    description:
      "Le calculateur de boîte ne parvient pas à s'identifier correctement sur le réseau du véhicule, généralement après un remplacement de calculateur non recodé pour ce véhicule précis.",
    causes: [
      { pourcentage: 50, libelle: "Calculateur remplacé sans recodage/configuration pour ce véhicule" },
      { pourcentage: 25, libelle: "Calculateur d'occasion non compatible" },
      { pourcentage: 15, libelle: "Défaut réseau perturbant l'identification" },
      { pourcentage: 10, libelle: "Calculateur défaillant" },
    ],
    avisPro:
      "Ce défaut nécessite une configuration à la valise constructeur plutôt qu'une pièce — s'assurer que tout calculateur de remplacement est bien codé pour le véhicule avant de le monter.",
    pieces: [
      { nom: "Configuration calculateur boîte (atelier)", boutique: "Recommandé avant pièce", prix: "60-100€" },
    ],
  },
  {
    code: "P160E",
    titre: "Coupure d'alimentation pendant le maintien sous tension — boîte AT6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — sauvegarde interne possiblement incomplète",
    description:
      "Le calculateur de boîte détecte une coupure d'alimentation pendant sa phase de maintien sous tension après la coupure du contact (nécessaire pour terminer certaines opérations internes), ce qui peut empêcher la sauvegarde correcte de ses données.",
    causes: [
      { pourcentage: 38, libelle: "Câblage d'alimentation permanente de la boîte endommagé" },
      { pourcentage: 28, libelle: "Batterie faible ou déconnectée trop rapidement après extinction" },
      { pourcentage: 22, libelle: "Fusible dédié grillé" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Éviter de débrancher la batterie juste après avoir coupé le contact — laisser quelques secondes au calculateur pour terminer sa phase de mise en veille.",
    pieces: [
      { nom: "Diagnostic alimentation calculateur boîte (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P0882",
    titre: "Défaut tension d'alimentation de la boîte",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — régulations et engagement des rapports affectés",
    description:
      "Le calculateur de boîte détecte une tension d'alimentation générale hors plage de fonctionnement normale, ce qui peut affecter la précision de ses régulations et le bon engagement des rapports.",
    causes: [
      { pourcentage: 35, libelle: "Batterie faible ou en fin de vie" },
      { pourcentage: 28, libelle: "Alternateur déréglé ou défaillant" },
      { pourcentage: 22, libelle: "Câblage de masse ou d'alimentation endommagé" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Contrôler la tension batterie moteur tournant avant tout autre diagnostic — une simple batterie fatiguée est la cause la plus fréquente.",
    pieces: [
      { nom: "Batterie de démarrage", boutique: "Oscaro · livraison 48h", prix: "90-140€" },
    ],
  },
  {
    code: "P0883",
    titre: "Défaut surtension d'alimentation de la boîte",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque d'endommager le calculateur",
    description:
      "Le calculateur de boîte détecte une tension d'alimentation anormalement élevée, ce qui peut endommager à terme ses composants électroniques si la cause n'est pas corrigée rapidement.",
    causes: [
      { pourcentage: 40, libelle: "Alternateur déréglé (régulateur défaillant)" },
      { pourcentage: 28, libelle: "Batterie récemment remplacée par un modèle inadapté" },
      { pourcentage: 20, libelle: "Câblage de masse défectueux" },
      { pourcentage: 12, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Faire contrôler la tension de charge de l'alternateur moteur tournant sans attendre — une surtension prolongée peut endommager plusieurs calculateurs à la fois.",
    pieces: [
      { nom: "Diagnostic circuit de charge (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "P1213",
    titre: "Défaut information transmise par le calculateur ESP — boîte AT6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "moderee",
    severiteLabel: "Gravité modérée — stratégie de passage de rapport perturbée",
    description:
      "Le calculateur de boîte reçoit une information incohérente en provenance du calculateur ESP (contrôle de stabilité), ce qui peut perturber la stratégie de passage des rapports lors d'une intervention de stabilité.",
    causes: [
      { pourcentage: 35, libelle: "Défaut réseau CAN entre calculateur ESP et calculateur boîte" },
      { pourcentage: 28, libelle: "Calculateur ESP en défaut propre" },
      { pourcentage: 22, libelle: "Câblage du réseau multiplexé endommagé" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Vérifier en priorité si le calculateur ESP affiche lui-même un défaut actif — ce code est souvent la conséquence d'une panne ESP plutôt que de la boîte.",
    pieces: [
      { nom: "Diagnostic réseau boîte/ESP (atelier)", boutique: "Recommandé avant pièce", prix: "50-80€" },
    ],
  },
  {
    code: "P17A5",
    titre: "Défaut mécanique ou hydraulique premier rapport avec frein moteur — boîte AT6 PSA",
    categorie: "psa",
    categorieLabel: "PSA — Boîte AT6",
    severite: "elevee",
    severiteLabel: "Gravité élevée — combinaison spécifique affectée",
    description:
      "Le calculateur détecte que le premier rapport avec fonction de frein moteur activée ne s'engage pas correctement, signe d'un problème mécanique ou hydraulique interne sur cette combinaison spécifique.",
    causes: [
      { pourcentage: 35, libelle: "Embrayage ou frein interne dédié usé" },
      { pourcentage: 28, libelle: "Électrovanne de commande de cette combinaison défaillante" },
      { pourcentage: 22, libelle: "Niveau d'huile de boîte insuffisant" },
      { pourcentage: 15, libelle: "Calculateur de boîte défaillant" },
    ],
    avisPro:
      "Ce défaut concerne une combinaison de fonctionnement spécifique (frein moteur en première) — la boîte reste généralement utilisable en conduite normale.",
    pieces: [
      { nom: "Diagnostic mécanique boîte AT6 (atelier)", boutique: "Recommandé avant pièce", prix: "60-90€" },
    ],
  },
  {
    code: "F4C0",
    titre: "Défaut éclairage feu de position arrière droit — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — visibilité réduite de nuit",
    description:
      "Le boîtier de servitude intelligent (BSI) détecte une anomalie sur le circuit d'éclairage du feu de position arrière droit, empêchant son allumage correct.",
    causes: [
      { pourcentage: 42, libelle: "Ampoule ou LED grillée" },
      { pourcentage: 28, libelle: "Câblage ou connecteur du feu endommagé" },
      { pourcentage: 18, libelle: "Fusible dédié grillé" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Vérifier l'ampoule en premier — c'est la cause la plus fréquente et la moins coûteuse, accessible sans outillage particulier sur la plupart des modèles.",
    pieces: [
      { nom: "Ampoule feu de position", boutique: "AutoDoc · livraison 24h", prix: "6€" },
    ],
  },
  {
    code: "F4C1",
    titre: "Défaut éclairage feu de position arrière gauche — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — visibilité réduite de nuit",
    description:
      "Le boîtier de servitude intelligent (BSI) détecte une anomalie sur le circuit d'éclairage du feu de position arrière gauche, empêchant son allumage correct.",
    causes: [
      { pourcentage: 42, libelle: "Ampoule ou LED grillée" },
      { pourcentage: 28, libelle: "Câblage ou connecteur du feu endommagé" },
      { pourcentage: 18, libelle: "Fusible dédié grillé" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Vérifier l'ampoule en premier — c'est la cause la plus fréquente et la moins coûteuse, accessible sans outillage particulier sur la plupart des modèles.",
    pieces: [
      { nom: "Ampoule feu de position", boutique: "AutoDoc · livraison 24h", prix: "6€" },
    ],
  },
  {
    code: "F4A6",
    titre: "Défaut éclairage clignotant gauche — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — signalisation compromise",
    description:
      "Le boîtier de servitude intelligent détecte une anomalie sur le circuit du clignotant gauche, ce qui peut se traduire par un clignotement plus rapide que la normale ou une absence totale d'éclairage.",
    causes: [
      { pourcentage: 42, libelle: "Ampoule ou LED de clignotant grillée" },
      { pourcentage: 28, libelle: "Câblage ou connecteur du clignotant endommagé" },
      { pourcentage: 18, libelle: "Fusible dédié grillé" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Un clignotement anormalement rapide au tableau de bord est le signe caractéristique d'une ampoule grillée — un remplacement simple résout généralement le défaut.",
    pieces: [
      { nom: "Ampoule clignotant", boutique: "AutoDoc · livraison 24h", prix: "6€" },
    ],
  },
  {
    code: "F4C7",
    titre: "Défaut éclairage feu de recul droit — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "moderee",
    severiteLabel: "Gravité modérée — visibilité réduite en marche arrière",
    description:
      "Le boîtier de servitude intelligent détecte une anomalie sur le circuit du feu de recul droit, ce qui réduit la visibilité en marche arrière, notamment de nuit.",
    causes: [
      { pourcentage: 42, libelle: "Ampoule ou LED grillée" },
      { pourcentage: 28, libelle: "Câblage ou connecteur du feu endommagé" },
      { pourcentage: 18, libelle: "Contacteur de marche arrière (boîte de vitesses) en cause" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Si les deux feux de recul sont concernés en même temps, suspecter en priorité le contacteur de marche arrière sur la boîte plutôt que le BSI.",
    pieces: [
      { nom: "Ampoule feu de recul", boutique: "AutoDoc · livraison 24h", prix: "6€" },
    ],
  },
  {
    code: "F4C4",
    titre: "Défaut pression d'huile moteur — signalé par le BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — risque de dommage moteur immédiat",
    description:
      "Le boîtier de servitude intelligent relaie une alerte de pression d'huile moteur anormale, transmise par le calculateur moteur — un défaut potentiellement grave pour la durée de vie du moteur.",
    causes: [
      { pourcentage: 35, libelle: "Niveau d'huile moteur insuffisant" },
      { pourcentage: 28, libelle: "Capteur de pression d'huile défaillant (fausse alerte)" },
      { pourcentage: 22, libelle: "Pompe à huile usée" },
      { pourcentage: 15, libelle: "Crépine d'aspiration d'huile colmatée" },
    ],
    avisPro:
      "Arrêter le moteur dès que possible et vérifier le niveau d'huile avant toute chose — continuer à rouler avec une pression d'huile réellement basse peut détruire le moteur en quelques minutes.",
    pieces: [
      { nom: "Capteur de pression d'huile moteur", boutique: "Oscaro · livraison 48h", prix: "28€" },
    ],
  },
  {
    code: "F4E9",
    titre: "Défaut éclairage diurne (DRL) droit — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — feux de croisement non affectés",
    description:
      "Le boîtier de servitude intelligent détecte une anomalie sur le circuit du feu de circulation diurne droit, sans affecter l'éclairage principal des feux de croisement.",
    causes: [
      { pourcentage: 40, libelle: "LED du feu diurne défaillante (module non réparable individuellement sur certains modèles)" },
      { pourcentage: 28, libelle: "Câblage ou connecteur endommagé" },
      { pourcentage: 20, libelle: "Fusible dédié grillé" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Sur les modèles à LED, le feu diurne fait souvent partie d'un bloc optique complet non réparable séparément — un diagnostic permet de confirmer avant de commander une pièce coûteuse.",
    pieces: [
      { nom: "Diagnostic feu diurne LED (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "F4DA",
    titre: "Défaut bouton de neutralisation lève-vitres arrière — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — sécurité enfants électrique affectée uniquement",
    description:
      "Le bouton qui permet au conducteur de désactiver les lève-vitres arrière (sécurité enfants électrique) envoie un signal incohérent au BSI.",
    causes: [
      { pourcentage: 42, libelle: "Bouton de neutralisation défaillant" },
      { pourcentage: 28, libelle: "Câblage du bouton endommagé" },
      { pourcentage: 18, libelle: "Connecteur de la commande de portière corrodé" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Vérifier que les lève-vitres arrière fonctionnent normalement malgré ce défaut — il s'agit généralement d'un problème isolé au bouton, sans impact sur la fonction elle-même.",
    pieces: [
      { nom: "Bloc commande lève-vitres", boutique: "Mister-Auto · sur commande", prix: "60-100€" },
    ],
  },
  {
    code: "F4DB",
    titre: "Défaut commande impulsionnelle montée vitre arrière gauche — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — commande manuelle généralement préservée",
    description:
      "La fonction de montée automatique en une seule impulsion de la vitre arrière gauche ne répond plus, sans forcément affecter la commande manuelle classique (maintien du bouton).",
    causes: [
      { pourcentage: 40, libelle: "Moteur de lève-vitre fatigué (protection anti-pincement déclenchée)" },
      { pourcentage: 28, libelle: "Bouton de commande défaillant" },
      { pourcentage: 20, libelle: "Câblage de la commande endommagé" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Réinitialiser l'apprentissage de la vitre (vitre fermée, maintenir le bouton quelques secondes) résout souvent ce défaut sans intervention mécanique.",
    pieces: [
      { nom: "Diagnostic lève-vitre arrière gauche (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "F4DC",
    titre: "Défaut commande impulsionnelle descente vitre arrière gauche — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — commande manuelle généralement préservée",
    description:
      "La fonction de descente automatique en une seule impulsion de la vitre arrière gauche ne répond plus, sans forcément affecter la commande manuelle classique (maintien du bouton).",
    causes: [
      { pourcentage: 40, libelle: "Moteur de lève-vitre fatigué (protection anti-pincement déclenchée)" },
      { pourcentage: 28, libelle: "Bouton de commande défaillant" },
      { pourcentage: 20, libelle: "Câblage de la commande endommagé" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Réinitialiser l'apprentissage de la vitre (vitre fermée, maintenir le bouton quelques secondes) résout souvent ce défaut sans intervention mécanique.",
    pieces: [
      { nom: "Diagnostic lève-vitre arrière gauche (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
    ],
  },
  {
    code: "F4EC",
    titre: "Défaut déverrouillage des portes et du hayon — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — accès au véhicule potentiellement bloqué",
    description:
      "Le BSI ne parvient plus à commander correctement le déverrouillage centralisé des portes et du hayon, ce qui peut bloquer l'accès normal au véhicule par la commande centralisée.",
    causes: [
      { pourcentage: 35, libelle: "Moteur de serrure défaillant sur une ou plusieurs portes" },
      { pourcentage: 28, libelle: "Câblage du circuit de verrouillage endommagé" },
      { pourcentage: 22, libelle: "BSI défaillant" },
      { pourcentage: 15, libelle: "Batterie de la télécommande faible (si commande à distance concernée)" },
    ],
    avisPro:
      "En cas de blocage total, l'ouverture manuelle à la clé reste généralement possible — vérifier la batterie de la télécommande avant tout diagnostic plus poussé.",
    pieces: [
      { nom: "Diagnostic centralisation portes (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "F4EE",
    titre: "Défaut super-condamnation des portes avant — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — verrouillage centralisé classique préservé",
    description:
      "La fonction de super-condamnation (verrouillage renforcé empêchant l'ouverture même de l'intérieur) ne fonctionne plus correctement sur les portes avant, sans affecter le verrouillage centralisé classique.",
    causes: [
      { pourcentage: 40, libelle: "Moteur de serrure en super-condamnation défaillant" },
      { pourcentage: 28, libelle: "Câblage dédié à cette fonction endommagé" },
      { pourcentage: 20, libelle: "BSI défaillant" },
      { pourcentage: 12, libelle: "Configuration de la fonction désactivée par erreur" },
    ],
    avisPro:
      "Le verrouillage centralisé classique continue généralement de fonctionner — seule la fonction de sécurité renforcée est concernée.",
    pieces: [
      { nom: "Diagnostic super-condamnation (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "FF1B",
    titre: "Blocage du système d'essuie-glace — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — visibilité et moteur d'essuie-glace en jeu",
    description:
      "Le moteur d'essuie-glace rencontre une résistance mécanique anormale lors de son fonctionnement, ce qui peut traduire un blocage du mécanisme ou une surcharge du moteur.",
    causes: [
      { pourcentage: 38, libelle: "Mécanisme de tringlerie d'essuie-glace grippé ou faussé" },
      { pourcentage: 28, libelle: "Balais d'essuie-glace collés au pare-brise (gel, givre non dégagé)" },
      { pourcentage: 22, libelle: "Moteur d'essuie-glace défaillant" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Ne jamais forcer sur des essuie-glaces gelés au pare-brise — dégivrer d'abord, un moteur qui force contre un blocage grille rapidement.",
    pieces: [
      { nom: "Diagnostic mécanisme essuie-glace (atelier)", boutique: "Recommandé avant pièce", prix: "40-60€" },
    ],
  },
  {
    code: "FF1D",
    titre: "Défaut moteur d'essuie-glace — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "elevee",
    severiteLabel: "Gravité élevée — visibilité fortement réduite par temps de pluie",
    description:
      "Le moteur qui entraîne les essuie-glaces avant présente une anomalie électrique ou mécanique, ce qui peut réduire fortement la visibilité par temps de pluie.",
    causes: [
      { pourcentage: 40, libelle: "Moteur d'essuie-glace défaillant" },
      { pourcentage: 28, libelle: "Câblage ou connecteur du moteur endommagé" },
      { pourcentage: 20, libelle: "Fusible ou relais associé grillé" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Une visibilité réduite par temps de pluie est un vrai risque de sécurité — à faire diagnostiquer rapidement, ne pas différer.",
    pieces: [
      { nom: "Moteur d'essuie-glace avant", boutique: "Mister-Auto · sur commande", prix: "80-130€" },
    ],
  },
  {
    code: "F4E3",
    titre: "Défaut commande essuie-glace arrière — BSI PSA",
    categorie: "psa",
    categorieLabel: "PSA — BSI",
    severite: "faible",
    severiteLabel: "Gravité faible — visibilité avant non affectée",
    description:
      "La commande de l'essuie-glace arrière (souvent intégrée à la commande combinée du volant) envoie un signal incohérent au BSI, sans affecter l'essuie-glace avant.",
    causes: [
      { pourcentage: 40, libelle: "Contacteur de commande essuie-glace défaillant" },
      { pourcentage: 28, libelle: "Câblage de la commande endommagé" },
      { pourcentage: 20, libelle: "Moteur d'essuie-glace arrière défaillant" },
      { pourcentage: 12, libelle: "BSI défaillant" },
    ],
    avisPro:
      "Ce défaut ne concerne que l'essuie-glace arrière — la visibilité avant, prioritaire pour la sécurité, n'est pas affectée.",
    pieces: [
      { nom: "Diagnostic essuie-glace arrière (atelier)", boutique: "Recommandé avant pièce", prix: "30-50€" },
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
  { code: "P02XX", titre: "Injection", desc: "Circuits injecteurs, pompe et pression carburant.", slug: "p02xx" },
  { code: "P05XX", titre: "Ralenti & régulation", desc: "Régime de ralenti, capteur de vitesse, tension du système.", slug: "p05xx" },
  { code: "P24XX", titre: "FAP & turbo", desc: "Filtre à particules, pression de suralimentation, wastegate.", slug: "p24xx" },
  { code: "PRÉCHAUFFAGE", titre: "Préchauffage", desc: "Bougies et circuit de préchauffage avant démarrage à froid (diesel).", slug: "prechauffage" },
  { code: "P04XX", titre: "Émissions", desc: "Sonde lambda, EGR, catalyseur.", slug: "p04xx" },
  { code: "U0XXX", titre: "Réseau & calculateurs", desc: "Communication entre modules électroniques.", slug: "u0xxx" },
  { code: "P07XX", titre: "Boîte de vitesses automatique", desc: "Rapports, convertisseur de couple, capteurs de vitesse.", slug: "p07xx" },
  { code: "C0XXX", titre: "Châssis & ABS/ESP", desc: "Freinage, capteurs de roue, stabilité du véhicule.", slug: "c0xxx" },
  { code: "B0XXX", titre: "Carrosserie & sécurité", desc: "Airbags, prétensionneurs, capteurs d'impact.", slug: "b0xxx" },
  { code: "PSA", titre: "Codes propriétaires PSA", desc: "Peugeot, Citroën, DS — BSI et boîte AL4, spécifiques au constructeur.", slug: "psa" },
];

export function getCategorieBySlug(slug: string): Categorie | undefined {
  return categories.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}
