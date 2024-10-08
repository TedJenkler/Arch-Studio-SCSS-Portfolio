import React from 'react';
import section2img from '../assets/images/section2img.jpg';

function Section2() {
  return (
    <section className='section2'>
      <div>
        <div className='design-'></div>
        <h2>Our Heritage</h2>
        <p>Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.</p>
        <br></br>
        <p>Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.</p>
        <br></br>
        <p>Our small team of world-class professionals provides input on every project.</p>
      </div>
      <img src={section2img} alt='Our team of architects working on projects' className='section2-img' />
    </section>
  )
}

export default Section2;