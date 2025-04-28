# Personal Budget Tracker

## Overview
The **Personal Budget Tracker** is a web application designed to help users effectively manage their income, expenses, and budgets. It provides insights into financial health through interactive charts and reports, enabling users to make informed financial decisions. The application features multi-page navigation, transaction management, budget tracking, and financial analytics.

## Features

### 1. Dashboard
- Overview of financial status:
  - Total Income
  - Total Expenses
  - Remaining Budget
  - Savings
- Charts and Graphs:
  - Monthly spending trends (bar/line chart)
  - Category-wise expense breakdown (pie chart)
- Key financial insights:
  - Top expense categories
  - Biggest expense of the month

### 2. Add Transaction
- Form for adding new transactions:
  - **Transaction Type**: Income or Expense
  - **Amount**
  - **Category** (e.g., Groceries, Salary, Rent)
  - **Date**
  - **Description** (optional)
- Form validation for required fields and numerical values
- Dynamically populated category dropdown

### 3. Transaction History
- A table displaying all transactions with columns:
  - Date
  - Category
  - Amount
  - Type (Income/Expense)
  - Description
  - Actions (Edit/Delete)
- Sorting and filtering:
  - Filter by date range or category
  - Sort by amount, date, or type
- Pagination for large datasets

### 4. Budgets
- Monthly budget allocation for different categories (e.g., $500 for Groceries)
- Visual indicators showing current spending against the budget (progress bars)
- Alerts for overspending

### 5. Reports
- Generate detailed financial reports:
  - Monthly financial summaries
  - Year-to-date analysis
  - Comparison of expenses vs. income over time
- Interactive charts for better financial visualization

### 6. Settings/Profile (Optional Bonus)
- User preferences:
  - Set a default currency
  - Update profile information (name, email)
  - Change notification preferences (alerts for overspending)
- Data persistence using **localStorage** or a database

## Technologies Used
- **React.js** – Frontend development
- **Redux Toolkit** – State management
- **Recharts/Chart.js** – Data visualization
- **Tailwind CSS** – Styling
- **Formik & Yup** – Form validation
- **React Router** – Multi-page navigation
- **LocalStorage/Database** – Data persistence

## Installation & Setup
### Prerequisites:
- Node.js & npm/yarn installed
- Git installed

### Steps:
1. Clone the repository:
   

2. Install dependencies:
   
bash
   npm install

3. Start the development server:
   
bash
   npm run dev

4. Open http://localhost:3000 in your browser.

## Challenges & Research Topics
- Implementing interactive financial data visualization using **Chart.js/Recharts**
- Dynamic filtering, sorting, and pagination in transaction history
- Calculating percentages dynamically for budget tracking
- Storing and managing user preferences efficiently
- Exporting reports as PDFs/CSV files

## Future Enhancements
- User authentication and cloud database integration
- AI-powered financial insights & recommendations
- Mobile-responsive UI improvements


## Demo Link
https://personal-budget-trackers.netlify.app/
