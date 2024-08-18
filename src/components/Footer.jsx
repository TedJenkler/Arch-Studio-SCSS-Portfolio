import React from 'react'
import logo from '../assets/images/logowhite.svg';
import arrow from '../assets/images/arrow.svg';

function Footer() {
  return (
    <footer>
        <div className='box'>
            <img src={logo} alt='logo' />
        </div>
        <ul>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>
        <button>
            <p>See Our Portfolio</p>
            <img src={arrow} alt='arrow' />
        </button>
    </footer>
  )
}

export default Footer
