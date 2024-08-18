import React from 'react'
import arrow from '../assets/images/arrow.svg';

function AboutUsLink() {
  return (
    <section className='aboutuslink-container'>
        <h2>Small team, big ideas</h2>
        <button>
            <p>About Us</p>
            <img src={arrow} alt='arrow' />
        </button>
    </section>
  )
}

export default AboutUsLink
