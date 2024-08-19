import React from 'react'
import Hero from '../components/Hero'
import Section from '../components/Section'
import AboutUsLink from '../components/AboutUsLink'
import Featured from '../components/Featured'

function Home() {
  return (
    <main className='home'>
      <Hero />
      <Section />
      <AboutUsLink />
      <Featured />
    </main>
  )
}

export default Home
