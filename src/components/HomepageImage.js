import React from 'react';
import banner from '../images/banner.jpg';
// import masterStyle from './master.css';

function HomepageImage() {

  const dummy = "I am not used.";

  return (
    <img src={banner} style={{maxWidth: '80%'}} alt='HomepageImage' />
  );
}

export default HomepageImage;
