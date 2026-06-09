import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil.jsx'
import QuiSuisJe from './pages/QuiSuisJe.jsx'
import Contact from './pages/Contact.jsx'
import FAQ from './pages/FAQ.jsx'
import MentionsLegales from './pages/MentionsLegales.jsx'
import Blog from './pages/Blog.jsx'
import Article from './pages/Article.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"            element={<Accueil />} />
          <Route path="/qui-suis-je" element={<QuiSuisJe />} />
          <Route path="/contact"     element={<Contact />} />
          <Route path="/faq"         element={<FAQ />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/blog" element={<Blog />} />
<Route path="/blog/:slug" element={<Article />} />
        </Route>
      </Routes>
    </>
  )
}
