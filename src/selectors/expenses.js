

// Takes in the filters and the sort criteria, and reeturns a new array that's properly sorted
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    // this is probably better done with momment() methods
    const startDateMatch = startDate !== undefined ? expense.createdAt >= startDate : true;
    const endDateMatch = endDate !== undefined ? expense.createdAt <= endDate : true;
    const textMatch = text ? expense.description.toLowerCase().includes(text.toLowerCase()) : true;

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}