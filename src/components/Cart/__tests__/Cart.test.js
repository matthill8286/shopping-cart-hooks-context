import React from 'react'
import { mount } from 'enzyme'

import Root from '../../../Root';
import Cart from '..';
import CartProduct from '../CartProduct';

const initialState = {
  cart: {
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
      <Cart />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('Cart', () => {
  it('should mount with 4 products in it', () => {
    expect(wrapped.find(CartProduct).length).toEqual(4);
  });
});


