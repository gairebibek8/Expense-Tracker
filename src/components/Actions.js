import React from "react"

export const Actions = ({ actions }) => {
    const sign = actions.quantity < 0 ? '-' : '+';

    return (
    <>
    <li className={actions.amount < 0 ? 'sub' : 'add'}>
        {actions.description} <span>{sign}${Math.abs(actions.quantity)}</span>
        <button className="delete-btn">x</button>
    </li>
    </>
    )
}