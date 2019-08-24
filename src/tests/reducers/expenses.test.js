import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// default setup
test('should set up default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([]);
})

// removing expense if id match found
test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

// don't remove expense if no match
test('should not remove expenses for no id match', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'qwerty'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})

// add an expense
test('should add an expense', () => {
  const newExpense = {
    id: 'test-id',
    description: 'Test description',
    note: '',
    createdAt: 20000,
    amount: 10000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense])
})

// edit an expense
test('should edit an expense', () => {
  const description = 'apples'
  const action = ({
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description
    }
  })

  const state = expensesReducer(expenses, action);
  expect(state[2].description).toEqual(description);
})

// should not edit an expense if id not found
test('should not edit an expense if id not found', () => {
  const description = 'apples'
  const action = ({
    type: 'EDIT_EXPENSE',
    id: 'fake-id',
    updates: {
      description
    }
  })

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

// should set expenses
test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
})