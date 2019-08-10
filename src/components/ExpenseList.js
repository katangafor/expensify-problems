import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// this makes a named export out of this component, so I can use it in tests without messing with the default export for redux stuff
export const ExpenseList = (props) => (
  <div>
  {
    props.expenses.length === 0 ? (
       <p>No expenses</p>
    ) : (
      props.expenses.map((expense) => {
        // I thought the spread operator just returns a new object? So why here does it just work to populate three props? Can you
        // just pass in an object and have it become props?
        return <ExpenseListItem key={expense.id} {...expense}/>
      })
    )
  }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);

