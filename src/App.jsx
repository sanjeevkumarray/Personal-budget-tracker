import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import AddTransactions from './Pages/AddTransactions';
import TransactionHistory from './Pages/TransactionHistory';
import ProfileSettings from './Pages/ProfileSettings';
import Report from './Pages/Report';
import Budgets from './Pages/Budgets';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 transition-all">
      {/* Header Component */}
      <Header />

      {/* Main Content - Pages */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-transaction" element={<AddTransactions />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/settings" element={<ProfileSettings />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/budgets" element={<Budgets />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
