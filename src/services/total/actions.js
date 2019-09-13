import { UPDATE_CART } from './actionTypes';

export const updateCart = (cartProducts, rates) => dispatch => {

  const productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.quantity;
    return sum;
  }, 0);

  const totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.price * p.quantity;
    return sum;
  }, 0);

  const cartTotal = {
    productQuantity,
    totalPrice,
    currencyId: 'GBP',
    currencyFormat: '£',
    conversionRate: rates
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
