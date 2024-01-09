import React, { ChangeEvent, useReducer, useState } from 'react';
import './App.css';
import Article from './components/Article';
import InputForm from './components/InputForm';

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialState: State = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

const enum REDUCER_ACTION_TYPE{
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  PASSWORD
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  value: string
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

  return (
    <div className="App container">
      <Article />
      <InputForm 
        state={state}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
      />
    </div>
  );
}

export default App;
