import React, { useState } from 'react'
import '../css/Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

function Navbar() {
  const [click, setclick] = useState(false)
  const handleClick = () => setclick(!click)
  const closeMobileMenu = () => setclick(false)

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-logo" onClick={closeMobileMenu}>
          Apex
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <img src={click ? 'close.png' : 'hamburger.png'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="about" className="nav-link" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" className="nav-link" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="gallery" className="nav-link" onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="contact" className="nav-link" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  )
}

export default Navbar
