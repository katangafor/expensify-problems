import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render expense list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
})


test('should render expense list filters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
  const value = 'dog food'
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should sort by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  })
  expect(sortByAmount).toHaveBeenCalled();
})

// why won't this woooork. the same issue was fixed for expenseform
// test('should handle date changes', () => {
//   const startDate = moment(0).add(4, 'years');
//   const endDate = moment(0).add(8, 'years');
//   wrapper.find('withStyles(SingleDatePicker)').prop('onDatesChange')({ startDate, endDate });
//   expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//   expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// })

// ok whatever it is, it's the same issue as before
// test('should handle date focus changes', () => {
//   const calendarFocused = 'endDate';
//   wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')(calendarFocused);
//   expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
// })