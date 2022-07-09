import React from 'react'
import { Button } from './Button'
import './NewsletterSection.css'

function NewsletterSection() {
  return (
    <div className='newsletter-container'>
        <section className='newsletter-subscription'>
        <p className='newsletter-subscription-heading'>
            Sign up to receive news, program updates, and more!
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