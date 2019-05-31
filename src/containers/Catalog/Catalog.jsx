import React from 'react';
import Catalog from '../../components/Catalog/Catalog';
import { useCartActions } from '../../hooks/cart';
import useProducts from '../../hooks/useProducts';

const LIMIT = 12;

const usePagination = (items = [], limit = LIMIT) => {
  const [page, setPage] = React.useState(1);
  const offset = (page - 1) * LIMIT;
  const count = items.length;

  const goToNext = () => {
    if (offset + LIMIT < count) {
      setPage(page + 1);
    }
  };

  const goToPrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return [items.slice(offset, offset + LIMIT), page, goToNext, goToPrev];
};

const CatalogContainer = () => {
  const allProducts = useProducts();
  const [products, page, goToNext, goToPrev] = usePagination(allProducts);
  const { add } = useCartActions();

  return (
    <Catalog
      products={products}
      page={page}
      onRequestNextPage={goToNext}
      onAddToCart={add}
      onRequestPrevPage={goToPrev}
    />
  );
};

export default CatalogContainer;
