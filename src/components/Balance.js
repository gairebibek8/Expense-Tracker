import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//Function that formats the money
function money_format(number){
  let p = number.toFix(2).split('.');
  return(
    '$' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse('')
      .reduce(function(acc, number, i, orig){
        return number === '-' ? acc : number + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
      '-' +
      p[1]
  );
}

export const Balance = () => {
  const { actions } = useContext(GlobalContext);

  const quantities = actions.map(actions => actions.quantity);

  const sum = quantities.reduce((acc, item) => (acc += item), 0);

  return (
    <>
        <h2>Your Current Balance</h2>
        <h3>{(money_format(sum))}</h3>
    </>
  )
}
