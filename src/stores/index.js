import { combineReducers } from 'redux';
import { typeReducer } from '../features/home/slices/typeSlice';
import { createStore } from 'redux';
import { detailReducer } from '../features/detail/slices/detailSlice';

const rootReducer = combineReducers({
  type: typeReducer,
  detail: detailReducer
});

const store = createStore(
  rootReducer,
);

export default store;

