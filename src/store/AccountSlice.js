import { createSlice } from "@reduxjs/toolkit";

 const accountSlice = createSlice({
    name:"income",
    initialState:{income:0, balance:0 , expenses:0},
    reducers:{
        addIncome:(state , action)=>{
            state.income+=action.payload
            state.balance+=action.payload
            
        },
        addExpense:(state , action)=>{
            state.expenses+=action.payload
            state.balance-=action.payload
        },
        addAccountTransaction:(state , action)=>{
            if(action.payload.type ==='income'){
                state.income+=action.payload.amount
                state.balance+=action.payload.amount
            }
            if(action.payload.type ==='expense'){
                state.expenses+=action.payload.amount
                state.balance-=action.payload.amount
            }
        }
    }
})


export const  {addIncome ,addExpense ,addAccountTransaction} = accountSlice.actions
export default accountSlice.reducer