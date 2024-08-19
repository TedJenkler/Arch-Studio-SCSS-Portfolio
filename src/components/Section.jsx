import React from 'react'
import sectionimg from '../assets/images/sectionimg.jpg';

function Section() {
  return (
    <section className='section'>
        <div className='design-'></div>
        <h2 className='design-md'>Welcome</h2>
        <div className='content'>
          <h2>Welcome to Arch Studio</h2>
          <p>We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.</p>
          <br></br>
          <p>Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.</p>
          <br></br>
          <p>We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.</p>
        </div>
        <div className='img-container'>
          <img src={sectionimg} alt='section img' />
        </div>
    </section>
  )
}

export default Section