export interface PanneGuide {
  slug: string;
  titre: string;
  marque: string;
  boitier: string;
  intro: string;
  modelesTouches: string[];
  symptomes: string[];
  causes: { titre: string; description: string }[];
  demarche: string[];
  prixIndicatif: { intervention: string; prix: string }[];
  avertissement: string;
}

// Guides par symptômes pour les pannes électroniques dont les codes défaut
// constructeur (DF chez Renault, F-codes chez PSA) ne sont pas standardisés
// et nécessitent un outil de marque — donc pas couverts par nos fiches
// P/B/C/U classiques.
export const pannes: PanneGuide[] = [
  {
    slug: "bsi",
    titre: "Panne BSI — Boîtier de Servitude Intelligent",
    marque: "Peugeot & Citroën",
    boitier: "BSI",
    intro:
      "Le BSI (Boîtier de Servitude Intelligent) est le calculateur central qui gère la quasi-totalité des équipements électriques de la carrosserie sur les Peugeot et Citroën : vitres électriques, essuie-glaces, clignotants, centralisation, démarreur, éclairage. Une panne BSI peut provoquer des symptômes très variés et parfois intermittents, ce qui la rend difficile à diagnostiquer sans outil spécialisé.",
    modelesTouches: ["Peugeot 307", "Peugeot 407", "Peugeot 207", "Citroën C4", "Citroën C5", "Citroën C8", "Citroën Xsara Picasso"],
    symptomes: [
      "Vitres électriques qui ne répondent plus (une ou plusieurs)",
      "Essuie-glaces qui s'arrêtent de fonctionner ou tournent en continu",
      "Clignotants ou feux qui ne s'allument plus",
      "Voiture qui ne démarre pas alors que la batterie est bonne",
      "Centralisation des portes qui ne répond plus à la télécommande",
      "Compteur ou afficheur qui montre des informations aberrantes",
      "Alarme qui se déclenche seule sans raison",
    ],
    causes: [
      {
        titre: "Infiltration d'eau",
        description:
          "Le BSI est souvent situé sous le tableau de bord, près du pare-brise. Une gouttière de toit ouvrant bouchée ou un joint de pare-brise défaillant laisse l'eau s'infiltrer directement sur le boîtier — c'est la cause la plus fréquente et la plus connue sur ces modèles.",
      },
      {
        titre: "Soudures fissurées",
        description:
          "Les relais de puissance (vitres, essuie-glaces) sont soudés sur le circuit imprimé du BSI. Avec la chaleur et les vibrations, ces soudures peuvent se fissurer avec le temps et créer des faux contacts intermittents.",
      },
      {
        titre: "Connecteurs oxydés",
        description:
          "Les nombreux connecteurs reliant le BSI au reste du véhicule peuvent s'oxyder, surtout en cas d'humidité, provoquant des pertes de signal ponctuelles.",
      },
      {
        titre: "Composant électronique grillé",
        description:
          "Une surtension (batterie mal branchée, court-circuit ailleurs sur le véhicule) peut griller un composant interne du BSI de façon définitive.",
      },
    ],
    demarche: [
      "Vérifier d'abord les fusibles associés aux fonctions en panne — souvent situés dans le BSI lui-même ou juste à côté.",
      "Inspecter visuellement le BSI et ses connecteurs pour des traces d'humidité ou de corrosion (dégager le tableau de bord côté conducteur).",
      "Vérifier que la gouttière de toit ouvrant ou le joint de pare-brise ne sont pas à l'origine d'une infiltration — nettoyer et étancher avant de toucher au BSI.",
      "Faire lire les codes défaut réels du BSI par un professionnel équipé d'une valise constructeur (DiagBox pour PSA) — les lecteurs OBD génériques ne lisent pas le détail des défauts BSI.",
      "N'envisager le remplacement du BSI qu'en dernier recours : c'est une pièce coûteuse qui nécessite une reprogrammation avec le numéro de série du véhicule.",
    ],
    prixIndicatif: [
      { intervention: "Diagnostic BSI en atelier", prix: "60-90€" },
      { intervention: "BSI reconditionné + reprogrammation", prix: "250-450€" },
      { intervention: "BSI neuf + reprogrammation (concession)", prix: "600-900€" },
    ],
    avertissement:
      "Un BSI qui semble HS est parfois juste victime d'une infiltration d'eau ou d'un faux contact — un nettoyage et séchage complet du boîtier résout une partie des cas avant tout remplacement.",
  },
  {
    slug: "uch",
    titre: "Panne UCH — Unité Centrale Habitacle",
    marque: "Renault",
    boitier: "UCH",
    intro:
      "L'UCH (Unité Centrale Habitacle) est l'équivalent Renault du BSI : le calculateur qui centralise les fonctions électriques de l'habitacle et de la carrosserie — vitres, essuie-glaces, éclairage, centralisation, carte mains libres. Comme le BSI, ses pannes provoquent des symptômes multiples et parfois difficiles à relier entre eux.",
    modelesTouches: ["Renault Twingo II", "Renault Clio III", "Renault Mégane II", "Renault Scénic II", "Renault Laguna II"],
    symptomes: [
      "Vitres électriques inertes ou lentes",
      "Essuie-glaces qui ne s'arrêtent plus ou ne démarrent plus",
      "Carte mains libres qui n'est plus détectée par le véhicule",
      "Clignotants ou feux de position défaillants",
      "Impossible de démarrer malgré une carte reconnue",
      "Centralisation qui se verrouille/déverrouille seule",
      "Tableau de bord qui affiche des messages incohérents",
    ],
    causes: [
      {
        titre: "Infiltration d'eau",
        description:
          "Comme sur PSA, l'UCH est positionné dans une zone sensible à l'humidité sur certains modèles (sous la planche de bord ou dans le vide-poche selon la génération) — une infiltration est une cause très fréquente.",
      },
      {
        titre: "Usure des soudures internes",
        description:
          "Les relais de commande soudés sur le circuit imprimé peuvent créer des faux contacts après plusieurs années, en particulier sur les fonctions les plus sollicitées comme les vitres électriques.",
      },
      {
        titre: "Défaut de la carte mains libres ou de son antenne",
        description:
          "Sur les modèles à carte mains libres, un défaut de détection peut venir de la carte elle-même, de son antenne, ou de l'UCH qui ne traite plus correctement le signal.",
      },
      {
        titre: "Alimentation ou masse défaillante",
        description:
          "Un problème de masse électrique ou d'alimentation en amont de l'UCH peut provoquer des dysfonctionnements qui ressemblent à une panne du boîtier lui-même.",
      },
    ],
    demarche: [
      "Vérifier les fusibles liés aux fonctions concernées avant toute autre chose.",
      "Contrôler l'état de la carte mains libres (pile, état général) si le problème concerne la détection ou le démarrage.",
      "Inspecter l'UCH et ses connecteurs pour des traces d'humidité.",
      "Faire lire les codes défaut réels avec un outil constructeur (CLIP ou DiagBox compatible Renault) — un lecteur OBD générique ne donne pas le détail des défauts UCH.",
      "Envisager le remplacement de l'UCH seulement après avoir écarté les causes plus simples — la pièce nécessite une reprogrammation avec la configuration du véhicule.",
    ],
    prixIndicatif: [
      { intervention: "Diagnostic UCH en atelier", prix: "60-90€" },
      { intervention: "UCH reconditionné + reprogrammation", prix: "220-400€" },
      { intervention: "UCH neuf + reprogrammation (concession)", prix: "500-800€" },
    ],
    avertissement:
      "Beaucoup de pannes UCH signalées sont en réalité liées à la carte mains libres ou à un problème d'humidité — à vérifier avant d'envisager le remplacement du boîtier.",
  },
];

export function getPanneBySlug(slug: string): PanneGuide | undefined {
  return pannes.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
