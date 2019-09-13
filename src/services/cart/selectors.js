import { createSelector } from 'reselect'

const cartState = state => state.cart;

export const cartSelector = createSelector(cartState, cart => cart)
