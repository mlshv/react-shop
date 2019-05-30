import React from 'react';
import { useCartState } from '../../hooks/cart';
import { Cart } from '../../components/Cart';
import useProducts from '../../hooks/useProducts';

const CartContainer = () => {
  const products = useProducts();
  const { cartState } = useCartState();

  const productsFromCart = products
    .filter(p => cartState[p.id])
    .map(p => ({ ...p, count: cartState[p.id].count }));

  return <Cart products={productsFromCart} />;
};

export default CartContainer;
