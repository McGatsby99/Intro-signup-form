import React, { ChangeEvent, FormEvent } from 'react'
import errorIcon from '../images/icon-error.svg'

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rerender: boolean;
  
}

interface Props{
  state: State,
  handleFirstName: (e: ChangeEvent<HTMLInputElement>) => void,
  handleLastName: (e: ChangeEvent<HTMLInputElement>) => void,
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void,
  handlePassword: (e: ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void,
  handleRerender: () => void 
}

const InputForm: React.FC <Props> = ({ state, handleEmail, handleFirstName, handleLastName, handlePassword, handleSubmit, handleRerender}) => {
  let firstName = document.getElementById('first-name') as HTMLInputElement
  let lastName = document.getElementById('last-name') as HTMLInputElement
  let email = document.getElementById('email') as HTMLInputElement
  let password = document.getElementById('password') as HTMLInputElement
  return (
    <div className='inputForm' >
        <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>

        <form action="" onSubmit={handleSubmit} noValidate>
        <label htmlFor="first-name">
            <input 
              id='first-name'
              type="text" 
              value={state.firstName}
              onChange={handleFirstName}
              onFocus={() =>{
                firstName?.classList?.remove('error');
                handleRerender();
              }
              }
              placeholder='First Name'
            />
        </label>
        <p className='error-msg'>{firstName?.classList?.contains('error')? `${firstName.placeholder} cannot be empty`: ''}</p>

        <img className={firstName?.classList?.contains('error')? `error-icon`: ''} src={errorIcon} alt="error icon" width={20}/>

        <label htmlFor="last-name">
            <input 
              id='last-name'
              type="text"
              value={state.lastName}
              onChange={handleLastName}
              onFocus={() =>{
                lastName?.classList?.remove('error')
                handleRerender();
              }
              }
              placeholder='Last Name' 
              />
        </label>

        <p className='error-msg'>{lastName?.classList?.contains('error')? `${lastName.placeholder} cannot be empty`: ''}</p>
        <img className={lastName?.classList?.contains('error')? `error-icon`: ''} src={errorIcon} alt="error icon"  width={20}/>

        <label htmlFor="email">
            <input 
              id='email'
              type="email" 
              value={state.email}
              onChange={handleEmail}
              onFocus={() =>{
                email?.classList?.remove('error')
                handleRerender();
              }
              }
              placeholder='Email Address' 
              
              />
        </label>

        <p className='error-msg'>{email?.classList?.contains('error')? 'Looks like this is not an email': ''}</p>
        <img className={email?.classList?.contains('error')? `error-icon`: ''} src={errorIcon} alt="error icon" width={20}/>

        <label htmlFor="password">
            <input 
              id='password'
              type="password"
              value={state.password}
              onChange={handlePassword}
              onFocus={() =>{
                password?.classList?.remove('error')
                handleRerender();
              }
              }
              placeholder='Password'
              />
        </label>

        <p className='error-msg'>{password?.classList?.contains('error')? `${password.placeholder} cannot be empty`: ''}</p>
        <img className={password?.classList?.contains('error')? `error-icon`: ''} src={errorIcon} alt="error icon" width={20}/>

        <button type='submit'>Claim your free trial</button>
        <p>By clicking the button, you are agreeing to our<span>Terms and Services</span></p>
        </form>
    </div>
  )
}

export default InputForm