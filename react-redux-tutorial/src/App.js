import React from 'react';
import logo from './logo.svg';
import Counter from './components/Counter';
import Todos from './components/Todos'
import './App.css';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div>
      <CounterContainer/>
      <hr/>
      <Todos/>
    </div>
  );
}

export default App;
