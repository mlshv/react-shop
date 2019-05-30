import React from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { HeaderContainer } from '../Header';
import { CatalogContainer } from '../Catalog';

const useProductsLoad = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch('/products.json')
      .then(r => r.json())
      .then(products => {
        dispatch({ type: 'PRODUCTS_LOADED', payload: products });
      });
  }, [dispatch]);
};

const App = () => {
  useProductsLoad();

  return (
    <React.Fragment>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={CatalogContainer} />
        {/* <Route path="/cart" component={CartContainer} />
          <Route path="/checkout" component={CheckoutContainer} /> */}
      </Switch>
    </React.Fragment>
  );
};

export default App;
