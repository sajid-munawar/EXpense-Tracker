import React, {createContext, useReducer } from 'react';
import transReducer from "./transReducer"

let initialTransactions=[
    {amount:500,desc:"deposit"},
    {amount:200,desc:"book"},
    {amount:-300,desc:"coffee"}
]
export const transactionContext=createContext(initialTransactions)


export const TransactionProvider=({Children})=>{
    const [state,dispatch]= useReducer(transReducer,initialTransactions)

    function addTransaction(transObj){
        dispatch ({
            type:"Add_Transaction",
            payload:({
                amount:transObj.amount,
                desc:transObj.desc
            })
        })
    }
    return <transactionContext.Provider value={{
        transactions:state,
        addTransaction
    }}>
        {Children}

    </transactionContext.Provider>

}