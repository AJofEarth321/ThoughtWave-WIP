import React from 'react';
import './ContactUsSection.css'; 

function ContactUsSection() {
  return (
    <div className='form-content-right'>
      <form className='form'>
        <h1>Contact us by filling out the information below.</h1>
        <div className='form-inputs'>
          <label htmlFor='firstname' className='form-label'>
            First name
            <input
            id='firstname'
            type='text'
            name='firstname' 
            className='form-input'
            placeholder='enter your first name' />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='lastname' className='form-label'>
            Last name
            <input
            id='lastname'
            type='text'
            name='lastname' 
            className='form-input'
            placeholder='enter you last name' />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email
            <input
            id='email'
            type='text'
            name='email' 
            className='form-input'
            placeholder='enter your email' />
          </label>
        </div>
      </form>
    </div>
  )
}

export default ContactUsSection