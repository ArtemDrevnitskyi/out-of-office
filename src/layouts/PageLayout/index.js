import React from 'react';
import { Outlet } from 'react-router-dom';

import './styles.css';
import CompanyLogo from '../../components/core/CompanyLogo';
import Person from '../../components/core/Person';

const PageLayout = ({ children, person }) => {
  return (
    <div className='page-container'>
      {children}
      <Outlet />
      {person && <Person photo={person} />}
      <CompanyLogo />
    </div>)
};

export default PageLayout;