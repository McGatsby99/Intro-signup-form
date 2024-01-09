import React, { ChangeEvent, FormEvent, useEffect, useReducer, useState } from 'react';
import './App.css';
import Article from './components/Article';
import InputForm from './components/InputForm';
import { handleErrors } from './handleErrors';

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rerender: boolean;
  
}

const initialState: State = {
  firstName: '',
  lastName: '',
  email: '',
  password: '', 
  rerender: false
}

const enum REDUCER_ACTION_TYPE{
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  PASSWORD,
  RERENDER
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  value: string | boolean
}

const reducer = (state = initialState, action: ReducerAction): State =>{
  switch (action.type) {
    case REDUCER_ACTION_TYPE.FIRSTNAME:
      return Object.assign({}, state, {
        firstName: action.value
      });
    case REDUCER_ACTION_TYPE.LASTNAME:
      return Object.assign({}, state, {
        lastName: action.value
      });
    case REDUCER_ACTION_TYPE.EMAIL:
      return Object.assign({}, state, {
        email: action.value
      });
    case REDUCER_ACTION_TYPE.PASSWORD:
      return Object.assign({}, state, {
       password: action.value 
      });
    case REDUCER_ACTION_TYPE.RERENDER:
      return Object.assign({}, state, {
        errors: action.value 
      });
    default:
      return state;
  }
};



const App: React.FC = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFirstName = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: REDUCER_ACTION_TYPE.FIRSTNAME,
      value: e.target.value
    })
  }

  const handleLastName = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: REDUCER_ACTION_TYPE.LASTNAME,
      value: e.target.value
    })
  }

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: REDUCER_ACTION_TYPE.EMAIL,
      value: e.target.value
    })
  }

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) =>{
    dispatch({
      type: REDUCER_ACTION_TYPE.PASSWORD,
      value: e.target.value
    })
  }

  const handlerRerender = () =>{
    dispatch({
      type: REDUCER_ACTION_TYPE.RERENDER,
      value: !state.rerender
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    console.log('submit')
    e.preventDefault()
    handleErrors()
    if(document.getElementsByClassName('error').length >1){
      handlerRerender();
    }
  }


  return (
    <div className="App container">
      <Article />
      <InputForm 
        state={state}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
        handleSubmit={handleSubmit}
        handleRerender={handlerRerender}
      />
    </div>
  );
}

export default App;
