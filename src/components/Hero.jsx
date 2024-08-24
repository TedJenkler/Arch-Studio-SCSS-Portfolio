import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/images/arrow.svg';
import bg1 from '../assets/images/herobgdesktop.png';
import bg2 from '../assets/images/bg2.png';
import bg3 from '../assets/images/bg3.png';
import bg4 from '../assets/images/bg4.png';

function Hero() {
  const [project, setProject] = useState(0);

  const data = [
    { h1: 'Project Paramour', p: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.', bg: bg1 },
    { h1: 'Seraph Station', p: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.', bg: bg2 },
    { h1: 'Federal II Tower', p: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.', bg: bg3 },
    { h1: 'Trinity Bank Tower', p: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.', bg: bg4 }
  ];

  return (
    <section 
      className='hero' 
      style={{ backgroundImage: `url(${data[project].bg})` }}
      aria-label={`${data[project].h1} project details`}
    >
      <h1>{data[project].h1}</h1>
      <p>{data[project].p}</p>
      <Link to="/portfolio">
        <p>See Our Portfolio</p>
        <img src={arrow} alt='arrow' />
      </Link>
      <div className='slider' aria-label="Project navigation">
        <a 
          onClick={() => setProject(0)} 
          id={project === 0 ? 'selected' : ''} 
          aria-current={project === 0 ? 'true' : 'false'}
        >
          <span>01</span>
        </a>
        <a 
          onClick={() => setProject(1)} 
          id={project === 1 ? 'selected' : ''} 
          aria-current={project === 1 ? 'true' : 'false'}
        >
          <span>02</span>
        </a>
        <a 
          onClick={() => setProject(2)} 
          id={project === 2 ? 'selected' : ''} 
          aria-current={project === 2 ? 'true' : 'false'}
        >
          <span>03</span>
        </a>
        <a 
          onClick={() => setProject(3)} 
          id={project === 3 ? 'selected' : ''} 
          aria-current={project === 3 ? 'true' : 'false'}
        >
          <span>04</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;