import React from 'react';
import { Cart } from '../../components/Cart';
import { useCartState, useCartActions } from '../../hooks/cart';
import useProducts from '../../hooks/useProducts';

const CartContainer = () => {
  const products = useProducts();
  const { cartState } = useCartState();
  const { remove, incrementCount, decrementCount } = useCartActions();

  const productsFromCart = products
    .filter(p => cartState[p.id])
    .map(p => ({ ...p, count: cartState[p.id].count }));

  return (
    <Cart
      products={productsFromCart}
      onIncrementProductCount={incrementCount}
      onDecrementProductCount={decrementCount}
      onRemoveProduct={remove}
    />
  );
};

export default CartContainer;
