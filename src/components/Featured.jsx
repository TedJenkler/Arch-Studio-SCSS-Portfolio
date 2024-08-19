import React from 'react';
import arrow from '../assets/images/arrow.svg';
import ProjectLink from './ProjectLink';

function Featured() {
  
  const projects = [
    { name: "Project Del Sol", img: "project1.png", imgMd: "project1md.png", imgXl: "project1xl.png" },
    { name: "228B Tower", img: "project2.png", imgMd: "project2md.png", imgXl: "project2xl.png" },
    { name: "Le Prototype", img: "project3.png", imgMd: "project3md.png", imgXl: "project3xl.png" }
  ];

  return (
    <section className='featured'>
      <div className='featured-header'>
        <h2>Featured</h2>
        <button className='md-btn'>
          <p>See All</p>
          <img src={arrow} alt='arrow'/>
        </button>
      </div>
      <div className='project-container'>
      {projects.map((project, index) => (
        <ProjectLink 
          key={index} 
          name={project.name} 
          img={project.img} 
          imgMd={project.imgMd}
          imgXl={project.imgXl}
        />
      ))}
      </div>
      <button className='sm-btn'>
        <p>See All</p>
        <img src={arrow} alt='arrow'/>
      </button>
    </section>
  );
}

export default Featured;