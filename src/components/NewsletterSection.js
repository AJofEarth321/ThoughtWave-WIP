import React from 'react';
import { ButtonSubscribe } from './ButtonSubscribe';
import './NewsletterSection.css';

//this section is for newsletter sign up and is imported on the Home page

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
              <ButtonSubscribe buttonStyle='btn--outline'>SUBSCRIBE</ButtonSubscribe>
            </form>
          </div>
        </section>
    </div>
  )
}

export default NewsletterSection