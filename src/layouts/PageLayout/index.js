import React from 'react';

import './styles.css';
import CompanyLogo from '../../components/CompanyLogo';

const PageLayout = ({ children, thoughtContent }) => {
  return (
    <div className='page-container'>
      {children}
      <div className='bubble-container'>
        <img
          src='/assets/images/thought_bubble.png'
          alt='thought_bubble_image'
        />
      </div>
      <CompanyLogo />
    </div>)
};

export default PageLayout;