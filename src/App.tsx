import React, { ChangeEvent, FormEvent, useReducer} from 'react';
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


  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>{

    if(e.target.id === 'first-name'){
      dispatch({
        type: REDUCER_ACTION_TYPE.FIRSTNAME,
        value: e.target.value
      })
    }

    if(e.target.id === 'last-name'){
      dispatch({
        type: REDUCER_ACTION_TYPE.LASTNAME,
        value: e.target.value
      })
    }

    if(e.target.id === 'email'){
      dispatch({
        type: REDUCER_ACTION_TYPE.EMAIL,
        value: e.target.value
      })
    }

    if(e.target.id === 'password'){
      dispatch({
        type: REDUCER_ACTION_TYPE.PASSWORD,
        value: e.target.value
      })
    }
  }


  const handleRerender = () =>{
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
      handleRerender();
    }
  }


  return (
    <div className="App container">
      <Article />
      <InputForm 
        state={state}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleRerender={handleRerender}
      />
    </div>
  );
}

export default App;
