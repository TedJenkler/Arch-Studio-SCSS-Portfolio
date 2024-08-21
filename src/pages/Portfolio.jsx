import React from 'react'
import PortfolioContainer from '../components/PortfolioContainer'
import tabletdesign2 from '../assets/images/tabletdesign2.png'

function Portfolio() {
  return (
    <main className='portfoliopage'>
        <img className='tabletdesign' src={tabletdesign2} alt='tablet design' />
        <PortfolioContainer />
    </main>
  )
}

export default Portfolio