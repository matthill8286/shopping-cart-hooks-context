import React, { Component } from 'react';

import ShopContext from '../../context/shop-context';
import MainNavigation from '../../components/MainNavigation/MainNavigation';

import './styles.scss';

class CartPage extends Component {
  static contextType = ShopContext;

  render() {
    return (
      <React.Fragment>
        <MainNavigation
          cartItemNumber={this.context.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
        <main className="cart">
          {this.context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {this.context.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={this.context.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

export default CartPage
