import React, { createContext } from 'react'
const initial_Transactions= [
    {amount:500, desc:"camera"},
    {amount:200, desc:"book"},
    {amount:300, desc:"Bike"}
]

export const transaction = createContext (initial_Transactions)