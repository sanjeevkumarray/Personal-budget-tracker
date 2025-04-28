import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editBudget } from "../store/BudgetSlice";

export default function BudgetCards({ cat }) {
  const budgetsInfo = useSelector((state) => state.budgetInfo).find(
    (singleBgt) => singleBgt.name === cat.name
  );

  const [isEdit, setIsEdit] = useState(false);
  const [budget, setBudget] = useState("");
  const dispatch = useDispatch();
  const handelClick = () => {
    if (isEdit) {
      
      if(budget){
        dispatch(editBudget({ budget, cat }));
        setIsEdit(!isEdit);
        setBudget("")
      }else{
        window.alert("Enter a valid amount")
      }
       
     
    
    }
    if (!isEdit) {
      setIsEdit(!isEdit);
    }
  };

  return (
    <div
      className={`p-4 bg-${cat.color}-300 border-l-4 ${cat.border} rounded-lg shadow-md`}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{cat.icon}</span>
        <h2 className={`text-lg text-${cat.color}-600 font-semibold`}>
          {cat.name} Budget
        </h2>
      </div>
      <h2
        className={` mt-2 text-xs font-bold ${
          Number(budgetsInfo.budget) > Number(budgetsInfo.spent)
            ? "text-green-600"
            : "text-red-600 "
        }`}
      >
        Budget spent : {Number(budgetsInfo.spent)} /{" "}
        {Number(budgetsInfo.budget)}{" "}
        {Number(budgetsInfo.budget) > Number(budgetsInfo.spent)
          ? ""
          : "(overspending)"}{" "}
      </h2>

      <input
        onChange={(e) => setBudget(e.target.value)}
        value={budget}
        type="number"
        placeholder="Enter Budget ₹"
        className={`mt-3 w-full p-2 border border-gray-400 placeholder-white rounded-md focus:ring-2 focus:ring-blue-500 ${
          isEdit ? "" : "cursor-not-allowed"
        } `}
      />
      <button
        onClick={handelClick}
        className={`mt-3 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800 transition-all`}
      >
        {isEdit ? "Save Budget" : "Edit Budget"}
      </button>
    </div>
  );
}
