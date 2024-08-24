import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import AboutUsLink from '../components/AboutUsLink';
import Featured from '../components/Featured';
import tabletdesign from '../assets/images/tabletdesign.png';

function Home() {
  return (
    <main className='home' aria-label='Home Page'>
      <img className='tabletdesign' src={tabletdesign} alt='Responsive tablet design example from our portfolio' />
      <Hero />
      <Section />
      <AboutUsLink />
      <Featured />
    </main>
  );
}

export default Home;