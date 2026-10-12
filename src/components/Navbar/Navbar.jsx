import { useEffect, useId, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { translations } from '../../i18n/translations.js'
import './Navbar.css'

const navigationItems = [
  { to: '/venue', key: 'venue', visible: true },
  { to: '/program', key: 'program', visible: true },
  { to: '/travel', key: 'travel', visible: true },
  { to: '/accommodation', key: 'accommodation', visible: false },
  { to: '/culture-food', key: 'cultureFood', visible: false },
  { to: '/local-places', key: 'localPlaces', visible: true },
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
          {navigationItems.filter(item => item.visible).map(({ to, key }) => (
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
