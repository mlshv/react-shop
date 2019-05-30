import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styles from './ProductCard.module.css';

import { Count } from '../Count';

const ProductCard = ({
  cart,
  title,
  price,
  description,
  onAddToCart,
  onIncrementCount,
  onDecrementCount
}) => (
  <Card className={styles.card}>
    <CardContent>
      <Typography variant="h6" color="textPrimary" component="h2">
        {title}
      </Typography>
      <Typography variant="body1" color="textPrimary" component="p">
        ${price}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      {cart ? (
        <Button size="small" color="primary" onClick={onAddToCart}>
          <AddShoppingCartIcon className={styles.actionIcon} fontSize="small" />{' '}
          Add to cart
        </Button>
      ) : (
        <Count onIncrement={onIncrementCount} onDecrement={onDecrementCount} />
      )}
    </CardActions>
  </Card>
);

export default ProductCard;
