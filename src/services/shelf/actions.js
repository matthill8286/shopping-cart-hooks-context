import axios from 'axios'
import { ActionType } from 'redux-promise-middleware'

import { storeAPI } from '../util';

export const fetchProducts = (callback) => async dispatch => {
  try {
    const res = await axios.get(storeAPI)
    let { products } = res.data;

    if (!!callback) {
      callback();
    }

    return dispatch({
      type: ActionType.Fulfilled,
      payload: products
    });
  }
  catch (err) {
    dispatch({
      type: ActionType.Rejected,
      rejected: true
    })
  }
};
