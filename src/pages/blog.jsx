import { NavLink } from 'react-router-dom'
import { articles } from '../data/articles'
import './Blog.css'

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow fade-up">Réflexions & ressources</p>
          <h1 className="page-hero__title fade-up fade-up-delay-1">Blog</h1>
        </div>
      </section>

      <section className="section blog-liste">
        <div className="container">
          <div className="blog__grid">
            {articles.map(article => (
              <article key={article.id} className="blog__card">
                <p className="blog__date">{new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                <h2 className="blog__titre">{article.titre}</h2>
                <p className="blog__resume">{article.resume}</p>
                <NavLink to={`/blog/${article.slug}`} className="blog__lien">Lire l'article →</NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
