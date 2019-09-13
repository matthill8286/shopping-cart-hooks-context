import React from 'react'
import { mount } from 'enzyme'

import Root from '../../../Root';
import App from '../';

import Store from '../../Store';
import Cart from '../../Cart';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows a shelf', () => {
  expect(wrapped.find(Store).length).toEqual(1);
});

it('shows a floating cart', () => {
  expect(wrapped.find(Cart).length).toEqual(1);
});
