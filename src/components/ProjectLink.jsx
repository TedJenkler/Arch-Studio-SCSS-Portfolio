import React from 'react';

function ProjectLink({ name, img }) {
  const imageUrl = new URL(`../assets/images/${img}`, import.meta.url).href;

  return (
    <div 
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