import React from 'react';
import SubHero from '../components/SubHero';
import Section2 from '../components/Section2';
import Leaders from '../components/Leaders';
import tabletdesign from '../assets/images/about.png';
import subhero1 from '../assets/images/subhero1.png';
import subhero1md from '../assets/images/subhero1md.png';

function About() {
  return (
    <main className='about' aria-label='About Page'>
      <img className='tabletdesign' src={tabletdesign} alt='Responsive tablet design example from our about page' />
      <SubHero 
        img={subhero1} 
        imgmd={subhero1md} 
        h1="Your team of professionals" 
        p="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings." 
      />
      <Section2 />
      <Leaders />
    </main>
  );
}

export default About;