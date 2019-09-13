import { createSelector } from 'reselect'

const shelfState = state => state.shelf;

export const shelfSelector = createSelector(
  shelfState,
  (products) => products
)