import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Conversion actions', () => {
  it('should return expected conversion payload', () => {
    const rate = {
      value: 9.34,
      currencyId: 'GBP'
    }

    const expectedAction = {
      type: types.UPDATE_RATE,
      payload: rate
    };

    expect(actions.updateRate(rate)).toEqual(expectedAction);
  });
});
