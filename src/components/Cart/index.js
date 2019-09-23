import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ShopContext from '../../context/shop-context';

import CartProduct from './CartProduct';

import { formatPrice } from '../../selectors/util';

import './style.scss';
import MainNavigation from '../MainNavigation/MainNavigation';

class Cart extends PureComponent {
  static contextType = ShopContext;

  static propTypes = {
    removeProductFromCart: PropTypes.func
  };

  get getCartTotal() {
    const { cart } = this.context;
    return cart.length
  }

  get getCartItems() {
    const { cart } = this.context;
    return cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  }
  get getCartTotalPrice() {
    const { cart } = this.context;
    return cart.reduce((count, curItem) => {
      return count + curItem.quantity * curItem.price;
    }, 0)
  }

  proceedToCheckout = () => null

  removeFromCart = (id) => {
    const { removeProductFromCart } = this.context;
    return removeProductFromCart(id)
  }

  renderProducts = (cart) => cart.map(product => {
    return (
      <CartProduct
        product={product}
        removeProduct={this.removeFromCart.bind(this, product.id)}
        key={product.id}
      />
    );
  });

  render() {
    const { cart } = this.context;

    return (
      <React.Fragment>
        <MainNavigation
          cartItemNumber={this.getCartItems}
        />
        <div className="float-cart">
          <div className="float-cart__content">
            <div className="float-cart__header">
              <span className="bag">
                <span className="bag__quantity">{this.getCartItems}</span>
              </span>
              <span className="header-title">Cart</span>
            </div>

            <div className="float-cart__shelf-container">
              {this.renderProducts(cart)}
              {!cart.length && (
                <p className="shelf-empty">
                  Add some products in the cart <br />
                  :)
              </p>
              )}
            </div>

            <div className="float-cart__footer">
              <div className="sub">SUBTOTAL</div>
              <div className="sub-price">
                <p className="sub-price__val">
                  {formatPrice(this.getCartTotalPrice)}
                </p>
              </div>
              <div onClick={() => this.proceedToCheckout()} className="buy-btn">
                Checkout
            </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
