import React from 'react';
import { Link } from 'react-router-dom';

import { contactButtonTitles } from '../../Content-Management';
import ContactButton from '../core/ContactButton';
import './styles.css';

const GoContact = () => (<div className='contact-sector'>
  {
    contactButtonTitles.map((link, id) => (
      <Link
        to={`/${link.path}`}
        style={{ textDecoration: 'none' }}
      >
        <ContactButton key={id}>{link.title}</ContactButton>
      </Link>))
  };
</div >);

export default GoContact;