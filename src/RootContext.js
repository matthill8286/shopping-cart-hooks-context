import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ProductsPage from './pages/Products/Products';
import CartPage from './pages/Cart/Cart';

export default class RootContext extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}
