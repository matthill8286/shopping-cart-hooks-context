import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/shelf/actions';
import { addProduct } from '../../services/cart/actions';

import Spinner from '../Spinner';
import StoreHeader from './StoreHeader';
import ProductList from './ProductList';

import { conversionSelector, shelfSelector } from '../../selectors/selectors';

import './style.scss';

class Store extends Component {
  static propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    filters: PropTypes.array,
  };

  state = {
    isLoading: false
  };

  componentDidMount() {
    this.handleFetchProducts();
  }

  handleFetchProducts = () => {
    this.setState({ isLoading: true });
    this.props.fetchProducts(() => {
      this.setState({ isLoading: false });
    });
  };

  render() {
    const { products, conversion, addProduct } = this.props;
    const { isLoading } = this.state;
    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <StoreHeader productsLength={products.length} conversion={conversion} />
          <ProductList products={products} addProduct={addProduct} conversion={conversion} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: shelfSelector(state).products,
  conversion: conversionSelector(state),
});

export default connect(
  mapStateToProps,
  { fetchProducts, addProduct }
)(Store);
