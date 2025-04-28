import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
    name:'settings',
    initialState:{name:'Test' , email:'test@gmail.com' , currency:'INR' , alert:false},
    reducers:{
        changeSettings:(state , action)=>{
            state.name= action.payload.name
            state.email= action.payload.email
            state.currency= action.payload?.currency
            state.alert= action.payload.alert
        }
    }
})


export const  {changeSettings} = settingsSlice.actions
export default settingsSlice.reducer