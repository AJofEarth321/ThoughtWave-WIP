import React from 'react';
import useForm from './UseForm';
import './ContactUsSection.css'; 

function ContactUsSection() {
  const { handleChange, values } = useForm();

  return (
    <div className='contact-us-container'>
    <div className='form-content-right'>
      <form className='form'>
        <h1>Let's get the conversation started!<br />Contact us by filling out the information below.</h1>
        <div className='form-inputs'>
          <label htmlFor='firstname' className='form-label'>
            First Name
            <input
            id='firstname'
            type='text'
            name='firstname' 
            className='form-input'
            placeholder='enter your first name'
            value={values.firstname}
            onChange={handleChange}
            />
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
            placeholder='enter you last name'
            value={values.lastname}
            onChange={handleChange}
            />
          </label>
        </div>
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email Address
            <input
            id='email'
            type='text'
            name='email' 
            className='form-input'
            placeholder='enter your email'
            value={values.email}
            onChange={handleChange}
            />
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
            placeholder='enter your state'
            value={values.state}
            onChange={handleChange}
            />
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
            placeholder='enter your message'
            value={values.message}
            onChange={handleChange}
            />
          </label>
        </div>
        <button className='form-input-btn' type='submit'>
          Submit
        </button>
      </form>
    </div>
    </div>
  )
}

export default ContactUsSection