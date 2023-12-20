import React from 'react'
import {BsTwitter,BsFacebook,BsInstagram,BsWhatsapp} from 'react-icons/bs'
import './Contact.css'
function Contact() {
  return (
    <div className='contact'>
      <div className='wrapper'>
        <h3>BE IN TOUCH WITH US:</h3>
        <div className='mail'>
            <input type='text' placeholder='please enter your email'/>
            <button>JOIN US</button>
        </div>
        <div className='ic'>
<BsFacebook/>
<BsInstagram/>
<BsTwitter/>
<BsWhatsapp/>
        </div>
      </div>
    </div>
  )
}

export default Contact
