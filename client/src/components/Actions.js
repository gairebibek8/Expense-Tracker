import React, { useContext } from "react"
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from "../Reuse/format";


export const Actions = ({ actions }) => {
    const{ deleteActions } = useContext(GlobalContext);
    
    const sign = actions.quantity < 0 ? '-' : '+';

    return (
    <>
    <li className={actions.amount < 0 ? 'sub' : 'add'}>
        {actions.description} <span>{sign}{numberWithCommas(Math.abs(actions.quantity))}</span>
        <button onClick={() => deleteActions(actions._id)} className="delete-btn">X</button>
    </li>
    </>
    )
}