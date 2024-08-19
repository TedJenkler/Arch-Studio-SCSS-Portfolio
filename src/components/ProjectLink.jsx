import React from 'react';

function ProjectLink({ name, img, imgMd, index }) {
  const isMdScreen = window.innerWidth >= 768;
  const imageUrl = new URL(`../assets/images/${isMdScreen ? imgMd : img }`, import.meta.url).href;

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