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

export const Accounts = () => {
  const { actions } = useContext(GlobalContext);

  const quantities = actions.map(actions => actions.quantity);

  const add = quantities
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0);

  const sub = (
    quantities.filter(item => item > 0).reduce((acc, item) => (acc += item), 0) * -1
  );

  return (
    <>
    <div className="accounts-container">
    <div>
        <h3>Income</h3>
        <p className="add money">{money_format(add)}</p>
    </div>
    <div>
        <h3>Expenses</h3>
        <p className="sub money">{money_format(sub)}</p>
    </div>
    </div>
    </>
  )
}
