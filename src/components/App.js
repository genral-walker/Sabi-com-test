
import './App.css';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Product from '../pages/Product/Product';
import CartPage from '../pages/CartPage/CartPage';
import CheckOut from '../pages/CheckOut/CheckOut';


export default function App() {

  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/product' component={Product} />
        <Route path='/cart-page' component={CartPage} />
        <Route path='/checkout' component={CheckOut} />
      </Switch>
    </>


  );
}

