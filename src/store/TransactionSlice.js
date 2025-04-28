import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name:'transaction',
    initialState:[{ id: 1, type: 'expense', name: 'Grocery Shopping', amount: 5000, date: '2025-01-10', category: 'Shopping' },
        { id: 2, type: 'income', name: 'Salary', amount: 50000, date: '2025-01-05', category: 'Others' },
        { id: 3, type: 'expense', name: 'Electricity Bill', amount: 2500, date: '2025-01-15', category: 'Bills' },
      
        // February Transactions
        { id: 4, type: 'expense', name: 'Dining Out', amount: 1500, date: '2025-02-05', category: 'Food' },
        { id: 5, type: 'income', name: 'Freelance Payment', amount: 8000, date: '2025-02-10', category: 'Others' },
        { id: 6, type: 'expense', name: 'Gym Membership', amount: 2000, date: '2025-02-25', category: 'Health & Fitness' },
      
        // March Transactions
        { id: 7, type: 'expense', name: 'Car Fuel', amount: 3000, date: '2025-03-08', category: 'Transport' },
        { id: 8, type: 'income', name: 'Stock Dividends', amount: 4000, date: '2025-03-15', category: 'Others' },
        { id: 9, type: 'expense', name: 'New Shoes', amount: 2500, date: '2025-03-20', category: 'Shopping' },
      
        // April Transactions
        { id: 10, type: 'expense', name: 'Water Bill', amount: 1200, date: '2025-04-01', category: 'Bills' },
        { id: 11, type: 'income', name: 'Part-time Job', amount: 6000, date: '2025-04-10', category: 'Others' },
        { id: 12, type: 'expense', name: 'Home Rent', amount: 15000, date: '2025-04-28', category: 'Bills' },
      
        // May Transactions
        { id: 13, type: 'expense', name: 'Online Shopping', amount: 4000, date: '2025-05-07', category: 'Shopping' },
        { id: 14, type: 'income', name: 'Bonus', amount: 10000, date: '2025-05-12', category: 'Others' },
        { id: 15, type: 'expense', name: 'Flight Tickets', amount: 18000, date: '2025-05-20', category: 'Transport' }, ],
    reducers:{
        addTransaction:(state , action)=>{
            state.push(action.payload)
        },
        removeTransaction:(state , action)=>{
           const transactionIndex =  state.findIndex((singleTransaction)=>singleTransaction.id === action.payload)
           if(transactionIndex !== -1)
            state.splice(transactionIndex , 1)
        },
        editTranaction:(state ,action)=>{
            return state.map((singleTxn)=> {
                if(singleTxn.id === action.payload.id){
                    console.log(singleTxn);
                    return action.payload
                }else {
                    return singleTxn
                }
            })
        }
       
    }
})

export const {addTransaction , removeTransaction ,editTranaction} = transactionSlice.actions

export default transactionSlice.reducer