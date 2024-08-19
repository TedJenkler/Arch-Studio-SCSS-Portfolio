import React from 'react'
import arrow from '../assets/images/arrow.svg';

function Hero() {
  return (
    <section className='hero'>
      <h1>Project Paramour</h1>
      <p>Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
      <button>
        <p>See Our Portfolio</p>
        <img src={arrow} alt='arrow' />
      </button>
      <div className='slider'>
        <button id='selected'><span>01</span></button>
        <button><span>02</span></button>
        <button><span>03</span></button>
        <button><span>04</span></button>
      </div>
    </section>
  )
}

export default Hero