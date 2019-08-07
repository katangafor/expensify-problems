import { createStore, bindActionCreators } from 'redux';

// the part that goes   = {}   is there because if you don't set the data coming in with a default blank object, it'll throw an error when trying to see the value to increment by
// the action object coming in is destructured, so that we get access to incrementBy by it's easy name, and we can set up a default, in case there is no argument passed (it can default to one)
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  // remember this is the same as 'incrementBy: incrementBy'
  incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setTo = 0} = {}) => ({
  type: 'SET',
  setTo
});

const resetCount = () => ({
  type: 'RESET'
})

const countReducer = (state = { count: 0}, action) => {
 
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.setTo
      }
    case 'RESET':
     return {
       count: 0
     };
    default: 
    return state
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount() );

store.dispatch(incrementCount() );

store.dispatch(decrementCount() );

store.dispatch(decrementCount({ decrementBy: 3}) );

store.dispatch(setCount({setTo: 9}));

store.dispatch(resetCount());
