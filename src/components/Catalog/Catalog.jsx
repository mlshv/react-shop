import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '../Pagination';
import { ProductCard } from '../ProductCard';

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
