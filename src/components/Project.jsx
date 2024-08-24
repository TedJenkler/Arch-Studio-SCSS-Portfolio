import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Project({ img, imgmd, imgxl, name, year, month }) {
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
  const imageUrl = new URL(
    `../assets/images/${isMdScreen && !isXlScreen ? imgmd : isXlScreen ? imgxl : img}`, 
    import.meta.url
  ).href;

  return (
    <div className='portfolio' style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='overlay'></div>
      <h2>{name}</h2>
      <p>{month} {year}</p>
    </div>
  );
}

export default Project;