import React from 'react';
import Project from './Project';

function PortfolioContainer() {
  const portfolio = [
    { name: "Seraph Station", img: "portfolio1.png", imgmd: "portfolio1md.png", imgxl: "portfolio1xl.png", year: "2019", month: "September" },
    { name: "Eebox Building", img: "portfolio2.png", imgmd: "portfolio2md.png", imgxl: "portfolio2xl.png", year: "2017", month: "August" },
    { name: "Federal II Tower", img: "portfolio3.png", imgmd: "portfolio3md.png", imgxl: "portfolio3xl.png", year: "2017", month: "March" },
    { name: "Project Del Sol", img: "portfolio4.png", imgmd: "portfolio4md.png", imgxl: "portfolio4xl.png", year: "2016", month: "January" },
    { name: "Le Prototype", img: "portfolio5.png", imgmd: "portfolio5md.png", imgxl: "portfolio5xl.png", year: "2015", month: "October" },
    { name: "228B Tower", img: "portfolio6.png", imgmd: "portfolio6md.png", imgxl: "portfolio6xl.png", year: "2015", month: "April" },
    { name: "Grand Edelweiss", img: "portfolio7.png", imgmd: "portfolio7md.png", imgxl: "portfolio7xl.png", year: "2013", month: "December" },
    { name: "Netcry Tower", img: "portfolio8.png", imgmd: "portfolio8md.png", imgxl: "portfolio8xl.png", year: "2012", month: "August" },
    { name: "Hypers", img: "portfolio9.png", imgmd: "portfolio9md.png", imgxl: "portfolio9xl.png", year: "2012", month: "January" },
    { name: "SXIV Tower", img: "portfolio10.png", imgmd: "portfolio10md.png", imgxl: "portfolio10xl.png", year: "2011", month: "March" },
    { name: "Trinity Bank Tower", img: "portfolio11.png", imgmd: "portfolio11md.png", imgxl: "portfolio11xl.png", year: "2010", month: "September" },
    { name: "Project Paramour", img: "portfolio12.png", imgmd: "portfolio12md.png", imgxl: "portfolio12xl.png", year: "2008", month: "February" },
  ];

  return (
    <section className='portfolio-container' aria-label='Portfolio Projects'>
      {portfolio.map((project, index) => (
        <Project 
          key={index} 
          img={project.img} 
          imgmd={project.imgmd} 
          imgxl={project.imgxl} 
          name={project.name} 
          year={project.year} 
          month={project.month} 
        />
      ))}
    </section>
  );
}

export default PortfolioContainer;