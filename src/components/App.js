
import './App.css';

import React from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Product from '../pages/Product/Product';
import CartPage from '../pages/CartPage/CartPage';


export default function App() {

  return (
    <>
      <Switch>
        {/* <Route exact path='/' component={HomePage}/> */}
        <Route exact path='/' component={Product}/>
        {/* <Route exact path='/' component={CartPage}/> */}
      </Switch>
    </>


  );
}

