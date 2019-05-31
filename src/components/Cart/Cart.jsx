import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { ProductCard } from '../ProductCard';
import { Page } from '../Page';
import styles from './Cart.module.css';

const Cart = ({
  products,
  onIncrementProductCount,
  onDecrementProductCount,
  onRemoveProduct
}) => (
  <Page>
    <div className={styles.navigation}>
      <Link to="/">
        <Fab variant="extended" color="primary" aria-label="Add">
          <KeyboardArrowLeft /> Back to shopping
        </Fab>
      </Link>
    </div>
    {products.map(({ id, product, description, price, count }) => (
      <ProductCard
        isCart
        key={id}
        title={product}
        description={description}
        price={price}
        count={count}
        onRemove={() => onRemoveProduct(id)}
        onIncrementCount={() => onIncrementProductCount(id)}
        onDecrementCount={() => onDecrementProductCount(id)}
      />
    ))}

    <Typography variant="h6" color="inherit" component="p" noWrap>
      {products.length
        ? `Total: $${products.reduce((r, p) => r + p.price * p.count, 0).toFixed(2)}`
        : 'Cart is empty'}
    </Typography>
    {products.length ? (
      <Link to="/checkout">
        <div className={styles.navigation}>
          <Fab variant="extended" color="secondary" aria-label="Add">
            Checkout <KeyboardArrowRight />
          </Fab>
        </div>
      </Link>
    ) : null}
  </Page>
);

export default Cart;
