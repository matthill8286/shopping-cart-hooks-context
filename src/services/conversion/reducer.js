import { UPDATE_RATE } from "./actionTypes";

const initialState = {
  rate: {
    value: 1,
    currencyId: 'GBP'
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_RATE:
      return {
        ...state,
        rate: action.payload
      };
    default:
      return state;
  }
}
