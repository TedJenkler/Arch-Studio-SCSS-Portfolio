import React from 'react'
import subhero1 from "../assets/images/subhero1.png";

function SubHero() {
  return (
    <section className='subhero'>
      <img src={subhero1} alt='subhero' />
      <div>
        <h1>Your team of professionals</h1>
        <p>Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.</p>
      </div>
    </section>
  )
}

export default SubHero
