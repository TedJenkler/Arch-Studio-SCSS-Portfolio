import React from 'react'
import burger from "../assets/images/burger.svg";
import logo from "../assets/images/logo.svg";

function Nav() {
  return (
    <nav>
        <img className='logo' src={logo} alt='logo' />
        <ul>
          <li>Portfolio</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <img className='burger' src={burger} alt='burger' />
    </nav>
  )
}

export default Nav