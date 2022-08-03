import React from 'react';
import useForm from './UseForm';
import validate from './ValidateInfo';
import './ContactUsSection.css'; 

function ContactUsSection({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(validate, submitForm);

  return (
    <div className='contact-us-container'>
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
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
            {errors.firstname && <p>{errors.firstname}</p>}
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
            {errors.lastname && <p>{errors.lastname}</p>}
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
            {errors.email && <p>{errors.email}</p>}
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
            {errors.state && <p>{errors.state}</p>}
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
            placeholder='enter a message (max 500 characters)'
            value={values.message}
            onChange={handleChange}
            />
            {errors.message && <p>{errors.message}</p>}
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