import React from 'react';
import '../App.css';
// import {Button} from './Button1.js';
import './Section.css';
import BgVideo from '../videos/solarsystem.mp4';


function Section() {
  return (
    <div className='section-container'>
      
      <video autoplay='autoplay' loop muted >
        <source src={BgVideo} type="video/mp4"/>
      </video>
    
      <h1 className='title'>日星紙器企業有限公司</h1>
      <h1 className='slogan'>高品質紙箱產品</h1>
      <h3 className='subtitle'>SUNSTAR Enterprise</h3>
      <p>High Quality Carton Products!</p>
      {/* <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET START
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            WATCH TRAILER<i className='far fa-play-circle'/>
        </Button>
      </div> */}
    </div>
  );
}

export default Section;
