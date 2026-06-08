import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './Layout.css'

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <a
        href="https://calendly.com/coline-hypno/planifier-une-seance-15-min"
        target="_blank"
        rel="noopener noreferrer"
        className="booking-btn"
      >
        Prendre rendez-vous
      </a>
    </>
  )
}
