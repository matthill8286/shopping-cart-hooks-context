import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../../selectors/util';
import { defaultMemoize } from 'reselect';

import Thumb from '../../../Thumb';

const Product = ({ product, addProduct, conversion }) => {
  product.quantity = 1;
  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
    >
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}_2.jpg`)}
        alt={product.title}
      />
      <div className="shelf-stopper">Free delivery</div>
      <p className="shelf-item__title">{product.title}</p>
      <p className="shelf-item__details title">{product.description}</p>
      <div className="shelf-item__price">
        <div className="val">
          <p>{product.currencyId} {formatPrice(product.price)}</p>
        </div>
      </div>
      <div className="shelf-item__buy-btn">Add to cart</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default defaultMemoize(Product);
