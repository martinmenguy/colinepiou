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
          <a href="/contact" className="hero__cta fade-up fade-up-delay-3">
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
              « L'hypnose ne vous fait pas perdre le contrôle —<br />
              elle vous aide à le retrouver. »
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
          <h2 className="cta-band__title">Prête à commencer ?</h2>
          <p className="cta-band__sub">
            Un premier échange téléphonique gratuit pour répondre à vos questions.
          </p>
          <a href="/contact" className="cta-band__btn">Me contacter</a>
        </div>
      </section>
    </>
  )
}

const propositions = [
  {
    icon: '✦',
    title: 'Gestion du stress & anxiété',
    text: 'Apaiser les tensions, retrouver un souffle plus calme et une présence à soi au quotidien.',
  },
  {
    icon: '✦',
    title: 'Confiance en soi',
    text: 'Lever les blocages intérieurs, renforcer votre rapport à vous-même et à vos capacités.',
  },
  {
    icon: '✦',
    title: 'Phobies & peurs',
    text: 'Travailler en douceur sur les peurs qui limitent votre liberté d\'action et votre bien-être.',
  },
  {
    icon: '✦',
    title: 'Deuil & transitions',
    text: 'Trouver les ressources pour traverser les passages difficiles et avancer sereinement.',
  },
]

const steps = [
  {
    label: 'Premier contact',
    text: 'Un appel de 15 minutes pour vous présenter, poser vos questions et voir si l\'approche vous correspond.',
  },
  {
    label: 'Première séance',
    text: 'Un espace d\'écoute pour comprendre votre demande, vos objectifs et commencer le travail ensemble.',
  },
  {
    label: 'Suivi personnalisé',
    text: 'Chaque séance est adaptée à vos besoins. Le nombre de séances varie selon chaque personne.',
  },
]
