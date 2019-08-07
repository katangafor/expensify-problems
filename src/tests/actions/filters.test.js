import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import { testNameToKey } from 'jest-snapshot/build/utils';
import moment from 'moment';

// set start date
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

// set end date
test('should generate set end date action object', () => {
 const action = setEndDate(moment(0));
 expect(action).toEqual({
   type: 'SET_END_DATE',
   endDate: moment(0)
 })
})

// set text filter with given args
test('should generate a setTextFilter action object with given args', () => {
  // good idea to put the example text in a variable so you don't get typos
  const testText = 'example';
  const action = setTextFilter(testText);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: testText
  })
})

// set text filter with default args
test('should generate a setTextFilter action object with default args', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

// sort by date
test('should return a sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  })
})

// sort by amount
test('should return a sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  })
})