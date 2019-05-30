import React from 'react';
import { ProductCard } from '../ProductCard';

const Cart = ({ products }) => (
  <React.Fragment>
    {products.map(({ id, product, description, price, count }) => (
      <ProductCard
        key={id}
        cart
        title={product}
        description={description}
        price={price}
        count={count}
      />
    ))}
  </React.Fragment>
);

export default Cart;
