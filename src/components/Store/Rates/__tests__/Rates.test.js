import React from 'react'
import { shallow } from 'enzyme'
import { act } from 'react-dom/test-utils'

import Root from '../../../../Root';
import Rates from '..';

let wrapped;

beforeEach(() => {
  act(() => {
    wrapped = shallow(
      <Root>
        <Rates label="Test Label" />
      </Root>
    );
  })
});

afterEach(() => {
  wrapped.unmount();
});

describe('Rates', () => {
  it('mount without crashing', () => {
    expect(wrapped.find(Rates).length).toEqual(1)
  });
});


