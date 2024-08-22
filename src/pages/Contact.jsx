import React from 'react'
import SubHero from '../components/SubHero';
import contact from '../assets/images/contact.png';
import contactmd from '../assets/images/contact-md.png';
import ContactSection from '../components/ContactSection';

function Contact() {
  return (
    <main className='contact'>
        <SubHero img={contact} imgmd={contactmd} h1="Tell us about your project" p="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!" />
        <ContactSection />
    </main>
  )
}

export default Contact