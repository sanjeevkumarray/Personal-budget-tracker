import React from 'react'
import { useSelector } from 'react-redux';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


export default function DashBoardMonthlyTrend() {
    const janIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===0).reduce((acc , cur)=>acc+cur.amount, 0)
      const janExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===0).reduce((acc , cur)=>acc+cur.amount, 0)
      const febIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===1).reduce((acc , cur)=>acc+cur.amount, 0)
      const febExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===1).reduce((acc , cur)=>acc+cur.amount, 0)
      const marIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===2).reduce((acc , cur)=>acc+cur.amount, 0)
      const marExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===2).reduce((acc , cur)=>acc+cur.amount, 0)
      const aprIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===3).reduce((acc , cur)=>acc+cur.amount, 0)
      const aprExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===3).reduce((acc , cur)=>acc+cur.amount, 0)
      const mayIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===4).reduce((acc , cur)=>acc+cur.amount, 0)
      const mayExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===4).reduce((acc , cur)=>acc+cur.amount, 0)
      const junIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===5).reduce((acc , cur)=>acc+cur.amount, 0)
      const junExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===5).reduce((acc , cur)=>acc+cur.amount, 0)
      const julIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===6).reduce((acc , cur)=>acc+cur.amount, 0)
      const julExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===6).reduce((acc , cur)=>acc+cur.amount, 0)
      const augIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===7).reduce((acc , cur)=>acc+cur.amount, 0)
      const augExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===7).reduce((acc , cur)=>acc+cur.amount, 0)
      const sepIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===8).reduce((acc , cur)=>acc+cur.amount, 0)
      const sepExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===8).reduce((acc , cur)=>acc+cur.amount, 0)
      const octIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===9).reduce((acc , cur)=>acc+cur.amount, 0)
      const octExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===9).reduce((acc , cur)=>acc+cur.amount, 0)
      const novIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===10).reduce((acc , cur)=>acc+cur.amount, 0)
      const novExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===10).reduce((acc , cur)=>acc+cur.amount, 0)
      const decIncome = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='income').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===11).reduce((acc , cur)=>acc+cur.amount, 0)
      const decExpense = useSelector((state)=>state.transactionHistory).filter((singleTxn)=>singleTxn.type==='expense').filter((singleTxn)=>new Date(singleTxn.date).getMonth()===11).reduce((acc , cur)=>acc+cur.amount, 0)
      
    const data = [
      { month: "Jan", income: janIncome, expense: janExpense , savings: janIncome - janExpense },
      { month: "Feb", income: febIncome, expense: febExpense , savings: febIncome - febExpense },
      { month: "Mar", income: marIncome, expense: marExpense , savings: marIncome - marExpense},
      { month: "Apr", income: aprIncome, expense: aprExpense , savings: aprIncome - aprExpense},
      { month: "May", income: mayIncome, expense: mayExpense , savings: mayIncome - mayExpense},
      { month: "Jun", income: junIncome, expense: junExpense , savings: junIncome - junExpense},
      { month: "Jul", income: julIncome, expense: julExpense , savings: julIncome - julExpense},
      { month: "Aug", income: augIncome, expense: augExpense , savings: augIncome - augExpense},
      { month: "Sep", income: sepIncome, expense: sepExpense , savings: sepIncome - sepExpense},
      { month: "Oct", income: octIncome, expense: octExpense , savings: octIncome - octExpense},
      { month: "Nov", income: novIncome, expense: novExpense , savings: novIncome - novExpense},
      { month: "Dec", income: decIncome, expense: decExpense , savings: decIncome - decExpense},
    ];
  return (
    <div className="  w-full max-w-[600px] mx-auto p-6 bg-gray-900 text-gray-200 shadow-xl rounded-2xl border border-gray-700">

    <h2 className="text-2xl font-bold text-gray-300 mb-4 text-center">Monthly Income vs Expense Trend</h2>
    <ResponsiveContainer width="90%" height={350}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            
            <XAxis dataKey="month" stroke="#bbb" fontSize={12} />
            <YAxis stroke="#bbb" fontSize={12} domain={[0, "dataMax + 1000"]} />
            
            <Tooltip contentStyle={{ backgroundColor: "#222", color: "#fff", borderRadius: "5px" }} />
            <Legend wrapperStyle={{ fontSize: "14px", fontWeight: "bold", color: "#ddd" }} />

            <defs>
                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22C55E" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#16A34A" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#DC2626" stopOpacity={0} />
                </linearGradient>
            </defs>

            <Line 
                type="monotone" 
                dataKey="income" 
                stroke="url(#incomeGradient)" 
                strokeWidth={3} 
                dot={{ r: 6, fill: "#22C55E" }} 
                name="Income" 
            />

            <Line 
                type="monotone" 
                dataKey="expense" 
                stroke="url(#expenseGradient)" 
                strokeWidth={3} 
                dot={{ r: 6, fill: "#EF4444" }} 
                name="Expense" 
            />
        </LineChart>
    </ResponsiveContainer>
</div>
);
}
