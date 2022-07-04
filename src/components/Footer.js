import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Sign up to receive news, program updates, and more!
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input type="email" name="email" placeholder='Your Email' className='footer-input'/>
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <large className='website-rights'>ThoughtWave Ⓒ 2022</large>
            <div className='social-icons'>
              <Link className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
              >
                <i className='fab fa-facebook-f'></i>
              </Link>
              <Link className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              >
                <i className='fab fa-instagram'></i>
              </Link>
              <Link className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
              >
                <i className='fab fa-twitter'></i>
              </Link>
              <Link className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
              >
                <i className='fab fa-youtube'></i>
              </Link>
              <Link className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin'></i>
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Footer