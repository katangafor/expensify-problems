import filtersReducer from '../../reducers/filters';
import moment from 'moment';

// default, initialializing
test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

// sortBy to amount
test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount'});
  expect(state.sortBy).toBe('amount');
})

// sortBy to date
test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE', sortBy: 'date' });
  expect(state.sortBy).toBe('date');
})

// text filter
test('should set the state to have a text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'testing' });
  expect(state.text).toBe('testing');
})

// start date filter
test('should set the start date filter in state', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
})

// end date filter
test('should set the end date filter in state', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
})