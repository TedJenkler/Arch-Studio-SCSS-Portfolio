import React, { useState } from 'react';
import burger from "../assets/images/burger.svg";
import logo from "../assets/images/logo.svg";
import { Link } from 'react-router-dom';

function Nav() {

  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav>
        <Link to="/"><img className='logo' src={logo} alt='logo' /></Link>
        <ul>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <img onClick={() => setMenu(!menu)} className='burger' src={burger} alt='burger' />
      </nav>
      {menu && (
        <div className='mobilemenu'>
          <ul>
            <li><Link to="/portfolio" onClick={() => setMenu(false)}>Portfolio</Link></li>
            <li><Link to="/about" onClick={() => setMenu(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setMenu(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;