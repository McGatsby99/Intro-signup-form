import React from 'react'

const InputForm: React.FC = () => {
  return (
    <div className='inputForm'>
        <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>

        <form action="">
        <label htmlFor="first-name">
            <input 
              id='first-name'
              type="text" 
              placeholder='First Name'
            
            />
        </label>
        <label htmlFor="last-name">
            <input 
              id='last-name'
              type="text"
              placeholder='Last Name' 
              />
        </label>
        <label htmlFor="email">
            <input 
              id='email'
              type="email" 
              placeholder='Email Address' 
              
              />
        </label>
        <label htmlFor="password">
            <input 
              id='password'
              type="password" 
              placeholder='Password'
              />
        </label>
        <button>Claim your free trial</button>
        <p>By clicking the button, you are agreeing to our<span>Terms and Services</span></p>
        </form>
    </div>
  )
}

export default InputForm