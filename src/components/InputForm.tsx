import React from 'react'

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface Props{
  state: State,
  handleFirstName: () => void,
  handleLastName: () => void,
  handleEmail: () => void,
  handlePassword: () => void  
}

const InputForm: React.FC <Props> = ({ state, handleEmail, handleFirstName, handleLastName, handlePassword}) => {
  return (
    <div className='inputForm'>
        <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>

        <form action="">
        <label htmlFor="first-name">
            <input 
              id='first-name'
              type="text" 
              value={state.firstName}
              onChange={handleFirstName}
              placeholder='First Name'
            />
        </label>
        <label htmlFor="last-name">
            <input 
              id='last-name'
              type="text"
              value={state.lastName}
              onChange={handleLastName}
              placeholder='Last Name' 
              />
        </label>
        <label htmlFor="email">
            <input 
              id='email'
              type="email" 
              value={state.email}
              onChange={handleEmail}
              placeholder='Email Address' 
              
              />
        </label>
        <label htmlFor="password">
            <input 
              id='password'
              type="password"
              value={state.password}
              onChange={handlePassword}
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