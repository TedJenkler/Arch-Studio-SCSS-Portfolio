import React, { useState } from 'react';
import burger from "../assets/images/burger.svg";
import logo from "../assets/images/logo.svg";
import { NavLink } from 'react-router-dom';

function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav>
        <NavLink to="/">
          <img className='logo' src={logo} alt='logo' />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
        <img onClick={() => setMenu(!menu)} className='burger' src={burger} alt='burger' />
      </nav>
      {menu && (
        <div className='mobilemenu'>
          <ul>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;