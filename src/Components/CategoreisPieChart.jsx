import React from 'react';
import { useSelector } from 'react-redux';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export default function CategoriesPieChart() {
  const categories = ['Food', 'Transport', 'Shopping', 'Bills', 'Health & Fitness', 'Others'];
  
  const expenseData = categories.map(category => ({
    name: category,
    value: useSelector((state) => state.transactionHistory)
      .filter((txn) => txn.type === 'expense' && txn.category === category)
      .reduce((acc, cur) => acc + cur.amount, 0)
  }));

  const topExpense = expenseData.reduce((max, category) => category.value > max.value ? category : max, { name: '', value: 0 });

  const COLORS = ['#FF5733', '#33FF57', '#3366FF', '#FF33A1', '#FFC300', '#8A2BE2'];

  return (
    <div className="w-full max-w-[600px] mx-auto p-6 bg-gray-900 text-gray-200 shadow-xl rounded-2xl border border-gray-700">
      <h2 className="text-2xl font-bold text-center mb-5">📊 Expense Distribution</h2>
      {topExpense.value ? (
        <>
          <p className="text-md text-red-400 text-center font-semibold mb-3">
            🔥 Highest Expense: <span className="font-bold">{topExpense.name}</span> (₹{topExpense.value})
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie 
                data={expenseData} 
                cx="50%" 
                cy="50%" 
                outerRadius={120} 
                fill="#8884d8" 
                dataKey="value" 
                label 
                className="transition-transform transform hover:scale-105"
              >
                {expenseData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: 'gray-700', borderRadius: '8px', color: '#fff' }} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </>
      ) : (
        <h2 className="text-xl text-center font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text p-2">
          🚫 No Expense Found
        </h2>
      )}
    </div>
  );
}
