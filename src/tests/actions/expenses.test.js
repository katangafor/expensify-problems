import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// remove expense
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

// edit expense
test('should make an object that has original properties or new properties', () => {
  const action = editExpense('123abc', { note: 'New note here!' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note here!'
    }
  })
})

// add expense with values
test('should make an action object that uses provided vlaues', () => {

  const expenseData = {
    description: '',
    amount: 109500,
    createdAt: 1000,
    note: 'Rent for last month'
  }

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

// add expense with defaults
test('should make an action object with default values', () => {

  const action = addExpense();

  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  })
})