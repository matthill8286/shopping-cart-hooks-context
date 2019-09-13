import * as actions from '../actions';
import * as types from '../actionTypes';
import { mockedProducts } from '../../util';

describe('Cart actions', () => {
  describe('loadCart', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.LOAD_CART,
        payload: mockedProducts
      };

      expect(actions.loadCart(mockedProducts)).toEqual(expectedAction);
    });
  });

  describe('addProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.ADD_PRODUCT,
        payload: mockedProducts[0]
      };

      expect(actions.addProduct(mockedProducts[0])).toEqual(expectedAction);
    });
  });

  describe('removeProduct', () => {
    it('should return expected payload', () => {
      const expectedAction = {
        type: types.REMOVE_PRODUCT,
        payload: mockedProducts[0]
      };

      expect(actions.removeProduct(mockedProducts[0])).toEqual(expectedAction);
    });
  });
});
