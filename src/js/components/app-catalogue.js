import React from 'react';
import AppStore from '../stores/app-store';
import CatalogueItem from './app-catalogue-item';

function getCatalogue() {
  return { items: AppStore.getCatalogue() }
}

class Catalogue extends React.Component {
  constructor(){
    super();
    this.state = getCatalogue()
  }
  render() {
    let items = this.state.items.map( item => {
      return <CatalogueItem key={item.id} item={ item } />
    });
    return (
      <div className="row">
        {items}
      </div>
    )
  }
}

export default Catalogue;
