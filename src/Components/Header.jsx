import React from 'react';
import { useSelector } from 'react-redux';
import { Wallet } from "lucide-react";
import { NavLink } from 'react-router-dom';

export default function Header() {
  const name = useSelector((state) => state.settingsInfo.name); // Assigning name from Redux state

  return (
    <nav className="bg-gray-700 text-white shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-white text-xl font-bold">
          <Wallet size={28} className="text-yellow-400" />
          <div className="text-2xl font-bold text-blue-400 hover:text-blue-500 transition duration-300">
            <NavLink to="/">
              Personal Budget Tracker 
            </NavLink>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-600 text-yellow-300" : "hover:bg-gray-700"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/add-transaction"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-600 text-yellow-300" : "hover:bg-gray-700"}`
            }
          >
            Add Transaction
          </NavLink>
          <NavLink
            to="/transaction-history"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-600 text-yellow-300" : "hover:bg-gray-700"}`
            }
          >
            Transaction History
          </NavLink>
          <NavLink
            to="/budgets"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-600 text-yellow-300" : "hover:bg-gray-700"}`
            }
          >
            Budgets
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-600 text-yellow-300" : "hover:bg-gray-700"}`
            }
          >
            Reports Page
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg transition duration-300 ${isActive ? "bg-blue-600 text-yellow-300" : "hover:bg-gray-700"}`
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
