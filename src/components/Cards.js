import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
// import twGroup from '../images/twGroup';

function Cards() {
  return (
    <div className='cards'>
        <h1>Take A Look At What Makes the<br />ThoughtWave Process So Powerful</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                  <CardItem 
                   src={require('../images/twGroup.jpg')}
                   text="Why Meditation Works"
                  //  label='Engage'
                   path="/about"
                />
                  <CardItem 
                   src={require('../images/twSmiles.jpg')}
                   text="Mind/Body Well-Being and Beyond"
                  //  label='Benefits'
                   path="/impact"
                />
                  <CardItem 
                   src={require('../images/twField.jpg')}
                   text="A Comprehensive Approach"
                  //  label='Learn'
                   path="/curriculum"
                />
                   
                </ul>
            </div>
        </div>   
    </div>
  )
}

export default Cards