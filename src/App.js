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
import OrderStatus from './components/OrderStatus/OrderStatus';

// TODO: new page
// TODO: title tags
const App = () => {
  const [state, setState] = useState({
    products: products,
    selectedProduct: null,
    cartItems: [],
    subtotal: 0
  });
  const [cartID, incrementCartID] = useState(0);

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
  };

  const addToCart = (product, quantity, size, color) => {
    setState({
      ...state,
      cartItems: [
        {
          cartID: cartID,
          product: product,
          quantity: quantity,
          size: size,
          color: color
        }, 
        ...state.cartItems
      ]
    });
    incrementCartID(cartID + 1);
  };

  return (
    <Context.Provider
      value={{
        ...state,
        setSelectedProduct: setSelectedProduct,
        addToCart: addToCart,
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
        <Route exact path={appRoutes.orderStatus}>
          <OrderStatus />
        </Route>
      </Switch>
    </Context.Provider>
  );
}

export default App;
