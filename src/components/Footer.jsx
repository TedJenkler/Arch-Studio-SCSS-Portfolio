import React from 'react';
import logo from '../assets/images/logowhite.svg';
import arrow from '../assets/images/arrow.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer aria-label="Footer">
      <Link to="/" className='box' aria-label="Home">
        <img src={logo} alt='logo' />
      </Link>
      <ul>
        <Link to="/portfolio" aria-label="Portfolio">Portfolio</Link>
        <Link to="/about" aria-label="About Us">About Us</Link>
        <Link to="/contact" aria-label="Contact">Contact</Link>
      </ul>
      <Link className='button' to="/portfolio" aria-label="See Our Portfolio">
        <p>See Our Portfolio</p>
        <img src={arrow} alt='arrow' />
      </Link>
    </footer>
  );
}

export default Footer;