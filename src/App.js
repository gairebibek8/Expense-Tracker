import React from 'react';
import { Title } from './components/Title';
import { Balance } from './components/Balance';
import { Accounts } from './components/Accounts';
import './App.css';


function App() {
  return (
    <div className="App">
      <Title/>
        <div className="container">
          <Balance/>
          <Accounts/>
        </div>
    </div>
  );
}

export default App;
