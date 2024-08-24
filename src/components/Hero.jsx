import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import arrow from '../assets/images/arrow.svg';
import { Link } from 'react-router-dom';
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
    <section className='hero' style={{ backgroundImage: `url(${data[project].bg})` }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={project}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{data[project].h1}</h1>
          <p>{data[project].p}</p>
          <Link to="/portfolio">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              See Our Portfolio
            </motion.p>
            <motion.img
              src={arrow}
              alt='arrow'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </Link>
        </motion.div>
      </AnimatePresence>
      <div className='slider'>
        <a onClick={() => setProject(0)} id={project === 0 ? 'selected' : ''}><span>01</span></a>
        <a onClick={() => setProject(1)} id={project === 1 ? 'selected' : ''}><span>02</span></a>
        <a onClick={() => setProject(2)} id={project === 2 ? 'selected' : ''}><span>03</span></a>
        <a onClick={() => setProject(3)} id={project === 3 ? 'selected' : ''}><span>04</span></a>
      </div>
    </section>
  );
}

export default Hero;