import './QuiSuisJe.css'

export default function QuiSuisJe() {
  return (
    <>
      {/* ── Page header ── */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-up">À propos</p>
          <h1 className="page-hero__title fade-up fade-up-delay-1">Qui suis-je ?</h1>
        </div>
      </section>

      {/* ── Portrait ── */}
      <section className="section about-intro">
        <div className="container about-intro__grid">
          <div className="about-intro__image-wrap">
            {/* Remplacer par votre photo : <img src="/photo-coline.jpg" alt="Coline, hypnothérapeute" /> */}
            <div className="about-intro__image-placeholder" aria-hidden="true">
              <span>Votre photo ici</span>
            </div>
          </div>
          <div className="about-intro__content">
            <h2 className="about-intro__name">Coline</h2>
            <p className="about-intro__role">Hypnothérapeute certifiée</p>
            <p className="about-intro__text">
              Passionnée par le fonctionnement de l'esprit humain et par le pouvoir
              de la relation thérapeutique, je me suis formée à l'hypnose ericksonienne
              pour accompagner les personnes qui souhaitent se libérer de ce qui les
              freine et avancer vers une vie plus alignée.
            </p>
            <p className="about-intro__text">
              Mon approche est douce, bienveillante et centrée sur vos ressources.
              Je crois profondément que chacun porte en lui les clés de sa propre
              transformation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Formation ── */}
      <section className="section formation">
        <div className="container">
          <h2 className="section-title">Formation & parcours</h2>
          <div className="timeline">
            {formations.map((f) => (
              <div key={f.year} className="timeline__item">
                <div className="timeline__year">{f.year}</div>
                <div className="timeline__content">
                  <h3 className="timeline__title">{f.title}</h3>
                  <p className="timeline__desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="section valeurs">
        <div className="container">
          <h2 className="section-title">Mes valeurs</h2>
          <div className="valeurs__grid">
            {valeurs.map((v) => (
              <div key={v.title} className="valeur">
                <h3 className="valeur__title">{v.title}</h3>
                <p className="valeur__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const formations = [
  {
    year: '2024',
    title: 'Certification en hypnose ericksonienne',
    desc: 'Formation complète — [Nom de l\'école], [Ville]',
  },
  {
    year: '2023',
    title: 'Formation complémentaire',
    desc: 'À compléter avec votre parcours',
  },
  {
    year: '2022',
    title: 'Début du parcours',
    desc: 'À compléter avec votre parcours',
  },
]

const valeurs = [
  {
    title: 'Bienveillance',
    text: 'Un espace sans jugement où vous êtes libre d\'être pleinement vous-même.',
  },
  {
    title: 'Confidentialité',
    text: 'Tout ce qui se passe en séance reste strictement confidentiel.',
  },
  {
    title: 'Séances personnalisées',
    text: 'Chaque personne avance à son rythme. Je m\'adapte toujours à vous et vos objectifs.',
  },
]
