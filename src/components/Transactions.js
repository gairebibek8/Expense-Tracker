import React, { useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Transactions = () => {
  const[description, setDescription] = useState('')
  const[quantity, setQuantity] = useState(0)

  const {addActions} = useContext(GlobalContext)

  const onSubmit = e => {
    e.preventDefault();

    const newActions = {
        id: Math.floor(Math.random() * 100000000),
        description,
        quantity: +quantity
    }

    addActions(newActions);
  }

    return (
    <>
        <div>
            <h3>Enter a new transcation.</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" value ={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your transaction's description."/>
                </div>
                <div className="form-control">
                    <label htmlFor="quantity">Quantity 
                    <br>A negative quantity will be accounted for an expense.</br>
                    <br>A positive quantity will be accounted for as income.</br>
                    </label>
                    <input type="number" value ={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter your transaction's quantity."/>
                </div>
                <button className="btn">Add transaction to your history</button>
            </form>
        </div>
    </>
  )
}
