import React from 'react'
import burger from "../assets/images/burger.svg";
import logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link to="/"><img className='logo' src={logo} alt='logo' /></Link>
        <ul>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        <img className='burger' src={burger} alt='burger' />
    </nav>
  )
}

export default Nav