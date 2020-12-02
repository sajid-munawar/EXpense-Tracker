import React from 'react'
function ExpenseTrack(){
    const transactions= [
        {amount:500, desc:"camera"},
        {amount:200, desc:"book"},
        {amount:300, desc:"Bike"}
    ]
    return <div className="app-container">
        <h1>Expense Track</h1>
        <h3 className="balance">Your Balance <br/>$500</h3>
        <div className="expense-container">
            <h4>IONCOME <br/>$700</h4>
            <h4>EXPENSE <br/>$200</h4>
        </div>
        <h3>History</h3> <hr/>
        <ul className="transaction-list">
            {transactions.map ((transObj,ind)=>{
                return <li>
                <span>{transObj.desc}</span>
                <span>${transObj.amount}</span>
            </li>
            })}
        </ul>
        <h3 className="add">Add new transaction</h3>
        <form className="form">
            <label>
                Description <br/>
                <input type="text"/>
            </label>
            <label>
                Amount <br/>
                <input type="number"/>
            </label>
            <label>
                <input type="submit"/>
            </label>
        </form>
         
    </div>
}
export default ExpenseTrack;
