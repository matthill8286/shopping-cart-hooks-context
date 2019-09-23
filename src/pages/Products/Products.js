import React, { Component } from 'react';

import ShopContext from '../../context/shop-context';
import MainNavigation from '../../components/MainNavigation/MainNavigation';
import ProductList from '../../components/Store/ProductList'

import './styles.scss'

class Products extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {context => (
          <React.Fragment>
            <MainNavigation
              cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />
            <main className="shelf-container">
              <ProductList products={context.products} addProduct={context.addProductToCart} conversion={1} />
            </main>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default Products;