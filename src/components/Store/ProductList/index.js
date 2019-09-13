import React, { memo } from 'react';

import Product from './Product';

// TODO could have created a context instead of passing props down
const ProductList = ({ products, addProduct, conversion }) => {
  return products.map(product => {
    return (
      <Product
        product={product}
        addProduct={addProduct}
        conversion={conversion}
        key={product.id}
      />
    )
  });
};

export default memo(ProductList);
