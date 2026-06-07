import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Accueil from './pages/Accueil.jsx'
import QuiSuisJe from './pages/QuiSuisJe.jsx'
import Contact from './pages/Contact.jsx'

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
        </Route>
      </Routes>
    </>
  )
}
