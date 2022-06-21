import React from 'react';
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';
import twBlueProfile from '../images/twBlueProfile.jpg';

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src={twBlueProfile} alt="Logo" />
        <h1>An<br />Exploratory<br />Youth Meditation<br />Program</h1>
        <br />
        <p>Join this amazing<br />movement of the mind!</p>
        <div className='hero-btns'>
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