import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function ExpenseVsIncome() {
    const [fromDate, setFromDate] = useState('2025-01-01');
    const [toDate, setToDate] = useState('2025-02-01');

    const allTransactions = useSelector((state) => state.transactionHistory);
    const filteredTxn = allTransactions.filter(
        (singleTxn) => new Date(singleTxn.date) >= new Date(fromDate) && new Date(singleTxn.date) <= new Date(toDate)
    );
    const totalIncome = filteredTxn
        .filter((singleTxn) => singleTxn.type === 'income')
        .reduce((acc, cur) => acc + cur.amount, 0);
    const totalExpense = filteredTxn
        .filter((singleTxn) => singleTxn.type === 'expense')
        .reduce((acc, cur) => acc + cur.amount, 0);

    const charData = [
        { month: `${fromDate} to ${toDate}`, income: totalIncome, expense: totalExpense, saving: totalIncome - totalExpense }
    ];

    return (
        <div className="mt-10 max-w-full mx-auto p-6 bg-gray-900 shadow-lg rounded-2xl text-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-100">📊 Income ⚡ Expense</h2>

            <div className='flex justify-center flex-col lg:flex-row gap-8'>

                <div>
                    <div className="mt-6 flex flex-wrap gap-4 items-center mb-4">
                        <label className="text-gray-300 font-medium">From:</label>
                        <input
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            type="date"
                            className="p-2 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full sm:w-auto"
                        />

                        <label className="text-gray-300 font-medium">To:</label>
                        <input
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                            type="date"
                            className="p-2 border border-gray-700 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all w-full sm:w-auto"
                        />
                    </div>

                    <div className="overflow-hidden rounded-lg border border-gray-700">
                        <table className="w-full text-center">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Total Income</th>
                                    <th className="p-3">Total Expenses</th>
                                    <th className="p-3">Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="text-xs p-3 font-semibold">{fromDate} - {toDate}</td>
                                    <td className="p-3 text-green-400 font-semibold">₹{totalIncome}</td>
                                    <td className="p-3 text-red-400 font-semibold">₹{totalExpense}</td>
                                    <td className={`p-3 font-semibold ${totalIncome - totalExpense > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        ₹{totalIncome - totalExpense}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto shadow-md">
                    {fromDate && toDate && (
                        <h5 className="text-md font-semibold text-gray-100 mb-4 text-center">
                            ({fromDate} to {toDate}) Financial Overview
                        </h5>
                    )}

                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={charData}>
                            <XAxis dataKey="month" stroke="white" />
                            <YAxis stroke="white" />
                            <Tooltip contentStyle={{ backgroundColor: "#1E293B", color: "#F8FAFC" }} />
                            <Legend wrapperStyle={{ color: "#F8FAFC" }} />
                            <Bar dataKey="income" fill="#22C55E" name="Income" />
                            <Bar dataKey="expense" fill="#EF4444" name="Expense" />
                            <Bar dataKey="saving" fill="#3B82F6" name="Saving" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>
        </div>
    );
}
