import React from 'react'
import arrow from '../assets/images/arrow.svg';
import { Link } from 'react-router-dom';

function AboutUsLink() {
  return (
    <section className='aboutuslink-container'>
        <h2>Small team, big ideas</h2>
        <Link to="/about">
            <p>About Us</p>
            <img src={arrow} alt='arrow' />
        </Link>
    </section>
  )
}

export default AboutUsLink
