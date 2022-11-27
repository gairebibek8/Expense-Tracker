import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../Reuse/format';



export const Balance = () => {
  const { actions } = useContext(GlobalContext);

  const quantities = actions.map(actions => actions.quantity);

  const sum = quantities.reduce((acc, item) => (acc += item), 0);

  return (
    <>
        <h2>Your Current Balance</h2>
        <h2>${numberWithCommas(sum)}</h2>
    </>
  )
}
