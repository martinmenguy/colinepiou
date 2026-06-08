import './Accueil.css'

export default function Accueil() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__inner container">
          <p className="hero__eyebrow fade-up">Hypnose thérapeutique</p>
          <h1 className="hero__title fade-up fade-up-delay-1">
            Un espace pour<br />vous retrouver
          </h1>
          <p className="hero__subtitle fade-up fade-up-delay-2">
            Un accompagnement sur mesure par l'hypnose,<br />
            pour traverser vos épreuves et renforcer vos ambitions.
          </p>
          <a href="https://calendly.com/coline-hypno/planifier-une-seance-15-min" className="hero__cta fade-up fade-up-delay-3">
            Prendre rendez-vous
          </a>
        </div>
        <div className="hero__decoration" aria-hidden="true" />
      </section>

      {/* ── Ce que je propose ── */}
      <section className="section propositions">
        <div className="container">
          <h2 className="section-title">Ce que nous travaillons ensemble</h2>
          <p className="section-intro">
            Les champs d'application de l'hypnose thérapeutique<br />
            sont bien plus larges qu'on ne l'imagine.
          </p>
          <div className="propositions__grid">
            {propositions.map((p) => (
              <article key={p.title} className="card">
                <div className="card__icon" aria-hidden="true">{p.icon}</div>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__text">{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Citation ── */}
      <section className="quote-section">
        <div className="container">
          <blockquote className="quote">
            <p>
              « On ne peut pas mentir à l'inconscient, <br />
              il connait toujours la vérité. »
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Comment ça se passe ── */}
      <section className="section process">
        <div className="container">
          <h2 className="section-title">Comment ça se passe ?</h2>
          <div className="process__steps">
            {steps.map((s, i) => (
              <div key={s.label} className="step">
                <div className="step__number">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="step__label">{s.label}</h3>
                <p className="step__text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA bas de page ── */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">Prêt à vous lancer ?</h2>
          <p className="cta-band__sub">
            Un premier échange téléphonique gratuit pour déterminer votre problématique et répondre à vos questions.
          </p>
          <a href="https://calendly.com/coline-hypno/planifier-une-seance-15-min" className="cta-band__btn">Me contacter</a>
        </div>
      </section>
      {/* — Témoignages — */}
<section className="section temoignages">
  <div className="container">
    <p className="page-hero__eyebrow" style={{textAlign: 'center'}}>Ils témoignent</p>
    <h2 className="section-title">Avis clients</h2>
    <div className="temoignages__grid">
      <div className="temoignage__card">
        <p className="temoignage__nom">Sabrina L.</p>
        <p className="temoignage__texte">"Cette séance m'a permis de me sentir plus légère et plus sereine. Une très belle expérience que je recommande sincèrement à toute personne qui souhaite avancer ou retrouver un mieux-être. Merci encore Coline pour votre professionnalisme et votre gentillesse."</p>
      </div>
      <div className="temoignage__card">
        <p className="temoignage__nom">Carine N.</p>
        <p className="temoignage__texte">"Coline possède de grandes qualités pour vous accompagner dans l'hypnose. Deux séances m'ont permis de consolider la confiance en moi qui me faisait défaut après avoir traversé un moment difficile. Un grand merci pour cette expérience !"</p>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

const propositions = [
  {
    icon: '✦',
    title: 'Stress & anxiété',
    text: 'Apaiser le mental et retrouver un rapport serein au quotidien.',
  },
  {
    icon: '✦',
    title: 'Confiance & estime de soi',
    text: 'Changer le regard que vous portez sur vous-même.',
  },
  {
    icon: '✦',
    title: 'Phobies & peurs',
    text: 'Se libérer définitivement de peurs qui vous limitent sans savoir pourquoi.',
  },
  {
    icon: '✦',
    title: 'Deuil & rupture',
    text: 'Trouver les ressources pour traverser la perte et avancer sereinement.',
  },
  {
    icon: '✦',
    title: 'Performance sportive',
    text: 'Travailler la concentration, la gestion de la pression et le mental de compétition.',
  },
  {
    icon: '✦',
    title: 'Addictions & habitudes',
    text: 'Tabac, sucre, comportements répétitifs : reprendre la main sur ce qui vous échappe.',
  },
  {
    icon: '✦',
    title: 'Sommeil & récupération',
    text: 'Retrouver un endormissement naturel et un repos réparateur.',
  },
  {
    icon: '✦',
    title: 'Et bien plus encore...',
  },
]

const steps = [
  {
    label: 'Premier contact',
    text: 'Un appel pour vous présenter, poser vos questions, déterminer votre problématique et voir si l\'approche vous correspond.',
  },
  {
    label: 'Première séance',
    text: 'Un espace d\'écoute bienveillant pour comprendre votre demande, vos objectifs et commencer le travail ensemble.',
  },
  {
    label: 'Suivi personnalisé',
    text: 'Chaque séance est adaptée à vos besoins. Le nombre de séances varie selon chaque personne et chaque problématique.',
  },
]
