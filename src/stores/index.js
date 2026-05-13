import { combineReducers } from 'redux';
import { typeReducer } from '../features/home/slices/typeSlice';
import { createStore } from 'redux';

const rootReducer = combineReducers({
  type: typeReducer,
});

const store = createStore(
  rootReducer,
);

export default store;

