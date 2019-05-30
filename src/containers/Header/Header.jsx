import React from 'react';
import Header from '../../components/Header/Header';
import { useCartState } from '../../hooks/cart';

const HeaderContainer = () => {
  const { productsCount } = useCartState();

  return <Header productsCount={productsCount} />;
};

export default HeaderContainer;
