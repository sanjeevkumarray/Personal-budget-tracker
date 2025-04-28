import React from 'react'
import BudgetCards from '../Components/BudgetCards'
import { useSelector } from 'react-redux'

export default function Budgets() {
   const categories = useSelector((state)=>state.budgetInfo)
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-900 text-white"> 
        {
          categories.map((cat , index)=>{
            return <BudgetCards cat={cat} key={index} />
          })
        }
    </div>
  )
}
