import React, { useState } from 'react';
import burger from '../assets/images/burger.svg';
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav aria-label="Main Navigation">
        <NavLink to="/">
          <img className='logo' src={logo} alt='Company Logo' />
        </NavLink>
        <ul className='nav-list'>
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
        <img
          onClick={() => setMenu(!menu)}
          className='burger'
          src={burger}
          alt='Toggle Menu'
          aria-expanded={menu}
          aria-controls="mobile-menu"
        />
      </nav>
      {menu && (
        <div className='mobilemenu' id="mobile-menu" aria-label="Mobile Navigation">
          <ul className='nav-list'>
            <li>
              <NavLink to="/portfolio" onClick={() => setMenu(false)}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenu(false)}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenu(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Nav;