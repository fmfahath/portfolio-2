import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='form'>
        <label>Your Name</label>
        <input type='text'></input>
        <label>Emil</label>
        <input type='email'></input>
        <label>Subject</label>
        <input type='text'></input>
        <label>Message</label>
        <textarea rows='6' placeholder='Type your message here..'></textarea>
        <button className='btn'>Submit</button>
    </div>
  )
}

export default Form