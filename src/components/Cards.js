import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Take a look at the data!</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-items'>
                   {/* <CardItem />  */}
                </ul>
            </div>
        </div>   
    </div>
  )
}

export default Cards