import React from 'react';
import './NewsletterSection.css';
import { Button } from './Button';

function NewsletterSection() {
  return (
    <div className='newsletter-container'>
        <section className='newsletter-subscription'>
            <p className='newsletter-subscription-heading'>
                Sign up for our newsletter to receive program updates, news, and info
            </p>
            <br />
            <div className='input-areas'>
                <form>
                    <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    className='footer-input'
                />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
      </div>  
    </section>
</div>
  )
}

export default NewsletterSection