import React from 'react';
import arrow from '../assets/images/arrow.svg';
import { Link } from 'react-router-dom';

function AboutUsLink() {
  return (
    <section className='aboutuslink-container' aria-labelledby='aboutuslink-heading'>
      <h2 id='aboutuslink-heading'>Small team, big ideas</h2>
      <Link to="/about" className='aboutus-link' aria-label="Learn more about us">
        <p>About Us</p>
        <img src={arrow} alt='Arrow icon pointing to the right' />
      </Link>
    </section>
  );
}

export default AboutUsLink;