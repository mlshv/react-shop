import React from 'react';
import { Checkout } from '../../components/Checkout';
import { CheckoutComplete } from '../../components/CheckoutComplete';
import { useCartActions } from '../../hooks/cart';

const CheckoutContainer = () => {
  const [hasCheckedOut, setCheckedOut] = React.useState();
  const { clear } = useCartActions();

  return hasCheckedOut ? (
    <CheckoutComplete />
  ) : (
    <Checkout
      onSubmit={() => {
        setCheckedOut(true);
        clear();
      }}
    />
  );
};

export default CheckoutContainer;
