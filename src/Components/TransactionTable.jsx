import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTransaction } from "../store/TransactionSlice";
import { removeSpent } from "../store/BudgetSlice";
import EditFormModal from "./EditFormModal";

export default function TransactionTable() {
  const [isOpen , setIsOpen] = useState(false)
  const [editFormData , setEditFormData] = useState('')
  let myTransactions = useSelector((state) => state.transactionHistory);
  const [currentPage , setCurrentPage] = useState(1)
  const itemsPerPage= 5;
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const dispatch = useDispatch();

  const filterTxn = () => {
    return myTransactions.filter((singleTransaction) => {
      const matchesSearch = singleTransaction.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter = categoryQuery
        ? singleTransaction.category
            .toLowerCase()
            .includes(categoryQuery.toLowerCase())
        : true;
      return matchesSearch && matchesFilter;
    });
  };

  const handelDelete = (id,type ,amount , category) => {
    dispatch(removeTransaction(id));
    if(type==='expense'){
      dispatch(removeSpent({amount ,category}))
    }
  };

  const handelEdit = (id, type, name, amount, date, category)=>{
    setIsOpen(true)
    setEditFormData({id, type, name, amount, date, category})
    dispatch(removeSpent({category ,amount}))
  }

  const handelSort = (transactions) => {
    if (sortOrder === "amount") {
      return [...transactions].sort((a, b) => a.amount - b.amount);
    } else if (sortOrder === "date") {
      return [...transactions].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    }
    return [...transactions];
  };

  const totalPages = Math.ceil(handelSort(filterTxn()).length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const paginatedTransaxtions = handelSort(filterTxn()).slice(startIndex , endIndex)

  return (
    <>
    <div className={` ${isOpen ? 'pointer-events-none opacity-50 bg-gray-600' :''} max-w-4xl mt-10 mx-auto p-6 bg-gray-900 text-white shadow-lg rounded-lg border border-gray-700`}> 
      <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">My Transactions</h2>

      
      <div className="my-6 flex flex-col md:flex-row gap-4 w-full bg-gray-800 rounded-lg">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Transaction"
          className="flex-1 p-3 border border-gray-600 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select onChange={(e) => setCategoryQuery(e.target.value)} className="p-3 border border-gray-600 bg-gray-700 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option  value="" >Filter by Category</option>
          <option value="Salary">Salary</option>
          <option value="Freelancing">Freelancing</option>
          <option value="Investement">Investment</option>
          <option value="Stock Market Gains">Stock Market Gains</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="flex space-x-2 mb-4">
        <button onClick={() => setSortOrder("")} className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600">No Sort</button>
        <button onClick={() => setSortOrder("date")} className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600">Sort by Date</button>
        <button onClick={() => setSortOrder("amount")} className="px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600">Sort by Amount</button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-600 text-sm text-white">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Type</th>
              <th className="border p-3 text-left">Date</th>
              <th className="border p-3 text-left">Amount</th>
              <th className="border p-3 text-left">Category</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTransaxtions.length > 0 ? (
              paginatedTransaxtions.map(({ id, type, name, amount, date, category }) => (
                <tr key={id} className={`${type === "income" ? "bg-green-900 hover:bg-green-800" : "bg-red-900 hover:bg-red-800"}`}>
                  <td className="border p-3">{name}</td>
                  <td className="border p-3">{type}</td>
                  <td className="border p-3">{date}</td>
                  <td className={`border p-3 font-semibold ${type === "income" ? "text-green-400" : "text-red-400"}`}>{type === "income" ? "+" : "-"} ₹{amount}</td>
                  <td className="border p-3">{category}</td>
                  <td className="border p-3 flex space-x-2">
                    <button onClick={() => handelEdit(id, type, name, amount, date, category)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500">Edit</button>
                    <button onClick={() => handelDelete(id, type, amount, category)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 p-4">No Transactions Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6 space-x-2">
  <button 
    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
    disabled={currentPage === 1}
    className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
  >
    ⬅ Prev
  </button>

  <span className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow-md">
    Page {currentPage} of {totalPages}
  </span>

  <button 
    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
    disabled={currentPage === totalPages}
    className="px-4 py-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition disabled:bg-gray-600 disabled:cursor-not-allowed"
  >
    Next ➡
  </button>
</div>
    </div>
    {isOpen && <EditFormModal setIsOpen={setIsOpen} editFormData={editFormData} />}
    </>
  );
}
