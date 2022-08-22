import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

//this section showcases specific cards on the home page that link to other pages, and is imported on the Home page

function Cards() {
  return (
    <div className='cards'>
        <h1>Take a look at what ThoughtWave has to offer</h1>
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