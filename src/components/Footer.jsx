import { NavLink } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">

        {/* Logo version bleue sur fond bleu */}
        <div className="footer__logo-wrap">
          <img
            src="/logo-bleu.png"
            alt="Coline hypnothérapeute"
            className="footer__logo"
          />
        </div>

        <nav className="footer__nav" aria-label="Navigation footer">
          <NavLink to="/"             className="footer__link">Accueil</NavLink>
          <NavLink to="/qui-suis-je"  className="footer__link">Qui suis-je ?</NavLink>
          <NavLink to="/contact"      className="footer__link">Contact</NavLink>
        </nav>

        <p className="footer__legal">
          © {year} Coline — Hypnothérapeute &nbsp;·&nbsp; Tous droits réservés
        </p>
      </div>
    </footer>
  )
}
