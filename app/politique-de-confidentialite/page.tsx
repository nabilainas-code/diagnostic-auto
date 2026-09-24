import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Politique de confidentialité | Panne Résolue",
  description: "Politique de confidentialité et gestion des données personnelles sur Panne Résolue.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto px-6 pt-8 pb-16">
        <div className="font-mono text-xs text-muted mb-5">
          <Link href="/" className="hover:text-text">Accueil</Link> /{" "}
          <span className="text-amber">Politique de confidentialité</span>
        </div>

        <h1 className="font-display font-semibold text-2xl sm:text-[1.7rem] mb-7">
          Politique de confidentialité
        </h1>

        <div className="space-y-6 text-sm text-[#C7CBD3] leading-relaxed">
          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Données collectées</h2>
            <p>
              Panne Résolue ne dispose d&apos;aucun compte utilisateur. La recherche par code
              défaut ou par plaque d&apos;immatriculation s&apos;effectue directement dans votre
              navigateur et n&apos;est pas enregistrée par nos soins.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Retours sur les fiches</h2>
            <p>
              Chaque fiche de code défaut propose d&apos;indiquer si le diagnostic vous a aidé
              (👍 / 👎), avec un champ de précision facultatif. Seuls le code concerné, votre
              appréciation et, le cas échéant, le texte que vous écrivez sont enregistrés —
              sans compte, sans adresse IP et sans aucune donnée permettant de vous identifier.
              Ces retours ne sont jamais publiés : ils servent uniquement à corriger et
              améliorer le contenu des fiches. Merci de ne pas y inscrire d&apos;information
              personnelle.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Mesure d&apos;audience</h2>
            <p>
              Ce site utilise Vercel Web Analytics, ainsi qu&apos;un compteur de visites interne,
              pour connaître la fréquentation générale (nombre de visites, pages consultées,
              provenance du trafic, pays et type d&apos;appareil approximatifs). Ces outils ne
              déposent aucun cookie et ne collectent aucune donnée permettant de vous identifier
              personnellement — ni adresse IP, ni identifiant de visiteur. Les statistiques sont
              agrégées et anonymes.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Cookies</h2>
            <p>
              Ce site n&apos;utilise actuellement aucun cookie de suivi publicitaire. Si des
              cookies non essentiels sont ajoutés à l&apos;avenir (régie publicitaire comme
              Google AdSense), un bandeau de consentement vous permettra de les accepter ou de
              les refuser avant toute activation, conformément à la réglementation RGPD.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Données techniques d&apos;hébergement</h2>
            <p>
              Comme tout site web, des données techniques (adresse IP, type de navigateur, pages
              visitées) sont traitées automatiquement par notre hébergeur, Vercel Inc.
              (États-Unis), à des fins de fonctionnement et de sécurité du service. Ce traitement
              est nécessaire au bon fonctionnement du site et ne fait pas l&apos;objet d&apos;un
              suivi commercial de notre part.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Liens d&apos;affiliation</h2>
            <p>
              Certains liens vers des sites partenaires (Oscaro, Mister-Auto, AutoDoc) sont des
              liens d&apos;affiliation : si vous effectuez un achat après avoir cliqué dessus,
              nous pouvons percevoir une commission, sans surcoût pour vous. Le suivi de ces
              liens est géré par les partenaires concernés selon leurs propres politiques de
              confidentialité.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification
              et de suppression de toute donnée vous concernant. Pour toute question ou demande,
              contactez-nous à{" "}
              <a href="mailto:panne.resolue@gmail.com" className="text-cyan hover:underline">
                panne.resolue@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
