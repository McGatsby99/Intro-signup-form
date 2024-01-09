import React from 'react';
import './App.css';
import Article from './components/Article';
import InputForm from './components/InputForm';

const App: React.FC = () => {
  return (
    <div className="App container">
      <Article />
      <InputForm/>
    </div>
  );
}

export default App;
