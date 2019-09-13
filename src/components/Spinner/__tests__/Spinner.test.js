import React from 'react'
import { mount } from 'enzyme'

import Spinner from '../';

describe('Spinner', () => {
  it('mounts without crashing', () => {
    const wrapped = mount(<Spinner />);
    wrapped.unmount();
  });
});
