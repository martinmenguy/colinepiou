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
            <img src="/IMG_9904.jpeg" alt="Coline, hypnothérapeute" className="about-intro__image" />
          </div>
          <div className="about-intro__content">
            <h2 className="about-intro__name">Coline</h2>
            <p className="about-intro__role">Hypnothérapeute certifiée</p>
            <p className="about-intro__text">
              Après quelques années dans la restauration, j'ai ressenti le besoin de me 
              reconnecter à l'essentiel : l'humain. Formée à l'IFHE en hypnose Humaniste
              et Ericksonienne, j'accompagne aujourd'hui ceux qui souhaitent se libérer
              et retrouver qui ils sont vraiment.
            </p>
            <p className="about-intro__text">
              Mon approche est douce et 100% personnalisée. Ma conviction profonde ? 
              Vous avez déjà en vous toutes les ressources dont vous avez besoin.
            </p>
          </div>
        </div>
      </section>

     {/* — Approches — */}
<section className="section formation approches">
  <div className="container">
    <div className="approches__grid">
      <div className="approche__card">
        <h3 className="approche__title">Hypnose humaniste</h3>
        <p className="approche__text">L'hypnose humaniste travaille en conscience — vous restez pleinement éveillé et acteur de votre transformation. Elle intègre une dimension spirituelle et symbolique, et permet d'aller chercher les causes profondes d'une problématique. Idéale pour les travaux d'identité, de confiance en soi, de deuil ou de reconnexion à soi-même.</p>
      </div>
      <div className="approche__card">
        <h3 className="approche__title">Hypnose ericksonienne</h3>
        <p className="approche__text">L'hypnose ericksonienne utilise un état de transe légère et naturelle pour contourner les résistances du mental conscient. Douce et indirecte, elle s'adapte à chaque personne et agit efficacement sur les comportements, les phobies, le stress, les addictions ou encore la douleur.</p>
      </div>
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
