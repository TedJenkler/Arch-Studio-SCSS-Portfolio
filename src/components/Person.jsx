import React from 'react'
import linkedin from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';

function Person({ img, h2, p }) {
  return (
    <div className='person'>
      <img src={img} alt={h2}/>
      <div className='social'>
        <img src={linkedin} alt='linkdin' />
        <img src={twitter} alt='twitter' />
      </div>
      <div>
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
  )
}

export default Person
