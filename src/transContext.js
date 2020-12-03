import React, { createContext, useReducer } from 'react';
import transReducer from "./transReducer"

let initialTransactions=[
    {amount:500,desc:"deposit"},
    {amount:200,desc:"book"},
    {amount:-300,desc:"coffee"}
]
export const transaction=createContext(initialTransactions)


const TransactionProvider=({})=>{
    const [state,dispatch]= useReducer(transReducer,initialTransactions)

}