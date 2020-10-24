import React, { useState, useEffect } from 'react';
import Context from './Context';
import { Switch, Route } from "react-router-dom";
import appRoutes from './shared/appRoutes';
import './App.css';

import products from './shared/products';

import HomePage from './components/HomePage/HomePage';
import Products from './components/Products/Products';
import Product from './components/Products/Product/Product';
import AddedToCart from './components/AddedToCart/AddedToCart';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Confirmation from './components/Confirmation/Confirmation';

// TODO: show number of items in cart
// TODO: new page
// TODO: title tags
const App = () => {
  const [state, setState] = useState({
    products: products,
    selectedProduct: null,
    cartItems: [],
    cartID: 0,
    subtotal: 0
  });

  // TODO: remove
  useEffect(() => {
    console.log(state);
  });

  const setSelectedProduct = (product, id) => {
    if (state.selectedProduct && id === state.selectedProduct.id) {
        return;
    }
    product.id = id;
    setState({ ...state, selectedProduct: product });
}

  return (
    <Context.Provider
      value={{
        ...state,
        setSelectedProduct: setSelectedProduct
      }}
    >
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
    </Context.Provider>
  );
}

export default App;
