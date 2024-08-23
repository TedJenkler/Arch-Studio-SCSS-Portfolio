import React from 'react'
import logo from '../assets/images/logowhite.svg';
import arrow from '../assets/images/arrow.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
        <Link to="/" className='box'>
            <img src={logo} alt='logo' />
        </Link>
        <ul>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
        </ul>
        <Link className='button' to="/portfolio">
            <p>See Our Portfolio</p>
            <img src={arrow} alt='arrow' />
        </Link>
    </footer>
  )
}

export default Footer