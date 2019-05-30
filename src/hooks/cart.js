import { useSelector, useDispatch } from 'react-redux';

const preserveCartState = (cartState) => {
    localStorage.setItem('cartState', JSON.stringify(cartState));
}

export const useCartState = () => {
  const cartState = useSelector(state => state.cart);
  const productsCount = Object.values(cartState).reduce(
    (result, product) => (result += product.count),
    0
  );

  return { cartState, productsCount };
};

export const useCartActions = () => {
  const dispatch = useDispatch();
  const { cartState } = useCartState();

  const add = productId => {
    dispatch({ type: 'cart/ADD', payload: productId });
  };

  const remove = productId => {
    dispatch({ type: 'cart/REMOVE', payload: productId });
  };

  const incrementCount = productId => {
    dispatch({ type: 'cart/INCREEMENT_COUNT', payload: productId });
  };

  const decrementCount = productId => {
    dispatch({ type: 'cart/DECREEMENT_COUNT', payload: productId });
  };

  preserveCartState(cartState);

  return { add, remove, incrementCount, decrementCount };
};
