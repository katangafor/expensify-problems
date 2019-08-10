import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesTotal from './ExpensesTotal';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesTotal />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;