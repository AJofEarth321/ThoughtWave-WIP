import React from 'react';
import './ContactUsSection.css'; 

function ContactUsSection() {
  return (
    <div className='form-content-right'>
      <form className='form'>
        <h1>Contact us by filling out the information below.</h1>
        <div className='form-inputs'>
          <label htmlFor='firstname' className='form-label'>
            First Name
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
            Last Name
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
            Your Email Address
            <input
            id='email'
            type='text'
            name='email' 
            className='form-input'
            placeholder='enter your email' />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='state' className='form-label'>
            Which State are you in?
            <input
            id='state'
            type='text'
            name='state' 
            className='form-input'
            placeholder='enter your state' />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='message' className='form-label'>
            Message
            <input
            id='message'
            type='text'
            name='message' 
            className='form-input'
            placeholder='enter your message' />
          </label>
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactUsSection