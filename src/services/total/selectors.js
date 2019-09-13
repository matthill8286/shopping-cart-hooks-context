import { createSelector } from 'reselect'

const totalState = state => state.total;

export const totalSelector = createSelector(totalState, (total) => total)