import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIncome } from "../store/AccountSlice";
import { addTransaction } from "../store/TransactionSlice";

export default function IncomeModal({ setIsOpen }) {
  const [formData, setFormData] = useState({
    type: "income",
    name: "",
    amount: "",
    date: "",
    category: ""
  });
  const dispatch = useDispatch();

  const handelChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (formData.type && formData.amount && formData.date && formData.category) {
      dispatch(addIncome(Number(formData.amount)));
      dispatch(
        addTransaction({
          id: crypto.randomUUID(),
          ...formData,
          amount: Number(formData.amount)
        })
      );
      setFormData({ type: "income", name: "", amount: "", date: "", tag: "" });
      setIsOpen(false);
    }
  };

  return (
    <div className="absolute  top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 p-6 border border-gray-700 rounded-lg shadow-md w-80 z-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-100">Add Income</h3>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-red-400"
        >
          ✖
        </button>
      </div>

      <form onSubmit={handelSubmit} className="space-y-3">
        <input
          type="text"
          value={formData.name}
          onChange={handelChange}
          name="name"
          placeholder="Income Name"
          className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
        />
        <input
          type="number"
          value={formData.amount}
          onChange={handelChange}
          name="amount"
          placeholder="Amount"
          className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
        />
        <input
          type="date"
          value={formData.date}
          onChange={handelChange}
          name="date"
          className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600 text-gray-100"
        />

        <select
          value={formData.category}
          name="category"
          onChange={handelChange}
          className="w-full px-3 py-2 border rounded-md bg-gray-700 border-gray-600 text-gray-100"
        >
          <option>Select Category</option>
          <option>Salary</option>
          <option>Freelancing</option>
          <option>Investment</option>
          <option>Stock Market Gains</option>
        </select>
        <button
          type="submit"
          className="w-full bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}