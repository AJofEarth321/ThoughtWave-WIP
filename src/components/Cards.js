import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
// import twGroup from '../images/twGroup';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out what makes the<br /> ThoughtWave approach so powerful!</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                   <CardItem 
                   src={require('../images/twGroup.jpg')}
                   text="Why Meditation Works"
                   label='Explore'
                   path="/impact"
                /> 
                     <CardItem 
                   src={require('../images/twSmiles.jpg')}
                   text="Mind/Body well-being, and beyond"
                   label=''
                   path="/impact"
                /> 
                   
                </ul>
            </div>
        </div>   
    </div>
  )
}

export default Cards