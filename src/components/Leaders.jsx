import React from 'react'
import Person from './Person';
import jake from '../assets/images/jake.png';
import thompson from '../assets/images/thompson.png';
import jackson from '../assets/images/jackson.png';
import maria from '../assets/images/maria.png';

function Leaders() {
  return (
    <section className='leaders'>
        <h2>The Leaders</h2>
        <div>
          <Person img={jake} h2="Jake Richards" p="Chief Architect" />
          <Person img={thompson} h2="Thompson Smith" p="Head of Finance" />
          <Person img={jackson} h2="Jackson Rourke" p="Lead Designer" />
          <Person img={maria} h2="Maria Simpson" p="Senior Architect" />
        </div>
    </section>
  )
}

export default Leaders