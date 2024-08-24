import React from 'react';
import linkedin from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';

function Person({ img, h2, p }) {
  return (
    <article className='person' aria-label={`Profile of ${h2}`}>
      <img src={img} alt={`Portrait of ${h2}`} />
      <div className='social'>
        <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer' aria-label={`${h2}'s Linkedin profile`}>
          <img src={linkedin} alt='LinkedIn logo' />
        </a>
        <a href='https://www.twitter.com/' target='_blank' rel='noopener noreferrer' aria-label={`${h2}'s Twitter profile`}>
          <img src={twitter} alt='Twitter logo' />
        </a>
      </div>
      <div>
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </article>
  );
}

export default Person;