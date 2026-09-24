import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Mentions légales | Panne Résolue",
  description: "Mentions légales du site Panne Résolue.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto px-6 pt-8 pb-16">
        <div className="font-mono text-xs text-muted mb-5">
          <Link href="/" className="hover:text-text">Accueil</Link> /{" "}
          <span className="text-amber">Mentions légales</span>
        </div>

        <h1 className="font-display font-semibold text-2xl sm:text-[1.7rem] mb-7">
          Mentions légales
        </h1>

        <div className="space-y-6 text-sm text-[#C7CBD3] leading-relaxed">
          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Éditeur du site</h2>
            <p>
              Le site Panne Résolue (panne-resolue.fr) est édité à titre personnel, en tant que
              particulier.
              <br />
              Contact : <a href="mailto:panne.resolue@gmail.com" className="text-cyan hover:underline">panne.resolue@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Directeur de la publication</h2>
            <p>L&apos;éditeur du site, contact ci-dessus.</p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Hébergement</h2>
            <p>
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
              <br />
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">vercel.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Nom de domaine</h2>
            <p>Le domaine panne-resolue.fr est enregistré auprès d&apos;IONOS.</p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, structure, code) est la
              propriété de l&apos;éditeur, sauf mention contraire. Toute reproduction sans
              autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Limitation de responsabilité</h2>
            <p>
              Les informations diagnostiques présentées sur ce site (codes défaut, causes
              probables, pannes) sont fournies à titre indicatif et ne remplacent pas
              l&apos;avis d&apos;un professionnel de l&apos;automobile. L&apos;éditeur ne peut être
              tenu responsable des conséquences d&apos;une intervention réalisée sur la base de
              ces informations. Consultez toujours un garagiste qualifié avant toute réparation.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-base text-text mb-2">Liens et partenaires</h2>
            <p>
              Les prix de pièces affichés sur le site sont indicatifs et ne constituent pas des
              offres commerciales. Des liens vers des sites de vente de pièces automobiles
              pourront être ajoutés à l&apos;avenir, dont certains pourraient générer une
              commission d&apos;affiliation en cas d&apos;achat, sans surcoût pour vous. Voir la{" "}
              <Link href="/politique-de-confidentialite" className="text-cyan hover:underline">
                politique de confidentialité
              </Link>{" "}
              pour plus de détails.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
