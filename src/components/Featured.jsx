import React from 'react'
import arrow from '../assets/images/arrow.svg';
import ProjectLink from './ProjectLink';

function Featured() {
  return (
    <section className='featured'>
        <div className='featured-header'>
            <h2>Featured</h2>
            <button className='md-btn'>
                <p>See All</p>
                <img src={arrow} alt='arrow'/>
            </button>
        </div>
        <ProjectLink name="Project Del Sol" img="project1.png" />
        <ProjectLink name="228B Tower" img="project2.png" />
        <ProjectLink name="Le Prototype" img="project3.png" />
        <button className='sm-btn'>
            <p>See All</p>
            <img src={arrow} alt='arrow'/>
        </button>
    </section>
  )
}

export default Featured