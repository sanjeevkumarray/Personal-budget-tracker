import React, { useState } from 'react'
import IncomeModal from './IncomeModel'
import { useSelector } from 'react-redux'

export default function IncomeCard({isOpen , setIsOpen}) {
    const totalIncome = useSelector((state) => state.transactionHistory)
      .filter((singleTxn) => singleTxn.type === 'income')
      .reduce((acc, cur) => acc + Number(cur.amount), 0);

  return (
    <div className={`p-6 m-10 w-80 border border-gray-700 bg-gray-900 text-gray-200 rounded-lg shadow-md text-center 
                    transition-transform transform ${!isOpen ? "hover:scale-105 hover:shadow-lg" : '' }`}>
      <h2 className="text-lg font-semibold text-gray-300">💰 Total Income</h2>
      <p className="text-2xl font-bold text-green-400 mt-2">₹{totalIncome}</p>
      
      <button
        onClick={() => setIsOpen(true)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all"
      >
        ➕ Add Income
      </button>

      {isOpen && <IncomeModal setIsOpen={setIsOpen} />}
    </div>
  )
}
