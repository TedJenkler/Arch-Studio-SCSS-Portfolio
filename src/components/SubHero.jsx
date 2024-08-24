import React, { useState, useEffect } from 'react';

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
    <section className='subhero' aria-label='Subhero section'>
      <img 
          src={isMdScreen ? imgmd : img} 
          alt='subhero' 
          aria-label='Subhero image'
      />
      <h1 className='sub-headermd' aria-label='About section heading'>About</h1>
      <div>
        <div className='hero-' aria-hidden="true"></div>
        <h1 aria-label='Main heading'>{h1}</h1>
        <p aria-label='Main description'>{p}</p>
      </div>
    </section>
  )
}

export default SubHero;