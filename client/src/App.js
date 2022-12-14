import React from 'react';
import { Title } from './components/Title';
import { Balance } from './components/Balance';
import { Accounts } from './components/Accounts';
import { History } from './components/History';
import { Transactions } from './components/Transactions';
import { UserInfo } from './components/UserInfo';

import { GlobalProvider } from './context/GlobalState';

import './App.css';


function App() {
  return (
    <GlobalProvider>
      <Title/>
        <div className="form-container">
          <UserInfo/>
        </div>
        <div className="container">
          <Balance/>
          <Accounts/>
          <History/>
          <Transactions/>
        </div>
    </GlobalProvider>
  );
}

export default App;