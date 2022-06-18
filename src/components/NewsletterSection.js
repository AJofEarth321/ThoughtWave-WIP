import React from 'react'
import { Button } from './Button'

function NewsletterSection() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Sign up for our newsletter to receive program updates, news, and info
            </p>
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