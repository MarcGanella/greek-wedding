import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header container">
      <NavLink to="/" end>Greek Wedding</NavLink>
    </header>
  )
}
