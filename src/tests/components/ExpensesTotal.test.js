import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesTotal } from '../../components/ExpensesTotal';
import expenses from '../fixtures/expenses';

test('should render expenses total correctly', () => {
  const wrapper = shallow(<ExpensesTotal expenses={expenses} />)
  expect(wrapper).toMatchSnapshot();
})

test('should render text if no expenses', () => {
  const wrapper = shallow(<ExpensesTotal expenses={[]} />)
  expect(wrapper).toMatchSnapshot();
})