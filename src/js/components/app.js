import React from 'react';
import AppActions from '../actions/app-actions';
import Catalogue from './app-catalogue';
import Cart from './app-cart';

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
