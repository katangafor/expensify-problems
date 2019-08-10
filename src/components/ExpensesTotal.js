import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesTotal = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>Dam u lucky</p>
      ) : (
        <p>Found {props.expenses.length} expenses totaling {numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}</p>
      )
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpensesTotal);