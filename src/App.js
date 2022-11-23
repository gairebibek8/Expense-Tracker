import React from 'react';
import { Title } from './components/Title';
import { Balance } from './components/Balance';
import { Accounts } from './components/Accounts';
import { History } from './components/History';
import './App.css';


function App() {
  return (
    <div className="App">
      <Title/>
        <div className="container">
          <Balance/>
          <Accounts/>
          <History/>
        </div>
    </div>
  );
}

export default App;
