import { combineReducers } from 'redux';
import storeReducer from './shelf/reducer';
import cartReducer from './cart/reducer';
import totalReducer from './total/reducer';
import conversionReducer from './conversion/reducer';

export default combineReducers({
  shelf: storeReducer,
  cart: cartReducer,
  total: totalReducer,
  conversion: conversionReducer
});
