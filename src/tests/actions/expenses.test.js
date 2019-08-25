import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, startAddExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

// takes the expenses mock array, sticks them each into 
beforeEach(() => {
  const expensesData = {};
  // destructuring is confusing sometimes, cause this isn't a function that gets called anywhere. It's just an array
  // function that would usually be like forEach(element), but instead you can destructure right into the elements' bits
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    // the index of this array is a string...? Or whatever? Cause of how firebase
    // handles arrays?
   expensesData[id] = { description, note, amount, createdAt };
  })
  database.ref('expenses').set(expensesData);
})

// remove expense
test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

// remove expense from database
test('should remove expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[1].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
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
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

// this test is async, so you have to give it the done param. Otherwise it'll just pass
test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 500,
    note: 'This mouse is awesome',
    createdAt: 1000
  }
  
  // send to database + redux. When you finish, make sure the action that happened is as expected
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
      ...expenseData
      }
    })

    // now make sure that the thing in the database is what you expect? How does jest not write to the actual store?
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
  });
})

test('should add expense with default to database and store', (done) => {
  const store = createMockStore({});

  // send to database + redux. When you finish, make sure the action that happened is as expected
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      }
    })

    // now make sure that the thing in the database is what you expect? How does jest not write to the actual store?
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual({
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
      });
      done();
  });
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done();
  })
})