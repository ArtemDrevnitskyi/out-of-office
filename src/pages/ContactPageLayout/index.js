import React from 'react';

import './styles.css';
import CompanyLogo from '../../components/core/CompanyLogo';
import Person from '../../components/core/Person';

const ContactPageLayout = ({ children, title, content, email, phone, person }) => {
  return (
    <div className='contact-container'>
      {person && <Person photo={person} />}
      <CompanyLogo />
    </div>)
};

export default ContactPageLayout;