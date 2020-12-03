import React, { useContext, useState } from 'react';
import {transactionContext} from "./transContext"

function ExpenseTrack(){  
    let {transactions,addTransaction}=useContext(transactionContext)
    let [newDesc,setDesc]=useState("")
    let [newAmount,setAmount]=useState(0)

    const handleAddition=((ev)=>{
        ev.preventDefault()
        addTransaction({
            amount:newAmount,
            desc:newDesc
        })
    })
    
    return <div className="app-container">
        <h1>Expense Track</h1>
        <h3 className="balance">Your Balance <br/>$509</h3>
        <div className="expense-container">
            <h4>IONCOME <br/>$700</h4>
            <h4>EXPENSE <br/>$200</h4>
        </div>
        <h3>History</h3> <hr/>
        <ul className="transaction-list">
            {transactions.map ((transObj,ind)=>{
                return <li key={ind}>
                <span>{transObj.desc}</span>
                <span>${transObj.amount}</span>
            </li>
            })}
        </ul>
        <h3 className="add">Add new transaction</h3>
        <form className="form" onSubmit={handleAddition}>
            <label>
                Description <br/>
                <input type="text" onChange={(ev)=>setDesc(ev.target.value)} />
            </label>
            <label>
                Amount <br/>
                <input type="number" onChange={(ev)=>setAmount(ev.target.value)}/>
            </label>
            <label>
                <input type="submit"  />
            </label>
        </form>
         
    </div>
}
export default ExpenseTrack;
