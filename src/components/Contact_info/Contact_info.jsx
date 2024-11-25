import React from 'react'
import location from '../../assets/images/location.png'
import phone from '../../assets/images/phone.png'
import time from '../../assets/images/time.png'
import './Contact_info.css'

const Contact_info = () => {
  return (
    <div className='contact-container'>
      <div className='contact-text'>
        <h1>Get In Touch With Us</h1>
        <p>For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className='contact-grid'>
      <div className='contact-info'>
        <div className='contactss'>
            <span className="icon"><img src={location} alt=''></img></span>
            <p><strong>Address</strong><br/>Thalassery, Kannur, Kerala </p>
        </div>
        <div className='contactss'>
            <span className="icon"><img src={phone} alt=''></img></span>
            <p><strong>Phone</strong><br />Mobile: +(91) 7025615529 <br />Hotline: +(91) 9874390876</p>
        </div>
        <div className='contactss'>
            <span className="icon"><img src={time} alt=''></img></span>
            <p><strong>Working Time</strong><br />Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
        </div>
      </div>
      <form className='contact-form'>
        <label>Your Name</label>
        <input type='text' id='name' placeholder='abc'></input>
        <label>Email Address</label>
        <input type='email' id='email' placeholder='abc@def.com'></input>
        <label>Subject</label>
        <input type='text' id='name' placeholder='This is an optional'></input>
        <label>Message</label>
        <textarea id='message' placeholder='Hi! I`d like to ask about'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Contact_info
