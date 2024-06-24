import React from 'react';
import './Footeralter.css';
import ContactInfo from './ContactInfo';

const Footeralter = () => {
  return (
    <div className='footer_container'>
      <ContactInfo/>
      <div className='logo'>
        <i class="fa-solid fa-sun" /><i class="fa-solid fa-s" /><i class="fa-solid fa-u" /><i class="fa-solid fa-n" /><i class="fa-solid fa-s" /><i class="fa-solid fa-t" /><i class="fa-solid fa-a" /><i class="fa-solid fa-r" /><i class="fa-solid fa-star" />
      </div>
      <div className='footer_text'>
        <p>SUNSTAR &copy;2024 All Rights Reserved. </p>
      </div>
    </div>
  );
}

export default Footeralter;
