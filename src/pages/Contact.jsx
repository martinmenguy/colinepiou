import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    const form = e.target
    const data = new FormData(form)

    // Formspree : remplacer YOUR_FORM_ID par votre identifiant
    const res = await fetch('https://formspree.io/f/mpqeqdpg', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    if (res.ok) {
      setSent(true)
      form.reset()
    }
    setSending(false)
  }

  return (
    <>
      {/* ── Page header ── */}
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-up">Échangeons</p>
          <h1 className="page-hero__title fade-up fade-up-delay-1">Contact</h1>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">

          {/* Infos */}
          <div className="contact-info">
            <h2 className="contact-info__title">Parlons-nous</h2>
            <p className="contact-info__text">
              Vous avez une question, vous souhaitez en savoir plus sur ma pratique
              ou prendre rendez-vous ? Je vous réponds dans les meilleurs délais.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail__label">Email</span>
                <a href="mailto:contact@coline-hypnotherapeute.fr" className="contact-detail__value">
                  coline.piou@gmail.com
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Téléphone</span>
                <a href="tel:+33600000000" className="contact-detail__value">
                  07 82 77 34 69
                </a>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__label">Cabinet</span>
                <span className="contact-detail__value">
                  Séance visio uniquement
                </span>
              </div>
            </div>

          <div className="contact-note">
              <p>
                Premier échange téléphonique <strong>gratuit</strong> de 15 minutes
                pour toute nouvelle demande.
              </p>
            </div>
            <a href="https://calendly.com/coline-hypno/planifier-une-seance-15-min" target="_blank" rel="noopener noreferrer" className="hero__cta">
  Rendez-vous téléphonique
</a>
          </div>

          {/* Formulaire */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <p className="contact-success__icon" aria-hidden="true">✦</p>
                <h3>Message envoyé</h3>
                <p>Merci pour votre message. Je vous réponds très bientôt.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name" className="field__label">Prénom & Nom</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="field__input"
                    placeholder="Marie Dupont"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email" className="field__label">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="field__input"
                    placeholder="marie@exemple.fr"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="phone" className="field__label">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="field__input"
                    placeholder="06 00 00 00 00"
                  required/>
                </div>

                <div className="field">
                  <label htmlFor="message" className="field__label">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="field__textarea"
                    rows={5}
                    placeholder="Décrivez brièvement votre demande..."
                    required
                  />
                </div>

                <button type="submit" className="contact-form__submit" disabled={sending}>
                  {sending ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
     <section className="section faq-link" style={{padding: '2rem 0'}}>
  <div className="container" style={{textAlign: 'center'}}>
    <p style={{color: 'var(--text-light)', fontSize: '1.2rem'}}>
      Une question sur l'hypnose ? La réponse est peut-être dans la <a href="/faq" style={{color: 'var(--brown)', textDecoration: 'underline'}}>FAQ</a>.
    </p>
  </div>
</section>
    </>
  )
}
