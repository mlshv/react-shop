import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import styles from './Catalog.module.css';
import { Pagination } from '../Pagination';

const ProductCard = ({ title, price, description, onAddToCart }) => (
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
      <Button size="small" color="primary" onClick={onAddToCart}>
        <AddShoppingCartIcon className={styles.actionIcon} fontSize="small" />{' '}
        Add to cart
      </Button>
    </CardActions>
  </Card>
);

const Catalog = ({
  products = [],
  page,
  onRequestNextPage,
  onRequestPrevPage,
  onAddToCart
}) =>
  products.length ? (
    <div style={{ padding: 10 }}>
      <Pagination
        page={page}
        onRequestNextPage={onRequestNextPage}
        onRequestPrevPage={onRequestPrevPage}
      />
      <Grid container spacing={1}>
        {products.map(({ id, product, description, price }) => (
          <Grid key={id} item xs={6} md={4}>
            <ProductCard
              title={product}
              description={description}
              price={price}
              onAddToCart={() => onAddToCart(id)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        page={page}
        onRequestNextPage={onRequestNextPage}
        onRequestPrevPage={onRequestPrevPage}
      />
    </div>
  ) : null;

export default Catalog;
