import React from "react";
import TransactionTable from "../Components/TransactionTable";

export default function TransactionHistory() {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-300 mb-4 text-center">Transaction History</h2>
      <TransactionTable />
    </div>
  );
}

