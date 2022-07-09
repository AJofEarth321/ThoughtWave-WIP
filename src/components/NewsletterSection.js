import React from 'react'
import { Button } from './Button'
import './NewsletterSection.css'
import twBlueRhomboid from '../images/twBlueRhomboid.jpg'

function NewsletterSection() {
  return (
    <div className='newsletter-container'>
        <img src={twBlueRhomboid} alt="Newsletter" />
        <section className='newsletter-subscription'>
        <p className='newsletter-subscription-heading'>
            Sign up to receive news, program updates, and more!
          </p>
          <p className='newsletter-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input type="email" name="email" placeholder='Your Email' className='footer-input'/>
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
    </div>
  )
}

export default NewsletterSection