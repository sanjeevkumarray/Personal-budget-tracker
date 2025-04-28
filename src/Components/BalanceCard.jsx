import React from "react";
import { useSelector } from "react-redux";

export default function BalanceCard() {
  const totalExpense = useSelector((state) => state.transactionHistory)
    .filter((txn) => txn.type === "expense")
    .reduce((acc, cur) => acc + Number(cur.amount), 0);

  const totalIncome = useSelector((state) => state.transactionHistory)
    .filter((txn) => txn.type === "income")
    .reduce((acc, cur) => acc + Number(cur.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="p-6 m-10 w-80 rounded-2xl shadow-lg border border-gray-700 bg-gray-900 text-gray-200 transition-transform transform hover:scale-105">
      <h2 className="text-xl font-semibold text-gray-300">
        💰 Current Balance
      </h2>
      <p
        className={`text-3xl font-bold mt-3 ${
          balance > 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        ₹{balance}
      </p>
      <button className="mt-5 bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-all cursor-not-allowed">
        Reset Balance
      </button>
    </div>
  );
}
