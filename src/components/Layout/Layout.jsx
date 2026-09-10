import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import './Layout.css'

export default function Layout() {
  const [currentLanguage, setCurrentLanguage] = useState('ca')

  return (
    <div className="layout">
      <Header currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
      <Navbar currentLanguage={currentLanguage} />
      <div className="layout__content container">
        <Outlet context={{ currentLanguage }} />
      </div>
    </div>
  )
}
