import React from 'react'
import { mount } from 'enzyme'


import Selectbox from '..';

const optionsMock = [
  { value: 1, currencyId: 'GBP' },
  { value: 1.54, currencyId: 'EUR' },
  { value: 154, currencyId: 'KOR' }
];

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Selectbox options={optionsMock} handleOnChange={() => null} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('Selectbox', () => {
  it('mount with 3 option element', () => {
    expect(wrapped.find('option').length).toEqual(3);
  });
});
