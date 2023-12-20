import React from 'react'
import './ContactForm.css'
function ContactForm() {
  return (
    <>
      <div className='login-signup'>
        <div className='login-signup-container'>
          <h1>Signup</h1>
          <div className='login-signup-fields'>
            <input type='text' placeholder='Enter Your Name'/>
            <input type='email' placeholder='Enter Your Email'/>
            <input type='password' placeholder='Enter Your Password'/>
          </div>
           <button>Continue</button>
            <p className='login-signup-login'>Already have an account? <span>Login</span></p>
            <div className='login-signup-agree'>
              <input type='checkbox' name='' id=''/>
              <p>By continuing ,i agree to the terms of use & privacy policy</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm;