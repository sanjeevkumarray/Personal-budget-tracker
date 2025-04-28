import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ExpenseModel from './ExpenseModel';

export default function ExpenseCard() {
  const [isOpen, setIsOpen] = useState(false);

  const totalExpense = useSelector((state) =>
    state.transactionHistory
      .filter((singleTxn) => singleTxn.type === 'expense')
      .reduce((acc, cur) => acc + Number(cur.amount), 0)
  );

  return (
    <div className={`p-6 m-10 w-80 rounded-2xl shadow-lg border border-gray-700 bg-gray-900 text-gray-200 transition-transform transform ${!isOpen ? "hover:scale-105" : '' }`}>
      <h2 className="text-xl font-semibold text-gray-300">💸 Total Expense</h2>
      <p className="text-3xl font-bold mt-3 text-red-400">₹{totalExpense}</p>
      <button
        onClick={() => setIsOpen(true)}
        className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 transition-all"
      >
        ➕ Add Expense
      </button>

      {isOpen && <ExpenseModel setIsOpen={setIsOpen} />}
    </div>
  );
}
