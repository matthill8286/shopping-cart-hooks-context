import React from 'react'
import { mount } from 'enzyme'

import Root from '../../../Root';
import StoreHeader from '../StoreHeader';
import ProductList from '../ProductList';
import Product from '../ProductList/Product';
import Store from '..';

const initialState = {
  shelf: {
    products: [
      {
        "id": 12,
        "title": "Peas",
        "description": "Lovely garden peas",
        "price": 0.95,
        "currencyId": "GBP",
        "isFreeDelivery": true
      },
      {
        "id": 13,
        "title": "Free range Eggs",
        "description": "Straight from the chicken",
        "price": 2.1,
        "currencyId": "GBP",
        "isFreeDelivery": true
      },
      {
        "id": 14,
        "title": "Soya Milk",
        "description": "Lovely fresh Soya milk",
        "price": 1.3,
        "currencyId": "GBP",
        "isFreeDelivery": true
      },
      {
        "id": 15,
        "title": "Baked Beans",
        "description": "Healthy Baked Beans",
        "price": 0.73,
        "currencyId": "GBP",
        "isFreeDelivery": true
      },
    ]
  }
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <Store />
    </Root>
  );
});

describe('Store', () => {
  it('shows 4 products component', () => {
    expect(wrapped.find(Product).length).toEqual(4);
  });
  it('shows a product list component', () => {
    expect(wrapped.find(ProductList).length).toEqual(1);
  });
  it('shows a store header with productsLength prop', () => {
    expect(wrapped.find(StoreHeader).props().productsLength).toEqual(0);
  });
});

