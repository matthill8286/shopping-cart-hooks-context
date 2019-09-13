import React from 'react'
import { mount } from 'enzyme'

import Root from '../../../../Root';
import StoreHeader from '..';
import Rates from '../../Rates';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <StoreHeader productsLength={10} conversion={{ currencyId: 'GBP', value: 1.9 }} />
    </Root>
  );
});


describe('StoreHeader ', () => {
  it('shows a Rates component', () => {
    expect(wrapped.find(Rates).length).toEqual(1);
  });
  it('shows a store header with productsLength prop', () => {
    expect(wrapped.find(StoreHeader).props().productsLength).toEqual(10);
  });
});
