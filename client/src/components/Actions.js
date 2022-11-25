import React, { useContext } from "react"
import { GlobalContext } from '../context/GlobalState';

//Function that formats the money
function money_format(number){
    let p = number.toFixed(2).split('.');
    return(
      '$' +
      p[0]
        .split('')
        .reverse()
        .reduce(function(acc, number, i, orig){
          return number === '-' ? acc : number + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
        '.' +
        p[1]
    );
  }

export const Actions = ({ actions }) => {
    const{ deleteActions } = useContext(GlobalContext);
    
    const sign = actions.quantity < 0 ? '-' : '+';

    return (
    <>
    <li className={actions.amount < 0 ? 'sub' : 'add'}>
        {actions.description} <span>{sign}{money_format(actions.quantity)}</span>
        <button onClick={() => deleteActions(actions.id)} className="delete-btn">X</button>
    </li>
    </>
    )
}