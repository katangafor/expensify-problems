import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

// doesn't the ExpenseListItem take a prop? Is that not what this spread expenses object is? Why doesn't it work when I give it a name?
// Cause it doesn't take single object prop, but four props?
test('should render an expense list item', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
})