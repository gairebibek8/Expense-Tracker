import React from 'react';
import { Title } from './components/Title';
import { Balance } from './components/Balance';
import './App.css';


function App() {
  return (
    <div className="App">
      <Title/>
        <div className="container">
          <Balance/>
        </div>
    </div>
  );
}

export default App;
