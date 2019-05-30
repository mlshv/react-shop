import { combineReducers } from 'redux';

// const rootReducer = combineReducers({});

const rootReducer = (state = {}, action) => {
  if (action.type === 'PRODUCTS_LOADED') {
    return { ...state, products: action.payload };
  }

  if (action.type === 'cart/ADD') {
    const cartState = state.cart;
    const productId = action.payload;
    const product = cartState[productId];

    return {
      ...state,
      cart: {
        ...cartState,
        [productId]: {
          count: product ? product.count + 1 : 1
        }
      }
    };
  }

  return state;
};

export default rootReducer;
