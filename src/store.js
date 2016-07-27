import { createStore, combineReducers } from 'redux';
import { getState } from 'api/localStorage';

// import reducers here
import todoReducer from 'reducers/todo-reducer';

// combine reducers
const reducers = combineReducers({
  // put reducers here
  todoReducer
})

// crerate the store with localStorage
//export default createStore(reducers, getState());

export default createStore(reducers);