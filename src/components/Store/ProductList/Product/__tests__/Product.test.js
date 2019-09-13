import React from 'react'
import { mount } from 'enzyme'

import Product from '..';
import Root from '../../../../../Root';
import { mockedProducts } from '../../../../../services/util';

describe('Product', () => {
  it('mount without crashing', () => {
    const wrapped = mount(
      <Root>
        <Product
          product={mockedProducts.products[0]}
          addProduct={() => { }}
          conversion={{ currencyId: 'GBP', value: 1.9 }}
        />
      </Root>
    );
    wrapped.unmount();
  });
});

