import React, { useContext } from 'react';
import { Actions } from './Actions';

import { GlobalContext } from '../context/GlobalState';

export const History = () => {
    const {actions} = useContext(GlobalContext);

    return (
    <>
    <div>
       <h3>Transactions</h3>
       <ul className="history">
        {actions.map(actions => (<Actions key={actions.id} actions={actions}/>))}
       </ul>
    </div>
    </>
  )
}
