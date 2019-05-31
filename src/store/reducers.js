import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const productsReducer = (state = [], action) => {
  if (action.type === 'PRODUCTS_LOADED') {
    return action.payload;
  }

  return state;
};

const cartReducer = (cartState = {}, action) => {
  if (action.type === 'cart/CLEAR') {
    return {};
  }

  if (action.type === 'cart/ADD' || action.type === 'cart/INCREMENT_COUNT') {
    const productId = action.payload;
    const product = cartState[productId];

    return {
      ...cartState,
      [productId]: {
        count: product ? product.count + 1 : 1
      }
    };
  }

  if (action.type === 'cart/REMOVE') {
    const productId = action.payload;
    const { [productId]: omitted, ...cartStateWithoutProduct } = cartState;

    return cartStateWithoutProduct;
  }

  if (action.type === 'cart/DECREMENT_COUNT') {
    const productId = action.payload;
    const product = cartState[productId];

    return {
      ...cartState,
      [productId]: {
        count: product.count > 1 ? product.count - 1 : 1
      }
    };
  }

  return cartState;
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  form: formReducer
});

export default rootReducer;
