import React from 'react';
import { Link } from 'react-router-dom';

import { contactButtonTitles } from '../../Content-Management';
import ContactButton from '../core/ContactButton';
import './styles.css';

const GoContact = () => (<div className='contact-sector'>
  {
    contactButtonTitles.map((link, id) => (
      <ContactButton key={id}>{link.title}</ContactButton>
    ))
  };
</div >);

export default GoContact;