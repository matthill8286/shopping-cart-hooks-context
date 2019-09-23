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
    loadCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    cartProducts: PropTypes.array.isRequired,
    newProduct: PropTypes.object,
    removeProduct: PropTypes.func,
    productToRemove: PropTypes.object
  };

  state = {
    isOpen: false
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.newProduct !== this.props.newProduct) {
      this.addProduct(nextProps.newProduct);
    }

    if (nextProps.productToRemove !== this.props.productToRemove) {
      this.removeProduct(nextProps.productToRemove);
    }
  }

  openCart = () => {
    this.setState({ isOpen: true });
  };

  closeCart = () => {
    this.setState({ isOpen: false });
  };

  addProduct = product => {
    const { cartProducts, updateCart, rate } = this.props;
    let productAlreadyInCart = false;

    cartProducts.forEach(cp => {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
      }
    });

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts, rate);
    this.openCart();
  };

  removeProduct = product => {
    const { cartProducts, updateCart, rate } = this.props;

    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts, rate);
    }
  };

  proceedToCheckout = () => {
    const {
      cartTotal: {
        productQuantity
      },
      conversion: {
        currencyId
      }
    } = this.props;

    if (!productQuantity) {
      alert('Add some product in the cart!');
    } else {
      alert(
        `Checkout - Subtotal: ${currencyId} ${formatPrice(
          this.getCartTotal
        )}`
      );
    }
  };

  removeFromCart = (id) => {
    const { removeProductFromCart } = this.context;
    return removeProductFromCart(id)
  }

  render() {
    const { cart } = this.context;
    const { isOpen } = this.state

    const products = cart.map(product => {
      return (
        <CartProduct
          product={product}
          removeProduct={this.removeFromCart.bind(this, product.id)}
          key={product.id}
        />
      );
    });

    let classes = ['float-cart'];

    if (!!isOpen) {
      classes.push('float-cart--open');
    }

    return (
      <React.Fragment>
        <MainNavigation
          cartItemNumber={this.getCartItems}
        />
        <div className={classes.join(' ')}>
          {/* If cart open, show close (x) button */}
          {isOpen && (
            <div
              onClick={() => this.closeCart()}
              className="float-cart__close-btn"
            >
              X
          </div>
          )}

          {/* If cart is closed, show bag with quantity of product and open cart action */}
          {!isOpen && (
            <span
              onClick={() => this.openCart()}
              className="bag bag--float-cart-closed"
            >
              <span className="bag__quantity">{this.getCartItems}</span>
            </span>
          )}

          <div className="float-cart__content">
            <div className="float-cart__header">
              <span className="bag">
                <span className="bag__quantity">{this.getCartItems}</span>
              </span>
              <span className="header-title">Cart</span>
            </div>

            <div className="float-cart__shelf-container">
              {products}
              {!products.length && (
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
                  {formatPrice(this.getCartTotal)}
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
