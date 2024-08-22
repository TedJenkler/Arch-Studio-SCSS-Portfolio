import React from 'react'
import { useState, useEffect } from 'react';

function SubHero({ img, imgmd, imgxl, h1, p }) {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMdScreen = screenWidth >= 768;
  const isXlScreen = screenWidth >= 1440;

  return (
    <section className='subhero'>
      <img src={isMdScreen ? imgmd : img} alt='subhero' />
      <h1 className='sub-headermd'>About</h1>
      <div>
        <div className='hero-'></div>
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    </section>
  )
}

export default SubHero
