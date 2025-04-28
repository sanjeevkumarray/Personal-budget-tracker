import React, { useState } from "react";
import IncomeCard from "../Components/IncomeCard";
import BalanceCard from "../Components/BalanceCard";
import ExpenseCard from "../Components/ExpenseCard";
import DashBoardMonthlyTrend from "../Components/DashBoardMonthlyTrend";
import CategoreisPieChart from "../Components/CategoreisPieChart";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`min-h-screen bg-gray-900 text-gray-200 p-6`}>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <IncomeCard isOpen={isOpen} setIsOpen={setIsOpen}/>
        <BalanceCard />
        <ExpenseCard />
      </div>

      <div className={` grid grid-cols-1 md:grid-cols-2 gap-6 mt-8`}>
        <DashBoardMonthlyTrend />
        <CategoreisPieChart />
      </div>

    </div>
  );
}
