import React, { useState, useEffect } from 'react';

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
    <article className='portfolio' style={{ backgroundImage: `url(${imageUrl})` }} aria-label={`Project ${name} from ${month} ${year}`}>
      <div className='overlay' aria-hidden="true"></div>
      <h2>{name}</h2>
      <p>{month} {year}</p>
    </article>
  );
}

export default Project;