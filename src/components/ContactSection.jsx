import React from 'react';
import arrow from '../assets/images/arrow2.png';
import LeafletMap from './LeafletMap';

function ContactSection() {
  return (
    <section className='contact-section'>
      <div className='section-design'></div>
        
      <div className='contact-details-wrapper'>
        <h2>Contact Details</h2>
        
        <div className='office-info'>
          <h3>Main Office</h3>
          <div className='office-details'>
            <div className='contact-info'>
              <p>Mail: archone@mail.com</p>
              <p>Address: 1892 Chenoweth Drive TN</p>
              <p>Phone: 123-456-3451</p>
            </div>
            <button className='map-button'>
              <p>View on Map</p>
              <img src={arrow} alt='View on map arrow' />
            </button>
          </div>
        </div>

        <div className='office-info'>
          <h3>Office II</h3>
          <div className='office-details'>
            <div className='contact-info'>
              <p>Mail: archtwo@mail.com</p>
              <p>Address: 3399 Wines Lane TX</p>
              <p>Phone: 832-123-4321</p>
            </div>
            <button className='map-button'>
              <p>View on Map</p>
              <img src={arrow} alt='View on map arrow' />
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