import { ActionType } from 'redux-promise-middleware'

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.Pending:
      return {
        ...state,
        pending: true,
        rejected: false
      }
    case ActionType.Fulfilled:
      return {
        ...state,
        products: action.payload
      };
    case ActionType.Rejected:
      return {
        ...state,
        rejected: action.rejected,
      };
    default:
      return state;
  }
}
