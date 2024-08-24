import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import burger from '../assets/images/burger.svg';
import logo from '../assets/images/logo.svg';

function Nav({ menu, setMenu }) {
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
      <AnimatePresence>
        {menu && (
          <motion.div
            className='mobilemenu'
            id="mobile-menu"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;