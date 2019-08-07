import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) =>(
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      // I thought the spread operator just returns a new object? So why here does it just work to populate three props? Can you
      // just pass in an object and have it become props?
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);

