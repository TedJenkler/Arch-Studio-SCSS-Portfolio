import React from 'react'
import PortfolioContainer from '../components/PortfolioContainer'
import tabletdesign2 from '../assets/images/tabletdesign2.png'

function Portfolio() {
  return (
    <main className='portfoliopage' aria-label='Portfolio Page'>
        <img className='tabletdesign' src={tabletdesign2} alt='Responsive tablet design example from our portfolio' />
        <PortfolioContainer />
    </main>
  )
}

export default Portfolio