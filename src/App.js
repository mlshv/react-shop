import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import { RootContainer } from './containers/Root';

const App = () => (
  <ReduxProvider store={store}>
    <Router>
      <RootContainer />
    </Router>
  </ReduxProvider>
);

export default App;
