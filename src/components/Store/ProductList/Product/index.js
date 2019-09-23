import React from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../../selectors/util';
import { defaultMemoize } from 'reselect';

const Product = ({ product, addProduct, conversion }) => {
  product.quantity = 1;
  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
    >
      <div className="shelf-stopper">Free delivery</div>
      <p className="shelf-item__title">{product.title}</p>
      <p className="shelf-item__details title">{product.description}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyId}</small>
          <p>{`${conversion.currencyId}  ${formatPrice(product.price * conversion.value)}`}</p>
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
