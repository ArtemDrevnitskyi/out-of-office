import React from 'react';

import './styles.css';

const Bubble = ({ thoughtContent }) => {
  return (<div className='bubble-container'>
    <img
      src='/assets/images/thought_bubble.png'
      alt='bubble_image'
      width='100%'
      height='auto'
    />
    <div className='buble-content'>
      {
        thoughtContent.split('\n')
          .map((sentence, index) => <p key={index}>{sentence}</p>)
      }
    </div>
  </div>);
};

export default Bubble;