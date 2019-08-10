import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should add up multiple expense amounts', () => {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(600);
})

test('should return 0 if given no expenses', () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
})

test('should return correct sum given one expense', () => {
  const total = getExpensesTotal([expenses[1]]);
  expect(total).toBe(200);
})