import Logo from '../../assets/logo.jpg'
import React from 'react'
import  './navbar.css'

const NavBar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu"></ul>
        <button></button>
      </div>
    </nav>
  )
}

export default NavBar