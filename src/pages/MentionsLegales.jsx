import './MentionsLegales.css'

export default function MentionsLegales() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-up">Informations légales</p>
          <h1 className="page-hero__title fade-up fade-up-delay-1">Mentions légales</h1>
        </div>
      </section>

      <section className="section mentions__section">
        <div className="container mentions__container">

          <div className="mentions__bloc">
            <h2 className="mentions__title">Éditeur du site</h2>
            <p className="mentions__text">Coline Piou<br />
            Praticienne en hypnose thérapeutique<br />
            Paris, France<br />
            Email : <a href="mailto:coline.piou@gmail.com" className="mentions__link">coline.piou@gmail.com</a><br />
            Téléphone : <a href="tel:+33782773469" className="mentions__link">07 82 77 34 69</a><br />
            Site : colinepiou.fr<br />
            SIRET : en cours d'immatriculation</p>
          </div>

          <div className="mentions__bloc">
            <h2 className="mentions__title">Hébergeur</h2>
            <p className="mentions__text">Vercel Inc.<br />
            340 Pine Street, Suite 701<br />
            San Francisco, CA 94104, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="mentions__link">vercel.com</a></p>
          </div>

          <div className="mentions__bloc">
            <h2 className="mentions__title">Politique de confidentialité</h2>
            <p className="mentions__text">Dans le cadre du formulaire de contact, les données suivantes sont collectées : nom et prénom, adresse email, numéro de téléphone, message. Ces données sont collectées uniquement dans le but de répondre à vos demandes de contact ou de prise de rendez-vous.</p>
          </div>

          <div className="mentions__bloc">
            <h2 className="mentions__title">Responsable du traitement</h2>
            <p className="mentions__text">Coline Piou — <a href="mailto:coline.piou@gmail.com" className="mentions__link">coline.piou@gmail.com</a></p>
          </div>

          <div className="mentions__bloc">
            <h2 className="mentions__title">Durée de conservation</h2>
            <p className="mentions__text">Vos données sont conservées le temps nécessaire au traitement de votre demande, et supprimées dans un délai maximum de 3 ans.</p>
          </div>

          <div className="mentions__bloc">
            <h2 className="mentions__title">Prestataire de traitement</h2>
            <p className="mentions__text">Le formulaire de contact utilise le service Formspree (formspree.io), qui traite les données pour permettre leur acheminement par email. Formspree est soumis à sa propre politique de confidentialité disponible sur <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="mentions__link">formspree.io</a>.</p>
          </div>

          <div className="mentions__bloc">
            <h2 className="mentions__title">Vos droits</h2>
            <p className="mentions__text">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants : droit d'accès, de rectification, d'effacement, de limitation et d'opposition au traitement de vos données. Pour exercer ces droits, contactez : <a href="mailto:coline.piou@gmail.com" className="mentions__link">coline.piou@gmail.com</a></p>
          </div>

          <div className="mentions__bloc">
            <h2 className="mentions__title">Cookies</h2>
            <p className="mentions__text">Ce site est susceptible d'utiliser des cookies de mesure d'audience (Google Analytics ou équivalent) afin d'analyser le trafic et améliorer l'expérience utilisateur. Ces cookies ne sont déposés qu'avec votre consentement. Vous pouvez à tout moment modifier vos préférences via les paramètres de votre navigateur.</p>
          </div>

        </div>
      </section>
    </>
  )
}
