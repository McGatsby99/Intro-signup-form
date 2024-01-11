import React, { ChangeEvent, FormEvent, useEffect } from 'react'
import errorIcon from '../images/icon-error.svg'
import { removeErrors } from '../handleErrors';
// import { removeErrors } from '../handleErrors';

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rerender: boolean;  
}

interface Props{
  state: State,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void,
  handleRerender: () => void,  
}

const InputForm: React.FC <Props> = ({ state, handleInput, handleSubmit, handleRerender}) => {

  useEffect(()=>{
   removeErrors() 
   console.log(state.lastName)
  }
  ,[state] )

  return (
    <div className='inputForm' >
        <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>

        <form action="" onSubmit={handleSubmit} noValidate>
        <label htmlFor="first-name">
            <input 
              id='first-name'
              type="text" 
              value={state.firstName}
              onChange={handleInput}
              onFocus={() =>{
                document.getElementById('first-name')?.classList?.remove('error');
                removeErrors()
                handleRerender();
              }
              }
              placeholder='First Name'
            />
        </label>
        <p className='error-msg'>{document.getElementById('first-name')?.classList?.contains('error')? `First Name cannot be empty`: ''}</p>

        <img className={document.getElementById('first-name')?.classList?.contains('error')? `error-icon`: ''} src={errorIcon} alt="error icon" width={20}/>

        <label htmlFor="last-name">
            <input 
              id='last-name'
              type="text"
              value={state.lastName}
              onChange={handleInput}
              onFocus={() =>{
                document.getElementById('last-name')?.classList?.remove('error')
                removeErrors();
                handleRerender();
              }
              }
              placeholder='Last Name' 
              />
        </label>

        <p className='error-msg'>{document.getElementById('last-name')?.classList?.contains('error')? `Last Name cannot be empty`: ''}</p>
        <img className={document.getElementById('last-name')?.classList?.contains('error')? `error-icon`: ''} src={errorIcon} alt="error icon"  width={20}/>

        <label htmlFor="email">
            <input 
              id='email'
              type="email" 
              value={state.email}
              onChange={handleInput}
              onFocus={() =>{
                document.getElementById('email')?.classList?.remove('error')
                removeErrors();
                handleRerender();
              }
              }
              placeholder='Email Address' 
              
              />
        </label>

        <p className='error-msg'>{document.getElementById('email')?.classList?.contains('error')? 'Looks like this is not an email': ''}</p>
        <img className={document.getElementById('email')?.classList?.contains('error')? `error-icon`: ''} src={errorIcon} alt="error icon" width={20}/>

        <label htmlFor="password">
            <input 
              id='password'
              type="password"
              value={state.password}
              onChange={handleInput}
              onFocus={() =>{
                document.getElementById('password')?.classList?.remove('error')
                removeErrors();
                handleRerender();
              }
              }
              placeholder='Password'
              />
        </label>

        <p className='error-msg'>{document.getElementById('password')?.classList?.contains('error')? `Password cannot be empty`: ''}</p>
        <img className={document.getElementById('password')?.classList?.contains('error')? `error-icon`: ''} src={errorIcon} alt="error icon" width={20}/>

        <button type='submit'>Claim your free trial</button>
        <p>By clicking the button, you are agreeing to our<span>Terms and Services</span></p>
        </form>
    </div>
  )
}

export default InputForm