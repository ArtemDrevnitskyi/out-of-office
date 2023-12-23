import React from 'react';

import './styles.css';

const Person = ({ photo }) => (<div className='person-container'>
  <img
    src={photo}
    alt={photo}
    width='100%'
    height='auto'
  />
</div>);

export default Person;