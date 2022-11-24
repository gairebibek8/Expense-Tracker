import React, { useState } from 'react'

export const UserInfo = () => {

const[name, setName] = useState('')
const[status, setStatus] = useState('')
const[profession, setProfession] = useState('')
const[budget, setBudget] = useState('')
const[income, setIncome] = useState('')

const onSubmit = e => {
    e.preventDefault();
}
    
  return (
    <div className='form-container'>
        <form>
            <h2>User Info</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="description">Name</label>
                        <input type="text" value ={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name."/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="status">Status</label>
                        <input type="text" value ={status} onChange={(e) => setStatus(e.target.value)} placeholder="Enter your relationship status."/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="profession">Profession</label>
                        <input type="text" value ={profession} onChange={(e) => setProfession(e.target.value)} placeholder="Enter your profession."/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="budget">Budget</label>
                        <input type="text" value ={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter your ideal budget."/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="income">Typical income</label>
                        <input type="text" value ={income} onChange={(e) => setIncome(e.target.value)} placeholder="Enter your typical income."/>
                    </div>
                <button className="user">Add info</button>
            </form>
        </form>
    </div>
  )
}
