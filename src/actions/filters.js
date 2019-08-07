// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_AMOUNT
export const sortByAmount = (sortBy = 'amount') => ({
  type: 'SORT_BY_AMOUNT',
  sortBy
})

// SORT_BY_DATE
// LOOKS LIKE I don't need these sortBy values in these object... the reducer could just take care of it. But maybe it's better this way? Idk what happened to Andrew's
export const sortByDate = (sortBy = 'date') => ({
  type: 'SORT_BY_DATE',
  sortBy
})

// SET_START_DATE
export const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
export const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})