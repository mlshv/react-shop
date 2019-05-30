import { createStore } from 'redux';
import rootReducer from './rootReducer';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cartState') || '{}')
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
