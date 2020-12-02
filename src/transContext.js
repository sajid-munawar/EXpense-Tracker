import React, { createContext, useReducer } from 'react';
import {transReducer} from "./transReducer"
const initial_Transactions= [
    {amount:500, desc:"camera"},
    {amount:200, desc:"book"},
    {amount:300, desc:"Bike"}
]

export const transactionContext = createContext (initial_Transactions)

export const TransactionProvider=({children})=>{
    let [state,dispatch]=useReducer(transReducer,initial_Transactions)
    function addTransaction(transObj){
        dispatch({
            type:"Add_Transaction",
            payload:{
                amount:transObj.amount,
                desc:transObj.desc
            }
        })
    }
    return <transactionContext.Provider value={{
        transactions:state,
        addTransaction
    }}>
        {children}

    </transactionContext.Provider>

}
