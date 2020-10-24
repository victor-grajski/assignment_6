import React from 'react';
import { Switch, Route } from "react-router-dom";
import appRoutes from './shared/appRoutes';
import './App.css';

import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import AddedToCart from './components/AddedToCart/AddedToCart';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Confirmation/Confirmation';

const App = () => {
    return (
      <Switch>
        <Route exact path={appRoutes.home}>
          <HomePage />
        </Route>
        <Route exact path={appRoutes.products}>
          <Products />
        </Route>
        <Route exact path={appRoutes.product}>
          <Product />
        </Route>
        <Route exact path={appRoutes.addedToCart}>
          <AddedToCart />
        </Route>
        <Route exact path={appRoutes.cart}>
          <Cart />
        </Route>
        <Route exact path={appRoutes.checkout}>
          <Checkout />
        </Route>
        <Route exact path={appRoutes.confirmation}>
          <Confirmation />
        </Route>
      </Switch>
    );
}

export default App;
