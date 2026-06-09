import { useParams, NavLink } from 'react-router-dom'
import { articles } from '../data/articles'
import './Blog.css'

export default function Article() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) return (
    <section className="section">
      <div className="container">
        <p>Article introuvable.</p>
        <NavLink to="/blog">← Retour au blog</NavLink>
      </div>
    </section>
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          <h1 className="page-hero__title">{article.titre}</h1>
        </div>
      </section>

      <section className="section article-contenu">
        <div className="container">
          <div className="article__body">
            {article.contenu.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <NavLink to="/blog" className="article__retour">← Retour au blog</NavLink>
        </div>
      </section>
    </>
  )
}
