import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const navLinks = [
  { to: '/',            label: 'Accueil' },
  { to: '/qui-suis-je', label: 'Qui suis-je ?' },
  { to: '/contact',    label: 'Contact' },
  { to: '/blog',       label: 'Blog' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">

        {/* Logo */}
        <NavLink to="/" className="header__logo-link">
          <img
            src="/Palette_couleurs_-_coline.hypno-removebg-preview.png"
            alt="Coline hypnothérapeute"
            className="header__logo"
          />
        </NavLink>

        {/* Desktop nav */}
        <nav className="header__nav" aria-label="Navigation principale">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className={`header__burger${menuOpen ? ' header__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`header__mobile-nav${menuOpen ? ' header__mobile-nav--open' : ''}`}
        aria-label="Navigation mobile"
      >
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
