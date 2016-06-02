import React from 'react';
import Catalogue from './catalogue/app-catalogue';
import Cart from './cart/app-cart';
import Template from './app-template';
import {Router, Route, IndexRoute } from 'react-router';

export default () => {
  return (
    <Router>
      <Route path="/" component={Template}>
        <IndexRoute component={ Catalogue }/>
        <Route path="cart" component = {Cart} />
      </Route>
    </Router>
  )
}

//Lesson 2 & 3
//Learnt how the dispatcher register and dispatch work
//How to use application actions in this case we are building a shopping cart

//Lesson Flux architecture, project organisation.
