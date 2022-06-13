import React from 'react';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
// import twHead from "../../public/assets/twHead.jpg";
// import twHead from '../images/twHead.jpg';

function HeroSection() {
  return (
    <div className='hero-container'>
        {/* <img src={twHead} alt="Logo" /> */}
        <h1>Our Thoughts Matter</h1>
        <p>Join this amazing movement of the mind!</p>
        <div className="hero-btns">
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
            GET STARTED
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;