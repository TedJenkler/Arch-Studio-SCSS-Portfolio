import React from 'react';
import arrow from '../assets/images/arrow2.png';
import LeafletMap from './LeafletMap';

function ContactSection() {
  return (
    <section className='contact-section' aria-labelledby='contact-section-heading'>
      <div className='section-design'></div>
      
      <div className='contact-details-wrapper'>
        <h2 id='contact-section-heading'>Contact Details</h2>
        
        <div className='office-info'>
          <h3>Main Office</h3>
          <div className='office-details'>
            <div className='contact-info'>
              <p>Email: <a href="mailto:archone@mail.com">archone@mail.com</a></p>
              <p>Address: 1892 Chenoweth Drive TN</p>
              <p>Phone: <a href="tel:123-456-3451">123-456-3451</a></p>
            </div>
            <button className='map-button' aria-label='View Main Office on Map'>
              <p>View on Map</p>
              <img src={arrow} alt='Arrow icon pointing to the right' />
            </button>
          </div>
        </div>

        <div className='office-info'>
          <h3>Office II</h3>
          <div className='office-details'>
            <div className='contact-info'>
              <p>Email: <a href="mailto:archtwo@mail.com">archtwo@mail.com</a></p>
              <p>Address: 3399 Wines Lane TX</p>
              <p>Phone: <a href="tel:832-123-4321">832-123-4321</a></p>
            </div>
            <button className='map-button' aria-label='View Office II on Map'>
              <p>View on Map</p>
              <img src={arrow} alt='Arrow icon pointing to the right' />
            </button>
          </div>
        </div>
      </div>
      
      <div className='map-image'>
        <LeafletMap />
      </div>
    </section>
  );
}

export default ContactSection;