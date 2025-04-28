import React from 'react';
import MonthlyReport from '../Components/MonthlyReport';
import YearToDateReport from '../Components/YearToDateReport';
import ExpenseVsIncome from '../Components/ExpenseVsIncome';

export default function Report() {
  return (
    <div className="bg-gray-900 min-h-screen p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-gray-100 text-center">
        Financial Reports 📊
      </h1>
      
      <div className="space-y-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">📅 Monthly Report</h2>
          <MonthlyReport />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">📆 Year-to-Date Report</h2>
          <YearToDateReport />
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-100 mb-4">💰 Expense vs Income</h2>
          <ExpenseVsIncome />
        </div>
      </div>
    </div>
  );
}
