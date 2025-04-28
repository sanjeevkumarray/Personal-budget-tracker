import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
    name:'budget',
    initialState:[
        { name: "Food", budget:5000 , spent:0 ,icon: "🍔", color: "red", border: "border-red-400" },
        { name: "Shopping",budget:5000 , spent:0 , icon: "🛍️", color: "blue", border: "border-blue-400" },
        { name: "Transport", budget:5000 , spent:0 ,icon: "🚖", color: "green", border: "border-green-400" },
        { name: "Bills",budget:5000 , spent:0 , icon: "📄", color: "yellow", border: "border-yellow-400" },
        { name: "Health & Fitness", budget:5000 , spent:0 ,icon: "🏋️‍♂️", color: "gray", border: "border-gray-400" },
        { name: "Others", budget:5000 , spent:0 ,icon: "📌", color: "purple", border: "border-purple-400" },
      ],
      reducers:{
        editBudget:(state, action)=>{
            console.log(action.payload);
             state.map((singleCat)=>{
                if(singleCat.name===action.payload.cat.name){
                    singleCat.budget = action.payload.budget
                }
             })  
      },
      addSpent:(state , action)=>{
        console.log(action.payload);
        state.map((singleCat)=>{
            if(singleCat.name===action.payload.category){
                singleCat.spent += Number(action.payload.amount)
            }
            if(singleCat.spent> singleCat.budget){
                window.alert(`⚠️ You are exceeding spending limit in ${singleCat.name} category`)
            }
            
        })
      },
      removeSpent:(state, action)=>{
        console.log(action.payload);
        state.map((singleCate)=>{
            if(singleCate.name === action.payload.category){
                singleCate.spent-= Number(action.payload.amount)
            }
        })
      }
      
      }
})

export const {editBudget,addSpent,removeSpent} = budgetSlice.actions
export default budgetSlice.reducer