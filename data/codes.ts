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
  { code: "P07XX", titre: "Boîte de vitesses automatique", desc: "Rapports, convertisseur de couple, capteurs de vitesse.", slug: "p07xx" },
  { code: "C0XXX", titre: "Châssis & ABS/ESP", desc: "Freinage, capteurs de roue, stabilité du véhicule.", slug: "c0xxx" },
  { code: "B0XXX", titre: "Carrosserie & sécurité", desc: "Airbags, prétensionneurs, capteurs d'impact.", slug: "b0xxx" },
  { code: "PSA", titre: "Codes propriétaires PSA", desc: "Peugeot, Citroën, DS — BSI et boîte AL4, spécifiques au constructeur.", slug: "psa" },
];

export function getCategorieBySlug(slug: string): Categorie | undefined {
  return categories.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}
