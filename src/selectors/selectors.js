import { createSelector } from 'reselect'

const conversionState = state => state.conversion;
const shelfState = state => state.shelf;
const totalState = state => state.total;
const cartState = state => state.cart;

export const conversionSelector = createSelector(
  conversionState,
  ({ rate }) => ({ value: rate.value, currencyId: rate.currencyId })
)

export const shelfSelector = createSelector(
  shelfState,
  (products) => products
)

export const cartSelector = createSelector(
  cartState,
  (cart) => cart
)

export const totalSelector = createSelector(
  totalState,
  (total) => total
)