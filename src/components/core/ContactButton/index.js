import React from 'react';

import './styles.css';

const ContactButton = ({ children }) => (
  <div className='contact-btn'>
    <div className='btn-icon'>
      <img
        src='%PUBLIC_URL%/assets/icons/arrow-down.png'
        alt='arrow-down-icon'
      />
    </div>
    <h3 className='btn-title'>{children}</h3>
  </div>);

export default ContactButton;