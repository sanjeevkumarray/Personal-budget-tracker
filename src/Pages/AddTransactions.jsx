import React from 'react';
import TransactionForm from '../Components/TransactionForm';

export default function AddTransactions() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <TransactionForm />
      </div>
    </div>
  );
}
