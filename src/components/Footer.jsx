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
            src="/logo-blanc-detoure.png"
            alt="Coline hypnothérapeute"
            className="footer__logo"
          />
        </div>
<div className="footer__social">
  <a href="https://www.instagram.com/coline.hypno" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  </a>
  <a href="https://www.facebook.com/profile.php?id=61590156377900" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  </a>
</div>
        <nav className="footer__nav" aria-label="Navigation footer">
          <NavLink to="/"             className="footer__link">Accueil</NavLink>
          <NavLink to="/qui-suis-je"  className="footer__link">Qui suis-je ?</NavLink>
<NavLink to="/contact"      className="footer__link">Contact</NavLink>
<NavLink to="/faq"          className="footer__link">FAQ</NavLink>
        </nav>

        <p className="footer__legal">
          © {year} Coline — Hypnothérapeute &nbsp;·&nbsp; Tous droits réservés
        </p>
      </div>
    </footer>
  )
}
