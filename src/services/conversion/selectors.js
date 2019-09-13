import { createSelector } from 'reselect'

const conversionState = state => state.conversion;

export const conversionSelector = createSelector(
  conversionState,
  ({ rate }) => ({ value: rate.value, currencyId: rate.currencyId })
)