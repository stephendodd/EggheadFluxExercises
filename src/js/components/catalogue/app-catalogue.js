import React from 'react';
import AppStore from '../../stores/app-store';
import CatalogueItem from './app-catalogue-item';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';

function getCatalogue() {
  return { items: AppStore.getCatalogue() }
}

const Catalogue = (props) => {

    let items = props.items.map( item => {
      return <CatalogueItem key={item.id} item={ item } />
    });
    return (
      <div className="row">
        {items}
      </div>
    )
}

export default StoreWatchMixin(Catalogue, getCatalogue);
