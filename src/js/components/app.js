import React from 'react';
import AppActions from '../actions/app-actions';
import Catalogue from './catalogue/app-catalogue';
import Cart from './cart/app-cart';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Catalogue / >
        <Cart />
      </div>
    )
  }
}

//Lesson 2 & 3
//Learnt how the dispatcher register and dispatch work
//How to use application actions in this case we are building a shopping cart

//Lesson Flux architecture, project organisation.
