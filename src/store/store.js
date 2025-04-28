import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './AccountSlice'
import transactionReducer from './TransactionSlice'
import settingsReducer from './SettingsSlice'
import budgetReducer from './BudgetSlice'

export const store = configureStore({
    reducer:{
        accountInfo: accountReducer,
        transactionHistory: transactionReducer,
        settingsInfo : settingsReducer,
        budgetInfo: budgetReducer
    }
})

