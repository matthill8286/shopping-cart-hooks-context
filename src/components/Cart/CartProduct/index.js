import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { formatPrice } from '../../../selectors/util';

function CartProduct({ product, removeProduct }) {

  const [isMouseOver, setMouseOver] = useState(false)

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false)
  };

  const classes = ['shelf-item'];

  if (!!isMouseOver) {
    classes.push('shelf-item--mouseover');
  }

  return product ? (
    <div className={classes.join(' ')}>
      <div
        className="shelf-item__del"
        onMouseOver={() => handleMouseOver()}
        onMouseOut={() => handleMouseOut()}
        onClick={() => removeProduct()}
      />
      <div className="shelf-item__details">
        <p className="title">{product.title}</p>
        <p className="desc">Quantity: {product.quantity}</p>
      </div>
      <div className="shelf-item__price">
        <p>{formatPrice(product.price)}</p>
      </div>
    </div>
  ) : null;
}

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired
};

export default CartProduct;
