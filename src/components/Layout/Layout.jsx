import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import './Layout.css'

export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <div className="layout__content container">
        <Outlet />
      </div>
    </div>
  )
}
