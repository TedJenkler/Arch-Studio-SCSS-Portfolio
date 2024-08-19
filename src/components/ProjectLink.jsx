import React, { useEffect, useState } from 'react';

function ProjectLink({ name, img, imgXl, imgMd, index }) {
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
  const isXlScreen = screenWidth >= 1140;
  const imageUrl = new URL(`../assets/images/${isMdScreen && !isXlScreen ? imgMd : isXlScreen ? imgXl : img }`, import.meta.url).href;

  return (
    <div 
      key={index}
      className='project' 
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className='bgfilter'></div>
      <h3>{name}</h3>
      <a>View All Projects</a>
    </div>
  );
}

export default ProjectLink;