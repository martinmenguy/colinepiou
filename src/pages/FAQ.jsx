import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: "Est-ce qu'on peut rester bloqué sous hypnose ?",
    answer: "Non. L'hypnose est un état naturel que vous traversez spontanément chaque jour — juste avant de vous endormir, ou quand vous êtes absorbé dans un film. On n'y reste jamais bloqué : vous en sortez naturellement, à tout moment, si vous le souhaitez."
  },
  {
    question: "Est-ce qu'on perd le contrôle pendant une séance ?",
    answer: "Non, c'est même le contraire. Vous restez conscient et maître de vous-même tout au long de la séance. L'hypnose thérapeutique ne vise pas à vous faire lâcher le contrôle mais à vous aider à accéder à vos propres ressources intérieures."
  },
  {
    question: "Est-ce qu'on peut être forcé de faire des choses contre sa volonté ?",
    answer: "Absolument pas. Personne ne peut vous forcer à faire ou dire quoi que ce soit qui va à l'encontre de vos valeurs. C'est l'un des plus grands mythes véhiculés par l'hypnose de spectacle."
  },
  {
    question: "Est-ce que l'hypnose fonctionne sur tout le monde ?",
    answer: "En grande majorité, oui. Tout le monde est capable d'entrer en état hypnotique — c'est une capacité naturelle du cerveau. Ce qui varie c'est la profondeur de l'état, mais même une transe légère suffit pour obtenir des résultats thérapeutiques."
  },
  {
    question: "Est-ce qu'on est inconscient pendant une séance ?",
    answer: "Non. Vous êtes dans un état de conscience modifiée — ni endormi, ni totalement dans la réalité ordinaire. Vous entendez tout, vous pouvez parler, et vous vous souvenez généralement de ce qui s'est passé."
  },
  {
    question: "C'est quoi la différence entre l'hypnose de spectacle et l'hypnose thérapeutique ?",
    answer: "L'hypnose de spectacle sélectionne des personnes très suggestibles pour produire un effet dramatique devant un public. L'hypnose thérapeutique est un outil de soin, utilisé à votre rythme, dans un cadre bienveillant, avec votre consentement et pour votre bénéfice uniquement."
  },
  {
    question: "Est-ce qu'on peut se souvenir de ce qui se passe pendant la séance ?",
    answer: "Oui, dans la grande majorité des cas. Certaines personnes entrent dans des états plus profonds et peuvent avoir des souvenirs partiels, comme au réveil d'un rêve — mais c'est rare et toujours temporaire."
  },
  {
    question: "Combien de séances faut-il pour voir des résultats ?",
    answer: "Ça dépend de la problématique et de la personne. Certains ressentent un changement dès la première séance. D'autres ont besoin de trois à cinq séances pour ancrer durablement les transformations. Il n'y a pas de règle universelle — c'est pour ça que chaque accompagnement est personnalisé."
  },
  {
    question: "Est-ce que l'hypnose peut remplacer un médecin ou un psychiatre ?",
    answer: "Non. L'hypnose thérapeutique est un outil complémentaire, pas un substitut au suivi médical ou psychiatrique. Elle peut travailler en parallèle d'un traitement, jamais à sa place."
  },
  {
    question: "Est-ce que les séances en ligne sont aussi efficaces qu'en présentiel ?",
    answer: "Oui. L'état hypnotique ne dépend pas de la présence physique du thérapeute — il se produit en vous. De nombreuses personnes obtiennent d'excellents résultats en séance en ligne, avec l'avantage d'être dans leur propre environnement, souvent plus confortable et rassurant."
  },
  {
    question: "C'est dangereux l'hypnose ?",
    answer: "Non, l'hypnose thérapeutique pratiquée par un professionnel formé est sans danger. C'est un état que votre cerveau connaît et traverse naturellement. Il n'y a aucun risque de perdre la tête ou de subir des effets secondaires."
  },
  {
    question: "Est-ce qu'on peut être trop rationnel pour être hypnotisé ?",
    answer: "Non — et c'est souvent l'inverse ! Les personnes analytiques et curieuses entrent parfois très facilement en état hypnotique parce qu'elles comprennent le processus et y adhèrent pleinement. La résistance vient rarement de l'intellect mais de la peur, qui se dissipe avec la confiance."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-up">Questions fréquentes</p>
          <h1 className="page-hero__title fade-up fade-up-delay-1">FAQ</h1>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq__container">
          <p className="faq__intro">Tout ce que vous avez toujours voulu savoir sur l'hypnose sans oser le demander.</p>
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
              >
                <button
                  className="faq__question"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq__icon">{openIndex === index ? '−' : '+'}</span>
                </button>
                {openIndex === index && (
                  <div className="faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
