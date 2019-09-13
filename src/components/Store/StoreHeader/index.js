import React from 'react';
import PropTypes from 'prop-types';

import Rates from '../Rates';

const StoreHeader = ({ productsLength, conversion: { currencyId } }) => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{productsLength} Product(s) found.</span>
        <p>Chosen currency: {currencyId}</p>
      </small>
      <Rates label={'Change Rates'} />
    </div>
  );
};

StoreHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default StoreHeader;
