import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '../Pagination';
import { ProductCard } from '../ProductCard';
import { Page } from '../Page';
import styles from './Catalog.module.css';

const Catalog = ({
  products = [],
  page,
  onRequestNextPage,
  onRequestPrevPage,
  onAddToCart
}) =>
  products.length ? (
    <Page>
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
      <div className={styles.bottomPagination}>
        <Pagination
          page={page}
          onRequestNextPage={onRequestNextPage}
          onRequestPrevPage={onRequestPrevPage}
        />
      </div>
    </Page>
  ) : null;

export default Catalog;
