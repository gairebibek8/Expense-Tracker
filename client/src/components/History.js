import React, { useContext, useEffect } from 'react';
import { Actions } from './Actions';

import { GlobalContext } from '../context/GlobalState';

export const History = () => {
    const {actions, getActions } = useContext(GlobalContext);

    useEffect (() => {
      getActions();
      // eslint-disable-next-line
    }, []);

    return (
    <>
    <div>
       <h3>Transactions</h3>
       <ul className="history">
        {actions.map(actions => (<Actions key={actions._id} actions={actions}/>))}
       </ul>
    </div>
    </>
  )
}
