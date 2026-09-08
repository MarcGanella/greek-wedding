import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navigationItems = [
  { to: '/venue', label: 'Lugar y cómo llegar' },
  { to: '/program', label: 'Programa' },
  { to: '/travel', label: 'Viaje a Grecia' },
  { to: '/accommodation', label: 'Alojamientos' },
  { to: '/culture-food', label: 'Costumbres y comidas' },
  { to: '/local-places', label: 'Sitios de la zona' },
]

export default function Navbar() {
  return (
    <nav className="navbar container" aria-label="Navegación principal">
      <ul className="navbar__list">
        {navigationItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink className="navbar__link" to={to}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
