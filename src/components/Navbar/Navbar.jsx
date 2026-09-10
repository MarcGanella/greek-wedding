import { useEffect, useId, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { translations } from '../../i18n/translations.js'
import './Navbar.css'

const navigationItems = [
  { to: '/venue', key: 'venue' },
  { to: '/program', key: 'program' },
  { to: '/travel', key: 'travel' },
  { to: '/accommodation', key: 'accommodation' },
  { to: '/culture-food', key: 'cultureFood' },
  { to: '/local-places', key: 'localPlaces' },
]

export default function Navbar({ currentLanguage }) {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()
  const toggleRef = useRef(null)
  const navRef = useRef(null)
  const text = translations[currentLanguage].nav

  useEffect(() => {
    if (!isOpen) return

    function handleEscape(event) {
      if (event.key !== 'Escape') return

      setIsOpen(false)
      if (navRef.current.contains(document.activeElement) && toggleRef.current.getClientRects().length) {
        toggleRef.current.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <nav className="navbar" lang={currentLanguage} aria-label={text.mainNavigation} ref={navRef}>
      <div className="navbar__inner container">
        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? text.closeMenu : text.openMenu}
          onClick={() => setIsOpen(open => !open)}
          ref={toggleRef}
        >
          <span className="navbar__icon" aria-hidden="true"><span /></span>
          {text.information}
        </button>
        <ul id={menuId} className={`navbar__list${isOpen ? ' navbar__list--open' : ''}`}>
          {navigationItems.map(({ to, key }) => (
            <li key={to}>
              <NavLink className="navbar__link" to={to} onClick={() => setIsOpen(false)}>
                {text[key]}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
