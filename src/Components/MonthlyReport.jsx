import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function MonthlyReport() {
    const [month, setMonth] = useState('January');
    const allTransactions = useSelector((state) => state.transactionHistory);
    const filteredTransaction = allTransactions.filter(
        (singleTxn) => new Date(singleTxn.date).toLocaleString("default", { month: "long" }) === month
    );
    const totalIncome = filteredTransaction
        .filter((singleTxn) => singleTxn.type === 'income')
        .reduce((acc, current) => acc + current.amount, 0);
    const totalExpnse = filteredTransaction
        .filter((singleTxn) => singleTxn.type === 'expense')
        .reduce((acc, current) => acc + current.amount, 0);

    const charData = [
        { month: month, income: totalIncome, expense: totalExpnse, saving: totalIncome - totalExpnse }
    ];

    return (
        <div className="mt-10 max-w-full mx-auto p-6 bg-gray-900 shadow-lg rounded-2xl text-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-100">📊 Monthly Financial Summary</h2>

            <div className='flex justify-center flex-col lg:flex-row gap-8'>

                <div>
                    <div className="mt-6 flex gap-4 items-center mb-4">
                        <label className="text-gray-300 font-medium">Select Month:</label>
                        <select 
                            value={month} 
                            onChange={(e) => setMonth(e.target.value)} 
                            className="border p-2 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-400 outline-none"
                        >
                            {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                                .map((m) => (
                                    <option key={m}>{m}</option>
                                ))}
                        </select>
                    </div>

                    <div className="overflow-hidden rounded-lg border border-gray-700">
                        <table className="w-full text-center">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="p-3">Month</th>
                                    <th className="p-3">Total Income</th>
                                    <th className="p-3">Total Expenses</th>
                                    <th className="p-3">Savings</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-700">
                                    <td className="p-3 font-semibold">{month}</td>
                                    <td className="p-3 text-green-400 font-semibold">₹{totalIncome}</td>
                                    <td className="p-3 text-red-400 font-semibold">₹{totalExpnse}</td>
                                    <td className={`p-3 font-semibold ${totalIncome > totalExpnse ? 'text-green-400' : 'text-red-400'}`}>
                                        ₹{totalIncome - totalExpnse}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 bg-gray-800 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto shadow-md">
                    <h3 className="text-xl font-semibold text-gray-100 mb-4 text-center">{month} Financial Overview</h3>

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
