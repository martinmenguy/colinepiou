import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Accueil from './pages/Accueil.jsx'
import QuiSuisJe from './pages/QuiSuisJe.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/"          element={<Accueil />} />
        <Route path="/qui-suis-je" element={<QuiSuisJe />} />
        <Route path="/contact"   element={<Contact />} />
      </Route>
    </Routes>
  )
}
