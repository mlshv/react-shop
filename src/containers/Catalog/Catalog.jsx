import React from 'react';
import { useSelector } from 'react-redux';
import Catalog from '../../components/Catalog/Catalog';
import { useCartActions } from '../../hooks/cart';

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
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return [items.slice(offset, offset + LIMIT), page, goToNext, goToPrev];
};

const CatalogContainer = () => {
  const allProducts = useSelector(state => state.products);
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
